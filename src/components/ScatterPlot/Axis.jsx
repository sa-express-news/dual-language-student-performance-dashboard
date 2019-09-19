import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import * as d3              from 'd3';

class Axis extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        if (this.props.isGridline) {
            this.drawGridlines();
        } else {
            this.drawAxis();
        }
    }

    componentDidUpdate() {
        if (this.props.isGridline) {
            this.drawGridlines();
        } else {
            this.drawAxis();
        }
    }

    drawAxis() {
        const { type, scale } = this.props;
        if (this.ref.current) {
            d3.select(this.ref.current)
                .attr('class', 'axis')
                .call(d3[type](scale).ticks(6).tickFormat(d => `${d}%`))
                .call(g => g.select('.domain').remove());
        }
    }

    drawGridlines() {
        const { type, scale, len } = this.props;
        if (this.ref.current) {
            d3.select(this.ref.current)
                .attr('class', 'gridlines')
                .call(d3[type](scale).ticks(3).tickSize(-len).tickFormat(''))
                .call(g => g.select('.domain').remove());
        }
    }

    render() {
        const { translate } = this.props;
        return <g ref={this.ref} transform={translate} />;
    }
}

Axis.propTypes = {
    type: PropTypes.string.isRequired,
    scale: PropTypes.func.isRequired,
    translate: PropTypes.string.isRequired,
    len: PropTypes.number,
    isGridline: PropTypes.bool,
};

export default Axis

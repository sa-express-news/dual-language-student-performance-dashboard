import React, { Component } from 'react';
import { hot }              from 'react-hot-loader';

// modles
import models from '../../models';

// components
import NavBar               from '../NavBar/NavBar';
import Header               from '../Header/Header';
import Search               from '../Search/Search';
import ToggleDualLanguage   from '../ToggleDualLanguage/ToggleDualLanguage';
import ScatterPlot          from '../ScatterPlot/ScatterPlot';
import Dashboard            from '../Dashboard/Dashboard';

// styles
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.campuses = models.getCampuses();
        this.state = {
            campus: this.campuses.getCampus(186), // Bohnam Academy, 186, is default
            isOnlyDualLanguage: this.campuses.isOnlyDualLanguage(),
            scatterPlotWidth: 0,
        };
        this.setScatterPlotWidth    = this.setScatterPlotWidth.bind(this);
        this.setCampus              = this.setCampus.bind(this);
        this.setIsOnlyDualLanguage  = this.setIsOnlyDualLanguage.bind(this);
    }

    componentDidMount() {
        this.setScatterPlotWidth();
        window.addEventListener('resize', this.setScatterPlotWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setScatterPlotWidth);
    }

    setCampus(id) {
        this.setState({
            campus: this.campuses.getCampus(id),
        })
    }

    setIsOnlyDualLanguage(isOnlyDualLanguage) {
        this.campuses.setShowOnlyDualLanguage(isOnlyDualLanguage);
        this.setState({
            isOnlyDualLanguage: this.campuses.isOnlyDualLanguage(),
        });
    }

    setScatterPlotWidth() {
        this.setState({
            scatterPlotWidth: document.querySelector('div.App div.wrapper').clientWidth,
        });
    }

    render() {
        const { campus, isOnlyDualLanguage, scatterPlotWidth } = this.state;

        return(
            <div className="App">
                <NavBar url="https://www.expressnews.com/explorador-de-rendimiento-del-estudiante-de-lenguaje-dual/" />
                <div className="wrapper">
                    <Header />
                    <Search
                        setCampus={this.setCampus}
                        campusList={this.campuses.getCampusList()}
                        isValidCampus={!!campus.id}
                    />
                    {campus.id && <Dashboard campus={campus} />}
                    <ToggleDualLanguage
                        setShowOnlyDualLanguage={this.setIsOnlyDualLanguage}
                        isOnlyDualLanguage={isOnlyDualLanguage}
                    />
                    <ScatterPlot
                        campusList={this.campuses.getCleanCampusList()}
                        isOnlyDualLanguage={this.campuses.isOnlyDualLanguage()}
                        width={scatterPlotWidth}
                        currCampus={campus.id}
                        setCampus={this.setCampus}
                    />
                    <div className="definitions">
                        <div className="title">Definiciones</div>
                        <ul>
                            <li><span>Lenguaje dual bidireccional:</span> integra hablantes nativos de inglés con hablantes nativos de otro idioma, generalmente español. Todas las materias académicas se imparten en ambos idiomas con el objetivo de lograr la alfabetización y la fluidez en ambos idiomas.</li>
                            <li><span>Lenguaje dual unidireccional:</span> solo atiende a estudiantes con conocimiento limitado de inglés. Todas las materias académicas se imparten en inglés y en otro idioma (generalmente español) con el objetivo de lograr la alfabetización y la fluidez en ambos idiomas.</li>
                            <li><span>Inglés basado en el contenido como segundo idioma:</span> atiende a estudiantes con conocimiento limitado de inglés. Proporciona un maestro certificado de tiempo completo para obtener ayuda adicional en todas las áreas académicas, como matemáticas, ciencias y estudios sociales.</li>
                            <li><span>Inglés como segundo idioma "pull-out":</span> atiende a estudiantes con conocimiento limitado de inglés. Proporciona un maestro certificado de tiempo parcial para la instrucción del idioma inglés, mientras que los estudiantes permanecen en clases regulares para todas las otras materias.</li>
                        </ul>
                        <div className="note"><em>Nota: para enmascarar el desempeño individual de los estudiantes en conformidad con la Ley de Derechos Educativos de la Familia y de Privacidad, cuando menos de 5 estudiantes en el programa tomaron los examenes de STAAR no están incluidos en este sondeo.</em></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);

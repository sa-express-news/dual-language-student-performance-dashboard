import React from 'react';

// styles
import './header.scss';

const getScatterPlotDesc = () => {
    return window.innerWidth > 767 ? 'hacer clic en la gráfica de dispersión para evaluar los programas clasificados por el porcentaje de aprobados STAAR' : '';
};

export default () => (
    <div className="header">
        <h1>Explorador de rendimiento del estudiante de lenguaje dual</h1>
        <p className="explorer-byline">Por <a href="https://www.expressnews.com/author/luke-whyte/" target="_blank">Luke Whyte</a> y <a href="https://www.expressnews.com/author/alia-malik/" target="_blank">Alia Malik</a>, Datos actualizados al 10 de junio de 2019</p>
        <p className="subhead">Use esta herramienta para buscar y comparar el porcentaje de aprobación de los estudiantes del programa de aprendizaje de lenguaje dual y estudiantes del idioma inglés (EL) del condado de Bexar en las pruebas STAAR. Puede buscar una escuela en la barra de búsqueda, {getScatterPlotDesc()} y filtrar por todos los programas EL o solo de lenguaje dual. <em>Todos los datos provienen de la Agencia de Educación de Texas</em>.</p>
        <p className="related"><strong>Artículo relacionado:</strong> <a href="https://www.expressnews.com/news/education/article/Lenguaje-redoblado-14450674.php" target="_blank">Lenguaje redoblado: Programas de lenguaje dual están creciendo rápidamente en el Condado de Béxar</a></p>
        <p className="related"><a href="https://www.expressnews.com/dual-language-student-performance-explorer/">View in English</a></p>
    </div>
)

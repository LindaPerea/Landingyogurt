import React from 'react';
import '../assets/styles/icons.css'
import Yogurt from '../assets/images/productoYogurtRiicoDi.jpg'
import Barritas from '../assets/images/productoBarritaHeartRiicoDi.jpg'
import Mermeladas from '../assets/images/productoMermeladaRiicoDi.jpg'
import TypesYogurt from './TypesYogurt.jsx';
import TypesBarritas from './TypesBarritas.jsx';
import TypesMermeladas from './TypesMermeladas.jsx';

const Productos = () => {
    return (
        <div className='contenedorGeneralProductos'>
            <div className='contenedorProductos'>
                <img src={Yogurt} alt="naca la pirinaca" />
                <div>
                    <TypesYogurt />
                </div>
            </div>
            <div className='contenedorProductos'>
                <img src={Barritas} alt="" />
                <TypesBarritas />
            </div>
            <div className='contenedorProductos'>
                <img src={Mermeladas} alt="" />
                <TypesMermeladas />
            </div>
        </div>
    );
};

export default Productos;
import React from 'react';
import '../assets/styles/icons.css'
import Yogurt from '../assets/images/productoYogurtRiicoDi.jpg'
import Barritas from '../assets/images/productoBarritaHeartRiicoDi.jpg'
import Mermeladas from '../assets/images/productoMermeladaRiicoDi.jpg'

const Productos = () => {
    return (
        <div className='contenedorGeneralProductos'>
            <div className='contenedorProductos'>
                <img src={Yogurt} alt="naca la pirinaca" />
            </div>
            <div className='contenedorProductos'>
                <img src={Barritas} alt="" />
            </div>
            <div className='contenedorProductos'>
                <img src={Mermeladas} alt="" />
            </div>
        </div>
    );
};

export default Productos;
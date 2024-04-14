import React from 'react';
import IconHome from '../assets/icons/home-svgrepo-com.svg';
import '../assets/styles/icons.css'

const SideBar = () => {
    return (
        <div className='contenedor'>
            <div className='logoRiicoDi'>
                <h1>Riico Dí</h1>
            </div>
            <div>
                <ul className='contenedorIconHome'>
                    <li>
                        <a href="#" className='ancor'></a>
                        <img src={IconHome} alt="" />
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default SideBar;
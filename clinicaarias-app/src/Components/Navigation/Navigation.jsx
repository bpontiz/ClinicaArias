import './Navigation.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {

    const [backgroundColor, setBackgroundColor] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setBackgroundColor(true);
            
        } else {
            setBackgroundColor(false);
        }

    };

    window.addEventListener('scroll', changeBackground);

    return (
        <section className="Navigation">
            <div className={backgroundColor ? "ContainerNavigationColor" : "ContainerNavigationTransparent"}>
                <div className="DivImage">
                    <Link to="/" className="LinkLogo"><h1 className="Logo">CLINICA ARIAS</h1></Link>
                </div>
                <div className="DivNavigation">
                    <ul className="UlNavigationList">
                        <Link to="/" className="Link"><li className="LiNavigationItem">HOME</li></Link>
                        <Link to="#" className="Link"><li className="LiNavigationItem">TURNOS</li></Link>
                        <Link to="#" className="Link"><li className="LiNavigationItem">ESPECIALIDADES</li></Link>
                        <Link to="#" className="Link"><li className="LiNavigationItem">CONTACTO</li></Link>
                    </ul>
                </div>
            </div>
        </section>
    )
};
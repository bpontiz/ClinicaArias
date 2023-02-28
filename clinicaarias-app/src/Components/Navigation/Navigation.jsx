import './Navigation.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {

    const [backgroundColor, setBackgroundColor] = useState(false);

    const [buttonVisibility, setButtonVisibility] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setBackgroundColor(true);
            
        } else {
            setBackgroundColor(false);
        }
    };

    const toggleVisible = () => {
        if (window.scrollY > 200){
            setButtonVisibility(true)
        } 
        else if (window.scrollY <= 200){
            setButtonVisibility(false)
        }
    };

    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', toggleVisible);

    window.addEventListener('scroll', changeBackground);

    return <>
        <section className="Navigation">
            <div className={backgroundColor ? "ContainerNavigationColor" : "ContainerNavigationTransparent"}>
                <div className="DivImage">
                    <Link to="/" className="LinkLogo"><h1 className="Logo">CLINICA ARIAS</h1></Link>
                </div>
                <div className="DivNavigation">
                    <ul className="UlNavigationList">
                        <Link to="/" className="Link"><li className="LiNavigationItem">HOME</li></Link>
                        <Link to="#" className="Link"><li className="LiNavigationItem">TURNOS</li></Link>
                        <Link to="/especialidades" className="Link"><li className="LiNavigationItem">ESPECIALIDADES</li></Link>
                        <Link to="#" className="Link"><li className="LiNavigationItem">CONTACTO</li></Link>
                    </ul>
                </div>
            </div>
        </section>
        <button className={buttonVisibility ? "ButtonSubir" : "ButtonHidden"} onClick={handleToTop}><p className="Subir" onClick={handleToTop}>↑Subir</p></button>
    </>
};
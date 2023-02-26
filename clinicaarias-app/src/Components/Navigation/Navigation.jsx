import './Navigation.css';
import { Link } from 'react-router-dom';

export default function Navigation() {

    return (
        <section className="Navigation">
            <div className="ContainerNavigation">
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
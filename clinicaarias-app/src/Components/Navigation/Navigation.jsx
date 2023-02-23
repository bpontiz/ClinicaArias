import './Navigation.css';
import { Link } from 'react-router-dom';
import smilingGirl from '../../Multimedia/Videos/smilingGirl.mp4';

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
            <div className="DivVideo">
                <video autoPlay={true} muted loop className="Video">
                    <source src={smilingGirl} type="video/webm" />
                    <source src={smilingGirl} type="video/mp4" />
                </video>
            </div>
        </section>
    )
};
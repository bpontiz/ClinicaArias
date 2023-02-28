import './Footer.css';
import { Link } from "react-router-dom";
import logoCLinica2 from '../../Multimedia/Fotos/logoClinica2.jpg';

export default function Footer() {
    return (
        <section className="SectionFooter">
            <div className="DivLogo">
                <img src={logoCLinica2} alt="Logo Clinica" className="AriasClinicLogo"/>
                <iframe title="GoogleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.7335267130616!2d-68.85902128461193!3d-32.878769175785855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08f8ca75383b%3A0x9db8d25eff74717!2sCl%C3%ADnica%20Arias!5e0!3m2!1ses-419!2sar!4v1677611434718!5m2!1ses-419!2sar" width="500" height="375" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="GoogleMaps"/>
            </div>
            <div className="DivMedia">
                <Link to="https://www.facebook.com/ClinicaAriasMendoza/?locale=es_LA" target={'_blank'} className="LinkMedia"><p className="SocialMedia">Facebook</p></Link>
                <Link to="https://www.instagram.com/clinica.arias/?hl=es" target={'_blank'} className="LinkMedia"><p className="SocialMedia">Instagram</p></Link>
                <br />
                <p className="Telephone">Teléfono</p>
                <Link to="tel:5492614258589" className="LinkTelephone"><p className="TelephoneNumber">+54 9 261 4258589</p></Link>
                <p className="Telephone">Whatsapp</p>
                <Link to="https://api.whatsapp.com/send/?phone=5492612086318&text&type=phone_number&app_absent=0" target={'_blank'} className="LinkTelephone"><p className="TelephoneNumber">+54 9 261 2086318</p></Link> 
                <br />
                <p className="Location">Ubicación</p>
                <p className="LocationDetail">Paso de los Andes 1843, Ciudad, Mendoza.</p>
            </div>
        </section>
    )
};
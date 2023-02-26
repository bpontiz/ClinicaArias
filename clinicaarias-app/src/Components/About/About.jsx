import './About.css';
import clinica1 from '../../Multimedia/Fotos/clinica1.jpg';

export default function About() {
    return (
        <section className="SectionAbout">
            <p className="ClinicSubtitle">Clínica Arias</p>
            <div className="DivClinic">
                <p className="ClinicInfo">INFORMATION</p>
                <img src={clinica1} alt="Foto Clinica" className="ClinicImage"/>
            </div>
            <div>
                
            </div>
        </section>
    )
};
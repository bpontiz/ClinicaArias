import './About.css';
import clinica1 from '../../Multimedia/Fotos/clinica1.jpg';

export default function About() {
    return (
        <section className="SectionAbout">
            <p className="ClinicSubtitle">Clínica Arias</p>
            <p className="ClinicSubtitle2">25 años al servicio de la gente</p>
            <div className="DivClinic">
                <img src={clinica1} alt="Foto Clinica" className="ClinicImage"/>
                <p className="ClinicInfo">El equipo de profesionales de Clínica Arias apuesta a la innovación y a la tecnología, que en conjunto con la experiencia y trayectoria brinda soluciones odontológicas de excelencia. La amplia gama de servicios que sus especialistas pueden prestar, posiciona a esta clínica en lo más alto de la odontología regional.</p>
            </div>
        </section>
    )
};
import './Specialities.css';
import drArias from '../../Multimedia/Fotos/drArias.jpg';
import clinica4 from '../../Multimedia/Fotos/clinica4.jpg';
import clinica5 from '../../Multimedia/Fotos/clinica5.jpg';
import clinica2 from '../../Multimedia/Fotos/clinica2.jpg';


export default function Specialities() {
    return (
        <section className="SectionSpecialities">
            <p className="SpecialitiesSubtitle">Especialidades</p>
            <div className="DivSpecialities">
                <p className="Speciality">Implantología Oral</p>
                <p className="SpecialitiesInfo">El equipo de profesionales de Clínica Arias apuesta a la innovación y a la tecnología, que en conjunto con la experiencia y trayectoria brinda soluciones odontológicas de excelencia. La amplia gama de servicios que sus especialistas pueden prestar, posiciona a esta clínica en lo más alto de la odontología regional.</p>
                <img src={drArias} alt="Foto Dr. Arias" className="SpecialityImage"/>
            </div>
            <div className="DivSpecialities">
                <p className="Speciality">Cirugía Ortognática</p>
                <p className="SpecialitiesInfo">El equipo de profesionales de Clínica Arias apuesta a la innovación y a la tecnología, que en conjunto con la experiencia y trayectoria brinda soluciones odontológicas de excelencia. La amplia gama de servicios que sus especialistas pueden prestar, posiciona a esta clínica en lo más alto de la odontología regional.</p>
                <img src={clinica5} alt="Foto Intervención Quirúrgica" className="SpecialityImage"/>
            </div>
            <div className="DivSpecialities">
                <p className="Speciality">Cirugía Ortognática</p>
                <p className="SpecialitiesInfo">El equipo de profesionales de Clínica Arias apuesta a la innovación y a la tecnología, que en conjunto con la experiencia y trayectoria brinda soluciones odontológicas de excelencia. La amplia gama de servicios que sus especialistas pueden prestar, posiciona a esta clínica en lo más alto de la odontología regional.</p>
                <img src={clinica2} alt="Foto Intervención Quirúrgica" className="SpecialityImage"/>
            </div>
        </section>
    )
};
import './Specialities.css';
import drArias from '../../Multimedia/Fotos/drArias.jpg';
import clinica5 from '../../Multimedia/Fotos/clinica5.jpg';
import clinica2 from '../../Multimedia/Fotos/clinica2.jpg';
import ortodoncia3 from '../../Multimedia/Fotos/ortodoncia3.jpg';
import estetica from '../../Multimedia/Fotos/estetica.png';
import drArias2 from '../../Multimedia/Fotos/drArias2.jpg';

export default function Specialities() {
    return (
        <section className="SectionSpecialities">
            <p className="SpecialitiesSubtitle">Especialidades</p>
            <div className="DivSpecialities">
                <p className="Speciality">Implantología oral</p>
                <p className="SpecialitiesInfo">Los especialistas se dedican al reemplazo de piezas dentales mediante la colocación quirúrgica de un aditamento de titanio, que sustituye la porción radicular de un diente para reponer en la zona afectada, los dientes perdidos.</p>
                <img src={drArias} alt="Foto Dr. Arias" className="SpecialityImage"/>
            </div>
            <div className="DivSpecialities">
                <p className="Speciality">Cirugía ortognática</p>
                <p className="SpecialitiesInfo">La cirugía ortognática es una intervención quirúrgica que se encarga de corregir las deformidades dento-craneo-maxilofaciales mediante movimientos óseos maxilares y mandibulares, para lograr el equilibrio perfecto entre todas las características faciales del paciente.</p>
                <img src={drArias2} alt="Foto Intervención Quirúrgica" className="SpecialityImageOrtognatica"/>
            </div>
            <div className="DivSpecialities">
                <p className="Speciality">Ortodoncia</p>
                <p className="SpecialitiesInfo">La ortodoncia es una especialidad de la odontología que se encarga de la corrección de los dientes y huesos posicionados incorrectamente. Los tratamientos ortodóncicos tienen la ventaja de proporcionarnos una boca sana, una sonrisa de aspecto agradable y dientes con mayores posibilidades de durar toda la vida.</p>
                <img src={ortodoncia3} alt="Foto Ortodoncia" className="SpecialityImageOrtodoncia"/>
            </div>
            <div className="DivSpecialities">
                <p className="Speciality">Estética y cosmética dental</p>
                <p className="SpecialitiesInfo"> La estética dental es una rama odontológica que tiene como objetivo no solo mejorar los dientes y encías, sino que los cambios realizados se integren con el resto de rasgos faciales del paciente.</p>
                <img src={estetica} alt="Foto blanqueamiento" className="SpecialityImageOrtodoncia"/>
            </div>
            <div className="DivSpecialities">
                <p className="Speciality">Cirugía y traumatología bucomaxilofacial</p>
                <p className="SpecialitiesInfo">La cirugía y traumatología bucomaxilofacial es una especialidad de la odontología que abarca por definición el diagnóstico y tratamiento de la patología de los maxilares, cavidad bucal y regiones anexas.</p>
                <img src={clinica5} alt="Foto Dr. Arias" className="SpecialityImage"/>
            </div>
            <div className="DivSpecialities">
                <p className="Speciality">Periodoncia</p>
                <p className="SpecialitiesInfo">La periodoncia es el área de la odontología que se encarga del estudio, prevención y tratamiento de aquellas patologías que afectan a los tejidos que protegen, rodean y sujetan los dientes: encía, hueso alveolar, ligamento periodontal y cemento radicular.</p>
                <img src={clinica2} alt="Foto Intervención Quirúrgica" className="SpecialityImage"/>
            </div>
        </section>
    )
};
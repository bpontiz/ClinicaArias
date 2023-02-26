import './IntroVideo.css';
import { Link } from 'react-router-dom';
import smilingGirl1 from '../../Multimedia/Videos/smilingGirl1.mp4';

export default function IntroVideo() {

    return (
        <section className="Navigation">
            <div className="DivVideo">
                <div className="DivShift">
                    <h3 className="Shift">Clínica Odontológica Arias</h3>
                    <h3 className="Shift">Agendá tu turno por Whastapp</h3>
                    <button className="ButtonShift">Agende aquí</button>
                </div>
                <video autoPlay={true} muted loop className="Video">
                    <source src={smilingGirl1} type="video/webm" />
                    <source src={smilingGirl1} type="video/mp4" />
                </video>
            </div>
        </section>
    )
};
import i_ids from './Intro.module.css'
import AboutMe_ids from '../AboutMe/AboutMe.module.css'
import avatar from '../../../assets/img/SPQR.png'
import down_arrow from '../../../assets/img/chevron-arrowdown.svg'
import ReactHtmlParser from 'html-react-parser'

export default function Intro() {
    const intro_text = "<u>back-end</u>, <u>front-end</u>, <u>DB and servers administration</u>, <u>software development</u>"
    return (
        <section id={i_ids.intro}>
            <img src={avatar} alt="My mostly used avatar" width="180" height="180" />
            <br /> <br />
            <h1>Yerkanat "Legion" Sheriyazdanov</h1>
            <br />
            <h2>Fields that I'm interested in: {ReactHtmlParser(intro_text)}</h2>
            <br />
            <br />
            <a href={"#" + AboutMe_ids.aboutme} title="To 'About me' section">
                <img src={down_arrow} width="25" height="25" alt="About me" />
            </a>
        </section>
    )
}
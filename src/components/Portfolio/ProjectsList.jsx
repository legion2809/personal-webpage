import pclasses from './Portfolio.module.css'
import ReactHtmlParser from 'react-html-parser'

export default function ProjectsList(props) {
    return (
        <article>
            <div class={pclasses.project_img}>
                <img src={props.img_src} alt="Project icon" width="180" height="180" />
            </div>
            <div class={pclasses.project_desc}>
                <h3>{props.name}</h3>
                <br />
                <a href={props.link} target="_blank" title="Link to the repository">Link to the project</a>
                <br /><br />
                <p>{props.desc}</p>
                <br />
                <ul>
                    <li><b>Developed in: </b>{props.dev_year}</li>
                    <li><b>Role: </b>{props.role}</li>
                    <li><b>Other developers: </b>{ReactHtmlParser(props.dev)}</li>
                    <li><b>Used technologies: </b>{props.used}</li>
                </ul>
            </div>
        </article>
    )
}
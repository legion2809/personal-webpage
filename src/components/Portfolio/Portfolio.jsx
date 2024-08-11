import p_ids from './Portfolio.module.css'
import ProjectsList from './ProjectsList'
import { projects_list } from '../../util_data'

export default function Portfolio() {
    return (
        <section id={p_ids.portfolio}>
            <h1>My Projects</h1>
            <br /><br />
            <h2>My list of projects and the projects themselves are not so extensive & outstanding, but, in my opinion, they're worthy of a brief mention:</h2>
            <br /><br />
            {projects_list.map((item) => <ProjectsList key={item.img_src} {...item} />)}
        </section>
    )
}
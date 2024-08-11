import ab_ids from './AboutMe.module.css'
import AboutMeText from './AboutMeText'
import ListOfSkills from './ListOfSkills'
import { aboutme_text, list_of_skills } from '../../util_data'

export default function AboutMe() {
    return (
        <section id={ab_ids.aboutme}>
            <h1>About Me</h1>
            <br /><br />
            {aboutme_text.map((item) => <AboutMeText key={item.id} {...item} />)}
            <br />
            <ul>
                {list_of_skills.map((elem) => <ListOfSkills key={elem.id} {...elem} />)}
            </ul>
        </section>
    )
}
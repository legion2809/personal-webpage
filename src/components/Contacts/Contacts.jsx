import c_ids from './Contacts.module.css'
import { social_links } from '../../util_data'
import SocialLinks from './SocialLinks'

export default function Contacts() {
    return (
        <section id={c_ids.contacts}>
            <h1>Contacts</h1><br /><br />
            <span>You can find me by the social links which are listed below:</span> <br /><br />
            {social_links.map((item) => <SocialLinks key={item.id} {...item} />)}
        </section>
    )
}
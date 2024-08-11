import fclasses from './Footer.module.css'

export default function Footer() {
    return (
        <footer>
            <div class={fclasses.rights}>
                <span class={fclasses.rights_text}>Designed with full <a href="#" title="passion">&#128151;</a> by: Legion, &copy; {(new Date()).getFullYear()}.</span>
                <div class={fclasses.slogan}>
                    <span class={fclasses.slogan_text}>May the Force be with you!</span>
                </div>
            </div>
        </footer>
    )
}
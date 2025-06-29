import '../../styles/Footer.css'

export default function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <footer>
            <div class="rights">
                <span class="rights_text">Designed with full <a href="#" title="passion">❤️</a> by: Legion, &copy; {currentYear}.</span>
                <div class="slogan">
                    <span class="slogan_text">May the Force be with you!</span>
                </div>
            </div>
        </footer>
    )
}
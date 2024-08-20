import HtmlReactParser from 'html-react-parser'

export default function AboutMeText(props) {
    return (
        <article>
            <p key={props.id}>
                {HtmlReactParser(props.text)}
            </p>
            <br />
        </article>
    )
}
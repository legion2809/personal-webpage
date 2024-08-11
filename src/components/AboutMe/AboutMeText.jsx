import ReactHtmlParser from 'html-react-parser'

export default function AboutMeText(props) {
    const htmlText = ReactHtmlParser("<br />")
    return (
        <article>
            <p key={props.id}>
                {ReactHtmlParser(props.text)}
            </p>
            <br />
        </article>
    )
}
export default function HeaderLinks(props) {
    return (
        <li>
            <a href={props.href} title={props.title}>{props.text}</a>
        </li>
    )
}
export default function SocialLinks(props) {
    return (
        <a href={props.link} title={props.title} target="_blank">
            <i key={props.id} class={props.class}></i>
        </a>
    )
}
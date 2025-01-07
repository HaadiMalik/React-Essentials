export default function TabButton(props) {
    return (
        <li>
            <button onClick={props.handleClick}>{props.name}</button>
        </li>
    );
}
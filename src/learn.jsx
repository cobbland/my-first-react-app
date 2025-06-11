export default function Button({ type, onClick }) {
    const buttonType = "btn-" + type;

    return (
        <button type="button" className={buttonType} onClick={onClick}>{type[0].toUpperCase() + type.slice(1)}</button>
    )
}
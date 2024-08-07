import "./index.css";

const DenominationItem = (props) => {
    const {denominationValue,withdrawClick} = props;
    const handleClck = () => {
        withdrawClick(denominationValue)
    }
    return (
        <li className="denominationItem">
            <button type="button" onClick={handleClck}>{denominationValue}</button>
        </li>
    )
}

export default DenominationItem;
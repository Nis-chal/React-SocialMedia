import { useAppContext } from "../../context/appContext";

const AlertTwo = ()=>{
    const {alertType,alertText}=useAppContext()
    return (
        <div className={`alertv2 alert-${alertType}`}>
            {alertText}
        </div>
    )
}

export default AlertTwo;
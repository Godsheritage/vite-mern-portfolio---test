import React from 'react'
import './ScreenSeparator.css'
// import img from "../../assets/Utilities/ScreenSeparator/"

const ScreenSeparator = (props) => {
    return (
        <div className="seperator-container incline">
            <img src={`./../../assets/Utilities/ScreenSeparator/${props.type}.svg`} />
        </div>
    );
}

export default ScreenSeparator;

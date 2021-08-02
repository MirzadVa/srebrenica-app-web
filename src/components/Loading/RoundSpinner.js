import React from 'react'

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const RoundSpinner = () => {
    return (
        <Loader type="TailSpin" color="#008752" height={80} width={80} />
    )
}

export default RoundSpinner

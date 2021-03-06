import React from 'react'

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ThreeDots = () => {
    return (
        <Loader type="ThreeDots" color="#000" height={80} width={80} />
    )
}

export default ThreeDots

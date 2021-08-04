import React from 'react'

import mmsLogo from 'assets/LOGO-bijeli-prazni.png'
import arrowLeft from 'assets/arrow-left.svg'
import infoImg from 'assets/info.svg'

import { Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router'

const MapHeader = () => {
    const history = useHistory()
    return(
        <Row className='map-header-wrapper'>
            <Col md={4} sm={6} className='text-center'>
                <div className='back-to-search'>
                    <img src={arrowLeft} alt='Strelica nazad' />
                    <span onClick={() => history.goBack()}>Nazad na pretragu</span>
                </div>
            </Col>
            <Col md={4} className='text-center'>
                <img alt='Memorial Center Srebrenica' src={mmsLogo} className='mms-image result-mms map-mms'/>
            </Col>
            <Col md={4} sm={6} className='text-center'>
                <div className='info-img-wrapper'>
                    <img src={infoImg} alt='Info'/>
                    <p>O centru</p>
                </div>
            </Col>
        </Row>
    )
}

export default MapHeader

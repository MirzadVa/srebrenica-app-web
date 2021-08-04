import React from 'react'
import 'styles/global.css'

import { Row, Col } from 'react-bootstrap'
import moment from 'moment'

const InfoContainer = ({isOpen, victimData}) => {
    return (
        <Row className={isOpen ? 'info-container text-center open' : "info-container text-center close"}>
                <Col md={3} sm={6}>
                    <h4 style={{textTransform: 'capitalize'}}>{victimData?.ime} ({victimData?.ime_oca}) {victimData?.prezime}</h4>
                    <p className='info-container-date'>{moment(victimData?.datum_rodjenja).format('DD.MM.YYYY.')} - {moment(victimData?.datum_stradanja).format('DD.MM.YYYY.')}</p>
                    <p>{victimData?.mjesto_stradanja}</p>
                </Col>
                <Col md={3} sm={6}>
                    <p className='info-container-heads'>Sektor</p>
                    <p className='info-container-info'>{victimData?.mjesto_ukopa.split('-')[0] }</p>
                </Col>
                <Col md={3} sm={6}>
                    <p className='info-container-heads'>Red</p>
                    <p className='info-container-info'>{victimData?.mjesto_ukopa.split('-')[1]}</p>
                </Col>
                <Col md={3} sm={6}>
                    <p className='info-container-heads'>Grobno mjesto</p>
                    <p className='info-container-info'>{victimData?.mjesto_ukopa.split('-')[2]}</p>
                </Col>
            </Row>
    )
}

export default InfoContainer

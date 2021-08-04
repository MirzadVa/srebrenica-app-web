import React, { useState, useEffect } from 'react'

import apiRequest from 'helpers/apiRequest'

import mmsLogo from 'assets/LOGO-bijeli-prazni.png'
import arrowLeft from 'assets/arrow-left.svg'

import ResultsFound from 'components/ResultsFound/ResultsFound'
import ResultCard from 'components/ResultCard/ResultCard'
import RoundSpinner from 'components/Loading/RoundSpinner'

import { Row, Col } from 'react-bootstrap'
import queryString from 'query-string'
import { useHistory } from 'react-router-dom'

const ResultsPage = () => {
    const history = useHistory()

    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const getData = async (parsed) => {
        const { ime, prezime, imeOca } = parsed
        try{
            const response = await apiRequest({
                method: 'get',
                url: `spisak-srebrenica?prezime=${prezime}&ime=${ime}&imeOca=${imeOca}`
            })
            if(response.status === 200){
                setData(response.data)
                setIsLoading(false)
            }
        }catch(err){
            console.log(err)
        }
    }
    const openMap = (elem) => {
        const { gps_lat,  gps_long, id_grobnog_mjesta } = elem
        history.push(`/mapa?id=${id_grobnog_mjesta}&lat=${gps_lat}&long=${gps_long}`)
    }

    useEffect(() => {
        const parsed = queryString.parse(window.location.search);
        const { ime, prezime, imeOca } = parsed
        setName(ime)
        setSurname(prezime)
        setFatherName(imeOca)
        getData(parsed)
    },[])

    return (
        <div className='main-page-wrapper'>
            <Row className='results-page-header'>
                <Col md={4} className='text-center'>
                    <div className='back-to-search'>
                        <img src={arrowLeft}/>
                        <span onClick={() => history.goBack()}>Nazad na pretragu</span>
                    </div>
                </Col>
                <Col md={4}></Col>
                <Col md={4} className='text-center'>
                    <img alt='Memorial Center Srebrenica' src={mmsLogo} className='mms-image result-mms'/>
                </Col>
            </Row>
            {isLoading ? (
                <RoundSpinner />
            ) : (
            <>
                <Row>
                    <Col md={12} className='text-center'>
                        <ResultsFound totalCount={data.length} name={name} surname={surname} fatherName={fatherName}/>
                    </Col>
                </Row>
                <Row className='text-center mt-5 results-row'>
                    {data.length > 0 && data.map(elem => (
                        <Col lg={4} md={6} sm={6} xs={12}>
                            <ResultCard data={elem} onClick={() => openMap(elem)}/>
                        </Col>
                    ))}
                </Row>
            </>
            )}
        </div>
    )
}

export default ResultsPage

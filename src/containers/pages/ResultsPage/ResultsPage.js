import React, { useState, useEffect } from 'react'

import apiRequest from 'helpers/apiRequest'

import mmsLogo from 'assets/LOGO-bijeli-prazni.png'
import arrowLeft from 'assets/arrow-left.svg'

import ResultsFound from 'components/ResultsFound/ResultsFound'
import ResultCard from 'components/ResultCard/ResultCard'

import { Row, Col } from 'react-bootstrap'
import queryString from 'query-string'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ResultsPage = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
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
    useEffect(() => {
        const parsed = queryString.parse(window.location.search);
        setName(parsed.ime)
        getData(parsed)
    },[])

    return (
        <div className='main-page-wrapper'>
            <Row className='results-page-header'>
                <Col md={4} className='text-center'>
                    <div className='back-to-search'>
                        <img src={arrowLeft}/>
                        <span>Nazad na pretragu</span>
                    </div>
                </Col>
                <Col md={4}></Col>
                <Col md={4} className='text-center'>
                    <img alt='Memorial Center Srebrenica' src={mmsLogo} className='mms-image result-mms'/>
                </Col>
            </Row>
            {isLoading ? (
                <Loader type="TailSpin" color="#008752" height={80} width={80} />
            ) : (
            <>
                <Row>
                    <Col md={12} className='text-center'>
                        <ResultsFound totalCount={data.length} name={name}/>
                    </Col>
                </Row>
                <Row className='text-center mt-5 results-row'>
                    {data.length > 0 && data.map(elem => (
                        <Col lg={4} md={6} sm={6} xs={12}>
                            <ResultCard data={elem}/>
                        </Col>
                    ))}
                </Row>
            </>
            )}
        </div>
    )
}

export default ResultsPage

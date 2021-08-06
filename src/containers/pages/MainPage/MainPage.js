import React, { useState } from 'react'

import { 
    Row, 
    Col,
    Form,
} from 'react-bootstrap'
import { useHistory } from 'react-router'
import mmsImage from 'assets/LOGO-bijeli.png'

const MainPage = () => {
    const [data, setData] = useState({
        ime: '',
        prezime: '',
        imeOca: ''
    })
    const history = useHistory()

    const goToResults = () => {
        const { ime, prezime, imeOca } = data
        history.push(`rezultati?ime=${ime}&prezime=${prezime}&imeOca=${imeOca}`)
    }
    return (
        <div className='main-page-wrapper main-page'>
            <Row className='headline-row'>
                <Col sm={12}>
                    <h2>Unesite parametre za pretragu</h2>
                </Col>
                <Col sm={12}>
                    <p>Ispunjavanjem većeg broja polja, imate<br/> bolju šansu da pronađete tačno mjesto<br/> ukopa.</p>
                </Col>
            </Row>
            <Row className='form-row'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control  
                                type="text" 
                                placeholder="Ime (opcionalno)"
                                onChange={(e) => setData({...data, ime: e.target.value})} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control 
                                type="text" 
                                placeholder="Prezime (opcionalno)"
                                onChange={(e) => setData({...data, prezime: e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control 
                                type="text" 
                                placeholder="Ime oca (opcionalno)"
                                onChange={(e) => setData({...data, imeOca: e.target.value})}/>
                        </Form.Group>
                    </Form>
                <Col sm={12}>
                    <button 
                        className='search-button'
                        onClick={goToResults}>Pretraži</button>
                </Col>
            </Row>
            <Row className='footer-row'>
                <Col md={4} sm={5} className='col text-center'>
                    <img src={mmsImage} alt='Memorial Center Srebrenica' className='mms-image main-mms'/>
                </Col>
                {/* <Col md={3}></Col> */}
                <Col md={4} sm={2}></Col>
                <Col md={4} sm={5} className='col text-center'>
                    <p className='ajet'>"I ne recite za one koji su na Allahovu<br/> putu poginuli: "Mrtvi su!" Ne, oni su<br/> živi, ali vi to ne znate“!</p>
                    <p className='el-bekare'>El-Bekare</p>
                </Col>
            </Row>
        </div>
    )
}

export default MainPage

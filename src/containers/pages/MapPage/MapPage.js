import React, { useEffect, useState } from 'react';
import 'styles/global.css'

import Map from 'components/Map/Map'
import ThreeDots from 'components/Loading/ThreeDots';
import InfoContainer from 'components/InfoContainer/InfoContainer';
import MapHeader from 'components/MapHeader/MapHeader'
import apiRequest from 'helpers/apiRequest';

import queryString from 'query-string' 

const MapPage = () => {
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const [isContainerOpen, setIsContainerOpen] = useState(false)
    const [victimData, setVictimData] = useState({})

   const toggleContainer = () => {
       if(isContainerOpen) return setIsContainerOpen(false)
       setIsContainerOpen(true)
   }

   const getVictimData = async (id) => {
        try{
            const response = await apiRequest({
                method: 'get',
                url: `spisak-srebrenica/${id}`
            })
            if(response.status === 200){
                setVictimData(response.data)
                setIsLoading(false)
            }
        }catch(err){
            console.log(err)
        }
   }

    useEffect(() => {
        const parsed = queryString.parse(window.location.search);
        const { lat, long, id } = parsed
        setLat(lat)
        setLong(long)
        getVictimData(id)
    },[])

    return (
        isLoading ? (
            <div className='loading-container'>
                <ThreeDots />
                <h3>Učitavanje mape</h3>
            </div>
            
        ) : 
        <div className='container-map'>
            <MapHeader />
            <Map lat={lat} long={long} onClick={() => toggleContainer()}/>
            <InfoContainer isOpen={isContainerOpen} victimData={victimData}/>
        </div>
        
    )
  
}

export default MapPage;

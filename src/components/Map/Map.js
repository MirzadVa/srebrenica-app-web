import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import axios from 'axios';

import Config from 'config/index'


const Map = ({lat, long}) => {
    mapboxgl.accessToken = Config.MAPBOX_ACCESS_TOKEN

    const mapContainer = useRef(null);
    const map = useRef(null);
    const start = [19.3019204,44.1581199]

    const getData = async () => {
        try{ 
            const response = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${long},${lat}?geometries=geojson&access_token=${Config.MAPBOX_ACCESS_TOKEN}`)
            if(response.status === 200){
                createMap(response.data.routes[0].geometry.coordinates, [parseFloat(long), parseFloat(lat)])
            }
        }catch(err) {
            console.log(err)
        }
    }

    const createMap = (routes, endRoute) => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        //lng, lat
        center: start,
        zoom: 18 
    });
        map.current.on('load', () => {
            map.current.addSource('route', {
                'type': 'geojson',
                'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': routes
                }}
            });
            map.current.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'route',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#5678e8',
                    'line-width': 5
                }
            });
             var marker1 = new mapboxgl.Marker()
                .setLngLat(start)
                .addTo(map.current);

            var marker2 = new mapboxgl.Marker({color: 'black'})
                .setPopup(new mapboxgl.Popup().setHTML(
                    `<div class="popup-div"> <p> Ime (Ime oca) Prezime </p> <button class='open-card-button small-button'>Otvori</button> </div>`
                ))
                .setLngLat(endRoute)
                .addTo(map.current);
        })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
            <div ref={mapContainer}  className="map-container"/>
    );
}

export default Map
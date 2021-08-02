import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
const mapboxApiAccessToken = "pk.eyJ1IjoibWlyemFkIiwiYSI6ImNrcnE2cjVrcjF3dXYybmw3bmt6bGQ5a2sifQ.vUijwcuyGhtGmeZkbYpU8g"

class MapPage extends Component {
    constructor(props) {
        super(props);
         this.state = {
          viewport: {
           latitude: 19.2994797,
           longitude: 44.1580492,
           zoom: 15,
           bearing: 0,
           pitch: 0,
           dragPan: true,
           width: "100%",
            height: "100vh",
         }
        };
    }

    componentDidMount(){
        const map = this.reactMap.getMap();
        map.on('load', function () {
            map.addSource('route', {
                'type': 'geojson',
                'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [-122.483696, 37.833818],
                    [-122.493782, 37.833683]
                ]}}});
            map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 })
            map.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'route',
                'layout': {
                'line-join': 'round',
                'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#888',
                    'line-width': 8
                }
            });
        });
    }
    render(){
        const { viewport } = this.state;

        return(
            <div className='map-cotainer'>
                <ReactMapGL
                ref={(reactMap) => this.reactMap = reactMap}
                {...viewport}
                mapboxApiAccessToken={mapboxApiAccessToken}
                onViewportChange={newViewport => {
                    this.setState({viewport: newViewport})
                }} />
            </div>
        )
    }

}

export default MapPage;
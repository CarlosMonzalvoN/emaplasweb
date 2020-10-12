import React, { Component } from 'react';
import GoogleMaps from 'simple-react-google-maps'
import '../css/maps.css';

/* Ubicacion de la planta:
lat: 19.3615959,
lng: -98.5226861 */

export default class Maps extends Component{
    render(){
        return(
            
                <GoogleMaps 
                    apiKey={"AIzaSyBK_jK0P7rea33bYbusTOux4XlyTmabPek"}
                    style={{}}
                    zoom={16}
                    center={{
                        lat: 19.3615959,
                        lng: -98.5226861
                    }}
                    markers={{lat: 19.3615959, lng: -98.5226861}}
                />
            
        )
    }
}
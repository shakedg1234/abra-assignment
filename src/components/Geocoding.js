import { useState ,useEffect} from "react";
import {
  useMapsLibrary
} from "@vis.gl/react-google-maps";

import React from 'react'

export const geocoding = () => {
    const geocodingApi= useMapsLibrary('geocoding');
    const [ geocodingService, setGeocodingService] = useState<google.maps.Geocoder();
    const [geocodingResult, setGeocodingResult] = 
    useState<google.maps.GeocoderResult>[]();
const [address, setAddress] = useState("HaPnina St 8, Ra\'anana");

    useEffect(() => {
        if(!geocodingApi) return;
        setGeocodingService(new geocodingApi.Geocoder());

    },[geocodingApi]);

    useEffect(() => {
        if(!geocodingService|| !address) return;
        geocodingService.geocode({address},(results,status) => {
            if(results&& status === 'OK'){
                console.log(results[0]);
            }
        });
    })


  return (
    <div>geocoding</div>
  )
}

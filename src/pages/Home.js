import React,{useContext,useState} from 'react'
import MapComp from '../components/Map'
import { PlaceList } from '../components/PlaceList'
import { PlaceContext } from "../context/PlaceContext";

export const Home = () => {
    
    const myplace = useContext(PlaceContext).places;
    console.log("Home",myplace);
   
  return (
    <div>
        <PlaceList myplaces={myplace}/>
        <MapComp myplaces={myplace}/>
        
    </div>
  )
}

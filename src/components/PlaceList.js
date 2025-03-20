import React from 'react'
import { PlaceItem } from './PlaceItem'
import PlaceContext from '../context/PlaceContext'
import {useState, useContext,useEffect} from 'react'

// const myplace=
// {
//     "id":1,
//     "name": "abra",
//     "adress": "HaPnina St 8, Ra'anana",
//     "type":"office",
//     "cordinate":{ "lat": 32.175713, "lng": 34.889978 }

// }

export const PlaceList = ({myplaces}) => {
    // const myplace = useContext(PlaceContext).places;
    const [places, setPlaces] = useState(myplaces);
    console.log("List",myplaces);
    
// const fetchPlaces = async () => {
//     try {
//         const response = await fetch("http://localhost:5000/places");
//         if (!response.ok) throw new Error("Failed to fetch places");
//         const data = await response.json();
//         console.log(data.stringify);
//         return data;
//     } catch (error) {
//         console.error("Error fetching places:", error);
//         return [];
//     }
// };

    // useEffect(() => {
    //         const getPlaces = async () => {
    //             const data = await fetchPlaces();
    //             setPlaces(data);
    //             console.log(data);
    //         };
    //         getPlaces();
    //     }, []);


  return (
    <div>
        {myplaces&& myplaces.map((place) => (
            <PlaceItem key={place.id} place={place}/>   
        ))}
        
    </div>
  )
}

import React, { createContext, useState, useEffect } from "react";

const PlaceContext = createContext(null);

const fetchPlaces = async () => {
    try {
        const response = await fetch("http://localhost:5000/places");
        if (!response.ok) throw new Error("Failed to fetch places");
        const data = await response.json();
        console.log(data.stringify);
        return data;
    } catch (error) {
        console.error("Error fetching places:", error);
        return [];
    }
};

const PlaceProvider = ({ children }) => {
    const [places, setPlaces] = useState([]);
    places.sort((a, b) => a.type- b.type);

    useEffect(() => {
        const getPlaces = async () => {
            const data = await fetchPlaces();
            setPlaces(data);
            console.log(data);
        };
        getPlaces();
        console.log(places);
    }, []); // [] רץ רק פעם אחת בעת טעינת הקומפוננטה

    
    const addplace = async (place) => {
        try {
            console.log(place)
            const cordinate1= (Math.floor(Math.random() * (100 - 1 + 1) + 1))/100+32;
            const cordinate2=( Math.floor(Math.random() * (100 - 1 + 1) + 1)/100)+34;
            const cordinate = {lat:cordinate1,lng:cordinate2}   
            console.log(cordinate)
            place.cordinate=cordinate
            const response = await fetch("http://localhost:5000/places", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(place),
            });
            if (!response.ok) throw new Error("Failed to add places");
            const data = await response.json();
            console.log(data);
            setPlaces((prevPlaces) => [...prevPlaces, data]);
            return data;
        } catch (error) {
            console.error("Error adding places:", error);
            return null;
        }
    }

    return (
        <PlaceContext.Provider value={{ places, setPlaces ,addplace}}>
            {children}
        </PlaceContext.Provider>
    );
};

export default PlaceProvider;
export { PlaceContext };

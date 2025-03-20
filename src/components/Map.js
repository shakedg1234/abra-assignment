
import { useState,useContext } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import './PlaceList.css'
import { PlaceContext } from "../context/PlaceContext";

export default function MapComp({myplaces}) {
  const position = { lat: 32.175713, lng: 34.889978 };
  const [open, setOpen] = useState(false);

 

  return (
    <div className='map'>
    <APIProvider apiKey="AIzaSyCU1TwWhF_uQnnYDdHXQws8SnChM54FDFo">
      <div style={{ height: "100vh", width: "100%" }}>
        <Map zoom={9} center={position} mapId="2e2a54ebb70ffb84">
            {myplaces&& myplaces.map((place) => (
            <AdvancedMarker position={place.cordinate} onClick={() => setOpen(true)}>
                <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />
          </AdvancedMarker>))}

          {/* <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"grey"}
              borderColor={"green"}
              glyphColor={"purple"}
            />
          </AdvancedMarker> */}

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>I'm in Hamburg</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
    </div>
  );
}
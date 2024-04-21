import React, { useState} from 'react'

import { Link } from 'react-router-dom'

import { GoogleMap, useLoadScript, MarkerF, InfoWindowF, AdvancedMarkerF} from '@react-google-maps/api';
// hi this a check


const latitudeInput = 40.0;
const longitudeInput = -75.0;

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
// D.C. coordinates
const center = {
  lat: 38.9072, // default latitude
  lng: -77.0369, // default longitude
};

const testInput = {
  lat: latitudeInput,
  lng: longitudeInput,
}

const icons = {
  marker: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
}


function HomePage(){
  // checks if aps loaded in properly
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCE2zGGFYmasHDNeJiFXzqtCyvoDs4IjOs',
    libraries,
  });

  // functions to toggle the info window that displays marker information
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(new Array(2).fill(false));
  const toggleInfoWindow = (index) => {
    setIsInfoWindowOpen(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps</div>;
  }



  return (
    <div>
      <div>
        <h1>Welcome to ShieldCortex: Defense Contracting Mapper</h1>
        <h1>Im a big fat gay boy</h1>
        <h1> My names jeff and I like boys </h1>
        <h2> Im a big dick lover yes plz papa </h2>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >

        {/* this is going to be the test marker for a test set of input coordinates */}
        {/* MARKER 1 */}
        <MarkerF 
          position={testInput}
          icon={{
            url: icons.marker,
            scaledSize: new window.google.maps.Size(50, 50), // Adjust the size if needed
          }}
          // onClick={() => alert("Latitude: " + testInput.lat + "\nLongitude: " + testInput.lng)}
          onClick={() => toggleInfoWindow(0)}
          title={'Philly test marker'}
        />
        {/* this is the corresponding infowindow that will pop up when the corresponding marker is clicked */}
        {isInfoWindowOpen[0] && (
          <InfoWindowF position={testInput} onCloseClick={() => toggleInfoWindow(0)}>
            <div>
              <h1 className='location'>Philadelphia</h1> 
              <h2 className='companyName'> Lockheed Martin </h2>
              <h2 className='branch'> Army Branch</h2>
              <p className='contractInfo'> 
                test info about this goofy ahh contract
              </p>
            </div>
          </InfoWindowF>
        )}


        {/* MARKER 2 */}
        <MarkerF 
          position={center}
          icon={{
            url: icons.marker,
            scaledSize: new window.google.maps.Size(50, 50), // Adjust the size if needed
          }}
          onClick={() => toggleInfoWindow(1)}
          title={'DC test marker'}
        />
        {/* this is the corresponding infowindow that will pop up when the corresponding marker is clicked */}
        {isInfoWindowOpen[1] && (
          <InfoWindowF position={center} onCloseClick={() => toggleInfoWindow(1)}>
            <div>
              <h1 className='location'> Washington D.C.</h1> 
              <h2 className='companyName'> Northrup Rummond </h2>
              <h2 className='branch'> Navy Seal Branch bih</h2>
              <p className='contractInfo'> 
                yessuhhhhh more info yessuh
              </p>
            </div>
          </InfoWindowF>
        )}

      </GoogleMap>
    </div>
  );
};

export default HomePage;



{/*
function HomePage() {
  return (
    <div>
      <div>
        <h1>Welcome to ShieldCortex: Defense Contracting Mapper</h1>
        <h1>Doglinfd</h1>
        <h1> practice this is jeff's edit</h1>
        <h2> practice this is jack's edit</h2>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57047242.49058247!2d-153.3812331756069!3d29.22686757312805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b30b71698e729d%3A0x131328839761a382!2sNorth%20America!5e0!3m2!1sen!2sus!4v1713652627798!5m2!1sen!2sus"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  )
}

export default HomePage

*/}
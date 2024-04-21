import React from 'react'

import { Link } from 'react-router-dom'

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const HomePage = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCE2zGGFYmasHDNeJiFXzqtCyvoDs4IjOs',
    libraries,
  });

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
        <h1>Doglinfd</h1>
        <h1> practice this is jeff's edit</h1>
        <h2> practice this is jack's edit</h2>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
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
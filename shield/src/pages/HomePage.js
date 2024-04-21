import React from 'react'

import { Link } from 'react-router-dom'

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import ControlPanel from './control-panel';
import {MovingMarker} from './moving-marker';
import {MarkerWithInfowindow} from './marker-with-infowindow';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 38.9072, // default latitude
  lng: -77.0369, // default longitude
};

const API_KEY =
  globalThis.GOOGLE_MAPS_API_KEY ?? (process.env.GOOGLE_MAPS_API_KEY);


const HomePage = () => {
  return(
  <APIProvider apiKey={API_KEY} libraries={['marker']}>
    <Map
      mapId={'bf51a910020fa25a'}
      defaultZoom={3}
      defaultCenter={{lat: 12, lng: 0}}
      gestureHandling={'greedy'}
      disableDefaultUI>
      {/* simple marker */}
      <Marker
        position={{lat: 10, lng: 10}}
        clickable={true}
        onClick={() => alert('marker was clicked!')}
        title={'clickable google.maps.Marker'}
      />

      {/* advanced marker with customized pin */}
      <AdvancedMarker
        position={{lat: 20, lng: 10}}
        title={'AdvancedMarker with customized pin.'}>
        <Pin
          background={'#22ccff'}
          borderColor={'#1e89a1'}
          glyphColor={'#0f677a'}></Pin>
      </AdvancedMarker>

      {/* advanced marker with html pin glyph */}
      <AdvancedMarker
        position={{lat: 15, lng: 20}}
        title={'AdvancedMarker with customized pin.'}>
        <Pin background={'#22ccff'} borderColor={'#1e89a1'} scale={1.4}>
          {/* children are rendered as 'glyph' of pin */}
          👀
        </Pin>
      </AdvancedMarker>

      {/* advanced marker with html-content */}
      <AdvancedMarker
        position={{lat: 30, lng: 10}}
        title={'AdvancedMarker with custom html content.'}>
        <div
          style={{
            width: 16,
            height: 16,
            position: 'absolute',
            top: 0,
            left: 0,
            background: '#1dbe80',
            border: '2px solid #0e6443',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)'
          }}></div>
      </AdvancedMarker>

      {/* simple positioned infowindow */}
      <InfoWindow position={{lat: 40, lng: 0}} maxWidth={200}>
        <p>
          This is the content for another infowindow with <em>HTML</em>
          -elements.
        </p>
      </InfoWindow>

      {/* continously updated marker */}
      <MovingMarker />

      {/* simple stateful infowindow */}
      <MarkerWithInfowindow />
    </Map>
    <ControlPanel />
  </APIProvider>
  );
};

export default HomePage
{/*
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

*/}

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
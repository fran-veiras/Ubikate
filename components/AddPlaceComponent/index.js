import { MapContainer, TileLayer } from 'react-leaflet';
import { SearchControl, OpenStreetMapProvider } from '../mapProviders/index';
import '../../styles/Home.module.css';
import LocationMarker from '../mapProviders/LocationMarker';

export default function AddPlaceComponent() {
  const prov = OpenStreetMapProvider();
  const GeoSearchControlElement = SearchControl;

  return (
    <>
      <MapContainer
        center={[-34.6083, -58.371234]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: 700, width: '100%' }}
      >
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
        />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoSearchControlElement
          provider={prov}
          showMarker={true}
          showPopup={false}
          popupFormat={({ query, result }) => result.label}
          maxMarkers={3}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={false}
          searchLabel={'Enter address, please'}
          keepResult={true}
        />
        <LocationMarker />
      </MapContainer>
    </>
  );
}

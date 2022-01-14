import { Map, TileLayer } from 'react-leaflet';
import { SearchControl, OpenStreetMapProvider } from '../mapProviders';
import '../../styles/Home.module.css';

export default class AddPlaceComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    const prov = OpenStreetMapProvider();
    const GeoSearchControlElement = SearchControl;

    console.log('hola');
    return (
      <>
        <Map
          center={[42.09618442380296, -71.5045166015625]}
          zoom={2}
          zoomControl={true}
        >
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
          />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <GeoSearchControlElement
            provider={prov}
            showMarker={true}
            showPopup={false}
            maxMarkers={3}
            retainZoomLevel={false}
            animateZoom={true}
            autoClose={false}
            searchLabel={'Enter address, please'}
            keepResult={true}
            popupFormat={({ query, result }) => result.label}
          />
        </Map>
      </>
    );
  }
}

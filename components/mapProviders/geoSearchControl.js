import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { GeoSearchControl } from 'leaflet-geosearch';

const SearchControl = (props) => {
  console.log(props.provider);
  const map = useMap();

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider: props.provider,
      ...props,
    });

    function searchEventHandler(result) {
      console.log(result.location);
    }

    map.on('geosearch/showlocation', searchEventHandler);

    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [props]);

  return null;
};
export default SearchControl;

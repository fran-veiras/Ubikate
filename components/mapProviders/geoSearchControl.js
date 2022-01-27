import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { GeoSearchControl } from 'leaflet-geosearch';

const SearchControl = (props) => {
  const map = useMap();

  // const handleLocations = (place) => {
  //   dispatch(locationActions.getData(place));
  // };

  // function searchEventHandler(result) {
  //   handleLocations(result.location);
  // }

  // useEffect(() => {
  //   map.on('geosearch/showlocation', searchEventHandler);
  // }, []);

  useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider: props.provider,
      ...props,
    });

    map.addControl(searchControl);

    return () => {
      map.removeControl(searchControl);
    };
  }, [props]);

  return null;
};
export default SearchControl;

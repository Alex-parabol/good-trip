import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
/* import PlaceDetails gifrom "./components/PlaceDetails/PlaceDetails"; */
import { getPlacesData } from "./api";
import { CssBaseline, Grid } from "@material-ui/core";

function App() {
  //restaurants we obtain from the api
  const [places, setPlaces] = useState([]);

  //coordinates of the places we are looking for
  const [coordinates, setCoordinates] = useState();

  //state for the bottom left corner and top right.
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    console.log(coordinates, bounds);
    if(bounds){
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
    });
  }
    
  }, [coordinates, bounds]); // this way, everytime the map changes,
  // we rerun the code
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;

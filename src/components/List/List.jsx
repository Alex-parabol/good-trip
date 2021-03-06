import React, { useState } from "react";
import PlaceDetails from "./../PlaceDetails/PlaceDetails";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./ListStyles";

export default function List({places}) {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  /* const places = [
    {
      name: "Potemkin",
    },
    {
      name: "Paniagua",
    },
    {
      name: "Imprenta",
    },
    {
      name: "Pippers",
    },
    {
      name: "Casa de cris",
    },
  ]; */
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels and Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="Attractions">Atractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {/* care using index as they key holder because if we needed to delete an item we would be in trouble. */}
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

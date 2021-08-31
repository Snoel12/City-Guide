import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, child, loading, type, setType, rating, setRating }) => {
  const classes = useStyles();

  const [refs, setRefs] = useState([]);

  useEffect(() => {
    const elRef = Array(places?.length)
      .fill()
      .map((_, idx) => refs[idx] || createRef());
    setRefs(elRef);
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels and Attractions nearby!
      </Typography>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(ev) => setType(ev.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select
              value={rating}
              onChange={(ev) => setRating(ev.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}> 3.0 And Above</MenuItem>
              <MenuItem value={4}>4.0 And Above</MenuItem>
              <MenuItem value={4.5}>4.5 And Above</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, idx) => (
              <Grid item key={idx} xs={12} ref={refs[idx]}>
                <PlaceDetails
                  place={place}
                  selected={child * 1 === idx}
                  refProp={refs[idx]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;

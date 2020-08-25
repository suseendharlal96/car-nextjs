import React from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { Form, Formik, Field } from "formik";

import { Makers, getMakers } from "../database/makers";
import {
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  GridList,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    maxWidth: "95%",
  },
  paper: {
    margin: "auto",
    maxWidth: 500,
    padding: theme.spacing(3),
    backgroundColor: "beige",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  gridList: {
    width: "100%",
    height: "50%",
    overflow: "hidden",
  },
}));

interface HomeProps {
  makers: Makers[];
}

const prices = [5000, 10000, 15000, 20000, 50000, 100000];
const Index = ({ makers }: HomeProps) => {
  const router = useRouter();
  const classes = useStyles();
  console.log(router.query);
  const initialValues = {
    myMaker: router.query.manufacturer || "all",
    myModel: router.query.model || "all",
    myMinPrice: router.query.minPrice || "all",
    myMaxPrice: router.query.maxPrice || "all",
  };
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      {(values) => (
        <Form>
          <Paper elevation={5} className={classes.paper}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
              <Grid item xs={12} sm={6} md={6}>
                {" "}
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="search-makers">Makers</InputLabel>
                  <Field
                    name="myMaker"
                    as={Select}
                    labelId="search-makers"
                    id="search-makers"
                    // value={age}
                    // onChange={handleChange}
                    label="Makers"
                  >
                    <MenuItem disabled value="all">
                      <em>All makers</em>
                    </MenuItem>
                    {makers.map((maker) => {
                      return (
                        <MenuItem key={maker.make} value={maker.make}>
                          {maker.make + "(" + maker.count + ")"}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="search-makers">Models</InputLabel>
                  <Field
                    as={Select}
                    labelId="search-models"
                    id="search-models"
                    // value={age}
                    // onChange={handleChange}
                    label="Models"
                  >
                    <MenuItem value="all">
                      <em>All Models</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="search-makers">Min Price</InputLabel>
                  <Field
                    as={Select}
                    name="myMinPrice"
                    labelId="search-min-price"
                    id="search-min-price"
                    // value={age}
                    // onChange={handleChange}
                    label="Min Price"
                  >
                    <MenuItem value="all">
                      <em>Select Min Price</em>
                    </MenuItem>
                    {prices.map((price) => (
                      <MenuItem key={price} value={price}>
                        {price}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="search-max-price">Max price</InputLabel>
                  <Field
                    name="myMaxPrice"
                    as={Select}
                    labelId="search-max-price"
                    id="search-max-price"
                    // value={age}
                    // onChange={handleChange}
                    label="Max price"
                  >
                    <MenuItem value="all">
                      <em>Select Max Price</em>
                    </MenuItem>
                    {prices.map((price) => (
                      <MenuItem key={price} value={price}>
                        {price}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>
            </GridList>
          </Paper>
        </Form>
      )}
    </Formik>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const makers = await getMakers();
  return {
    props: { makers },
  };
};

export default Index;

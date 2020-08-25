import React from "react";
import { GetServerSideProps } from "next";
import router, { useRouter } from "next/router";

import { Form, Formik, Field, useField, useFormikContext } from "formik";
import {
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  GridList,
  SelectProps,
  Button,
} from "@material-ui/core";

import { Makers, getMakers } from "../database/getMakers";
import { Models, getModels } from "../database/getModels";
import { getParamAsStrings } from "../../getParamAsString";
import useSWR from "swr";
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
  models: Models[];
}

const prices = [5000, 10000, 15000, 20000, 50000, 100000];
const Index = ({ makers, models }: HomeProps) => {
  console.log(models);
  const router = useRouter();
  const classes = useStyles();
  console.log(router.query);
  const initialValues = {
    maker: router.query.maker || "all",
    model: router.query.model || "all",
    minPrice: router.query.minPrice || "all",
    maxPrice: router.query.maxPrice || "all",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        router.push(
          {
            pathname: "/",
            query: { ...values, page: 1 },
          },
          undefined,
          { shallow: true }
        );
      }}
    >
      {(values) => (
        <Form>
          <Paper elevation={5} className={classes.paper}>
            <h2 style={{ textAlign: "center" }}>Select your Specifications</h2>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
              <Grid item xs={12} sm={6} md={6}>
                {" "}
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="search-makers">Brand</InputLabel>
                  <Field
                    name="maker"
                    as={Select}
                    labelId="search-makers"
                    id="search-makers"
                    // value={age}
                    // onChange={handleChange}
                    label="Brand"
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
                <SelectCarModel
                  name="model"
                  maker={getParamAsStrings(values.values.maker)}
                  models={models}
                />
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
                    name="minPrice"
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
                    name="maxPrice"
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
            <Button type="submit" variant="contained" fullWidth color="primary">
              Apply your Specifications
            </Button>
          </Paper>
        </Form>
      )}
    </Formik>
  );
};

export interface SelectCarModelProps extends SelectProps {
  name: string;
  models: Models[];
  maker: string;
}

export function SelectCarModel({
  models,
  maker,
  ...props
}: SelectCarModelProps) {
  const { setFieldValue } = useFormikContext();
  const classes = useStyles();

  const [field] = useField({
    name: props.name,
  });
  console.log(maker);

  const { data } = useSWR<Models[]>("/api/getModels/?manufacturer=" + maker, {
    onSuccess: (newValues) => {
      if (!newValues.map((val) => val.model).includes(field.value)) {
        setFieldValue("model", "all");
      }
    },
  });
  const updatedModels = data || models;

  return (
    <FormControl fullWidth variant="outlined" className={classes.formControl}>
      <InputLabel id="search-makers">Models</InputLabel>
      <Select
        name="model"
        labelId="search-models"
        id="search-models"
        label="Models"
        {...field}
        {...props}
      >
        <MenuItem disabled value="all">
          <em>All Models</em>
        </MenuItem>
        {updatedModels.map((model) => {
          return (
            <MenuItem key={model.model} value={model.model}>
              {model.model + "(" + model.count + ")"}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const maker = getParamAsStrings(context.query.maker);

  const [makers, models] = await Promise.all([getMakers(), getModels(maker)]);
  return {
    props: { makers, models },
  };
};

export default Index;

import React from "react";
import { GetServerSideProps } from "next";

import { Form, Formik } from "formik";

import { Makers, getMakers } from "../database/makers";
import {
  Paper,
  Container,
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
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  gridList: {
    width: '100%',
    height: '50%',
    overflow:'hidden'
  },
}));

interface HomeProps {
  makers: Makers[];
}

const index = ({ makers }: HomeProps) => {
  const classes = useStyles();
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      {(values) => (
        <Form>
          <Paper>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
              <Grid spacing={3} item xs={12} sm={6} md={6}>
                {" "}
                <FormControl
                  fullWidth
                  variant="outlined"

                  className={classes.formControl}
                >
                  <InputLabel id="search-makers">Makers</InputLabel>
                  <Select
                    labelId="search-makers"
                    id="search-makers"
                    // value={age}
                    // onChange={handleChange}
                    label="Makers"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid spacing={3} item xs={12} sm={6} md={6}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="search-makers">Makers</InputLabel>
                  <Select
                    labelId="search-makers"
                    id="search-makers"
                    // value={age}
                    // onChange={handleChange}
                    label="Makers"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid spacing={3} item xs={12} sm={6} md={6}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="search-makers">Makers</InputLabel>
                  <Select
                    labelId="search-makers"
                    id="search-makers"
                    // value={age}
                    // onChange={handleChange}
                    label="Makers"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid spacing={3} item xs={12} sm={6} md={6}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="search-makers">Makers</InputLabel>
                  <Select
                    labelId="search-makers"
                    id="search-makers"
                    // value={age}
                    // onChange={handleChange}
                    label="Makers"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
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

export default index;

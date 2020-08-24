import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { connectDB } from "../../../../connectDB";
import { CarModel } from "../../../../models/car.model";

interface CarDetailsProps {
  car: CarModel | null | undefined;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  image: {
    width: "100%",
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const CarDetails = ({ car }: CarDetailsProps) => {
  const classes = useStyles();
  const router = useRouter();
  return !router.isFallback ? (
    car ? (
      <div>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={5}>
              <img className={classes.img} alt="complex" src={car.photoUrl} />
            </Grid>
            <Grid item xs={12} sm={6} md={7} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h4">
                    Model: {car.model}
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    Manufacturer: {car.make}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    Price: ${car.price}
                  </Typography>
                  <Typography variant="h6" gutterBottom color="textSecondary">
                    Fueltype: {car.fuelType}
                  </Typography>
                  <Typography variant="h6" gutterBottom color="textSecondary">
                    Year: {car.year}
                  </Typography>
                  <Typography variant="h6" gutterBottom color="textSecondary">
                    KMS: {car.kilometers}
                  </Typography>
                  <Typography variant="h6" gutterBottom color="textSecondary">
                    Description: {car.details}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    ) : (
      <p>no car found</p>
    )
  ) : (
    <p>Your car is loading...</p>
  );
};

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
  console.log("id", id);
  const db = await connectDB();
  const car = await db.get<CarModel | undefined>(
    "SELECT * FROM Car WHERE id=?",
    id
  );
  return { props: { car: car || null }, revalidate: 1 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const db = await connectDB();
  const car = await db.all<CarModel[] | undefined>("SELECT * FROM Car LIMIT 5");
  const paths = [];
  car.map((c) => {
    const obj = {
      params: {
        model: "",
        brand: "",
        id: null,
      },
    };
    obj.params.model = c.model;
    obj.params.brand = c.make;
    obj.params.id = c.id.toString();
    paths.push(obj);
  });
  return {
    paths,
    fallback: true,
  };
};

export default CarDetails;

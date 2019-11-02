import React from "react";
import Head from "next/head";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import GoogleMapReact from "google-map-react";

const areaGeofence = [
  [53.600548, -2.318539],
  [53.598409, -2.311651],
  [53.595174, -2.310578],
  [53.592907, -2.315149],
  [53.592219, -2.321608],
  [53.599122, -2.321028],
  [53.600536, -2.31849]
];

const styles = makeStyles({
  h4: {
    padding: "16px 0 8px 0"
  },
  gardenBlock: {
    "grid-column": "4 / span 6",
    display: "grid",
    "grid-template-rows": "repeat(7, 1fr)",
    "grid-row-gap": "8px",
    padding: 8,
    marginTop: 16,
  },
  titleBlock: { gridColumn: "1 / span 2", gridRow: "1" },
  mapContainer: { padding: '16px 0', gridColumn: "4 / span 6", height: 300 }
});

const gardens = [
  {
    id: "abc-123-uuid",
    name: "Walshaw roadside flower boxes",
    environments: [], // references to environmental factors
    location: [
      [53.59871, -2.318431],
      [53.598782, -2.318216],
      [53.598708, -2.317599],
      [53.598603, -2.31746]
    ], // geofence, list of lat/lng pairs
    pictures: [],
    drops: [] // references to shared things, items for people
  },
  {
    id: "567-uid-blah",
    name: "Secret whitehead park garden",
    environments: [], // references to environmental factors
    location: [
      [53.595841, -2.317453],
      [53.595688, -2.317517],
      [53.595727, -2.317305],
      [53.595816, -2.317305]
    ], // geofence, list of lat/lng pairs
    pictures: [],
    drops: [] // references to shared things, items for people
  }
];

const Home = () => {
  const classnames = styles();
  return (
    <div className="main">
      <Head>
        <title>GrazzRootz | Gardens in your area</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <style global>{`
        body {
            margin: 0;
            font-family: helvetica, arial;
            background-color: #EEEEEE;
        }
        .main {
            height: 100vh;
        }
    `}</style>
      <style jsx>{`
        .gardens {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          height: 100%;
          margin: 0 8px;
        }

        .desc {
          grid-column: 1 / span 2;
        }

        ul {
          list-style: none;
          grid-column: 4 / span 6;
          display: grid;

          grid-template-rows: repeat(11, 1fr);
          grid-row-gap: 8px;
          padding-left: 0;
        }

        li {
          padding: 8px;
          background-color: #b2dfdb;
          max-height: 76px;

          font-family: helvetica, arial;
          font-size: 18px;
          cursor: pointer;

          vertical-align: center;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        li:hover {
          background-color: #00897b;
          transition: background-color 0.3s;
        }

        li:last-child {
          grid-row-start: 11;
        }
      `}</style>
      <div className="gardens">
        <Container className={classnames.mapContainer}>
          <GoogleMapReact
            defaultCenter={[53.595841295722394, -2.317452947789434]}
            defaultZoom={15}
          ></GoogleMapReact>
        </Container>
        <div className={classnames.titleBlock}>
          <Typography variant="h4" className={classnames.h4}>
            Walshaw Community Gardens
          </Typography>
          <Typography variant="body2">
            Here you can see where your community spends their time.
          </Typography>
        </div>
        <Box className={classnames.gardenBlock}>
          {gardens.map(g => (
            <Card key={g.id}>
              <CardContent>
                <Typography variant="subtitle1" style={{ paddingBottom: 8 }}>
                  {g.name}
                </Typography>
                <Badge badgeContent={8} style={{ marginBottom: -16 }}>
                  <PersonIcon />
                </Badge>
                <Button style={{ float: "right" }}>view</Button>
              </CardContent>
            </Card>
          ))}
          <Button>see more</Button>
        </Box>
      </div>
    </div>
  );
};

export default Home;

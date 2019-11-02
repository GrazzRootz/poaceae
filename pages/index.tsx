import React from "react";
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
import { MapIcon } from "../components/MapIcon";
import { HTMLHead } from "../components/HTMLHead";
import { gardens } from "../data/gardens";

const styles = makeStyles({
  centerContent: { gridColumn: "4 / span 8" },
  h4: {
    padding: "16px 0 8px 0"
  },
  gardens: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    height: "100%",
    margin: "0 8px"
  },
  gardenBlock: {
    display: "grid",
    gridTemplateRows: "repeat(7, 1fr)",
    gridRowGap: 8,
    padding: "8px 0"
  },
  titleBlock: { gridColumn: "1 / span 2", gridRow: "1" },
  mapContainer: {
    padding: "16px 0 0 0",
    height: 300
  },
  mapTag: { width: 10, height: 10, background: "#FFF" }
});

const handleGoogle = gg => {
  gardens.map(g => {
    new gg.maps.Polygon({
      map: gg.map,
      paths: g.location.map(([lat, lng]) => ({ lat, lng })),
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      draggable: false,
      editable: false,
      geodesic: true
    });
  });
};

const Home = props => {
  const classnames = styles(props);

  return (
    <>
      <HTMLHead />
      <div className={classnames.gardens}>
        <Container
          className={classnames.mapContainer + " " + classnames.centerContent}
        >
          <GoogleMapReact
            defaultCenter={[53.595841295722394, -2.317452947789434]}
            defaultZoom={15}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={handleGoogle}
          />
        </Container>
        <div className={classnames.titleBlock}>
          <Typography variant="h4" className={classnames.h4}>
            Walshaw Community Gardens
          </Typography>
          <Typography variant="body2">
            Here you can see where your community spends their time.
          </Typography>
        </div>
        <Box
          className={classnames.gardenBlock + " " + classnames.centerContent}
        >
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
    </>
  );
};

export default Home;

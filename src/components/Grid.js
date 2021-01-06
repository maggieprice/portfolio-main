import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import InterestList from "./InterestList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "rgb(133, 189, 191)",
  },
  gridList: {
    width: 900,
    height: 500,
  },
  // icon: {
  //   color: "rgba(194, 252, 247)",
  // },
}));

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cols={4} cellHeight={180} className={classes.gridList}>
        <GridListTile cols={4} style={{ height: "auto" }}>
          {/* <ListSubheader component="div">December</ListSubheader> */}
        </GridListTile>
        {InterestList.map((title) => (
          <GridListTile key={title.img}>
            <img src={title.img} alt={title.title} />
            <GridListTileBar title={title.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

import React from "react";
import Header from "components/Header/Header.js";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";


const useStyles = makeStyles(styles);
const DotNav = () => {
  const classes = useStyles();
  return (
    <Header
    style={{}}
      leftLinks={
        <img
          style={{ width: "12vw" }}
          src={require("assets/img/239290460-dot.png")}
        />
      }
      brand=""
      rightLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Home
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              About Us
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Services
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              Contact
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
          <Link href="/login">
            <Button
              style={{ backgroundColor: "#002F59" }}
              href="#pablo"
              className={classes.registerNavLink}
              round
            >
              Register
            </Button>
            </Link>
          </ListItem>
        </List>
      }
    />
  );
};

export default DotNav;

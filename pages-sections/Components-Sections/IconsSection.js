import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";

const IconsSection = () => {
  return (
    <div style={{ height: "30vh", backgroundColor: "#002F59", justifyContent:'center' }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>3</Grid>
        <Grid item xs={4}>3</Grid>
        <Grid item xs={4}>3</Grid>
      </Grid>
    </div>
  );
};

export default IconsSection;

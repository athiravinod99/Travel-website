import React from "react";
import { Grid, Typography, ImageListItem, ImageList } from "@mui/material";
import styles from "../styles/components/highlights.module.scss";
import expenseTrack from "../public/Images/expenseTrack.jpg";
import blogImg1 from "../public/Images/blogImg1.jpg";
import logo from "../public/Images/logo.jpg";
import itinaryPlan from "../public/Images/itinaryPlan.jpg";

const itemData = [
  {
    img: expenseTrack.src,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: itinaryPlan.src,
    title: "Burger",
    rows: 1.5,
    cols: 2,
  },
  {
    img: logo.src,
    title: "Coffee",
    cols: 2,
    rows: 2,
  },
  {
    img: blogImg1.src,
    title: "Hats",
    cols: 2,
    rows: 1.5,
  },
];

const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const Highlights = () => {
  return (
    <div className={styles.highlights}>
      <Typography variant="h4" className={styles.heading}>
        OUR HIGHLIGHTS
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" className={styles.content}>
            Discover the convenience of{" "}
            <span className={styles.highlight}>expense tracking</span>, seamless{" "}
            <span className={styles.highlight}>trip planning</span>, engaging{" "}
            <span className={styles.highlight}>blog</span> reading and writing,
            and <span className={styles.highlight}>effortless booking</span> of
            stays and transportation on our travel website!
          </Typography>
        </Grid>
        <Grid item xs={6} className={styles.collageColumn}>
          <Grid container spacing={2}>
            <ImageList
              sx={{ width: 500, height: 450 }}
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Highlights;

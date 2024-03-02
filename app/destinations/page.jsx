import TravelCard from '@/components/Card'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Grid, Typography, Container } from "@mui/material";
import styles from "./styles.module.scss"

const page = () => {
  return (
    <>
      <Navbar/>
      <Grid container className={styles.container} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}> {/* Make this item span the full width */}
          <Grid container justifyContent="space-between"> {/* Use a container to display items in a row */}
            <Grid item xs={4}> {/* Set the size of each card */}
              <TravelCard />
            </Grid>
            <Grid item xs={4}> {/* Set the size of each card */}
              <TravelCard />
            </Grid>
            <Grid item xs={4}> {/* Set the size of each card */}
              <TravelCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default page

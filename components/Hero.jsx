/* 
* Hero section in dashboard
*/

import styles from "../styles/components/hero.module.scss";
import destinationImg0 from "../public/Images/destinationImg0.jpg";
import { Typography } from '@mui/material';
import TravelButton from "./TravelButton";

const Hero = () => {
  return (
    <section className={styles.section}>
        <div className={styles.sectionContent}>
          <Typography variant="title"  className={styles.title}><span class='one'>E</span><span class='two'>X</span><span class='three'>P</span><span class='four'>L</span><span class='five'>O</span>
          <span class='six'>R</span><span class='seven'>E</span></Typography>
          <TravelButton variant="contained" buttonText="Plan your Trip" />
        </div>
        <div className={styles.sectionImage}>
          <img src={destinationImg0.src} alt="camp" />
        </div>
      </section>
  );
};

export default Hero;

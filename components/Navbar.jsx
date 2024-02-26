import { navLinks } from "@/constants";
import logo from "../public/Images/logo.jpg";
import styles from "../styles/components/navbar.module.scss";
import TravelButton from "./TravelButton";
import dashboardImg2 from "../public/Images/dashboardImg1.jpg";
import { Typography } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar__wrapper}>
        <nav>
          <ul className={styles.navbar__items}>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <TravelButton variant="contained" buttonText="Login" />
            </li>
          </ul>
        </nav>
      </div>
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <Typography variant="h2" className={styles.title}>EXPLORE</Typography>
          <TravelButton variant="contained" buttonText="Plan your Trip" />
        </div>
        <div className={styles.sectionImage}>
          <img src={dashboardImg2.src} alt="camp" />
        </div>
      </section>
    </>
  );
};

export default Navbar;

import { navLinks } from "@/constants";
import logo from "../public/Images/logo.jpg";
import styles from "../styles/components/navbar.module.scss";
import TravelButton from "./TravelButton";


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
      {/* <section className={styles.section}>
        <div className={styles.sectionContent}>
          <Typography variant="title"  className={styles.title}><span class='one'>E</span><span class='two'>X</span><span class='three'>P</span><span class='four'>L</span><span class='five'>O</span>
          <span class='six'>R</span><span class='seven'>E</span></Typography>
          <TravelButton variant="contained" buttonText="Plan your Trip" />
        </div>
        <div className={styles.sectionImage}>
          <img src={destinationImg0.src} alt="camp" />
        </div>
      </section> */}
    </>
  );
};

export default Navbar;

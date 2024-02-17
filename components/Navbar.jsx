import { navLinks } from "@/constants";
import logo from "../public/Images/logo.jpg";
import styles from "../styles/components/navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <header>
        <nav >
          <ul className={styles.navbar}>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <button
                className={styles.signup_btn}
              >Login</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

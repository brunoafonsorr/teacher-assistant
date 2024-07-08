import Image from "next/image";
import styles from "./page.module.scss";

import img1 from "../../public/react.svg";
import logo from "../assets/images/logo.jpg";
import { archivo } from "./fonts";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src={logo}
          alt={""}
          width={100}
          height={100}
        />
      </div>

      <div className={styles.content}>
        <h2>Login</h2>
        <form action="">
          <div className={styles.specifications}>
            <input type="number" placeholder="Entrar como" name="enterAs" />
            <input type="number" placeholder="Cod. Etec" name="code" />
          </div>
          <div className={styles.login}>
            <input type="text" placeholder="RM" name="rm"  />
            <input type="text" placeholder="Password" name="password" />
          </div>
          <span>Solicitar nova senha</span>
          <button className={`${archivo.className}`} type="button">Login</button>
        </form>
      </div>
    </div>
  );
}

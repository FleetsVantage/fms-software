import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Login to Fleet Management System Dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.loginFormContainer}>
            <h1>Login</h1>
            <form className={styles.loginForm}>
              <label>
                Username:
                <input type="text" name="username" required />
              </label>
              <label>
                Password:
                <input type="password" name="password" required />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

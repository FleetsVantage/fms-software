import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Implementation of submission handling function
  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.status === 200) {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  }

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
            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

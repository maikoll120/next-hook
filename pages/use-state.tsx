import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

const UseStatePage: NextPage = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };

  console.count("Render useState")

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href={"/"}>
          <h1>useState</h1>
        </Link>

        <p>Count: {count}</p>
        <button onClick={handleClick}>Add</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </main>
    </div>
  );
};

export default UseStatePage;

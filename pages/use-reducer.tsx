import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useReducer } from "react";

type State = {
  name: string;
  pwd: number;
};

type Action =
  | { type: "setName"; payload: string }
  | { type: "setPwd"; payload: number };

const initialState: State = {
  name: "maikoll",
  pwd: 12345,
};

const reducer = (state: State, action: Action) => {
  const { type } = action;
  switch (type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setPwd":
      return { ...state, pwd: action.payload };
    default:
      return state;
  }
};

const UseStatePage: NextPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.count("Render useReducer");

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

        <p>name: {state.name}</p>
        <p>pwd: {state.pwd}</p>

        <input
          name="name"
          onChange={(e) =>
            dispatch({ type: "setName", payload: e.target.value })
          }
        ></input>

        <input
          name="pwd"
          onChange={(e) =>
            dispatch({
              type: "setPwd",
              payload: Number.parseFloat(e.target.value),
            })
          }
        ></input>
      </main>
    </div>
  );
};

export default UseStatePage;

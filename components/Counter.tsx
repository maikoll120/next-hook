import React, { useEffect } from "react";

type Props = {
  count1: number;
  count2: number;
};

const Counter = ({ count1, count2 }: Props) => {
  console.count("Render Counters");

  useEffect(()=>{
    console.count("Render Counter Once")
  }, [])

  useEffect(() => {
    console.count("Render Counter 1- " + count1);
  }, [count1]);

  useEffect(() => {
    console.count("Render Counter 2- " + count2);
  }, [count2]);

  return (
    <>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
    </>
  );
};

export default Counter;

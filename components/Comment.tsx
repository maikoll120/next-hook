import React, { useEffect } from "react";

type Props = {
  func: (label: string) => string;
};

const Comment = ({ func }: Props) => {
  useEffect(() => {
    console.log(func("hola"));
  }, [func]);

  return <div>Comment</div>;
};

export default Comment;

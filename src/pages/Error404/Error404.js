import React from "react";
import cn from "classnames";
import s from "./Error404.module.scss";

const Error404 = () => {
  return (
    <div className={cn(s.root)}>
      <p>Page not found</p>
    </div>
  );
};

export default Error404;

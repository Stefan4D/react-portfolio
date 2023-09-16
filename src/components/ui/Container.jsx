/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Container({
  className,
  width = "max-w-7xl",
  children,
}) {
  return (
    <div className={`mx-auto w-full ${width} ${className}`}>{children}</div>
  );
}

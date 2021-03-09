import Image from "next/image";
import { Fragment } from "react";

export default function FSBackground({
  image,
  height = "auto",
  overlay,
  classes,
  children,
}) {
  return (
    <div className={`bg-image ${image} ${height} ${overlay} ${classes}`}>
      {children}
    </div>
  );
}

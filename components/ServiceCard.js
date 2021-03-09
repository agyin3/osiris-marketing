import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ServiceCard({ service }) {
  let { icon, title, desc, color } = service;
  return (
    <div className="md:w-3/10 shadow-md p-8 text-sm mb-10 rounded-lg service-card border">
      <div className="text-center mb-3">
        <FontAwesomeIcon
          icon={icon}
          height="3rem"
          width="3rem"
          className={`mx-auto text-${color}`}
        />
      </div>
      <p className="font-bold mb-3 text-2xl">{title}</p>
      <p className="text-lg lg:w-4/5 mx-auto">{desc}</p>
    </div>
  );
}

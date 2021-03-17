import React from "react";
import DetailsCard from "./DetailsCard";
import data from "../data.json";
export default function Details() {
  return (
    <section id="details">
      {data.details.map((deet) => (
        <DetailsCard
          details={{
            bg: deet.bg,
            title: deet.title,
            text: deet.text,
            image: deet.image,
          }}
          classes={deet.classes}
        />
      ))}
    </section>
  );
}

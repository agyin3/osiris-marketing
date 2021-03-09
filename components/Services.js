import React from "react";
import Container from "./Container";
import ServiceCard from "./ServiceCard";

export default function Services({ services }) {
  return (
    <section className="section-wrapper text-black text-center bg-white">
      <h2 className="section-title">What We Can Do For You</h2>
      <p className="text-xl mb-12">
        Building or enhancing your web presence doesn't have to be a hassle.
      </p>
      <Container className="flex-wrap justify-between md:flex-row">
        {services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </Container>
    </section>
  );
}

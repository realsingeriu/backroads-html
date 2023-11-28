import React from "react";
import Title from "./Title";
import { services } from "./data";

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <article key={service.id} className="service">
              <span className="service-icon">
                <i className="service.icon"></i>
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;

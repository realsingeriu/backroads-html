import React from "react";
import Title from "./Title";
import { tours } from "./data";

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const searchQuery = tour.location.substring(0, 10);
          const mapLink = `https://www.google.com/maps?q=${encodeURIComponent(
            searchQuery
          )}`;
          return (
            <article key={tour.id} className="tour-card">
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt="tour.img" />
                <p className="tour-dare">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                  <p>{tour.info}</p>
                </div>
                <p>{tour.description}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <a
                        href={mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-map"></i>
                      </a>
                    </span>{" "}
                    {tour.location}
                  </p>
                  <p>{tour.duration}</p>
                  <p>from ${tour.cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Tours;

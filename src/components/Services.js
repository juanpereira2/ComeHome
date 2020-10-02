import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () =>{

  const [services] = useState([
      {
        icon: <FaCocktail />,
        title: "Coquiteis de Graça",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eius eum sit odit voluptate rem esse quidem omnis iste, officia rerum consectetur provident adipisci nihil perferendis numquam nemo possimus laborum.",
      },
      {
        icon: <FaHiking />,
        title: "Passeios sem fim",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eius eum sit odit voluptate rem esse quidem omnis iste, officia rerum consectetur provident adipisci nihil perferendis numquam nemo possimus laborum.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Locomoção livre",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eius eum sit odit voluptate rem esse quidem omnis iste, officia rerum consectetur provident adipisci nihil perferendis numquam nemo possimus laborum.",
      },
      {
        icon: <FaBeer />,
        title: "Forte cerveja",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eius eum sit odit voluptate rem esse quidem omnis iste, officia rerum consectetur provident adipisci nihil perferendis numquam nemo possimus laborum.",
      },
  ]);

    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
}

export default Services;

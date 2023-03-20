import React, { useEffect } from "react";
import "./trip.css";

import { GrLocation } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";

import img1 from "../../assets/images/bali.jpg";
import img2 from "../../assets/images/aswan.jpg";
import img3 from "../../assets/images/seoul.jpg";
import img4 from "../../assets/images/rome.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destName: "Bali",
    location: "Indonesia",
    acMinPrice: "$40",
    acMaxPrice: "$200",
    flMinPrice: "$150",
    flMaxPrice: "$300",
    description:
      "the famed Island of the Gods with its varied landscape of hills and mountains, rugged coastlines and sandy beaches, lush rice terraces, and volcanic hillsides all providing a picturesque backdrop to its colorful, deeply spiritual, and unique culture stakes a serious claim to be paradise on earth.",
    food: "Sate lembat",
    weather: "20",
    exCode: "IR",
    exRate: "0.0020",
  },
  {
    id: 2,
    imgSrc: img2,
    destName: "Aswan",
    location: "Egypt",
    acMinPrice: "$20",
    acMaxPrice: "$100",
    flMinPrice: "$30",
    flMaxPrice: "$100",
    description:
      "the famed Island of the Gods with its varied landscape of hills and mountains, rugged coastlines and sandy beaches, lush rice terraces, and volcanic hillsides all providing a picturesque backdrop to its colorful, deeply spiritual, and unique culture stakes a serious claim to be paradise on earth.",
    food: "Molokhiyya",
    weather: "38",
    exCode: "EGP",
    exRate: "1",
  },
  {
    id: 3,
    imgSrc: img3,
    destName: "Seoul",
    location: "South Korea",
    acMinPrice: "$90",
    acMaxPrice: "$500",
    flMinPrice: "$200",
    flMaxPrice: "$400",
    description:
      "a fun city where you can experience K-Pop, modern skyscrapers, high-tech subways and pop culture.",
    food: "Korean barbecue",
    weather: "26",
    exCode: "KRW",
    exRate: "0.024",
  },
  {
    id: 4,
    imgSrc: img4,
    destName: "Rome",
    location: "Italy",
    acMinPrice: "$76",
    acMaxPrice: "$123",
    flMinPrice: "$200",
    flMaxPrice: "$400",
    description:
      "Rome is one of those destinations that sits on many travelers' must-see someday lists. The culture of Rome and its historic architecture are its main draws.",
    food: "Pasta alla Carbonara.",
    weather: "17",
    exCode: "EUR",
    exRate: "33.15",
  },
];

const Trip = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Our Most Visited</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({
            id,
            imgSrc,
            destName,
            location,
            acMinPrice,
            acMaxPrice,
            flMinPrice,
            flMaxPrice,
            description,
            food,
            weather,
            exCode,
            exRate,
          }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destName} />
                </div>

                <div className="cardData">
                  <h4 className="destName">{destName}</h4>
                  <span className="continent flex">
                    <GrLocation className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="price">
                      <h4>Flights</h4>
                      <h5>
                        {flMinPrice} - {flMaxPrice} /ticket
                      </h5>
                      <h4>Accomodation</h4>
                      <h5>
                        {acMinPrice} - {acMaxPrice} /night
                      </h5>
                    </div>
                  </div>
                  <div className="desc">
                    <h4>Details</h4>
                    <p>{description}</p>
                    <h4>Famous Food for Country</h4>
                    <p>{food}</p>
                    <h4>Weather Conditions</h4>
                    <p>{weather} C</p>
                    <h4>Currency Exchange</h4>
                    <p>
                      1 {exCode} = {exRate} EGP
                    </p>
                  </div>

                  <button className="btn flex">
                    LEARN MORE <AiOutlineArrowRight className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Trip;

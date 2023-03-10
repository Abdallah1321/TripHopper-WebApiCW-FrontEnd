import React from "react";
import "./trip.css";

import {GrLocation} from 'react-icons/gr'
import {CgDetailsMore} from 'react-icons/cg'

import img from '../../assets/images/bali.jpg'

const Trip = () => {
  const Data = [
    {
      id: 1,
      imgSrc: img,
      destName: "Bali",
      location: "Indonesia",
      minPrice: "$40",
      maxPrice: "$200",
      description:
        "the famed Island of the Gods with its varied landscape of hills and mountains, rugged coastlines and sandy beaches, lush rice terraces, and volcanic hillsides all providing a picturesque backdrop to its colorful, deeply spiritual, and unique culture stakes a serious claim to be paradise on earth.",
    },
  ];

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Our most visited</h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destName, location, minPrice, maxPrice, description})=>{
            return(
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={img} alt={destName} />
                </div>

                <div className="cardData">
                  <h4 className="destName">{destName}</h4>
                  <span className="continent flex">
                    <GrLocation className="icon"/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="price">
                      <h5>{minPrice} - {maxPrice} /night</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    LEARN MORE <CgDetailsMore className="icon"/>
                  </button>
                </div> 
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default Trip;

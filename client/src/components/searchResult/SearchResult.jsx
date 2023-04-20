import React, { useEffect, useState } from "react";
import "./searchResult.css";

import { GrLocation } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate , useLocation} from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

import Aos from "aos";
import "aos/dist/aos.css";


const Trip = () => {
  const location = useLocation();

  const [data] = useState(location.state)

  console.log(data)

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/trips/1");
  };

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          This What You're Looking For?
        </h3>
      </div>

      
        <div className="secContent grid">
        { data.length === 0 ? <h4>No Trips Found</h4> :
          data?.map(
            ({
              _id,
              destName,
              location,
              nationality,
              imgSrc,
              description,
              budget,
              exCode,
            }) => {
              return (
                <div data-aos="fade-up" key={_id} className="singleDestination">
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
                        <h4>Budget</h4>
                        <h5>{budget} /day</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <h4>Details</h4>
                      <p>{description}</p>
                    </div>

                    <button onClick={handleSearch} className="btn flex">
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

import React, { useEffect, useState } from "react";
import "./trip.css";

import { GrLocation } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

import Aos from "aos";
import "aos/dist/aos.css";

const Trip = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data, loading, error } = useFetch(`${BASE_URL}/trips?page=${page}`);
  const { data: tripCount } = useFetch(`${BASE_URL}/trips/search/getTripCount`);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    const pages = Math.ceil(tripCount / 9);
    setPageCount(pages);
    window.scrollTo(0, 700);
  }, [page, tripCount]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/trips/1");
  };

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Our Most Visited
        </h3>
      </div>

      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}

      <div className="secContent grid">
        {!loading &&
          !error &&
          data.map(
            ({
              _id,
              destName,
              location,
              imgSrc,
              description,
              budget,
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

                    <Link to={`/trips/${_id}`}>
                      <button className="btn flex">
                        LEARN MORE <AiOutlineArrowRight className="icon" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            }
          )}
      </div>
      <div className="pagination">
        {[...Array(pageCount).keys()].map((number) => (
          <span
            key={number}
            onClick={() => setPage(number)}
            className={page === number ? "active_page" : ""}
          >
            {number + 1}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Trip;

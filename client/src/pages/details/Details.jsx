import Navbar from "../../components/navbar/Navbar";
import img1 from "../../assets/images/bali.jpg";
import { GrLocation } from "react-icons/gr";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import axios from "axios";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams();
  const [weather, setWeather] = useState("");
  const [food, setFood] = useState("");
  const [exchange, setExchange] = useState("");

  console.log(id);

  const { data, loading, error } = useFetch(`${BASE_URL}/trips/${id}`);

  const GetWeather = () => {
    useEffect(() => {
      axios({
        method: "GET",
        url: `${BASE_URL}/trips/${id}/getWeather`,
      })
        .then((response) => {
          console.log(response.data);
          setWeather(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  };

  const GetFood = () => {
    useEffect(() => {
      axios({
        method: "GET",
        url: `${BASE_URL}/trips/${id}/getFood`,
      })
        .then((response) => {
          console.log(response.data);
          setFood(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  };

  const GetExchange = () => {
    useEffect(() => {
      axios({
        method: "GET",
        url: `${BASE_URL}/trips/${id}/getExchange`,
      })
        .then((response) => {
          console.log(response.data);
          setExchange(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  };

  return (
    <div>
      <GetWeather />
      <GetFood />
      <GetExchange/>
      <Navbar />
      <section className="main container section">
        <div className="secTitle">
          <h3 className="title">Your Next Trip?</h3>
        </div>
        <div className="secContent">
          <div key={data._id} className="singleDestination">
            <div className="imageDiv">
              <img src={data.imgSrc} alt={data.destName} />
            </div>

            <div className="cardData">
              <h4 className="destName">{data.destName}</h4>
              <span className="continent flex">
                <GrLocation className="icon" />
                <span className="name">{data.location}</span>
              </span>

              <div className="fees flex">
                <div className="price">
                  <h4>Budget</h4>
                  <h5>{data.budget} LE /day</h5>
                </div>
                <div className="price">
                  <h4>Nationality</h4>
                  <h5>{data.nationality}</h5>
                </div>
              </div>
              <div className="desc">
                <h4>Details</h4>
                <p>{data.description}</p>
                <h4>Famous Food for Country</h4>
                <p>{food}</p>
                <h4>Avg weather for the next 14 days</h4>
                <p>{weather} &deg;C</p>
                <h4>Exchange Rate</h4>
                <p>1 {data.exCode} = {exchange} EGP</p>
              </div>

              <button className="btn flex">
                SAVE TRIP?
                <BsFillBookmarkFill className="icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;

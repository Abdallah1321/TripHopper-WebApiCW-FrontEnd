import Navbar from "../../components/navbar/Navbar";
import img1 from "../../assets/images/bali.jpg";
import { GrLocation } from "react-icons/gr";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, CLIENTID, SECRETKEY} from "../../utils/config";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import { getTime } from "date-fns";

const Details = () => {
  const { id } = useParams();
  const [weather, setWeather] = useState("");
  const [food, setFood] = useState("");
  const [exchange, setExchange] = useState("");
  const [oauthKey, setOauthKey] = useState(null);


  console.log(id);

  const { data, loading, error } = useFetch(`${BASE_URL}/trips/${id}`);

  const { date } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(date[0].endDate, date[0].startDate);

  useEffect(() => {
    const fetchOauthKey = async () => {
      try {
        const response = await fetch(`${BASE_URL}/oauth/key`, {
          headers: {
            clientId: CLIENTID,
            secret: SECRETKEY,
          },
        });

        const result = await response.json();
        setOauthKey(result.key);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOauthKey();
  }, []);

  const GetWeather = () => {

    useEffect(() => {
      axios({
        method: "GET",
        url: `${BASE_URL}/trips/${id}/getWeather`,
        headers: {
          key: oauthKey,
        },
      })
        .then((response) => {
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
        headers: {
          key: oauthKey,
        },
      })
        .then((response) => {
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
        headers: {
          key: oauthKey,
        },
      })
        .then((response) => {
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
      <GetExchange />
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
                  <h5>
                    {data.budget * days} LE ({days} nights){" "}
                  </h5>
                  <h4>Two-Way flight</h4>
                  <h5>{data.flights} LE /<small>per person</small></h5>
                  <h3>Average Daily Prices</h3>
                  <h4>Accomodation</h4>
                  <h5>{data.accomodation} LE</h5>
                  <h4>Transport</h4>
                  <h5>{data.transport} LE</h5>
                  <h4>Meals</h4>
                  <h5>{data.flights} LE</h5>
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
                <p>
                  1 {data.exCode} = {exchange} EGP
                </p>
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

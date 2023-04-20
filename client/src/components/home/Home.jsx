import React, { useEffect, useRef } from "react";
import "./home.css";
import video from "../../assets/videos/plane.mp4";
import img from "../../assets/images/header.avif";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { BASE_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleFocusChange = (focusedInput) => {
    setFocusedInput(focusedInput);
  };

  const locationRef = useRef("");
  const budgetRef = useRef(0);

  const navigate = useNavigate();

  const handleSearch = async () => {
    const location = locationRef.current.value;
    const budget = budgetRef.current.value;
    const res = await fetch(
      `${BASE_URL}/trips/search/getTripBySearch?location=${location}&budget=${budget}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();

    navigate(`/trips/search?location=${location}&budget=${budget}`, {
      state: result.data,
    });
  };

  return (
    <section className="home">
      <div className="overlay"></div>
      <img src={img} alt="" />
      <div className="content container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallTxt">
            Take the Leap. From Hops to Stops.
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Find Your Trip!
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="inputDest">
            <label htmlFor="city">Where do you want to go?</label>
            <div className="input flex">
              <input type="text" placeholder="Enter destination..." ref={locationRef}/>
              <MdOutlineLocationOn className="icon" />
            </div>
          </div>

          <div className="inputDate">
            <label htmlFor="date">When do you want to go?</label>
            <div className="input flex">
              <DateRangePicker
                startDate={startDate}
                startDateId="start_date_id"
                endDate={endDate}
                endDateId="end_date_id"
                onDatesChange={handleDatesChange}
                focusedInput={focusedInput}
                onFocusChange={handleFocusChange}
                displayFormat="MMM D, YYYY"
                numberOfMonths={2}
                hideKeyboardShortcutsPanel={true}
                customArrowIcon="->"
                anchorDirection="right"
                showClearDates={true}
                showDefaultInputIcon={true}
                inputIconPosition="after"
                small={true}
                block={false}
                withFullScreenPortal={false}
                verticalSpacing={10}
                noBorder={true}
                keepOpenOnDateSelect={false}
              />
            </div>
          </div>

          <div className="inputPrice">
            <div className="label_total flex">
              <label htmlFor="price">What is your budget? (EGP)</label>
              <h3 className="total"></h3>
            </div>
            <div className="input flex">
              <input type="number" max="100000" min="1000" placeholder="1000" ref={budgetRef} />
            </div>
          </div>

          <div className="searchFilters flex">
            <AiOutlineSearch className="icon" />
            <span onClick={handleSearch}>Find Your Trip!</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <BsFacebook className="icon" />
            <BsInstagram className="icon" />
            <BsTwitter className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import "./home.css";
import video from "../../assets/videos/plane.mp4";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { useState } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const Home = () => {
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

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="content container">
        <div className="textDiv">
          <span className="smallTxt">Take the Leap. From Hops to Stops.</span>
          <h1 className="homeTitle">Find Your Trip!</h1>
        </div>

        <div className="cardDiv grid">
          <div className="inputDest">
            <label htmlFor="city">Where do you want to go?</label>
            <div className="input flex">
              <input type="text" placeholder="Enter destination..." />
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
              <label htmlFor="price">What is your budget?</label>
              <h3 className="total">EGP 100,000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="100000" min="1000" />
            </div>
          </div>

          <div className="searchFilters flex">
            <FaFilter className="icon" />
            <span>More Filters</span>
          </div>
        </div>

        <div className="homeFooterIcons flex">
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

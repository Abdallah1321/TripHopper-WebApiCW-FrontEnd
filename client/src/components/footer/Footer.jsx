import React from "react";
import "./footer.css";
import video from "../../assets/videos/beach.mp4";
import logo from "../../assets/images/logo.png";
import { IoIosSend } from "react-icons/io";
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {FaFacebook} from "react-icons/fa"

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoplay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>STAY IN TOUCH</small>
            <h2>Plan Your Trips With Us</h2>
          </div>

          <div className="inputDiv">
            <input type="text" placeholder="Enter Email" />
            <button className="btn flex" type="submit">
              SEND <IoIosSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <img src={logo} alt="" className="resize" />
              </a>
            </div>

            <div className="footerText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod
              nulla, aliquam quidem alias repellendus ratione doloribus,
              reiciendis corrupti asperiores dolor hic magni expedita! Ipsam
              reiciendis ipsum magni deserunt illo?
            </div>

            <div className="footerSocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiOutlineInstagram className="icon"/>
              <FaFacebook className="icon"/>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Footer;

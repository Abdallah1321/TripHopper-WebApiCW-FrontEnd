import './hero.css'
import img from "../../assets/images/landingpage.jpg";

const Hero = () => {
  return (
    <>
        <div className="hero">
            <img src={img} alt="LandingPageImg" />

            <div className="hero-text">
                <h1>Take the Leap. From Hops to Stops.</h1>
                <p>Find Your Favourite Trip.</p>
                <a href="/trips">
                    Trip plans
                </a>
            </div>
        </div>
    </>
  )
}

export default Hero
import Navbar from "../../components/navbar/Navbar";
import img1 from "../../assets/images/bali.jpg";
import { GrLocation } from "react-icons/gr";
import { BsFillBookmarkFill } from "react-icons/bs";

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
];

const Details = () => {
  function handleSave() {
    setItinerary((prevItinerary) => [...prevItinerary, trip]);
  }
  return (
    <div>
      <Navbar />
      <section className="main container section">
        <div className="secTitle">
          <h3 className="title">Your Next Trip?</h3>
        </div>
        <div className="secContent">
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
                <div key={id} className="singleDestination">
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

                    <button onClick={handleSave} className="btn flex">
                      SAVE TRIP?
                      <BsFillBookmarkFill className="icon" />
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
};

export default Details;
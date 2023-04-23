import Navbar from "../../components/navbar/Navbar";
import img1 from "../../assets/images/bali.jpg";
import { GrLocation } from "react-icons/gr";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const Details = () => {
  const { id } = useParams();

  console.log(id);

  const { data, loading, error } = useFetch(`${BASE_URL}/trips/${id}`);
  console.log(data);

  return (
    <div>
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
                <p>TO BE ADDED</p>
                <h4>Weather</h4>
                <p>TO BE ADDED</p>
                <p>1 {data.exCode} = EGP</p>
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

import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const MemberCard = ({ card }) => {
  return (
    <div className="rounded-md border-2 group overflow-hidden shadow-lg bg-white">
      <img
        src={card?.profile_image}
        alt="Profile"
        className="w-full rounded-t-md group-hover:scale-105 duration-300 h-60 overflow-hidden"
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">
          Biodata id: {card?.biodata_id}
        </h2>
        <p className="text-gray-700 text-base">Gender: {card?.biodata_type}</p>
        <p className="text-gray-700 text-base">Age: {card?.age}</p>
        <p className="text-gray-700 text-base">
          Occupation: {card?.occupation}
        </p>
        <p className="text-gray-700 text-base">
          Division: {card?.permanent_division_name}
        </p>
        <Link to={`/detailsPage/${card?._id}`} className="w-full">
          <AwesomeButton
            style={{ marginTop: "10px" }}
            type="primary"
            className="w-full"
          >
            View Profile
          </AwesomeButton>
        </Link>
      </div>
    </div>
  );
};
// PropTypes validation
MemberCard.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    profile_image: PropTypes.string,
    biodata_id: PropTypes.string,
    biodata_type: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    occupation: PropTypes.string,
    permanent_division_name: PropTypes.string,
  }).isRequired,
};

export default MemberCard;

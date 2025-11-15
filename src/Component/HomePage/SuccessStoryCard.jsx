import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";

const SuccessStoryCard = ({ cardInfo }) => {
  const { coupleImage, marriageDate, successStoryText } = cardInfo;
  const reviewStar = Number(cardInfo.reviewStar) || 0;
  return (
    <div className="p-4   border-2  rounded-2xl hover:shadow-lg  flex flex-col items-center">
      <img
        src={coupleImage}
        className="shadow w-full h-60 rounded-lg overflow-hidden border"
      />
      <div className="mt-8">
        <ReactStars
          count={5}
          value={reviewStar}
          activeColor="#FFD700"
          size={24}
          edit={false}
        />
        <h4 className="font-bold text-lg"> Marriage Date : {marriageDate}</h4>
        <p className="mt-2 text-gray-600">{successStoryText}</p>
      </div>
    </div>
  );
};
SuccessStoryCard.propTypes = {
  cardInfo: PropTypes.shape({
    coupleImage: PropTypes.string.isRequired,
    marriageDate: PropTypes.string.isRequired,
    reviewStar: PropTypes.number.isRequired,
    successStoryText: PropTypes.string.isRequired,
  }).isRequired,
};

export default SuccessStoryCard;

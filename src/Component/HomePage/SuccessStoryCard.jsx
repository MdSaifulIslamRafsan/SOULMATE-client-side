import ReactStars from 'react-rating-stars-component';

const SuccessStoryCard = ({cardInfo}) => {
    const {coupleImage , marriageDate ,  reviewStar , successStoryText } = cardInfo;
  return (
    <div className="p-4 mb-20 max-w-md border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
      <img
        src={coupleImage}
        className="shadow w-full h-40 rounded-lg overflow-hidden border"
      />
      <div className="mt-8">
            <ReactStars
                count={5}
                value={reviewStar}
                size={24}
                activeColor="blue"
                edit={false}
            />
        <h4 className="font-bold text-lg"> Marriage Date : {marriageDate}</h4>
        <p className="mt-2 text-gray-600">
          {successStoryText}
        </p>
      </div>
    </div>
  );
};

export default SuccessStoryCard;

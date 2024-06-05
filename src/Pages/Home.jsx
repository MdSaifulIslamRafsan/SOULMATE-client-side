import Carousel from "../Component/HomePage/Carousel";
import PremiumMember from "../Component/HomePage/PremiumMember";
import SuccessInfo from "../Component/HomePage/SuccessInfo";
import SuccessStory from "../Component/HomePage/SuccessStory";


const Home = () => {
    return (
        <>
            <Carousel></Carousel>
            <PremiumMember></PremiumMember>
            {/* <SuccessInfo></SuccessInfo> */}
            <SuccessStory></SuccessStory>
        </>
    );
};

export default Home;
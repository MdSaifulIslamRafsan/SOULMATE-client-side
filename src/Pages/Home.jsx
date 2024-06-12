import { Helmet } from "react-helmet";
import Carousel from "../Component/HomePage/Carousel";
import HowItWork from "../Component/HomePage/HowItWork";
import PremiumMember from "../Component/HomePage/PremiumMember";
import SuccessInfo from "../Component/HomePage/SuccessInfo";
import SuccessStory from "../Component/HomePage/SuccessStory";


const Home = () => {
    return (
        <>
         <Helmet>
      <meta charSet="utf-8" />
      <title>SOULMATE || Home page</title>
    </Helmet>
            <Carousel></Carousel>
            <PremiumMember></PremiumMember>
            <HowItWork></HowItWork>
            <SuccessInfo></SuccessInfo>
            <SuccessStory></SuccessStory>
        </>
    );
};

export default Home;
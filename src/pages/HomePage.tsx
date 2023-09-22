import AudioCard from "components/card/AudioCard";
import Header from "components/common/layout/podHeader/Header";

import ImageSliderContainer from "components/imageSliderContainer/ImageSliderContainer";
import LoadingImageContainer from "components/loadingImageContainer/LoadingImageContainer";



const HomePage = () => {
    return (
        <>
            <Header />
            <ImageSliderContainer/>
            <LoadingImageContainer />
            <AudioCard/>
        </>
    )
}

export default HomePage;
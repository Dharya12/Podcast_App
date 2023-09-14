import Header from "components/common/layout/podHeader/Header";
import AudioCard from "components/card/AudioCard"
import ImageSliderContainer from "components/imageSliderContainer/ImageSliderContainer";

const HomePage = () => {
    return (
        <>
            <Header />
            <ImageSliderContainer/>
            <AudioCard />
        </>
    )
}

export default HomePage;
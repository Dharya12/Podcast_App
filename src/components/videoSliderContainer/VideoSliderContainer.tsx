import { Swiper, SwiperSlide } from "swiper/react";
import { Const_Video_Image_Data } from "constant/VideoImageData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'components/imageSliderContainer/style/style.css'
import {Box, Button} from "@mui/material";
import { useSelector } from "react-redux";
import { useCallback,useRef,useState} from "react";
import { Mousewheel, Keyboard ,Pagination ,Navigation ,EffectCoverflow} from "swiper/modules";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {Card, CardMedia, Modal} from "@mui/material";

import './style/style.css';
import { RootState } from "services/redux/store/Store";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function VideoSliderContainer(props) {
    
    const selectItemIndex = useSelector((state : RootState) => state.Podcast.id);
    
    const [sliderIndex , updateSliderIndex] = useState(0) ; 
    const selectedItems  = Const_Video_Image_Data.slice(selectItemIndex);
    const videoRef = useRef(null);

    const handleSliderIndex = useCallback((swiper) : void=>{
        updateSliderIndex(swiper.realIndex);
    },[]);

  return (
    <Grid2>
        <Grid2 xs={12} sx={{p:2 ,  background:"black"}}>
            <Modal
                open={props.openModals}
                onClose={props.closeModal}
                sx={{ border : 'hidden'}}
            
            >
                <Box sx={{ ...style,width : "100%" , height : '100%' , bgcolor: "black"}}>

                    <Button sx={{m:2}} variant="contained"    onClick={()=>{props.closeModal() ; updateSliderIndex(0)}}>Close</Button>
                    <Swiper
                        effect= {'coverflow'}
                        centeredSlides={true}
                        coverflowEffect={{
                            rotate: 0, 
                            stretch: 0, 
                            depth: 240, 
                            modifier: 2, 
                            slideShadows: true 
                        }}
                        slidesPerView={4}
                        pagination={false}
                        navigation={true}
                        modules={[Mousewheel, Keyboard , Pagination ,Navigation,EffectCoverflow]}
                        className="mySwiper"
                        onSlideChange={(swiper)=>handleSliderIndex(swiper)}
                    >
                        {
                            selectedItems.map((item , index : number)=>{
                                return(
                                    <Card sx={{ backgroundColor: "white"}}>
                                        <CardMedia>
                                            <SwiperSlide >
                                                <video key={item.id} width="230" height="360" style={{marginTop : "60px"}} src={item.videoUrl} controls={(sliderIndex === index) ? true : false} autoPlay={(sliderIndex === index) ? true : false} controlsList="nodownload"  onContextMenu={(e)=> e.preventDefault()}  ref={videoRef}></video>
                                            </SwiperSlide>
                                        </CardMedia>
                                    </Card>
                                )
                            })
                        }
                    </Swiper>
                </Box>
            </Modal>
        </Grid2>  
    </Grid2>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Const_Video_Image_Data } from "constant/VideoImageData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback , useState } from "react";
import { useDispatch } from "react-redux";
import 'components/imageSliderContainer/style/style.css'
import { Mousewheel, Keyboard } from "swiper/modules";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import VideoSliderContainer from "components/videoSliderContainer/VideoSliderContainer";
import { addItemId } from "services/redux/slice/Slice";

export default function ImageSliderContainer() {
    const [openModal , setOpenModal] = useState(false) ; 
    const [isActive , setIsActive] = useState(true);
    const dispatch = useDispatch();

    const handleOpen = useCallback(()=>{
        setOpenModal(true);
            
    } ,[]);

    const handleClose = useCallback(()=>{
            setOpenModal(false);     
    },[]);

    const handleStatus = useCallback(()=>{
        setIsActive(false)
    },[]);
  return (
    <Grid2>
        <Grid2 xs={12} sx={{ pl:2, pt:2}}>
            <Swiper
                cssMode={true}
                slidesPerView={8}
                modules={[Mousewheel, Keyboard]}
            >
                {
                    Const_Video_Image_Data.map((item , index: number)=>{
                        return( 
                            <SwiperSlide >    
                                <img key={index} src={item.imageUrl} onClick={()=>{dispatch(addItemId(index)); handleStatus(); handleOpen() ;}}  style={{padding: "3px",border : isActive ? '3px solid grey' : '3px solid grey'}}></img>    
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <VideoSliderContainer  openModals= {openModal}  closeModal= {handleClose}/>
        </Grid2> 
    </Grid2>
  );
}

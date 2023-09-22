import { useState, useEffect, useRef } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import debounce from 'lodash/debounce';
import axios from 'axios';
import { Box} from '@mui/material';

const LoadingImageContainer = () => {
  const [images, setImages] = useState <string[]> ();
  const [loadingImages, setLoadingImages] = useState <number> (20);
  const observerRef = useRef <IntersectionObserver | null> (null);
  const targetRef = useRef <HTMLDivElement> (null);
  useEffect(() => {
    const targetElement = targetRef.current ;
    const imagesData : string[] = [];
    axios.get(`https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=${loadingImages}`).then((response) =>(response.data.photos.map((element: { url: string })=>
      {
        imagesData.push(element.url);
        setImages(imagesData);
      })
    ));
    const handleIntersection : IntersectionObserverCallback = ((entries) => {
      entries?.map((entry) => {  
        if (entry!.isIntersecting) {
          window.addEventListener("scroll", (handleScroll));
          // console.log(targetRef.current?.scrollTop);
        } 
      });
    });
    const handleScroll = debounce(() => {    
      setLoadingImages((prev) =>Math.min(prev + 20, 100)); 
    }, 1000);
    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5, 
    };
    if(!observerRef.current)
    {
      observerRef.current  = new IntersectionObserver(handleIntersection , options);
    }

    // Observe the last image  in the list
    if (loadingImages < 100) {
      if (targetRef.current) {
        observerRef.current.observe(targetRef.current);
      }
    }

    return () => {
      if (observerRef.current) {
        
        observerRef.current.disconnect();
        targetElement?.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loadingImages]);

  const ImageList = () =>{
    return(
      <Box>
        {
          images?.map((image, index) =>
          {
            return(
              <img style={{padding : "10px" , width :"250px"}} src={image} alt={`Image ${index + 1}`} key={index} id={`image-${index + 1}`}/>
            )
          
          })
        }
      </Box>
    )
  }

  return (
    <Grid2 className="image-list" >
        <Grid2 xs={12} ref = {targetRef} className="image-container" sx={{ display : 'flex', justifyContent : 'center' , flexWrap : 'wrap' , }}>
            <ImageList />
        </Grid2>
    </Grid2>
  );
};
export default LoadingImageContainer;
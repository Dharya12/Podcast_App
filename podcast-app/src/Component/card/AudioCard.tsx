import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Const_Pod_Cast_Data} from '../../constant/PodCastData.ts';
import { Typography } from '@mui/material';
import { AspectRatio } from '@mui/joy';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { getItemDetails } from '../../services/redux/slice/Slice';
import { Link } from 'react-router-dom';
const AudioCard = () => {
    console.log("Audio data is  : ", Const_Pod_Cast_Data);
    const dispatch = useDispatch();
    return (
        <Grid container sx={{ display: 'flex' }}>
            <Grid xs={9} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "center", bgcolor: '#121212', pl: 6, pt: 4, pb: 4, overflowY: 'scroll', height: "620px" }}>
                {
                    Const_Pod_Cast_Data.map((item, index: number) => {
                        return (
                            <Card sx={{ width: 200, ml: 3, mt: 3 }} key={index} onClick={() => { dispatch(getItemDetails(item)) }}>
                                <Link to="/podcast" style={{ textDecoration: 'none' }}>
                                    <AspectRatio ratio="1" >
                                        <CardMedia
                                            image={item.image}
                                            title={item.title}
                                        />
                                    </AspectRatio>

                                    <CardContent sx={{ bgcolor: 'black', color: 'white' }}>
                                        <Typography variant='h5'>{item.title}</Typography>
                                    </CardContent>
                                </Link>
                            </Card>
                        )
                    })
                }
            </Grid>
            <Grid xs={3} sx={{ height: "auto", }}>
            </Grid>
        </Grid>
    );
}
export default AudioCard;
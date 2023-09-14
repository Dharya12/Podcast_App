import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

const Header = () => {
    return(
        <Grid container>
            <Grid xs={12} sx={{color : 'white' , pt:2 , pb: 2 , pl:4 , bgcolor:"#347961" , mb:"1px" ,opacity:'0.9'}}>
                <Typography variant="h3">Video Player</Typography>
            </Grid>
        </Grid>
    ) 
}

export default Header;
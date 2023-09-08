import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import React from "react";

const Header :React.FC = () => {
    return(
        <Grid container>
            <Grid xs={12} sx={{color : 'white' , pt:2 , pb: 2 , pl:4 , bgcolor:"#347961" , mb:"1px" ,opacity:'0.9'}}>
                <Typography variant="h3">PodCasts</Typography>
            </Grid>
        </Grid>
    ) 
}

export default Header;
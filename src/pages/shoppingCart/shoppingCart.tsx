import { Grid, Typography } from "@mui/material"

function ShoppingCart(){
    return(
        <>
            <Grid container pl={7} pr={7} pt={2} pb={2}>
                <Grid item md={8} xs={12}  p={1}>
                    <Grid>
                        <Typography variant="h5" color="initial">Flores</Typography>
                    </Grid>
                    <Grid>

                    </Grid>
                </Grid>
                <Grid item md={4} xs={12} sx={{backgroundColor:'blue'}} p={1}>
                    b
                </Grid>
            </Grid>
        </>
    )
}


export default ShoppingCart
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import Logo from '../assets/LOGO.webp'


function Footer(){
    return(
        <Box
        component="footer"
        sx={{
            backgroundColor: '#dbb2da',
            padding:'20px',
            marginTop:'5px'
            }}
        >
            <Container maxWidth="lg">
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{width:'100px', margin:'15px'}}
                    />
                    <Typography variant="body2" color="text.secondary">
                    En Daisys Garden encuentra una gran variedad de diseños florales para eventos y toda ocasión.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} style={{justifyContent:'center'}}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Contactanos
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Mitras Centro
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Email: info@example.com
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Phone: +963 937 715 637
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                    Siguenos
                </Typography>
                <Link href="https://www.facebook.com/" color="inherit">
                    <Facebook />
                </Link>
                <Link
                    href="https://www.instagram.com/"
                    color="inherit"
                    sx={{ pl: 1, pr: 1 }}
                >
                    <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" color="inherit">
                    <Twitter />
                </Link>
                </Grid>
            </Grid>
            <Box mt={5}>
                <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="https://your-website.com/">
                    FloreriaDaysis.com
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
                </Typography>
            </Box>
            </Container>
        </Box>
    )
}

export default Footer
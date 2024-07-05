import { Box, Button, Container, Grid } from "@mui/material";
import {useNavigate} from "react-router-dom";
import backgroundImage from "../assets/images/beABarista.png";

export const HomePage = () => {

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }
 
    return (
        <Container sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize : "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundPosition: "center",
            }}>
            <Box 
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            minHeight="100vh"
            >
                <Grid container spacing={12} justifyContent="center" mt={10}>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={()=>handleNavigation("/page1")}>
                            Fruit To Cup
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={()=>handleNavigation("/page2")}>
                            History Of Coffee
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={()=>handleNavigation("/page3")}>
                            Benefits Of Coffee
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={()=>handleNavigation("/page4")}>
                            Types Of Coffee
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={()=>handleNavigation("/page5")}>
                            Test Your Barista Skills
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
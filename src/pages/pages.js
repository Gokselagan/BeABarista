import { Box, Button, Container, Grid } from "@mui/material";
import {useNavigate} from "react-router-dom";

export const Pages = () => {

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }
 
    return (
        <Container sx={{
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
                        <Button variant="contained" color="primary" onClick={()=>handleNavigation("/pages/fruittocup")}>
                            Fruit To Cup
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={()=>handleNavigation("/pages/historyofcoffee")}>
                            History Of Coffee
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={()=>handleNavigation("/pages/benefitsofcoffee")}>
                            Benefits Of Coffee
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={()=>handleNavigation("/pages/typesofcoffee")}>
                            Types Of Coffee
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={()=>handleNavigation("/pages/test")}>
                            Test Your Barista Skills
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
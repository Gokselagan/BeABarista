import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import baristaAnimation from "../assets/animations/baristaAnimtion.json";
import Lottie from "lottie-react";


export const Homepage = () => {

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    }

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <Lottie animationData={baristaAnimation} style={{width:"400px", height:"400px"}} />
            <Typography>  The easiest way to become a BARISTA</Typography>
            <Button onClick={() => handleNavigation("/pages")}>Let's Start</Button >
        </div>
    )
}
import { Typography, Box } from "@mui/material";
import coffeeFruitImg from "../../assets/images/coffeeFruit.jpg";
import coffeeFlower from "../../assets/images/coffeeFlower.jpg";
import flowerToPlant from "../../assets/images/flowerToPlant.png";
import arabicaRobusta from "../../assets/images/arabicaRobusta.png";

export const FruitToCup = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h1>Fruit To Cup</h1>

            <img src={coffeeFruitImg} alt="fruit to bean images" width="60%" style={{ margin: "0px auto" }} />

            <Box textAlign="left">
                <Typography variant="h4">
                    What is a coffee plant?
                </Typography>

                <Typography variant="body1">
                    Coffee is a tree belonging to the genus Coffea in the Rubiaceae family.
                </Typography>

                <Box >
                    <ul style={{ lineHeight: "20px", textAlign: "left" }}>
                        <li>It grows in semi-tropical climates.</li>
                        <li>The average temperature should be 15-20c.</li>
                        <li>It grows at altitudes of 0-2500m.</li>
                        <li>The most common types are <strong>ARABICA</strong> and <strong>ROBUSTA</strong>.</li>
                    </ul>
                </Box>
            </Box>

            <Box>
                <img src={coffeeFlower} alt="coffee flower image" />
            </Box>

            <Box display="flex" flexDirection="column" margin="16px auto">
                <Typography variant="h4">From Flower to Coffee Plant The Production Process</Typography>

                <img alt="flower to plant images" src={flowerToPlant} style={{ marginTop: "16px" }} />
            </Box>

            <Box textAlign="start">
                <Typography >What Are the Differences Between Coffee Varieties?</Typography>
                <Typography >ARABICA</Typography>
                <ul>
                    <li>2/3 of the world's production</li>
                    <li>Grows at altitudes of 600 to 2500 meters</li>
                    <li>15° to 24°C</li>
                    <li>Bears fruit for 7 to 9 months of the year</li>
                    <li>Small flowers</li>
                    <li>Trunk has an "S" shaped groove</li>
                    <li>Caffeine content ranges from 0.9% to 1.7%</li>
                    <li>Oval-shaped body</li>
                    <li>Rich and pleasant aroma</li>
                    <li>Good balance of bitterness and acidity</li>
                </ul>

                <img alt="arabica and robusta coffee bean" src={arabicaRobusta} width="40%"  />

                <Typography>ROBUSTA</Typography>
                <ul>
                    <li>1/3 of the world's production</li>
                    <li>Grows at altitudes of 0 to 800 meters</li>
                    <li>18° to 36°C</li>
                    <li>Bears fruit for 9 to 11 months of the year</li>
                    <li>Large flowers</li>
                    <li>Trunk has a straight groove</li>
                    <li>Caffeine content ranges from 1.8% to 4.0%</li>
                    <li>Round-shaped body</li>
                    <li>Woody and earthy aroma</li>
                    <li>Aggressive bitter taste</li>
                </ul>

            </Box>
        </div>
    )
}
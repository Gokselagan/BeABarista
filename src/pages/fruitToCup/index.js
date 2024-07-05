import { Typography } from "@mui/material";
import coffeeFruitImg from "../../assets/images/coffeeFruit.jpg";
import coffeeFlower from "../../assets/images/coffeeFlower.jpg";

export const FruitToCup = () => {
    return(
        <div style={{display:"flex", flexDirection:"column", gap:"20px", alignItems:"center"}}>
            <h1>Fruit To Cup</h1>

            <img src={coffeeFruitImg} alt="fruit to bean images" width="60%" />

            <Typography variant="h4">
            What is a coffee plant?
            </Typography>

            <Typography variant="body1">
            Coffee is a tree belonging to the genus Coffea in the Rubiaceae family.
            </Typography>

            <ul style={{lineHeight:"20px", textAlign:"left"}}>
                <li>It grows in semi-tropical climates.</li>
                <li>The average temperature should be 15-20c.</li>
                <li>It grows at altitudes of 0-2500m.</li>
                <li>The most common types are <strong>ARABICA</strong> and <strong>ROBUSTA</strong>.</li>
            </ul>

            <img src={coffeeFlower} alt="coffee flower image" width="90%" style={{borderRadius:"10%"}} />

        </div>
    )
}
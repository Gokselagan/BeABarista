import { Typography, Box } from "@mui/material";
import coffeeFruitImg from "../../assets/images/coffeeFruit.jpg";
import coffeeFlower from "../../assets/images/coffeeFlower.jpg";
import flowerToPlant from "../../assets/images/flowerToPlant.png";
import arabicaRobusta from "../../assets/images/arabicaRobusta.png";
import coffeeDry from "../../assets/images/coffee-dry.png";
import plantingCofee from "../../assets/images/planting-coffee.png";
import handPickingCoffee from "../../assets/images/handPickingCoffee.png";
import strippingCoffeeBean from "../../assets/images/strippingcoffeebean.png";
import coffeeHarvestingMachine from "../../assets/images/harvestingMachine.png";
import dryCoffeeBean from "../../assets/images/coffeeDry.png";
import coffeeWashing from "../../assets/images/washingCoffee.png";
import gummyCoffeeBean from "../../assets/images/gummycoffeebean.png";
import moisturizingCoffee from "../../assets/images/moisturizingprocess.png";
import dryBeans from "../../assets/images/drybeans.png";

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

                <img alt="arabica and robusta coffee bean" src={arabicaRobusta} width="40%" />

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

            <Box>
                <Typography variant="h4">How are the planting and harvesting processes carried out?</Typography>
                <Box display="flex" flexDirection="row" justifyContent="space-between" padding="70px" overflow="hidden" >
                    <img alt="coffee drying image" src={coffeeDry} width="500px" height="500px" />
                    <img alt="coffee planting image" src={plantingCofee} width="500px" height="500px" />
                </Box>

                <Box textAlign="start">
                    <ul>
                        <li>They are cultivated through grafting or planting methods. Saplings grown in nurseries for a year are then planted on slopes.</li>
                        <li>The cultivated saplings start bearing fruit after 3 years and continue to do so for 15 years.</li>
                        <li>Coffee plants can grow up to 4-5 meters, but in plantations, the plant heights are limited to 2-3 meters. This makes harvesting easier. Each plant can yield 6 kg of fruit, from which an average of 1 kg of green coffee is obtained.</li>
                    </ul>
                </Box>

            </Box>

            <Box>
                <Typography variant="h4">
                    What Is The Hand-Picking Method?
                </Typography>
                <Typography variant="body1" paragraph>In this system, the picker harvests the fruits individually, selecting only those that have reached the correct ripeness. This method is costly, but it yields the highest quality.</Typography>
                <img alt="coffee hand picking image" src={handPickingCoffee} />
            </Box>

            <Box>
                <Typography variant="h4">
                    What is the Stripping Method?
                </Typography>
                <Typography variant="body1" paragraph>All the fruits on the branch are stripped off and collected. The stripping method is preferred more often due to its lower cost. However, the quality of the harvest is lower compared to the hand-picking method.</Typography>
                <img alt="stripping coffee bean" src={strippingCoffeeBean} />
            </Box>

            <Box>
                <Typography variant="h4">What is the Machine Harvesting Method?</Typography>
                <Typography variant="body1" paragraph>In this method, the ripeness level of the fruit is not considered very important.</Typography>
                <img alt="coffee harvesting machine" src={coffeeHarvestingMachine} />
            </Box>

            <Box>
                <Typography variant="h4">How is Green Coffee Processed?</Typography>
                <Typography variant="h5">1) Natural (Dry) Method</Typography>
                <Typography variant="body1" paragraph>The fruits are spread out in layers 3-4 cm thick. They are regularly stirred up to 22 times a day.
                    The coffee fruits are dried in greenhouses at temperatures up to 45°C.
                    This process helps transfer the sugar from the fruit to the green beans.</Typography>
                <img alt="a woman spreads coffee beans" src={dryCoffeeBean} />

                <Typography variant="h5">2) Washing (Wet) Method</Typography>
                <Typography variant="body1" paragraph>Coffee cherries and other foreign particles are washed with water to separate them, ensuring that only the correct beans are selected. The pulp and outer layers are removed from the beans.</Typography>

                <img alt="a men washing coffee beans" src={coffeeWashing} />



            </Box>

            <Box>
                <Typography variant="h4">Gummy Layer in Coffee</Typography>
                <img alt="gummy layer in coffee" src={gummyCoffeeBean} />
                <Typography variant="h4">How is the Washing and Moisturizing Process Done?</Typography>
                <Typography variant="body1" paragraph>After being sorted, the beans covered with a gummy substance are placed in fermentation tanks. They are left there for 16 to 72 hours.</Typography>
                <img alt="moisturizing process of coffee" src={moisturizingCoffee} />
                <Typography variant="body1" paragraph>To remove the gum-like sticky substance on the coffee beans, each kilogram is washed in 10-12 liters of water.
                    To complete this operation, the beans are spread in layers 3-4 cm thick and undergo a final drying process in the greenhouse.<strong>This process enhances the flavor quality and adds taste to the coffee.</strong></Typography>
                <Typography variant="h4">How is the Drying Process Done?</Typography>
                <img alt="dry coffee beans" src={dryBeans} />
                <Typography variant="body1" paragraph>After the coffee beans undergo the above processing methods, they need to be dried.
                    They are placed on concrete patios, raised beds, sun-drying beds, or in mechanical dryers and dried until the moisture content decreases to approximately 10-12%.
                    After drying, the beans are sent to a dry mill. In the dry mill, the dried beans are separated from the final husk layer, classified by size, density, and color, and defective beans are removed. Therefore, the dry mill plays a crucial role in ensuring that the green coffee obtained is of the highest quality.</Typography>
            </Box>
        </div>
    )
}
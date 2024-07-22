import { Typography, Box, Container, Divider } from "@mui/material";
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
        <Container maxWidth="md" style={{ padding: "20px" }}>
            <Typography variant="h2" align="center" gutterBottom>
                Fruit To Cup
            </Typography>

            <Box mb={4}>
                <img
                    src={coffeeFruitImg}
                    alt="fruit to bean images"
                    style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                />
            </Box>

            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    What is a Coffee Plant?
                </Typography>
                <Typography variant="body1" paragraph>
                    Coffee is a tree belonging to the genus Coffea in the Rubiaceae family.
                </Typography>
                <ul style={{ lineHeight: "1.6", textAlign: "left" }}>
                    <li>It grows in semi-tropical climates.</li>
                    <li>The average temperature should be 15-20°C.</li>
                    <li>It grows at altitudes of 0-2500m.</li>
                    <li>The most common types are <strong>ARABICA</strong> and <strong>ROBUSTA</strong>.</li>
                </ul>
            </Box>

            <Box mb={4} textAlign="center">
                <img src={coffeeFlower} alt="coffee flower image" style={{ width: "80%", borderRadius: "8px" }} />
            </Box>

            <Divider />

            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    From Flower to Coffee Plant: The Production Process
                </Typography>
                <Box textAlign="center" mb={2}>
                    <img
                        alt="flower to plant images"
                        src={flowerToPlant}
                        style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                    />
                </Box>
            </Box>

            <Divider />

            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Differences Between Coffee Varieties
                </Typography>

                <Typography variant="h5" gutterBottom>ARABICA</Typography>
                <ul style={{ lineHeight: "1.6", textAlign: "left" }}>
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

                <Box textAlign="center" mb={2}>
                    <img
                        alt="arabica and robusta coffee bean"
                        src={arabicaRobusta}
                        style={{ width: "80%", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                    />
                </Box>

                <Typography variant="h5" gutterBottom>ROBUSTA</Typography>
                <ul style={{ lineHeight: "1.6", textAlign: "left" }}>
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

            <Divider />

            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Planting and Harvesting Processes
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap">
                    <Box width="48%">
                        <img
                            alt="coffee drying image"
                            src={coffeeDry}
                            style={{ width: "100%", height: "auto", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                        />
                    </Box>
                    <Box width="48%">
                        <img
                            alt="coffee planting image"
                            src={plantingCofee}
                            style={{ width: "100%", height: "auto", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                        />
                    </Box>
                </Box>
                <Box style={{textAlign:"left"}}>
                    <Typography variant="body1" paragraph>
                        They are cultivated through grafting or planting methods. Saplings grown in nurseries for a year are then planted on slopes.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The cultivated saplings start bearing fruit after 3 years and continue to do so for 15 years.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Coffee plants can grow up to 4-5 meters, but in plantations, the plant heights are limited to 2-3 meters. This makes harvesting easier. Each plant can yield 6 kg of fruit, from which an average of 1 kg of green coffee is obtained.
                    </Typography>
                </Box>
            </Box>

            <Divider />

            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Hand-Picking Method
                </Typography>
                <Typography variant="body1" paragraph>
                    In this system, the picker harvests the fruits individually, selecting only those that have reached the correct ripeness. This method is costly, but it yields the highest quality.
                </Typography>
                <Box textAlign="center" mb={2}>
                    <img
                        alt="coffee hand picking image"
                        src={handPickingCoffee}
                        style={{ width: "80%", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                    />
                </Box>
            </Box>

            <Divider />

            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Stripping Method
                </Typography>
                <Typography variant="body1" paragraph>
                    All the fruits on the branch are stripped off and collected. The stripping method is preferred more often due to its lower cost. However, the quality of the harvest is lower compared to the hand-picking method.
                </Typography>
                <Box textAlign="center" mb={2}>
                    <img
                        alt="stripping coffee bean"
                        src={strippingCoffeeBean}
                        style={{ width: "80%", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                    />
                </Box>
            </Box>

            <Divider />

            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Machine Harvesting Method
                </Typography>
                <Typography variant="body1" paragraph>
                    In this method, the ripeness level of the fruit is not considered very important.
                </Typography>
                <Box textAlign="center" mb={2}>
                    <img
                        alt="coffee harvesting machine"
                        src={coffeeHarvestingMachine}
                        style={{ width: "80%", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                    />
                </Box>
            </Box>

            <Divider />

            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Coffee Processing
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap">
                    <Box width="48%">
                        <img
                            alt="dry coffee beans"
                            src={dryCoffeeBean}
                            style={{ width: "100%", height: "auto", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                        />
                    </Box>
                    <Box width="48%">
                        <img
                            alt="coffee washing"
                            src={coffeeWashing}
                            style={{ width: "100%", height: "auto", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                        />
                    </Box>
                </Box>

                <Typography variant="body1" paragraph>
                    After harvesting, the coffee beans undergo several processing stages. The beans are washed, dried, and then roasted to develop their flavor profile.
                </Typography>

                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap">
                    <Box width="48%">
                        <img
                            alt="moisturizing coffee beans"
                            src={moisturizingCoffee}
                            style={{ width: "100%", height: "auto", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                        />
                    </Box>
                    <Box width="48%">
                        <img
                            alt="gummy coffee beans"
                            src={gummyCoffeeBean}
                            style={{ width: "100%", height: "auto", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                        />
                    </Box>
                </Box>

                <Box textAlign="center" mb={2}>
                    <img
                        alt="dry beans"
                        src={dryBeans}
                        style={{ width: "80%", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
                    />
                </Box>
            </Box>
        </Container>
    );
};

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import grindLevels from "../../assets/images/grindLevels.png";
import turkishCoffeeAndWater from "../../assets/images/turkishCoffeeAndWater.png";
import coffeemaniaTurkishCoffee from "../../assets/images/coffeemaniaTürkishCoffee.png";

export const BenefitsOfCoffee = () => {
    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" gutterBottom align="center">
                    Benefits of Coffee & Grind Levels & Turkish Coffee
                </Typography>

                <Box mb={4}>
                    <Typography variant="h5" gutterBottom align='left' fontWeight="600">
                        Benefits of Coffee
                    </Typography>
                    <Typography paragraph>
                        <ul style={{ textAlign: "left", lineHeight: "35px" }}>
                            <li>Coffee is a natural stimulant for the brain, and it enhances focus and alertness.</li>
                            <li>Drinking coffee in the morning keeps you energized and ready for the day.</li>
                            <li>It boosts metabolic rate and aids in burning calories.</li>
                            <li>Coffee relaxes the air passages to the lungs.</li>
                            <li>The average German drinks 160 liters, equivalent to about 1000 cups of coffee annually.</li>
                        </ul>
                        <Typography variant='body1' fontWeight="600" paragraph textAlign="left">Studies indicate that more than half of the caffeine consumed is eliminated from the body within five hours, so moderate consumption does not affect sleep patterns.</Typography>
                    </Typography>
                </Box>

                <Box mb={4}>
                    <Typography variant="h5" gutterBottom>
                        Grind Levels
                    </Typography>
                    <img alt="grind levels text around a coffee beans cup" src={grindLevels} />
                    <Typography paragraph>
                        <ul type='circle' align="left">
                            <li><strong>Extra Fine:</strong>&nbsp;Powdery consistency, ideal for Turkish coffee.</li>
                            <li><strong>Fine:</strong>&nbsp;Suitable for Espresso, Aeropress, and Moka Pot with brewing times of 20-60 seconds.</li>
                            <li><strong>Medium Fine:</strong>&nbsp;Best for Pour Over methods like Hario v60 and Chemex, and for Aeropress brewing times of 2-3 minutes.</li>
                            <li><strong>Medium:</strong>&nbsp;Appropriate for Pour Over, Filter Coffee Machines, Syphon, and Aeropress with brewing times over 3 minutes.</li>
                            <li><strong>Medium Coarse:</strong>&nbsp;Used in Chemex and Clever Dripper for extended Pour Over brewing.</li>
                            <li><strong>Coarse:</strong>&nbsp;Used in French Press brewing.</li>
                        </ul>
                    </Typography>
                </Box>

                <Box mb={4}>
                    <Typography variant="h5" gutterBottom align="left">
                        Turkish Coffee
                    </Typography>
                    <Typography paragraph align="left">
                        Ready-made ground coffee or coffee beans sold for Turkish coffee are usually of Brazilian origin. This type of bean, known as Rio Minas, constitutes 90% of Turkish coffee.
                    </Typography>
                    <Typography paragraph align="left">
                        Turkish coffee is one of the oldest methods of preparing and brewing coffee that has come from the Ottoman Empire to today, playing a significant role in Turkish culture. It has a unique identity and tradition with its distinctive taste, foam, aroma, and presentation. It is the only type of coffee served with its grounds.
                    </Typography>
                    <Typography fontWeight="600">Preperation</Typography>
                    <ol>
                        <li align="left">First, two teaspoons of Turkish coffee are placed into the cezve (a special pot) for each cup. It is important that the coffee is as freshly ground as possible; we do not recommend using coffee that has been stored for a long time or has become moist in an open container.</li>
                        <li align="left">Then, add enough water for each cup. It is also important to use drinking water. Chlorinated tap water can spoil the taste of your coffee. If you want your coffee to be frothier, it is recommended to use water from the refrigerator.</li>
                        <li align="left">Next, add sugar cubes or granulated sugar according to the desired level of sweetness. Everyone's sugar preference for Turkish coffee is different. While no sugar is added to plain coffee, half a cube is added for lightly sweetened coffee, one cube for moderately sweetened coffee, and two cubes for sweetened coffee.</li>
                        <li align="left">After arranging everything and placing it in the cezve, stir all the ingredients well before putting them on the stove. The spoon, like the coffee, should also be free of moisture.</li>
                        <li align="left">The next important detail is to cook the coffee over low heat. If it is cooked over high heat, it may boil quickly without absorbing its essence. Therefore, coffee cooked over embers is the best. Another important detail is not to stir it after putting it on the stove, as stirring can prevent the formation of foam.</li>
                        <li align="left">The coffee is removed from the heat when it reaches the boiling point, as the foam may recede if left too long. However, the coffee is not immediately poured into the cups after being removed from the heat. First, the foam that has accumulated on top is distributed to the cups with a spoon, and then it is put back on the heat. On its next boil, the cups are filled halfway, mostly with foam.</li>
                        <li align="left">Finally, when it boils again, the coffee is equally distributed into the cups. It is important to pour the coffee from the side of the cup. Pouring directly in the center can disperse the foam, preventing you from achieving the desired frothy appearance.</li>
                    </ol>
                </Box>

                <Box style={{ display: "flex", flexDirection: "row", alignItems:"flex-start", gap:"15px", marginBottom:"30px" }}>
                    <Box>
                        <img alt='turkish coffee and water' src={turkishCoffeeAndWater} height="auto" maxWidth="100%"/>
                    </Box>
                    <Box style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                        <Typography variant='h5' fontWeight="600">COFFEEMANIA TURKISH COFFEE</Typography>
                        <Box>
                            <ul>
                                <li align="left">Coffeemania Turkish coffees are a special blend belonging to the Brazil region. The Rio Minas region is not used.</li>
                                <li align="left">It is prepared as a medium roast.</li>
                                <li align="left">Compared to coffees sold in the market, it has a more acidic taste.</li>
                                <li align="left">Packages are labeled as 100 grams with an expiration date of 1 year. Once the package is opened, it should be stored in airtight containers, and a shelf life of 1 week should be labeled.</li>
                            </ul>
                        </Box>
                        <Box>
                            <Typography variant='h5'>HOW TO PREPARE IT?</Typography>
                            <Typography variant="body1" align="left">Use 7 grams of Turkish coffee.Add the coffee to the pot of the coffee machine.For lightly sweetened coffee, add 1 sugar cube; for moderately sweetened coffee, add 2 sugar cubes; for sweet Turkish coffee, add 3 sugar cubes to the chamber.Once the machine indicates it is ready, serve with 330 ml of water and a piece of chocolate.</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box style={{ display: "flex", flexDirection: "row", alignItems:"flex-start", gap:"15px" }}>
                    <Box>
                        <img alt='turkish coffee' src={coffeemaniaTurkishCoffee} width="100%"/>
                    </Box>
                    <Box style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                        <Typography variant='h5' fontWeight="600">MILKY TURKISH COFFEE</Typography>
                        <Box>
                          <Typography>Use 7 grams of Turkish coffee. Add 7 grams of coffee to the coffee machine's pot. For lightly sweetened coffee, add 1 sugar cube; for moderately sweetened coffee, add 2 sugar cubes; for sweet Turkish coffee, add 3 sugar cubes. Once the machine indicates it is ready, pour the coffee into the cup, leaving about 10 ml of space at the top. Fill the remaining space with milk prepared to a latte consistency and at an appropriate temperature. Serve with 330 ml of mineral water and a piece of chocolate.</Typography>
                        </Box>
                        <Box>
                            <Typography variant='h5'>MASTIC TURKISH COFFEE</Typography>
                            <Typography variant="body1" align="left">Use 7 grams of mastic Turkish coffee. Add the coffee to the coffee machine's pot. For lightly sweetened coffee, add 1 sugar cube; for moderately sweetened coffee, add 2 sugar cubes; for sweet Turkish coffee, add 3 sugar cubes.</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};


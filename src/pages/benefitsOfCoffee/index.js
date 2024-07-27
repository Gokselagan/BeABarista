import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import grindLevels from "../../assets/images/grindLevels.png";

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
                    <Typography variant="h5" gutterBottom>
                        Turkish Coffee
                    </Typography>
                    <Typography paragraph>
                        Turkish coffee is typically made with Brazilian-origin beans known as Rio Minas, accounting for 90% of Turkish coffee. It is a traditional method dating back to the Ottoman Empire, noted for its distinctive taste, aroma, and presentation. Turkish coffee is unique as it is the only coffee served with its grounds.
                    </Typography>
                    <Typography paragraph>
                        <strong>Preparation:</strong> Turkish coffee is often prepared using a cezve, a small pot designed specifically for brewing coffee. The coffee is served in small cups, known as fincans, and is traditionally accompanied by a glass of water and a piece of Turkish delight or a sweet treat.
                    </Typography>
                    <img src="" alt="Turkish Coffee" style={{ width: '100%', height: 'auto' }} />
                </Box>
            </Box>
        </Container>
    );
};


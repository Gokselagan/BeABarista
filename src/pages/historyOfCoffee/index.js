import React from "react";
import { Container, Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import coffeeBeans from "../../assets/images/coffeeBeans.png";
import shepherdKaldi from "../../assets/images/shepherdKaldi.png";
import spreadCofeeAroundWorld from "../../assets/images/spreadCofeeAroundWorld.png";
import coffeeInOttomanEmpire from "../../assets/images/Coffee in the Ottoman Empire.png";

export const HistoryOfCoffee = () => {

  const itemStyle = {marginBottom:"20px", textAlign: "left",};

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Coffee History
      </Typography>
      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h4" align="left" gutterBottom>
            What is coffee ?
          </Typography>
          <Typography variant="body1" paragraph textAlign="left">
            Coffee is a beverage made from the seeds of the Coffea genus, a tree belonging to the Rubiaceae family. The seeds are roasted and ground into a powder, which is then mixed with water or milk to make the drink.
          </Typography>
        </CardContent>
      </Card>

      <img alt="coffee beans" src={coffeeBeans} width="100%" />


      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Who is Kaldi the Shepherd?
          </Typography>
          <Typography variant="body1" paragraph textAlign="left">
            Kaldi, or Halid, according to a popular legend, is an Ethiopian goat herder who discovered coffee in the 850s AD. Coffee then spread to the Islamic world and eventually to the rest of the world.
          </Typography>
          <Typography variant="body1" paragraph textAlign="left">
            According to the legend, Kaldi or Halid was a goat herder. One day, he noticed that his goats ate the berries of an unknown plant and subsequently gained great liveliness and energy. Upon seeing this, he decided to try the berries himself and experienced the same effects. He then showed his discovery to a local religious leader, who thought the berries might be harmful and threw them into the fire. However, the pleasant aroma that rose from the fire changed the leader's mind, prompting him to examine the mysterious plant more closely. As a result of his experiments, the religious leader discovered the ideal coffee beverage for people.
          </Typography>
          <Typography variant="body1" paragraph textAlign="left">
            The aroma of coffee inspired Kaldi the shepherd and the Sufi dervish to begin preparing a drink from the coffee beans. These roasted beans were ground in a container and boiled in water for some time to release their essence. And thus, coffee was born.
          </Typography>
          <Typography variant="body1" paragraph textAlign="left">
            The Sufi dervish noticed that drinking coffee helped keep him awake and alert during nighttime rituals. Other Sufi dervishes also enjoyed this new beverage. Soon, coffee spread across countries, first to Yemen and Arabia. Later, it reached Istanbul and gained popularity. From there, it made its way to Europe and eventually to the entire world. Yes, this was the story of Kaldi the Shepherd and the first discovery of coffee. The story is a legend, but when you read it, you realize it could be true.
          </Typography>
        </CardContent>
      </Card>

      <img alt="shepherd kaldi, a boy and a goat around a fire" src={shepherdKaldi} width="100%" />

      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            History of Coffee
          </Typography>
          <Typography variant="body1" paragraph textAlign="left">
            The Ethiopian highlands, the homeland of coffee, are where the wild coffee plant naturally grows. The indigenous people of this region ground the beans into flour to make a type of bread. The fruits were also boiled, and the water was consumed for medicinal purposes, earning them the nickname "magic fruit." As its reputation grew, coffee quickly spread to the Arabian Peninsula and was consumed in the same way it had been discovered in Abyssinia for 300 years.
          </Typography>
          <Typography variant="body1" paragraph textAlign="left">
            In the 14th century, a new discovery emerged: coffee beans were roasted over fire, ground, and then boiled to be consumed as a beverage. The first to process and drink coffee were the Sufi orders in Yemen. From there, it appeared in Aden in the 1470s, in Cairo in 1510, and in Mecca in 1511.
          </Typography>
          <Typography variant="body1" paragraph textAlign="left">
            Sheikh Shadhili, an Ethiopian Arab, was likely a Sufi Sheikh who lived in the late 14th century. He is one of the first people said to have drunk coffee. It is mentioned that he drank coffee especially at night to stay alert and awake during nighttime prayers and was among the first Sufis to use coffee.
          </Typography>
        </CardContent>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Spread of Coffee Around the World
          </Typography>
          <Typography variant="body1" paragraph textAlign="left">
            Venetian traders who came to Istanbul loved this drink and brought it back to Venice. Thus, Europeans were first introduced to coffee in 1615. Initially sold on the streets by lemonade vendors, coffee found its place in Italy's first coffeehouse, which opened in 1645. These coffeehouses quickly multiplied and became the most popular gathering spots for people of all walks of life, including artists and students, just as in many other countries. Coffee reached Paris in 1643 and London in 1651. Europeans established coffee plantations in various parts of the world. Coffee cultivation began on the Indonesian island of Java in 1712. The Dutch grew coffee in Java and the East Indies, while France cultivated it in the Antilles.
          </Typography>
          <Typography variant="body1" paragraph textAlign="left">
            Coffee, introduced to Europe via Venetian traders in the 17th century, soon spread across the continent. As a result of European colonialism in America, Asia, and Africa, coffee plantations were established worldwide, and coffee became a widely consumed beverage. Today, coffee is primarily cultivated in tropical and high-altitude regions, including Ethiopia, Colombia, Costa Rica, Papua New Guinea, and Brazil.
          </Typography>
          <Typography variant="body1" paragraph textAlign="left">
            Coffee as a beverage is made by brewing ground coffee beans. However, different factors such as filtering, grind size, brewing time, water temperature, and quantity can lead to various drinks. Today, many types of coffee are consumed worldwide, with Espresso and its derivatives being among the most popular types of filtered coffee.
          </Typography>
          <img alt="coffee beans on world map" src={spreadCofeeAroundWorld} />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Coffee in the Ottoman Empire
          </Typography>
          <Box style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
            <img alt="coffee beans with coffee cups" src={coffeeInOttomanEmpire} width="250px" />
            <Typography variant="body1" paragraph textAlign="left">
              During the reign of Suleiman the Magnificent (1520–1566), Özdemir Pasha, the governor of Yemen, brought the coffee he loved from Yemen to Istanbul. Coffee quickly became a prestigious beverage and found its place in the palace kitchen, receiving great interest. A new rank, called "kahvecibaşı" (chief coffee maker), was added to the palace duties. The kahvecibaşı, responsible for brewing the sultan’s or his superior's coffee, was chosen from among those who were loyal and discreet. In Ottoman history, there were even individuals who rose from the position of kahvecibaşı to grand vizier.
            </Typography>
          </Box>
          <Typography variant="body1" paragraph textAlign="left">
            Coffee, which spread from the palace to mansions and then to homes, soon became a flavor that the people of Istanbul were passionate about. Purchased raw coffee beans were roasted in pans, ground in mortars, and then brewed in coffee pots.</Typography>
          <Typography variant="body1" paragraph textAlign="left">
            In 1554, two Syrian Arabs opened the first coffeehouse in Istanbul's Tahtakale. At the time, there was debate about whether coffee was beneficial. Unlike his predecessors, Shaykh al-Islam Bostanzade Mehmet Efendi issued a fatwa stating that coffee was not haram (forbidden) and was, in fact, beneficial.
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
            <Typography variant="h5" textAlign="left" margin="12px">There were five periods in Ottoman history when coffee was banned:</Typography>
            <ol>
              <li style={ itemStyle }><strong>Suleiman the Magnificent:</strong> The first ban on coffee was implemented to prevent coffeehouses from becoming places of gossip. The ban was lifted with the fatwa of Shaykh al-Islam Bostanzade Mehmet Efendi.</li>
              <li style={ itemStyle }><strong>Sultan Murad III:</strong>The second coffee ban was enacted during Murad III's reign. However, this ban did not reduce coffee consumption because, although coffeehouses were closed by the sultan's order, illegal coffeehouses were opened. When the authorities became aware of the situation, religious scholars requested the ban's removal, and the bans were lifted by the sultan in 1587. During this period, coffee had not yet become widespread enough to enter every home but had become a beloved beverage in certain centers. As a result, the number of coffeehouses increased after the bans were lifted.</li>
              <li style={ itemStyle }><strong>Sultan Ahmed I (1606-1611):</strong>During Ahmed I’s reign, coffee and other intoxicants were banned. Coffee was even considered a narcotic, and it was declared not permissible to consume.</li>
              <li style={ itemStyle }><strong>Sultan Murad IV:</strong>The most stringent and deterrent coffee ban in the Ottoman period was implemented during Murad IV's reign. Not only coffee but all intoxicants like tobacco, wine, and opium were banned. The sultan cited coffeehouses as the cause of major fires in Istanbul. The most severe aspect of this ban was the execution of violators. The coffee ban was relaxed somewhat during Mehmed IV's reign. After scholars issued a fatwa stating that “Coffee that is not carbonized is not haram,” coffee consumption became widespread again.</li>
              <li style={{ textAlign: "left" }}><strong>1826:</strong>During the abolition of the Janissary Corps, coffeehouses were also closed, but coffee continued to be consumed. The final bans were lifted with new legislation in 1830, and coffee began to be consumed freely.</li>
            </ol>
        </CardContent>
      </Card>
    </Container>
  );
};


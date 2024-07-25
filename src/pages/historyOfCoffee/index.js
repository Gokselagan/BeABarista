import React from "react";
import { Container, Typography, Card, CardContent, CardMedia } from "@mui/material";
import coffeeBeans from "../../assets/images/coffeeBeans.png";

export const HistoryOfCoffee = () => {
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
          <Typography variant="body1" paragraph>
          Coffee is a beverage made from the seeds of the Coffea genus, a tree belonging to the Rubiaceae family. The seeds are roasted and ground into a powder, which is then mixed with water or milk to make the drink.
          </Typography>
        </CardContent>
      </Card>

      <img alt="coffee beans" src={coffeeBeans} width="100%" />

    
      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Çoban Kaldi Kimdir?
          </Typography>
          <Typography variant="body1" paragraph>
            Kaldi veya Halid popüler efsaneye göre MS. 850'lerde Kahve’yi keşfeden Etiyopyalı keçi çobanıdır.
            Rivayete göre, hayvanlarının meçhul bir bitkinin meyvelerini yediğini ve canlılık kazandıklarını
            görmüştür.
          </Typography>
        </CardContent>
      </Card>

      {/* Section: Coffee History */}
      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Kahve Tarihi
          </Typography>
          <Typography variant="body1" paragraph>
            Kahve’nin anavatanı olan Etiyopya’nın yüksek yaylaları, yabani kahve bitkisinin doğal olarak yetiştiği
            bölgelerdir. Kahve, ünüyle birlikte hızla Arap Yarımadası'na yayıldı ve 300 yıl boyunca içilmeye devam
            edildi.
          </Typography>
        </CardContent>
      </Card>

      {/* Section: Global Spread */}
      <Card style={{ marginBottom: "20px" }}>
        <CardMedia
          component="img"
          height="200"
          image="URL_TO_GLOBAL_SPREAD_IMAGE"
          alt="Kahvenin Yayılışı"
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Dünyaya Yayılışı
          </Typography>
          <Typography variant="body1" paragraph>
            İstanbul'a gelen Venedikli tacirler kahveyi Venedik'e taşıdı ve Avrupalılar kahveyle 1615'te tanıştı.
            Kahvehaneler, sanatçıların ve halkın buluşma yeri oldu.
          </Typography>
        </CardContent>
      </Card>

      {/* Section: Ottoman Empire */}
      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Osmanlıda Kahve
          </Typography>
          <Typography variant="body1" paragraph>
            Kanuni Sultan Süleyman döneminde Yemen'den getirilen kahve, kısa sürede sarayda ve İstanbul halkı arasında
            popüler oldu. Tarihte beş kez kahve yasaklanmıştır.
          </Typography>
        </CardContent>
      </Card>

      {/* Section: Coffee's Impact */}
      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Kahvenin Etkileri
          </Typography>
          <Typography variant="body1" paragraph>
            Kahve, sosyal, kültürel ve ekonomik olarak birçok toplum üzerinde etkili olmuştur. Kahvehaneler, bilgi
            alışverişinin yapıldığı yerler olarak önem kazanmıştır.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};


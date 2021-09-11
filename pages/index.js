import Head from "next/head";
import Footer from "../components/Footer";
import InspirasiArungi from "../components/InspirasiArungi";
import KulinerKhas from "../components/KulinerKhas";
import MainArungi from "../components/MainArungi";
import Navbar from "../components/Navbar";
import Promo from "../components/Promo";
import SekilasTentangPT from "../components/SekilasTentangPT";
import YukLihatProdukKami from "../components/YukLihatProdukKami";

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>
          Arungi Rasa - Menjaga dan Melestarikan Kekayaan Kuliner Indonesia
        </title>
        <link rel="icon" href="/arungi-rasa-square-no-text-1.png" />
        
        <link
          rel='preload'
          href='/fonts/Gotham/Gotham-Book.ttf'
          as='font'
          crossOrigin=""
        />

        <link
          rel='preload'
          href='/fonts/Gotham/Gotham-Bold.ttf'
          as='font'
          crossOrigin=""
        />

        <link
          rel='preload'
          href='/fonts/Monetasans/Monetasans-bold.otf'
          as='font'
          crossOrigin=""
        />

        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, minimum-scale=1.0"
        />
        <meta
          name="description"
          content="Arungi Rasa adalah platform digital yang menghubungkan pelaku usaha makanan dan minuman ke konsumen. Kami hadir untuk mengekspos kuliner lokal/daerah ke jangkauan konsumen yang lebih luas."
        />

      </Head>

      <Navbar/>
      <main>
        <MainArungi/>
        <Promo/>
        <KulinerKhas/>
        <InspirasiArungi/>
        <SekilasTentangPT/>
        <YukLihatProdukKami/>
      </main>

      
      <Footer />
    </div>
  );
}

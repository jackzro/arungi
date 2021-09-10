import Image from "next/image";

const images = [
  {
    id: 1,
    name: "Ayam Betutu",
    url: require("../assets/ayam1.jpeg"),
  },
  {
    id: 2,
    name: "Krupuk Palembang",
    url: require("../assets/kerupuk.jpeg"),
  },
  {
    id: 3,
    name: "Sate Ayam Bali",
    url: require("../assets/sateayam.jpeg"),
  },
  {
    id: 4,
    name: "Sambal Matah",
    url: require("../assets/sambal1.jpeg"),
  },
];

function YukLihatProdukKami() {
  return (
    <section className="relative px-4 py-8 lg:py-20 lg:px-10">
      <h1 className="text-4xl font-thavi mb-10">
        Yuk, Lihat-lihat Produk Kami
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10">
        {images.map((image) => (
          <div key={image.id}>
            <div className="relative min-w-[300px] h-96 lg:h-52">
              <Image src={image.url} layout="fill" objectFit="fill" />
            </div>
            <p className="text-center mt-2 font-thavi text-xl">{image.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default YukLihatProdukKami;

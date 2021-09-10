import Image from "next/image";

const option = [
  {
    id: 1,
    daerah: "Jawa",
  },
  {
    id: 2,
    daerah: "Bali",
  },
  {
    id: 3,
    daerah: "NTB",
  },
  {
    id: 4,
    daerah: "Sumatera",
  },
  {
    id: 5,
    daerah: "Sulawesi",
  },
  {
    id: 6,
    daerah: "Tampilkan Semua",
  },
];

const gambar = [
  {
    id: 1,
    img: "https://arungirasa.id/belanja/wp-content/uploads/2021/09/Promo-Dahar-600x600.jpeg",
  },
  {
    id: 2,
    img: "https://arungirasa.id/belanja/wp-content/uploads/2021/09/Promo-Dahar-600x600.jpeg",
  },
  {
    id: 3,
    img: "https://arungirasa.id/belanja/wp-content/uploads/2021/09/Promo-Dahar-600x600.jpeg",
  },
  {
    id: 4,
    img: "https://arungirasa.id/belanja/wp-content/uploads/2021/09/Promo-Dahar-600x600.jpeg",
  },
  {
    id: 5,
    img: "https://arungirasa.id/belanja/wp-content/uploads/2021/09/Promo-Dahar-600x600.jpeg",
  },
  {
    id: 6,
    img: "https://arungirasa.id/belanja/wp-content/uploads/2021/09/Promo-Dahar-600x600.jpeg",
  },
  {
    id: 7,
    img: "https://arungirasa.id/belanja/wp-content/uploads/2021/09/Promo-Dahar-600x600.jpeg",
  },
];

function KulinerKhas() {
  return (
    <div className="px-4 py-2">
      <div className="flex justify-between pb-2 border-b-4">
        <h1 className="text-2xl font-thavi">Kuliner Khas Daerah</h1>
        <p className="text-gray-400 lg:hidden">Tampilkan Semua</p>
        <div className="items-center hidden grid-cols-2 space-x-3 lg:inline-flex">
          {option.map((item) => (
            <p className="text-gray-400">{item.daerah}</p>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 my-4 lg:grid-cols-3 xl:grid-cols-5">
        {gambar.map((item) => (
          <div className="relative min-w-[200px] h-[350px]" key={item.id}>
            <Image src={item.img} layout="fill" objectFit="fill" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default KulinerKhas;

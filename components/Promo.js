import Image from "next/image";

const option = [
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
];

function Promo() {
  return (
    <div className="px-4 py-4 lg:gap-4 lg:grid lg:grid-cols-4">
      <div className="col-span-3">
        <div className="py-2 border-b-2">
          <h1 className="text-3xl font-thavi">Promo Arungi Rasa</h1>
        </div>
        <div className="py-6 space-x-4 xl:flex">
          <div className="flex flex-row mb-3 space-x-2">
            {option.map((item) => (
              <div className="relative w-10 h-10" key={item.id}>
                <Image src={item.img} layout="fill" objectFit="fill" />
              </div>
            ))}
          </div>
          <div className="">
            <div className="relative h-[500px] min-w-[200px]">
              <Image
                src={
                  "https://arungirasa.id/belanja/wp-content/uploads/2021/09/Promo-Dahar-600x600.jpeg"
                }
                layout="fill"
                objectFit="fill"
              />
            </div>
          </div>
          <div className="mt-4">
            <h1>Paket Promo</h1>
            <p className="font-bold">Promo Paket Dahar</p>
            <p className="font-bold">Rp 110.000</p>
            <p>
              Status: <span className="text-green-500"> In Stock</span>
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 border-2">
        <div className="pb-2 mb-6 border-b-2">
          <h1>Paling Dicari</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative w-40 h-40">
            <Image
              src={
                "https://arungirasa.id/belanja/wp-content/uploads/2021/09/Promo-Dahar-600x600.jpeg"
              }
              layout="fill"
              objectFit="fill"
            />
          </div>
          <div>
            <h1>Promo Tanggal Tua</h1>
            <p className="text-gray-400 line-through">Rp 100.000</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 col-end-5 px-4 py-4 mt-4 text-center text-white bg-yellow-600 rounded-full ">
        <button>Bergabung dengan kami</button>
      </div>
    </div>
  );
}

export default Promo;

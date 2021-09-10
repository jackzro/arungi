import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <Carousel className="mt-4">
      <div className="min-w-full bg-banner-1 bg-cover bg-center h-[360px] text-white text-left flex flex-col space-y-5 items-start pl-6">
        <p className="mt-10 font-thavi text-xl">Jangan Lewatkan!</p>
        <div>
          <p className="font-thavi text-2xl">Aneka Kuliner Nusantara</p>
          <p className="font-thavi text-2xl">Favorit ada disini</p>
        </div>

        <p className="font-thavi text-xl">
          Discount <br />{" "}
          <strong className="font-thavi font-extrabold">s.d 10%</strong>
        </p>
        <button className="bg-yellow-600 px-10 py-4 rounded-xl">
          Belanja Sekarang
        </button>
      </div>
      <div className="min-w-full bg-banner-2 bg-cover bg-center h-[360px]"></div>
    </Carousel>
  );
}

export default Banner;

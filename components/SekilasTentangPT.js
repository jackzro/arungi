import Image from "next/image";

function SekilasTentangPT() {
  return (
    <section className="bg-sekilas-pattern bg-cover bg-no-repeat">
      <div className="bg-yellow-700 bg-opacity-75 flex flex-col lg:flex-row lg:justify-evenly lg:items-center px-10 py-5 lg:py-16 lg:px-20">
        <div className="text-white text-center">
          <h1 className="text-4xl text-left mb-6 lg:mb-12 ">
            Sekilas Tentang Perusahaan
          </h1>
          <p className="text-md text-left mb-4 lg:mb-8">
            Arungi Rasa hadir untuk meningkatkan nilai-nilai kuliner Nusantara
            Indonesia sehingga bisa menjadi warisan yang dirasakan dan
            dikenalkan ke seluruh masyarakat Indonesia.
          </p>
          <p className="text-md text-left mb-4 lg:mb-8">
            Tujuan utama kami adalah untuk mengenalkan dan menghadirkan kuliner
            khas dari berbagai daerah ke jangkauan konsumen melalui kerjasama
            dengan para pebisnis kuliner Indonesia.
          </p>
        </div>
        <div className="relative h-[400px] lg:h-[200px] xl:min-w-[400px] lg:min-w-[300px] min-w-[300px]">
          <Image
            src={require("../assets/profil-perusahaan-arungi-rasa.jpeg")}
            layout="fill"
            objectFit="fill"
          />
        </div>
      </div>
    </section>
  );
}

export default SekilasTentangPT;

import Image from "next/image"

function MainArungi() {
  return (

    <div className ='relative h-[750px] xs:h-[300px] sm:h-[500px] lg:h-[700px]'>
      <Image
        src = "/banners/bg-12.jpeg"
        layout='fill'
        objectFit='cover'
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md grid justify-items-stretch">
        <h1 className="text-2xl lg:text-5xl sm:px-0 md:px-10 lg:px-0 text-green-900 font-Monetasans text-center">Jelajahi Kekayaan Kuliner Indonesia bersama Arungi Rasa</h1>
        <button className='text-white bg-yellow-500
                px-8 py-2 shadow-md rounded-3xl font-bold justify-self-center my-10 hover:shadow-xl
                active:scale-90 transition duration-150'
                >Mulai Menjelajah</button>
      </div>
    </div>
    
  );
}

export default MainArungi;

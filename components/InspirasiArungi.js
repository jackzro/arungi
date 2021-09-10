function InspirasiArungi() {
  return (
    <section className="h-[600px] lg:h-[500px] bg-white flex flex-col lg:flex-row justify-center lg:justify-evenly items-center px-10 py-10 lg:py-5 lg:space-x-4">
      <iframe
        className="h-[500px] min-w-full lg:min-w-[500px] lg:h-[300px]"
        src="https://www.youtube.com/embed/-gkfXZeq_K0?rel=0&amp;amp;showinfo=0&amp;autoplay=0&amp;loop=0"
        frameborder="0"
        allowFullscreen
      ></iframe>

      <div className="text-left self-start lg:w-[500px] lg:h-[300px] lg:self-center">
        <h1 className="text-4xl font-thavi">Inspirasi Arungi Rasa</h1>
        <p className="mt-6">
          Indonesia telah menjadi inspirasi terbesar dalam setiap langkah yang
          kami ambil dan dalam setiap cerita perjalanan Arungi Rasa. Kami
          berkomitmen untuk menjadi lebih baik dari hari kemarin dengan harapan
          keajaiban kuliner Nusantara dapat dikenal secara luas oleh masyarakat
          Indonesia.
        </p>
      </div>
    </section>
  );
}

export default InspirasiArungi;

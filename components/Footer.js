import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-900 flex flex-col justify-center items-center h-96 space-y-6">
      <div className="text-white flex space-x-10">
        <p>Home</p>
        <p>Tentang Kami</p>
        <p>Cara Kerja Kami</p>
        <p>Artikel</p>
        <p>Kontak</p>
      </div>
      <div className="flex space-x-10">
        <FaFacebookF className="h-6 w-6 text-blue-500" />

        <FaInstagram className="h-6 w-6 text-red-400" />
      </div>
      <div className="text-center text-white">
        <p>Copyright © 2021 Arungi Rasa - All Rights Reserved</p>
        <p>Plaza Marein Lt.23</p>
        <p>Jl. Jend Sudirman Kav.76-78</p>
        <p>Kuningan, Jakarta Selatan 12910</p>
      </div>
    </footer>
  );
}

export default Footer;

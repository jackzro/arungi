import { FaShippingFast, FaGlassMartiniAlt, FaShieldAlt } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";

function Advan() {
  return (
    <section className="bg-yellow-600 flex flex-col py-10 px-10 space-y-10 items-start text-white">
      <div className="flex space-x-6">
        <FaShippingFast className="h-10 w-10" />
        <div>
          <p className="text-xl">Gratis Ongkir</p>
          <p className="text-lg text-gray-400">Untuk wilayah tertentu</p>
        </div>
      </div>
      <div className="flex space-x-6">
        <FaGlassMartiniAlt className="h-10 w-10" />
        <div>
          <p className="text-xl">Menu Nusantara</p>
          <p className="text-lg text-gray-400">Variasi menu yang lengkap</p>
        </div>
      </div>
      <div className="flex space-x-6">
        <FaShieldAlt className="h-10 w-10" />
        <div>
          <p className="text-xl">100 % Higenis </p>
          <p className="text-lg text-gray-400">Kebersihan terjamin</p>
        </div>
      </div>
      <div className="flex space-x-6">
        <IoMdChatbubbles className="h-10 w-10" />
        <div>
          <p className="text-xl">CS Support</p>
          <p className="text-lg text-gray-400">Layanan CS yang ramah</p>
        </div>
      </div>
    </section>
  );
}

export default Advan;

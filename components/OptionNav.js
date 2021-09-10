import {
  FaFacebookF,
  FaInstagram,
  FaShoppingCart,
  FaUserAlt,
} from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";

function OptionNav({ setIsClose, xl }) {
  const router = useRouter();
  return (
    <>
      {xl === true ? null : (
        <GrClose
          className="absolute top-0 right-0 w-6 h-6 mr-5"
          onClick={() => setIsClose(true)}
        />
      )}

      <p className="text-black cursor-pointer" onClick={() => router.push("/")}>
        Home
      </p>
      <p className="text-black cursor-pointer">Tentang Kami</p>
      <p
        className="text-black cursor-pointer"
        onClick={() => router.push("/belanja")}
      >
        Produk
      </p>
      <p className="text-black cursor-pointer">Artikel</p>
      <p className="text-black cursor-pointer">Jadi Partner Kami</p>
      <p className="text-black cursor-pointer">Kontak</p>

      {/* <div className="flex items-center space-x-4">
        <FaFacebookF className="w-6 h-6 text-blue-500" />

        <FaInstagram className="w-6 h-6 text-red-400" />
      </div> */}

      <button className="px-4 py-2 text-white bg-yellow-600 rounded-full cursor-pointer">
        Bergabung dengan kami
      </button>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <FcLike className="w-8 h-8" />
          <div className="absolute right-0 flex items-center justify-center w-4 h-4 text-center text-white bg-yellow-400 rounded-full -bottom-1">
            <p className="text-xs">0</p>
          </div>
        </div>
        <div className="relative">
          <FaShoppingCart className="w-8 h-8" />
          <div className="absolute right-0 flex items-center justify-center w-4 h-4 text-center text-white bg-yellow-400 rounded-full -bottom-1">
            <p className="text-xs">0</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <FaUserAlt className="w-8 h-8" />
          <p className="text-sm">
            {" "}
            Log In <br /> Register
          </p>
        </div>
      </div>

      {/* <button className="p-4 text-white bg-green-600 rounded-full">
        Daftarkan UMKM
      </button> */}
    </>
  );
}

export default OptionNav;

import Image from "next/image";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import SearchBelanja from "./SearchBelanja";

function BelanjaNavbar() {
  return (
    <header className="">
      <div className="bg-white flex justify-between items-center px-4 py-3">
        <div className="relative h-14 w-14 cursor-pointer">
          <Image
            src={require("../../assets/logo.png")}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <FiShoppingBag className="h-8 w-8" />
            <div className="h-5 w-5 bg-yellow-500 absolute -right-1 -bottom-1 rounded-full flex justify-center items-center text-center text-white">
              <p className="text-center">0</p>
            </div>
          </div>

          <FiUser className="h-8 w-8" />
        </div>
      </div>

      <div>
        <SearchBelanja />
      </div>
    </header>
  );
}

export default BelanjaNavbar;

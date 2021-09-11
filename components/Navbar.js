import Image from "next/image";
import { FaBars } from "react-icons/fa";
import OptionNav from "./OptionNav";
import { useState } from "react";
import { useRouter } from "next/dist/client/router"

function Navbar() {
  const [isClose, setIsClose] = useState(true);
  const router = useRouter()
  return (
    <header className="sticky top-0 z-50 p-2 bg-white md:px-20">
      <div className="flex items-center justify-between px-20">
        <div 
          onClick={()=>router.push('/')}
          className="relative flex items-center w-20 h-20 my-auto cursor-pointer">
          <Image
            src={require("../assets/logo.png")}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <nav className="flex-row items-center hidden space-x-10 xl:inline-flex">
          <OptionNav setIsClose={setIsClose} xl={true} />
        </nav>

        <div className="xl:hidden">
          <FaBars
            className="w-10 h-10 cursor-pointer"
            onClick={() => setIsClose(false)}
          />
        </div>
      </div>

      {isClose === false && (
        <nav className="relative flex flex-col items-center justify-center pb-3 space-y-6 xl:hidden">
          <OptionNav setIsClose={setIsClose} />
        </nav>
      )}
    </header>
  );
}

export default Navbar;

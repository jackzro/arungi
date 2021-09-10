import { FaBars } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";

function SearchBelanja() {
  return (
    <div className="flex justify-center items-center space-x-8">
      <FaBars className="h-8 w-8" />
      <div className="flex items-center justify-center">
        <div className="h-14">
          <input
            type="text"
            placeholder="Ketik nama makanan, minuman, dan jajanan"
            className="bg-gray-100 h-14 p-2 pl-8"
          />
        </div>
        <div className="bg-yellow-500 text-white h-14 w-14 flex justify-center items-center">
          <HiSearch className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
}

export default SearchBelanja;

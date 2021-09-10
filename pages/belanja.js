import Advan from "../components/Belanja/Advan";
import Banner from "../components/Belanja/Banner";
import BelanjaNavbar from "../components/Belanja/BelanjaNavbar";

function belanja() {
  return (
    <div className="relative">
      <BelanjaNavbar />
      <Banner />
      <Advan />
    </div>
  );
}

export default belanja;

import logo from "../../../pages/assets/logo.png";
import Image from "next/image";
function Logo() {
  return (
    <div className="w-48 overflow-hidden md:ml-10 z-96">
      <Image
        src={logo}
        alt="logo"
        width={190}
        height={38}
        className="cursor-pointer"
      />
      <hr className="mt-3 border-gray-200 border-bn dark:border-gray-600" />
    </div>
  );
}

export default Logo;

import Image from "next/image";
import Router from "next/router";
import sad from "./assets/sad.png";
function error() {
  return (
    <div>
      <div class="  h-screen justify-center">
        <center class="mt-14 m-auto space-y-6">
          <div className=" animate-pulse">
            <Image src={sad} alt="image" />
          </div>
          <div class=" tracking-widest space-y-3 mt-4">
            <span class="text-gray-500 text-6xl block">
              <span>4 0 4</span>
            </span>
            <span class="text-gray-500 text-xl">
              Sorry, We couldn't find what you are looking for!
            </span>
          </div>
        </center>
        <center class="mt-9">
          <div onClick={() => Router.back()}>
            <a
              class="bg-blue-500 font-mono text-xl text-gray-200 p-3
             rounded-md hover:shadow-md cursor-pointer"
            >
              Go back
            </a>
          </div>
        </center>
      </div>
    </div>
  );
}

export default error;

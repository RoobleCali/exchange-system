import logo from "./assets/images/logo/logo-white.svg";
import hero from "./assets/images/hero/hero-image.jpg";
import about from "./assets/images/about/about-image.svg";
import testimonials from "./assets/images/testimonials/author-01.png";
import author2 from "./assets/images/testimonials/author-02.png";
import author3 from "./assets/images/testimonials/author-03.png";
import Image from "next/image";
import LoginNavbar from "./login/LoginNavbar";
import Link from "next/link";
function App() {
  return (
    <div className="App">
      <div>
        {/* ====== Navbar Section End */}
        <LoginNavbar />
        {/* ====== Hero Section Start */}
        <div
          id="home"
          className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
        >
          <div className="container">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4">
                <div
                  className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                  data-wow-delay=".2s"
                >
                  <h1 className="mb-8 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">
                    you can make your Business More Profitable but How .. !
                  </h1>
                  <p className="mx-auto mb-10 max-w-[600px] text-base text-[#e4e4e4] sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
                    Regularly send money to your family in your home country
                    while you're working abroad. Help your family with an
                    emergency expense. Pay a contractor or property manager in
                    your home country for work they did while you were away.
                  </p>
                  <ul className="flex flex-wrap items-center justify-center mb-10">
                    <li>
                      <Link href="/login">
                        <a className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-center transition duration-300 ease-in-out bg-white rounded-lg text-dark hover:text-primary hover:shadow-lg sm:px-10">
                          Get Started
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-4">
                <div
                  className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                  data-wow-delay=".25s"
                >
                  <div className="mt-16">
                    <Image
                      src={hero}
                      alt="hero"
                      className="max-w-full mx-auto rounded-t-xl rounded-tr-xl"
                    />
                  </div>
                  <div className="absolute bottom-0 -left-9 z-[-1]">
                    <svg
                      width={134}
                      height={106}
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.66667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 16.3333 104)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 31 104)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 45.6667 104)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 60.3333 104)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 88.6667 104)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 117.667 104)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 74.6667 104)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 103 104)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 132 104)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 31 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 103 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 132 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="74.6673"
                        r="1.66667"
                        transform="rotate(-90 1.66667 74.6673)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 16.3333 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 31 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 31 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 45.6667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 60.3333 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 60.3333 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 88.6667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 88.6667 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 117.667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 117.667 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 74.6667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 74.6667 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 103 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 103 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 132 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 132 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 31 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 31 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 60.3333 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 60.3333 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 88.6667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 88.6667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 117.667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 117.667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 74.6667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 74.6667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 103 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 103 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 132 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 132 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 1.66667 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 16.3333 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 31 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 31 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 45.6667 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 60.3333 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 88.6667 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 117.667 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 74.6667 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 103 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 103 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 132 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 132 1.66707)"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-6 -right-6 z-[-1]">
                    <svg
                      width={134}
                      height={106}
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.66667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 16.3333 104)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 31 104)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 45.6667 104)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 60.3333 104)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 88.6667 104)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 117.667 104)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 74.6667 104)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 103 104)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 132 104)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 31 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 103 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 132 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="74.6673"
                        r="1.66667"
                        transform="rotate(-90 1.66667 74.6673)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 16.3333 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 31 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 31 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 45.6667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 60.3333 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 60.3333 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 88.6667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 88.6667 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 117.667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 117.667 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 74.6667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 74.6667 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 103 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 103 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 132 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 132 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 31 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 31 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 60.3333 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 60.3333 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 88.6667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 88.6667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 117.667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 117.667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 74.6667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 74.6667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 103 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 103 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 132 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 132 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 1.66667 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 16.3333 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 31 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 31 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 45.6667 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 60.3333 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 88.6667 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 117.667 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 74.6667 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 103 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 103 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 132 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 132 1.66707)"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ====== Hero Section End */}
        {/* ====== Features Section Start */}
        <section className="pt-20 pb-8 lg:pt-[120px] lg:pb-[70px]">
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mb-12 max-w-[620px] lg:mb-20">
                  <span className="block mb-2 text-lg font-semibold text-primary">
                    Features
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                    Main Features Of Play
                  </h2>
                  <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div
                  className="mb-12 bg-white wow fadeInUp group"
                  data-wow-delay=".1s"
                >
                  <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
                    <span className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45" />
                    <svg
                      width={35}
                      height={35}
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M44.9313 11.7H38.9188C40.5438 10.9687 41.7626 9.99374 42.2501 8.69374C42.9001 6.98749 42.2501 5.19999 40.3001 3.33124C38.1876 1.29999 35.9938 0.568738 33.8001 1.13749C29.9813 2.11249 27.4626 7.06874 26.2438 9.99374C25.1063 7.06874 22.5876 2.11249 18.6876 1.13749C16.4938 0.568738 14.3001 1.29999 12.1876 3.33124C10.2376 5.19999 9.5876 6.98749 10.2376 8.69374C10.7251 9.99374 12.0251 10.9687 13.5688 11.7H7.06885C5.0376 11.7 3.4126 13.325 3.4126 15.3562V21.5312C3.4126 23.5625 5.0376 25.1875 7.06885 25.1875H7.71885V46.2312C7.71885 48.8312 9.83135 51.025 12.5126 51.025H40.1376C42.7376 51.025 44.9313 48.9125 44.9313 46.2312V25.1875C46.9626 25.1875 48.5876 23.5625 48.5876 21.5312V15.3562C48.5063 13.325 46.8813 11.7 44.9313 11.7ZM34.5313 3.98124C34.7751 3.89999 35.0188 3.89999 35.1813 3.89999C36.1563 3.89999 37.2126 4.38749 38.2688 5.52499C38.7563 6.01249 39.8126 7.06874 39.5688 7.79999C39.0001 9.34374 33.9626 10.6437 28.9251 11.05C30.0626 8.36874 32.1751 4.54999 34.5313 3.98124ZM13.0001 7.71874C12.7563 6.98749 13.8126 5.93124 14.3001 5.44374C15.4376 4.38749 16.4126 3.81874 17.3876 3.81874C17.6313 3.81874 17.8751 3.81874 18.0376 3.89999C20.4751 4.54999 22.5063 8.28749 23.6438 10.9687C18.6063 10.5625 13.5688 9.26249 13.0001 7.71874ZM42.0063 46.2312C42.0063 47.2875 41.1126 48.1812 40.0563 48.1812H12.4313C11.3751 48.1812 10.4813 47.2875 10.4813 46.2312V25.1875H41.9251V46.2312H42.0063ZM45.6626 21.5312C45.6626 22.0187 45.3376 22.3437 44.8501 22.3437H7.06885C6.6626 22.3437 6.25635 22.0187 6.25635 21.5312V15.3562C6.25635 14.95 6.6626 14.5437 7.06885 14.5437H44.8501C45.2563 14.5437 45.6626 14.8687 45.6626 15.3562V21.5312Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-dark">
                    Free and Open-Source
                  </h4>
                  <p className="mb-8 text-body-color lg:mb-11">
                    Lorem Ipsum is simply dummy text of the printing and
                    industry.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="text-base font-medium text-body-color hover:text-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div
                  className="mb-12 bg-white wow fadeInUp group"
                  data-wow-delay=".15s"
                >
                  <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
                    <span className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45" />
                    <svg
                      width={35}
                      height={35}
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M49.8062 23.3187L43.875 17.3875C43.3063 16.8187 42.4125 16.8187 41.8438 17.3875C41.275 17.9562 41.275 18.85 41.8438 19.4187L46.9625 24.6187H27.4625V4.87498L32.5812 10.075C33.15 10.6437 34.0437 10.6437 34.6125 10.075C35.1812 9.50623 35.1812 8.61248 34.6125 8.04373L28.6812 2.11248C27.95 1.38123 26.975 0.974976 26 0.974976C24.9438 0.974976 24.05 1.38123 23.3188 2.11248L17.3875 8.04373C16.8187 8.61248 16.8187 9.50623 17.3875 10.075C17.6312 10.3187 18.0375 10.4812 18.3625 10.4812C18.6875 10.4812 19.0937 10.3187 19.3375 10.075L24.6187 4.87498V24.5375H4.95625L10.075 19.3375C10.6437 18.7687 10.6437 17.875 10.075 17.3062C9.50625 16.7375 8.6125 16.7375 8.04375 17.3062L2.1125 23.2375C0.65 24.7 0.65 27.1375 2.1125 28.6L8.04375 34.5312C8.2875 34.775 8.69375 34.9375 9.01875 34.9375C9.34375 34.9375 9.75 34.775 9.99375 34.5312C10.5625 33.9625 10.5625 33.0687 9.99375 32.5L4.79375 27.3H24.4563V47.125L19.2563 41.925C18.6875 41.3562 17.7938 41.3562 17.225 41.925C16.6563 42.4937 16.6563 43.3875 17.225 43.9562L23.1562 49.8875C23.8875 50.6187 24.8625 51.025 25.8375 51.025C26.8937 51.025 27.7875 50.6187 28.5187 49.8875L34.45 43.9562C35.0188 43.3875 35.0188 42.4937 34.45 41.925C33.8813 41.3562 32.9875 41.3562 32.4188 41.925L27.4625 47.125V27.3812H47.0438L41.8438 32.5812C41.275 33.15 41.275 34.0437 41.8438 34.6125C42.0875 34.8562 42.4938 35.0187 42.8188 35.0187C43.1438 35.0187 43.55 34.8562 43.7938 34.6125L49.725 28.6812C51.2688 27.2187 51.2687 24.7812 49.8062 23.3187Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-dark">
                    Multipurpose Template
                  </h4>
                  <p className="mb-8 text-body-color lg:mb-11">
                    Lorem Ipsum is simply dummy text of the printing and
                    industry.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="text-base font-medium text-body-color hover:text-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div
                  className="mb-12 bg-white wow fadeInUp group"
                  data-wow-delay=".2s"
                >
                  <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
                    <span className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45" />
                    <svg
                      width={35}
                      height={35}
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062 0.65625 11.1562V4.21094C0.65625 2.46094 2.07813 1.03906 3.82813 1.03906H10.7734C12.5234 1.03906 13.9453 2.46094 13.9453 4.21094V11.1562C13.9453 12.9062 12.5234 14.3281 10.7734 14.3281ZM3.82813 2.95312C3.17188 2.95312 2.57031 3.5 2.57031 4.21094V11.1562C2.57031 11.8125 3.11719 12.4141 3.82813 12.4141H10.7734C11.4297 12.4141 12.0313 11.8672 12.0313 11.1562V4.21094C12.0313 3.55469 11.4844 2.95312 10.7734 2.95312H3.82813Z"
                        fill="white"
                      />
                      <path
                        d="M31.1719 14.3281H24.2266C22.4766 14.3281 21.0547 12.9062 21.0547 11.1562V4.21094C21.0547 2.46094 22.4766 1.03906 24.2266 1.03906H31.1719C32.9219 1.03906 34.3438 2.46094 34.3438 4.21094V11.1562C34.3438 12.9062 32.9219 14.3281 31.1719 14.3281ZM24.2266 2.95312C23.5703 2.95312 22.9688 3.5 22.9688 4.21094V11.1562C22.9688 11.8125 23.5156 12.4141 24.2266 12.4141H31.1719C31.8281 12.4141 32.4297 11.8672 32.4297 11.1562V4.21094C32.4297 3.55469 31.8828 2.95312 31.1719 2.95312H24.2266Z"
                        fill="white"
                      />
                      <path
                        d="M10.7734 33.9609H3.82813C2.07813 33.9609 0.65625 32.5391 0.65625 30.7891V23.8438C0.65625 22.0938 2.07813 20.6719 3.82813 20.6719H10.7734C12.5234 20.6719 13.9453 22.0938 13.9453 23.8438V30.7891C13.9453 32.5391 12.5234 33.9609 10.7734 33.9609ZM3.82813 22.5859C3.17188 22.5859 2.57031 23.1328 2.57031 23.8438V30.7891C2.57031 31.4453 3.11719 32.0469 3.82813 32.0469H10.7734C11.4297 32.0469 12.0313 31.5 12.0313 30.7891V23.8438C12.0313 23.1875 11.4844 22.5859 10.7734 22.5859H3.82813Z"
                        fill="white"
                      />
                      <path
                        d="M31.1719 33.9609H24.2266C22.4766 33.9609 21.0547 32.5391 21.0547 30.7891V23.8438C21.0547 22.0938 22.4766 20.6719 24.2266 20.6719H31.1719C32.9219 20.6719 34.3438 22.0938 34.3438 23.8438V30.7891C34.3438 32.5391 32.9219 33.9609 31.1719 33.9609ZM24.2266 22.5859C23.5703 22.5859 22.9688 23.1328 22.9688 23.8438V30.7891C22.9688 31.4453 23.5156 32.0469 24.2266 32.0469H31.1719C31.8281 32.0469 32.4297 31.5 32.4297 30.7891V23.8438C32.4297 23.1875 31.8828 22.5859 31.1719 22.5859H24.2266Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-dark">
                    High-quality Design
                  </h4>
                  <p className="mb-8 text-body-color lg:mb-11">
                    Lorem Ipsum is simply dummy text of the printing and
                    industry.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="text-base font-medium text-body-color hover:text-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                <div
                  className="mb-12 bg-white wow fadeInUp group"
                  data-wow-delay=".25s"
                >
                  <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
                    <span className="absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45" />
                    <svg
                      width={35}
                      height={35}
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.5312 21.6562L28.6563 21.1641L29.6953 20.5625C30.7344 19.9062 31.3359 18.8125 31.2812 17.6094C31.2266 16.4063 30.625 15.3125 29.5312 14.7109L27.8906 13.7813L29.6406 12.6875C30.6797 12.0313 31.2812 10.9375 31.2266 9.73438C31.1719 8.53125 30.5703 7.4375 29.4766 6.83594L19.25 1.09375C18.2109 0.492187 16.9531 0.546875 15.9141 1.09375L5.41406 7.21875C4.375 7.82031 3.71875 8.91406 3.71875 10.1172C3.71875 11.3203 4.375 12.4141 5.41406 13.0156L7.10938 14L5.41406 14.9844C4.375 15.5859 3.71875 16.6797 3.71875 17.8828C3.71875 19.0859 4.32031 20.1797 5.41406 20.7812L6.39844 21.3281L5.46875 21.875C4.42969 22.4766 3.77344 23.5703 3.77344 24.7734C3.77344 25.9766 4.375 27.0703 5.46875 27.6719L15.9141 33.6875C16.4609 34.0156 17.0078 34.125 17.6094 34.125C18.2109 34.125 18.8125 33.9609 19.3594 33.6328L29.6953 27.2891C30.7344 26.6328 31.3359 25.5391 31.2812 24.3359C31.2266 23.2969 30.625 22.2031 29.5312 21.6562ZM5.63281 10.1172C5.63281 9.57031 5.90625 9.13281 6.34375 8.85938L16.8438 2.78906C17.0625 2.67969 17.3359 2.57031 17.5547 2.57031C17.7734 2.57031 18.0469 2.625 18.2656 2.73437L28.5469 8.47656C28.9844 8.75 29.2578 9.1875 29.3125 9.73438C29.3125 10.2812 29.0391 10.7188 28.6016 10.9922L18.3203 17.3906C17.8828 17.6641 17.2812 17.6641 16.8438 17.3906L6.39844 11.375C5.90625 11.1562 5.63281 10.6641 5.63281 10.1172ZM5.63281 17.9375C5.63281 17.3906 5.90625 16.9531 6.34375 16.6797L9.02344 15.1484L15.8594 19.0859C16.4062 19.4141 16.9531 19.5234 17.5547 19.5234C18.1562 19.5234 18.7578 19.3594 19.3047 19.0312L26.0312 14.875L28.6016 16.2969C29.0391 16.5703 29.3125 17.0078 29.3672 17.5547C29.3672 18.1016 29.0938 18.5391 28.6563 18.8125L18.3203 25.2656C17.8828 25.5391 17.2812 25.5391 16.8438 25.2656L6.39844 19.25C5.90625 18.9766 5.63281 18.4844 5.63281 17.9375ZM28.6563 25.8125L18.3203 32.2109C17.8828 32.4844 17.2812 32.4844 16.8438 32.2109L6.39844 26.1953C5.96094 25.9219 5.6875 25.4844 5.6875 24.9375C5.6875 24.3906 5.96094 23.9531 6.39844 23.6797L8.3125 22.5859L15.8594 26.9609C16.4062 27.2891 16.9531 27.3984 17.5547 27.3984C18.1562 27.3984 18.7578 27.2344 19.3047 26.9062L26.7969 22.2578L28.6563 23.2969C29.0938 23.5703 29.3672 24.0078 29.4219 24.5547C29.3672 25.0469 29.0938 25.5391 28.6563 25.8125Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-dark">
                    All Essential Elements
                  </h4>
                  <p className="mb-8 text-body-color lg:mb-11">
                    Lorem Ipsum is simply dummy text of the printing and
                    industry.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="text-base font-medium text-body-color hover:text-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Features Section End */}
        {/* ====== About Section Start */}
        <section
          id="about"
          className="bg-[#f3f4fe] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
        >
          <div className="container">
            <div className="bg-white wow fadeInUp" data-wow-delay=".2s">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4">
                  <div className="items-center justify-between overflow-hidden border lg:flex">
                    <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                      <span className="inline-block px-5 py-2 mb-5 text-sm font-medium text-white bg-primary">
                        About Us
                      </span>
                      <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                        Brilliant Toolkit to Build Nextgen Website Faster.
                      </h2>
                      <p className="text-base leading-relaxed mb-9 text-body-color">
                        The main ‘thrust' is to focus on educating attendees on
                        how to best protect highly vulnerable business
                        applications with interactive panel discussions and
                        roundtables led by subject matter experts.
                      </p>
                      <p className="text-base leading-relaxed mb-9 text-body-color">
                        The main ‘thrust' is to focus on educating attendees on
                        how to best protect highly vulnerable business
                        applications with interactive panel.
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-white transition duration-300 ease-in-out rounded bg-primary hover:bg-opacity-90 hover:shadow-lg"
                      >
                        Learn More
                      </a>
                    </div>
                    <div className="text-center">
                      <div className="relative z-10 inline-block">
                        <Image
                          src={about}
                          alt="image"
                          className="mx-auto lg:ml-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== About Section End */}
        {/* ====== Pricing Section Start */}
        <section
          id="pricing"
          className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
        >
          <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                  <span className="block mb-2 text-lg font-semibold text-primary">
                    Pricing Table
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                    Our Pricing Plan
                  </h2>
                  <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div
                  className="relative z-10 px-8 py-10 mb-10 overflow-hidden text-center bg-white border wow fadeInUp rounded-xl border-primary border-opacity-20 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
                  data-wow-delay=".15s
              "
                >
                  <span className="block mb-2 text-base font-medium uppercase text-dark">
                    STARTING FROM
                  </span>
                  <h2 className="mb-9 text-[28px] font-semibold text-primary">
                    $ 19.99/mo
                  </h2>
                  <div className="mb-10">
                    <p className="mb-1 text-base font-medium leading-loose text-body-color">
                      1 User
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-body-color">
                      All UI components
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-body-color">
                      Lifetime access
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-body-color">
                      Free updates
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-body-color">
                      Use on 1 (one) project
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-body-color">
                      3 Months support
                    </p>
                  </div>
                  <div className="w-full">
                    <a
                      href="javascript:void(0)"
                      className="inline-block rounded-full border border-[#D4DEFF] bg-transparent py-4 px-11 text-center text-base font-medium text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white"
                    >
                      Purchase Now
                    </a>
                  </div>
                  <span className="absolute left-0 bottom-0 z-[-1] block h-14 w-14 rounded-tr-full bg-primary"></span>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div
                  className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl bg-primary bg-gradient-to-b from-primary to-[#179BEE] py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
                  data-wow-delay=".1s
              "
                >
                  <span className="inline-block px-6 py-2 mb-5 text-base font-semibold uppercase bg-white border border-white rounded-full text-primary">
                    POPULAR
                  </span>
                  <span className="block mb-2 text-base font-medium text-white uppercase">
                    STARTING FROM
                  </span>
                  <h2 className="mb-9 text-[28px] font-semibold text-white">
                    $ 19.99/mo
                  </h2>
                  <div className="mb-10">
                    <p className="mb-1 text-base font-medium leading-loose text-white">
                      5 User
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-white">
                      All UI components
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-white">
                      Lifetime access
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-white">
                      Free updates
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-white">
                      Use on 1 (one) project
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-white">
                      4 Months support
                    </p>
                  </div>
                  <div className="w-full">
                    <a
                      href="javascript:void(0)"
                      className="inline-block py-4 text-base font-medium text-center transition duration-300 ease-in-out bg-white border border-white rounded-full px-11 text-dark hover:border-dark hover:bg-dark hover:text-white"
                    >
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div
                  className="relative z-10 px-8 py-10 mb-10 overflow-hidden text-center bg-white border wow fadeInUp rounded-xl border-primary border-opacity-20 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
                  data-wow-delay=".15s
              "
                >
                  <span className="block mb-2 text-base font-medium uppercase text-dark">
                    STARTING FROM
                  </span>
                  <h2 className="mb-9 text-[28px] font-semibold text-primary">
                    $ 70.99/mo
                  </h2>
                  <div className="mb-10">
                    <p className="mb-1 text-base font-medium leading-loose text-body-color">
                      1 User
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-body-color">
                      All UI components
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-body-color">
                      Lifetime access
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-body-color">
                      Free updates
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-body-color">
                      Use on unlimited project
                    </p>
                    <p className="mb-1 text-base font-medium leading-loose text-body-color">
                      4 Months support
                    </p>
                  </div>
                  <div className="w-full">
                    <a
                      href="javascript:void(0)"
                      className="inline-block rounded-full border border-[#D4DEFF] bg-transparent py-4 px-11 text-center text-base font-medium text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white"
                    >
                      Purchase Now
                    </a>
                  </div>
                  <span className="absolute right-0 top-0 z-[-1] block h-14 w-14 rounded-bl-full bg-secondary"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Pricing Section End */}
        {/* ====== Faq Section Start */}

        {/* ====== Faq Section End */}
        {/* ====== Testimonials Start ====== */}
        <section id="testimonials" className="pt-20 md:pt-[120px]">
          <div className="container px-4">
            <div className="flex flex-wrap">
              <div className="w-full mx-4">
                <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                  <span className="block mb-2 text-lg font-semibold text-primary">
                    Testimonials
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
                    What our Client Say
                  </h2>
                  <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                    There are many variations of passages of Lorem Ipsum
                    available but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="p-8 mb-12 bg-white ud-single-testimonial wow fadeInUp shadow-testimonial"
                  data-wow-delay=".1s
              "
                >
                  <div className="flex items-center mb-3 ud-testimonial-ratings">
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                  </div>
                  <div className="mb-6 ud-testimonial-content">
                    <p className="text-base tracking-wide text-body-color">
                      “Our members are so impressed. It's intuitive. It's clean.
                      It's distraction free. If you're building a community.
                    </p>
                  </div>
                  <div className="flex items-center ud-testimonial-info">
                    <div className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full">
                      <Image src={testimonials} alt="author" />
                    </div>
                    <div className="ud-testimonial-meta">
                      <h4 className="text-sm font-semibold">Sabo Masties</h4>
                      <p className="text-xs text-[#969696]">Founder @ Rolex</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="p-8 mb-12 bg-white ud-single-testimonial wow fadeInUp shadow-testimonial"
                  data-wow-delay=".15s
              "
                >
                  <div className="flex items-center mb-3 ud-testimonial-ratings">
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                  </div>
                  <div className="mb-6 ud-testimonial-content">
                    <p className="text-base tracking-wide text-body-color">
                      “Our members are so impressed. It's intuitive. It's clean.
                      It's distraction free. If you're building a community.
                    </p>
                  </div>
                  <div className="flex items-center ud-testimonial-info">
                    <div className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full">
                      <Image src={author2} alt="author" />
                    </div>
                    <div className="ud-testimonial-meta">
                      <h4 className="text-sm font-semibold">Margin Gesmu</h4>
                      <p className="text-xs text-[#969696]">
                        Founder @ UI Hunter
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="p-8 mb-12 bg-white ud-single-testimonial wow fadeInUp shadow-testimonial"
                  data-wow-delay=".2s
              "
                >
                  <div className="flex items-center mb-3 ud-testimonial-ratings">
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                    <span className="mr-1 text-[#fbb040]">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        className="fill-current"
                      >
                        <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                      </svg>
                    </span>
                  </div>
                  <div className="mb-6 ud-testimonial-content">
                    <p className="text-base tracking-wide text-body-color">
                      “Our members are so impressed. It's intuitive. It's clean.
                      It's distraction free. If you're building a community.
                    </p>
                  </div>
                  <div className="flex items-center ud-testimonial-info">
                    <div className="ud-testimonial-image mr-5 h-[50px] w-[50px] overflow-hidden rounded-full">
                      <Image src={author3} alt="author" />
                    </div>
                    <div className="ud-testimonial-meta">
                      <h4 className="text-sm font-semibold">William Smith</h4>
                      <p className="text-xs text-[#969696]">Founder @ Trorex</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Testimonials End ====== */}
        {/* ====== Team Section Start */}

        {/* ====== Team Section End */}
        {/* ====== Contact Start ====== */}
        <section id="contact" className="relative py-20 md:py-[120px]">
          <div className="absolute top-0 left-0 z-[-1] h-1/2 w-full bg-[#f3f4fe] lg:h-[45%] xl:h-1/2" />
          <div className="container px-4">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                <div className="ud-contact-content-wrapper">
                  <div className="ud-contact-title mb-12 lg:mb-[150px]">
                    <span className="mb-5 text-base font-semibold text-dark">
                      CONTACT US
                    </span>
                    <h2 className="text-[35px] font-semibold">
                      Let's talk about <br />
                      Love to hear from you!
                    </h2>
                  </div>
                  <div className="flex flex-wrap justify-between mb-12 lg:mb-0">
                    <div className="mb-8 flex w-[330px] max-w-full">
                      <div className="mr-6 text-[32px] text-primary">
                        <svg
                          width={29}
                          height={35}
                          viewBox="0 0 29 35"
                          className="fill-current"
                        >
                          <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z" />
                          <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="mb-6 text-lg font-semibold">
                          Our Location
                        </h5>
                        <p className="text-base text-body-color">
                          Nairobi , kenya
                        </p>
                      </div>
                    </div>
                    <div className="mb-8 flex w-[330px] max-w-full">
                      <div className="mr-6 text-[32px] text-primary">
                        <svg
                          width={34}
                          height={25}
                          viewBox="0 0 34 25"
                          className="fill-current"
                        >
                          <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="mb-6 text-lg font-semibold">
                          How Can We Help?
                        </h5>
                        <p className="text-base text-body-color">
                          info@yourdomain.com
                        </p>
                        <p className="text-base text-body-color">
                          contact@yourdomain.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                <div
                  className="wow fadeInUp rounded-lg bg-white py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]"
                  data-wow-delay=".2s
              "
                >
                  <h3 className="mb-8 text-2xl font-semibold md:text-[26px]">
                    Send us a Message
                  </h3>
                  <form>
                    <div className="mb-6">
                      <label
                        htmlFor="fullName"
                        className="block text-xs text-dark"
                      >
                        Full Name*
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Adam Gelius"
                        className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block text-xs text-dark"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="example@yourmail.com"
                        className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="phone"
                        className="block text-xs text-dark"
                      >
                        Phone*
                      </label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="+885 1254 5211 552"
                        className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-xs text-dark"
                      >
                        Message*
                      </label>
                      <textarea
                        name="message"
                        rows={1}
                        placeholder="type your message here"
                        className="w-full resize-none border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                        defaultValue={""}
                      />
                    </div>
                    <div className="mb-0">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-white transition duration-300 ease-in-out rounded bg-primary hover:bg-dark"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Contact End ====== */}
        {/* ====== Footer Section Start */}
        <footer
          className="wow fadeInUp relative z-10 bg-black pt-20 lg:pt-[120px]"
          data-wow-delay=".15s"
        >
          <div className="container">
            <div className="flex flex-wrap -mx-4">footer</div>
          </div>
        </footer>
        {/* ====== Footer Section End */}
      </div>
    </div>
  );
}

export default App;

import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import lemon from "./img/lemon.png";
import yogurt from "./img/yougurt.png";
import pasta from "./img/pasta.png";
import third from "./img/thirdSection.png";
import student from "./img/Student.png";
import coffee from "./img/Coffee.png";
import person from "./img/Person.png";
export default function About() {
  return (
    <div>
      <div
        className=" pt-[150px] lg:pt-0 w-full bg-no-repeat bg-center flex justify-center  "
        style={{
          backgroundImage: "url('/unsplash.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          height: "300px",
        }}
      >
        <div className="w-full max-w-5xl flex flex-col justify-center items-center text-white text-center py-16">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            About Us
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/" className="text-xl sm:text-2xl md:text-3xl">
              Home
            </a>
            <div className="flex items-center">
              <Image
                src="/Vector.png"
                width={10}
                height={10}
                alt="Vector Icon"
              />
              <a
                href="/aboutus"
                className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D]"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-[1320px] mx-auto py-[20px] lg:py-[50px] px-[20px] lg:px-[60px] text-white body-font bg-white">
        <div className="container mx-auto flex px-5 flex-col lg:flex-row">
          <div className="flex">
            <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
              <Image
                className="object-cover object-center w-336px h-536px mt-530px ml-300px radius-6px"
                alt="hero"
                src={lemon}
              />
            </div>
            <div className="flex flex-col space-y-2 space-x-2 mt-2 ml-2">
              <Image
                className="object-cover object-center w-309px h-271px mt-584px ml-660px radius-6px"
                alt="image2"
                src={yogurt}
              />
              {/* Bottom Image */}
              <Image
                className="object-cover object-center w-309px h-382px mt-882px ml-660px radius-6px"
                alt="image3"
                src={pasta}
              />
            </div>
          </div>
          <div className="lg:flex-grow lg:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>

            <div className="flex justify-center">
              {/* Show More Button */}
              {/* Show More Button */}
              <button className="inline-flex items-center text-white bg-orange-400 border-0 py-2 px-4 focus:outline-none rounded text-lg">
                Show More
              </button>

              {/* Watch Video Button */}
              <button className="inline-flex items-center text-black border-0 py-2 px-4 focus:outline-none rounded text-lg">
                {/* Video Icon in a Circle */}
                <div className="bg-orange-400 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  <div className="text-white">
                    <IoPlayOutline size={20} />
                  </div>
                </div>
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto py-[20px] lg:py-[50px] px-[20px] lg:px-[60px] text-black bg-white body-font">
        <div className="container mx-auto flex px-5 items-center justify-center flex-col">
          <h1 className="text-black text-3xl text-bold mt-3">Why Choose Us</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam{" "}
          <br />
          pellentesque bibendum non dui volutpat fringilla bibendum.
          <Image
            className="mb-10 object-cover object-center w-1320px h-386px mt-1552px ml-300px mt-10"
            alt="hero"
            src={third}
          />
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto py-[20px] lg:py-[50px] px-[20px] lg:px-[60px] text-black body-font bg-white">
        <div className="container px-3  mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            <div className="p-4 md:w-1/3 flex justify-center">
              <div className="h-full border-2 pt-10 rounded-lg overflow-hidden">
                <Image
                  className="w-[60px] h-[60px] object-cover object-center mx-auto"
                  src={student}
                  alt="blog"
                />
                <div className="p-6 text-center">
                  <h1 className="title-font text-lg font-medium text-white mb-2 text-bold">
                    BEST CHEF
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex justify-center">
              <div className="h-full border-2 pt-10 rounded-lg overflow-hidden">
                <Image
                  className="w-[60px] h-[60px] object-cover object-center mx-auto"
                  src={coffee}
                  alt="blog"
                />
                <div className="p-6 text-center">
                  <h1 className="title-font text-lg font-medium text-white mb-2 text-bold">
                    120 Item food
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3 flex justify-center">
              <div className="h-full border-2 pt-10 rounded-lg overflow-hidden">
                <Image
                  className="w-[60px] h-[60px]  object-cover object-center mx-auto"
                  src={person}
                  alt="blog"
                />
                <div className="p-6 text-center">
                  <h1 className="title-font text-lg font-medium text-white mb-2 text-bold">
                    Clean Environment
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[url('/footerbg.png')] bg-no-repeat bg-right bg-bottom z-10">
      <div className={`bg-[#0D0D0DF2] text-[#FFF] font-inter`}>
        <div className="max-w-[1320px] px-[20px] sm:px-[60px] mx-auto ">
          <div className="max-w-[1170px] mx-auto flex flex-col gap-[30px] lg:gap-0 lg:flex-row justify-between items-center py-[50px] border-b-[1px] border-b-[#FF9F0D]">
            <div className="flex flex-col">
              <h3 className="font-helvetica text-[32px] font-bold">
                <span className="text-[#FF9F0D]">St</span>ill You Need Our
                Support ?
              </h3>
              <p className="m-0 font-inter text-[16px] font-normal">
                Don’t wait make a smart & logical quote here. Its pretty easy.
              </p>
            </div>
            <form action="" className="font-normal flex flex-col lg:flex-row">
              <input
                className="p-3 rounded-tl-[4px] rounded-bl-[4px] bg-[#FF9F0D] font-inter text-white placeholder-[#FFF] placeholder-opacity-60"
                type="text"
                placeholder="Enter Your Email"
              />
              <button
                type="submit"
                className="bg-white p-3 rounded-[4px] text-[#FF9F0D]"
              >
                Subscribe Now
              </button>
            </form>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-items-center items-center">
            <div className="flex flex-col gap-[20px] text-white p-4 rounded">
              <h3
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                className=" font-bold text-[24px]"
              >
                About Us.
              </h3>
              <p className="m-0 font-inter font-normal text-[16px]">
                Corporate clients and leisure travelers has been relying on
                Groundlink for dependab safe, and professional chauffeured car
                service in major cities across World.
              </p>
              <div className="flex items-center gap-[10px]">
                <div className="bg-[#FF9F0D] px-4 py-3 rounded-[4px]">
                  <i className="bi bi-clock-history"></i>
                </div>
                <div className="flex flex-col font-inter font-normal">
                  <h4 className="text-[18px]">Opening Houres</h4>
                  <p className="m-0 text-[14px]">Mon - Sat(8.00 - 6.00)</p>
                  <p className="m-0 text-[14px]">Sunday - Closed</p>
                </div>
              </div>
            </div>
            <div className="w-[100%]  flex flex-col gap-[20px] text-white p-4 rounded">
              <h3
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                className="font-bold text-[24px]"
              >
                Useful Links
              </h3>
              <ul className="flex flex-col gap-[20px] font-inter text-[20px] font-normal">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Partners</a>
                </li>
                <li>
                  <a href="">Team</a>
                </li>
                <li>
                  <a href="">Menu</a>
                </li>
                <li>
                  <a href="">Contacts</a>
                </li>
              </ul>
            </div>
            <div className="w-[100%]  flex flex-col gap-[20px] text-white p-4 rounded">
              <h3
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                className="font-bold text-[24px]"
              >
                Help ?
              </h3>
              <ul className="flex flex-col gap-[20px] font-inter text-[20px] font-normal">
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Term & conditions</a>
                </li>
                <li>
                  <a href="">Reporting</a>
                </li>
                <li>
                  <a href="">Documentation</a>
                </li>
                <li>
                  <a href="">Support Policy</a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="w-[100%] col-span-full lg:col-span-1 flex flex-col gap-[20px] text-white p-4 rounded">
              <h3
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                className="font-bold text-[24px]"
              >
                Recent Post
              </h3>

              <div className="flex flex-col gap-[20px]">
                <a href="" className="flex gap-[20px]">
                  <div className="w-[55px] h-[55px]">
                    <img
                      src="/footerimg.png"
                      className="w-[100%] h-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="font-inter font-normal">
                    <p className="m-0  text-[16px]">20 Feb 2022</p>
                    <p className="text-[18px]">Keep Your Business</p>
                  </div>
                </a>
                <a href="" className="flex gap-[20px]">
                  <div className="w-[55px] h-[55px]">
                    <img
                      src="/footerimg.png"
                      className="w-[100%] h-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="font-inter font-normal">
                    <p className="m-0  text-[16px]">20 Feb 2022</p>
                    <p className="text-[18px]">Keep Your Business</p>
                  </div>
                </a>
                <a href="" className="flex gap-[20px]">
                  <div className="w-[55px] h-[55px]">
                    <img
                      src="/footerimg.png"
                      className="w-[100%] h-[100%]"
                      alt=""
                    />
                  </div>
                  <div className="font-inter font-normal">
                    <p className="m-0  text-[16px]">20 Feb 2022</p>
                    <p className="text-[18px]">Keep Your Business</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-[#4F4F4F] text-white font-inter`}>
        <div className="max-w-[1320px] px-[20px] sm:px-[60px] py-[20px] lg:h-[100px] mx-auto flex-col lg:flex-row flex justify-between items-center">
          <p className="m-0 font-normal text-[16px] text-center">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="flex gap-[20px]">
            <a href="">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="">
              <i className="bi bi-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

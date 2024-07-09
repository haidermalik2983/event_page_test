import Brightness from "../UI/icons/Brightness";
import Dark from "../UI/icons/Dark";
import Fb from "../UI/icons/Fb";
import Insta from "../UI/icons/Insta";
import LinkedIn from "../UI/icons/linkedIn";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F0F0F] px-5 pt-12 pb-8 mt-20">
      <div className="w-full max-w-[1340px] mx-auto">
        <div className="flex justify-between flex-col lg:flex-row gap-12 md:gap-16 lg:gap-1">
          <div className="flex items-end gap-5 w-40">
            <a href="#/">
              <Dark />
            </a>
            <a
              href="#/"
              className="w-7 h-7 relative top-1 rounded-full bg-[#3E3E40] flex items-center justify-center p-1"
            >
              <Brightness />
            </a>
          </div>
          <div className="flex gap-10 justify-between md:justify-center lg:justify-center flex-wrap lg:flex-nowrap text-white font-poppins text-base opacity-70">
            <div className="block">
              <h3 className="font-poppins font-bold font-lg leading-5 text-white mb-5">
                Product
              </h3>
              <div className="footerLink flex flex-col gap-2 md:gap-5">
                <a href="#/">Courts</a>
                <a href="#/">Tournaments</a>
                <a href="#/">Lessons</a>
              </div>
            </div>
            <div>
              <h3 className="font-poppins font-bold font-lg leading-5 text-white mb-5">
                Cities
              </h3>
              <div className="footerLink flex flex-col gap-2 md:gap-5">
                <a href="#/">Chicago</a>
                <a href="#/">San Diego</a>
                <a href="#/">New York</a>
                <a href="#/">Boston</a>
                <a href="#/">Dallas</a>
                <a href="#/">Los Angeles</a>
                <a href="#/">Philadelphia</a>
              </div>
            </div>
            <div>
              <h3 className="font-poppins font-bold font-lg leading-5 text-white mb-5">
                Product
              </h3>
              <div className="footerLink flex flex-col gap-2 md:gap-5">
                <a href="#/">Tennnis at Maryland</a>
                <a href="#/">Fromuth Fall classNameic</a>
              </div>
            </div>
            <div>
              <h3 className="font-poppins font-bold font-lg leading-5 text-[#fff] mb-5">
                Company
              </h3>
              <div className="footerLink flex flex-col gap-2 md:gap-5">
                <a href="#/">About</a>
                <a href="#/">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="w-auto sm:w-40">
            <button
              className="px-5 py-2 rounded-full border border-[#BFBFBF] text-base text-[#fff] flex lg:ml-auto"
              type="button"
            >
              Create a Game
            </button>
          </div>
        </div>

        <div className="border w-full my-8 border-[#3e3e40]">

        </div>

        <div className="footerEndTap flex items-center justify-between flex-col-reverse sm:flex-row">
          <p className="text-base font-semibold text-[#808080]">
            {" "}
            2024 All rights reserved.
          </p>
          <div className="flex items-center gap-6 mb-3">
            <a className="w-6" href="#/">
              {" "}
              <Fb />
            </a>
            <a className="w-6" href="#/">
              <Insta />
            </a>
            <a className="w-6" href="#/">
              <LinkedIn />{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

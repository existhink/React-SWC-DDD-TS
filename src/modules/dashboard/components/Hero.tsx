// Images
import HeroImage from "@/app/assets/images/hero.png";

export const Hero = () => {
  return (
    <section className="font-be-vietnam bg-dark-1 h-screen">
      <nav className="px-4 mx-auto max-w-screen-2xl lg:px-24 lg:pt-7 pt-5">
        <div className="flex flex-col w-full lg:flex-row lg:items-center gap-5 divide-gray-700 lg:divide-x">
          <div className="flex items-center justify-between flex-none">
            <div className="flex items-center gap-2 text-xl text-white font-bold">
              <AppBaseSvg name="icon-checkmark" />
              Apiiyu.
            </div>
            <div>
              <button className="block p-1 outline-none lg:hidden mobile-menu-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`flex w-full mx-auto mobile-menu lg:block`}
            id="navigation"
          >
            <div className="flex flex-col items-baseline justify-between mx-auto mt-6 lg:flex-row lg:items-center lg:mt-0">
              <div className="flex flex-col w-full text-base font-normal text-white lg:flex-row lg:w-max lg:pl-4">
                <a href="#" className="py-3 pl-2 mx-2 lg:mr-9 lg:pl-0">
                  Pricing
                </a>
                <a href="#" className="py-3 pl-2 mx-2 lg:mr-9 lg:pl-0">
                  Features
                </a>
                <a href="#" className="py-3 pl-2 mx-2 lg:mr-9 lg:pl-0">
                  Showcase
                </a>
                <a href="#" className="py-3 pl-2 mx-2 lg:mr-9 lg:pl-0">
                  Tools
                </a>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-7 w-full px-3 mt-4 lg:mt-0 lg:w-max lg:px-0">
                <a
                  href="/authentication/login"
                  className="w-full lg:w-auto px-5 py-3 text-center rounded-lg flex lg:mx-auto bg-transparent transition ease-out duration-200 hover:bg-white hover:bg-opacity-30"
                >
                  <span className="text-base w-full font-semibold text-white">
                    Sign In
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-20 px-4 mx-auto max-w-screen-2xl lg:px-24">
        <div className="grid grid-cols-12 items-center justify-center">
          <div className="col-span-12 md:col-span-5 lg:col-span-6">
            <div>
              <div className="headline font-bold text-4xl lg:text-5xl text-white leading-normal lg:leading-snug">
                React SWC with
                <br className="d-none md:d-block" />
                DDD Pattern.
              </div>
              <div className="mt-5 mb-9">
                <p className="font-normal text-sm lg:text-base text-white leading-7">
                  No more wasting time from browsing around
                  <br className="d-none lg:d-block" />
                  just follow our best guidance in 2022
                </p>
              </div>
              <div className="flex items-center gap-7">
                <a href="#" className="py-3 px-5 rounded-lg bg-champ-green">
                  <span className="text-base text-center font-semibold text-dark-2">
                    Get Started
                  </span>
                </a>
                <a
                  href="#"
                  className="py-3 px-5 rounded-lg bg-transparent transition ease-out duration-200 hover:bg-white hover:bg-opacity-30"
                >
                  <span className="text-tile-grey font-normal underline text-base">
                    Watch Stories
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 lg:col-span-6 lg:mt-0 mt-14">
            <img src={HeroImage} alt="headerly-kodechamp" />
          </div>
        </div>
      </main>
    </section>
  );
};

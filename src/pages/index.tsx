import { type NextPage } from "next";
import Image from "next/image";
import { EventImage } from "../components/EventImage";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { event } from "../constants/data";
import CountdownTimer from "../components/Timer";
import RotatingFlowers from "../components/rotain";

// const TestPage: NextPage = () => {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-100 to-sky-200">
//       {/* <h1 className="mb-8 text-3xl font-bold text-[#1e3a8a]">
//         38th AIU INTER-UNIVERSITY SOUTH ZONE YOUTH FESTIVAL
//       </h1> */}
//       {/* <CountdownTimer targetDate="2024-12-26T00:00:00" /> */}
//       <RotatingFlowers
//         rotatingImage="flower_2.png"
//         staticImage="Group 1.png"
//         animationDuration="15s" // Optional: Adjust rotation speed
//         rotatingImageSize={{ width: "450px", height: "450px" }}
//         staticImageSize={{ width: "250px", height: "250px" }}
//       />
//       {/* <RotatingFlowers scale={1.5} /> */}
//       {/* <p className="mt-8 text-lg text-[#1e3a8a]">26th - 30th December 2024</p> */}
//     </div>
//   );
// };

// export default TestPage;

///////////////////////////////////////////////////////////////////////

const Home: NextPage = () => {
  const refEvents = useRef<null | HTMLDivElement>(null);
  const refContact = useRef<null | HTMLDivElement>(null);

  const handleEventsClick = () => {
    refEvents.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    refContact.current?.scrollIntoView({ behavior: "smooth" });
  };

  const router = useRouter();

  useEffect(() => {
    if (router.query.tab === "events") {
      handleEventsClick();
    } else if (router.query.tab === "contact") {
      handleContactClick();
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-custom-cream font-inria text-font-primary">
      <div className="absolute inset-0 bg-gradient-to-b from-custom-blue via-custom-cream to-custom-cream" />

      <NavBar
        handleEventsClick={handleEventsClick}
        handleContactClick={handleContactClick}
      />
      <div className="relative m-auto flex flex-col px-4 md:max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-4">
          {/* Main Image - Larger */}
          <div
            className="relative h-full w-full"
            // style={{ marginTop: "-100px" }} // Moves the component up by 20px
          >
            <RotatingFlowers
              rotatingImage="flower_2.png"
              staticImage="Group 1.png"
              animationDuration="15s" // Optional: Adjust rotation speed
              size="400px" // This controls the overall size of the component
            />
          </div>

          {/* Text and Countdown */}
          <div className=" relative z-20 ml-2 pb-0">
            <CountdownTimer
              targetDate="2024-12-26T00:00:00"
              size={{ width: "50px", height: "70px" }}
            />
            <h1
              className="mb-0 text-center font-poppins text-2xl font-bold text-shadow-right-sm md:text-4xl"
              style={{
                maxWidth: "100%",
                lineHeight: "1.2em",
                wordBreak: "break-word",
              }}
            >
              38th AIU Inter-University South&nbsp;Zone <br /> Youth Festival
            </h1>

            <h2 className="text-1xl mt-0 text-center font-inter font-bold">
              26th - 30th December 2024
            </h2>
            <div className="mb-8 mt-12 flex w-full flex-col gap-6 text-center md:flex-row md:justify-center">
              {/* Hosted By and Under the Aegis of Section */}
              <div className="flex flex-col items-center">
                <div className="h-fit whitespace-nowrap rounded-3xl px-6 py-2 font-instrument_sans font-bold tracking-widest text-black text-shadow-right-sm md:text-2xl">
                  Hosted By
                </div>
                <div className="relative mt-0 h-[120px] w-[120px] cursor-pointer md:h-[150px] md:w-[150px]">
                  <Image
                    src="/srm_logo.png"
                    alt="Hosted By Logo"
                    fill
                    className="absolute object-contain"
                  />
                </div>
                <div className="md:text-1xl h-fit whitespace-nowrap rounded-3xl px-6 py-2 font-instrument_sans font-bold tracking-widest text-black text-shadow-right-sm">
                  SRM institute of science and technoglogy{" "}
                </div>
              </div>

              {/* Under the Aegis of Section */}
              <div className="flex flex-col items-center">
                <div className="h-fit whitespace-nowrap rounded-3xl px-6 py-2 font-instrument_sans font-bold tracking-widest text-black text-shadow-right-sm md:text-2xl">
                  Under the Aegis of
                </div>
                <div className="relative mt-4 h-[120px] w-[120px] cursor-pointer md:h-[135px] md:w-[135px]">
                  <Image
                    src="/aiu_logo.png"
                    alt="Under the Aegis of Logo"
                    fill
                    className="absolute object-contain"
                  />
                </div>
                <div className="md:text-1xl h-fit whitespace-nowrap rounded-3xl px-6 py-2 font-instrument_sans font-bold tracking-widest text-black text-shadow-right-sm">
                  Association of Indian Universities, New Delhi{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/dance_bg.png')", // Correct path with leading slash
          minHeight: "400px", // Increase the minimum height of the background section
        }}
      >
        <div
          className="m-auto flex flex-col items-center py-12 px-4 md:max-w-7xl"
          ref={refEvents}
        >
          {/* Add top padding to avoid overlap */}
          <span className="mb-8 pt-12 text-3xl font-bold text-black md:text-4xl">
            EVENTS
          </span>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <EventImage
              src="event-music.png"
              alt="Dance event"
              name="Music"
              description={event.music}
            />
            <EventImage
              src="event-fineArts.png"
              alt="Fine Arts event"
              name="Fine Arts"
              description={event.fineArts}
            />
            <EventImage
              src="event-theatre.png"
              alt="Theatre event"
              name="Theatre"
              description={event.theatre}
            />
            <EventImage
              src="event-dance.png"
              alt="Dance event"
              name="Dance"
              description={event.dance}
            />
            <EventImage
              src="event-literary.png"
              alt="Literary event"
              name="Literary"
              description={event.literary}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

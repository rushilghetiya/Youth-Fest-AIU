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
          <div className="relative h-full w-full md:h-[600px] lg:h-[800px]">
            <RotatingFlowers
              rotatingImage="flower_2.png"
              staticImage="Group 1.png"
              animationDuration="15s" // Optional: Adjust rotation speed
              size="400px" // This controls the overall size of the component
            />
          </div>

          {/* Text and Countdown */}
          <div className="relative z-20 pb-0">
            <CountdownTimer targetDate="2024-12-26T00:00:00" />
            <h1 className="mb-0 text-center text-3xl font-thin text-shadow-right-sm md:text-5xl">
              38th AIU Inter-University South Zone Youth Festival
            </h1>
            <h2 className="text-1xl mt-0 text-center font-bold">
              26th - 30th December 2024
            </h2>
            <div className="mb-8 mt-12 flex w-full flex-col gap-6 text-center md:flex-row md:justify-between">
              {/* Hosted By and Under the Aegis of Section */}
              <div className="flex flex-col items-center">
                <div className="h-fit whitespace-nowrap rounded-3xl px-6 py-2 font-light tracking-widest text-black text-shadow-right-sm md:text-2xl">
                  Hosted By
                </div>
                <div className="relative mt-0 h-[120px] w-[120px] cursor-pointer md:h-[150px] md:w-[150px]">
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/ada6/05f4/368dcd56539ea345b48c9f9484ce3474?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=et-2hw9ClNI6rPwDGWBkZMcJCdxyKUxWzGhhc3nAObFwu8~EQiTW9ItikQuBSNcqEOMg715n0jJAp8YKO3M~i3CuAN5LiOQpqZAc3rb8unMW8YpDFjyj43DkfpvRCAKJfI~XUQ4UT2W4liw1T8aH8M3~tfX83Sue3RwCfxARuwpTvQ0tnQ8wvnDSXqApv9e74EXYh7X0gpSWTjLiIgnevIEh-FMzTkah4Kzd1Lk5vmrzmbhwu22ggjCb6xBguG63zqe4uaqfpdZtPI6QRRvHh5Opp-JCURomicslPDvjbZGDzN2Ah7TlMYor-A-eLKWGETXH~KaJ699R6mAXVOogLw__"
                    alt="Hosted By Logo"
                    fill
                    className="absolute object-contain"
                  />
                </div>
              </div>

              {/* Under the Aegis of Section */}
              <div className="flex flex-col items-center">
                <div className="h-fit whitespace-nowrap rounded-3xl px-6 py-2 font-light tracking-widest text-black text-shadow-right-sm md:text-2xl">
                  Under the Aegis of
                </div>
                <div className="relative mt-4 h-[120px] w-[120px] cursor-pointer md:h-[150px] md:w-[150px]">
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/56e4/9f2b/17a2c93895f6702af1aa72d9df4c8585?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oYslaisSKxWXPrjc3jYFdiBt6yhpVglroiHV8cFeWhahaIzLdVYUB-Tj11JD2t2JyqWVeiAhPVjRbyxWui0siGzlK0WeLNlL675LMvWjIhon4WCAdwNUiJ8KpsP5AED9VUPpRQGMpvRytjiqRVPQIyNlv90GJ3jsK-d5Ohtz8GlSKFdWLRb6GJ7B~w7Txcbpc~FGFGflOwwwWYsUN-JDz6y3prMU0YCxvMNszTlPOp5DsaMqIUNDULWsG1rZEDHI3H3qLXVizJl76Bs3odn7HDWaFoz1ZS2RKvBuanbEqx2nX32JZeyseR9YJfggC4ogljdCfAj7LKFWnJtvbcj6nQ__"
                    alt="Under the Aegis of Logo"
                    fill
                    className="absolute object-contain"
                  />
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Events Section */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/ac3f/805b/f5564d183bb3e99a54b84854b73c7c80?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j8xYP4cUrfgwj0pKW6eFjHGiN7S2lDvOV13paQgBbZXPuCld-QAIfuPQ6Txgpz5JLOzdV0zTgwecGo61ss9CNHMVFigt7N-xybEvKIfmdneVTkx~FA09WMsii264gYN3~sqV~cGGw6L6~tQ2P8sNAv5C9KEir2h7COTlO5~I9m2ziczwFfQ5zfmsg8eS47heLVFgVOYCyDGORMHjQgfAfvRl6wx67VvxU95Ugsa1wF6J-EWuFk533M4L42ycyJdtDr6Kw6IIvrNy70kW6zgWTuMD3YHZrwfDGD4tLvE5-ZtkyxI8BssUTXvFaWox-3ZJ61tmFIoWqcVHV5~FSNmvzw__')`,
          opacity: 0.2,
        }}
      >
        <div
          className="m-auto flex flex-col items-center py-12 px-4 md:max-w-7xl"
          ref={refEvents}
        >
          <span className="mb-8 text-3xl font-bold text-custom-cream md:text-4xl">
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
      <div className="bg-custom-blue py-8 text-center text-white">
        <p>Footer content here</p>
      </div>
    </div>
  );
};

export default Home;

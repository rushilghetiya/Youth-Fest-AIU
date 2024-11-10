import { type NextPage } from "next";
import Image from "next/image";
import { EventImage } from "../components/EventImage";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { event } from "../constants/data";

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
    <div className="min-h-screen bg-custom-cream font-inria uppercase text-font-primary">
      <div className="absolute inset-0 bg-gradient-to-b from-custom-blue via-custom-cream to-custom-cream" />

      <NavBar
        handleEventsClick={handleEventsClick}
        handleContactClick={handleContactClick}
      />
      <div className="relative m-auto flex flex-col px-4 md:max-w-6xl">
        <h1 className="mb-6 text-center text-3xl font-thin text-shadow-right-sm md:text-5xl">
          38th AIU Inter-University South Zone Youth Festival
        </h1>

        {/* Images Section - Restructured for mobile */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-4">
          <div className="relative h-[200px] w-[200px] md:h-[150px] md:w-[150px] lg:h-[350px] lg:w-[350px]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/92d4/cb55/32aa0de3d5e28859a2d591a1148f49e3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dm~r-IjwsSuqqBn~ynUQS6zXHYeQOOOCnXeCo1TfMX4-~UM7Jgok8dmKnxxs461hozAheaZ2g3Dnt~4kIGseUCqWCUF~Zx7ZFdRJTP5THXlotxQQ-tKSsGesYK1F8drEK3dmFliVn4i3zVxg5Z-ZQHGkxvZgGNHrDhvPwY-r2yaXHQnmeuIlsLkUrUOG6lv1s0HInHnIIdm-tJEmIvM5fXp7RY2zXLxQs37NgjWkh3BwtOvpDzKXhgVoVcX8StgfkHVMZhyZQpgusyKalfsVM0udoEW3ZnHMPZoJXNsISxomYXjGRBb682-lCa3X9bkr3W3v6m3RgLKJjNg2cB-GFQ__"
              alt="Home main image"
              fill
              className="absolute object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-start lg:mb-16">
            <Image
              src="https://s3-alpha-sig.figma.com/img/8cef/50e7/c840c365e61c9791b413f2b7933df907?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PnYXh0HzS9eVqJl0es1Uy6KTWkN1aUN0myDgZ-gX9Z1~-uCQMeWyxERqncFyqm9dHJiMXKei6lYL9lz0xGwmRzN-41wbcwGWhkbWXFYvDi3uy8P~YsjcidvS-q1DcrPYjWB1Az8pAIJyvirO-elK6FrPjXt3ThW4RzCO6TZFfzrLzqPamVPw5BbiglHZTra2UPyPWrU9JgxP6pRS4vlJo-C12y92IMM757ksWqQ3xwXyg-w5c8xlRCCB~aFgCx6CRSkjBkWT8kG4fYox32Mthf930EhSjLVmzzq99ot8~k4MNO32cwE7903XV3k5nXSgwB~EFuQUXGk0t2NgJ4h28Q__"
              alt="Home main image"
              width={350}
              height={100}
              className="object-cover"
            />
            <h3 className="mt-2 max-w-[8rem] text-center text-lg font-bold italic text-font-golden">
              Celebrating cultural legacy
            </h3>
          </div>
          <div className="relative h-[240px] w-[200px] md:h-[170px] md:w-[150px] lg:h-[350px] lg:w-[350px]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/9d61/5613/ca7e4803efbbf6c701b9bcd3aae40156?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M6yqyS0YY6VG~FaJYqXZsdap5lP651FZwDfIkilxis--aBZu66y6U1eFcA-jE3sqAf8MM3c5wPRXKur2bX~nwu3AK-qJs-PiXubE5jLYkM-I~Xa7f0NLTAurs57vKAyjDKFpNEuIPAvqsZdWUq-zWHgKO87FjCqkJXAERczNSjcZfc7ez6mE0~ieIK7tj55iKktnXiT0Fzf9TyWdPrnVinAjQtJFMIthvrQsVdwS~G7Nw-Rd6peLiCr1k1CfsaxCtXnG~4TF4QuNlOgwbuRZWAMYUGFh~dfiZsUiAPQSp-O6H3WGN5RnCYwGEettjnGvubeauVakcm5rmuEE7~UyIA__"
              alt="Home main image"
              fill
              className="absolute object-contain"
            />
          </div>
        </div>

        <h3 className="text-center text-xl font-thin tracking-wide text-shadow-right-sm md:text-4xl">
          26th - 30th December 2024
        </h3>
        <div className="mb-8 mt-12 flex w-full flex-col gap-6 text-center md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:max-w-[16rem]">
            <div className="h-fit whitespace-nowrap rounded-3xl bg-font-tertiary px-6 py-2 font-light tracking-widest text-shadow-right-sm md:text-2xl">
              Hosted By
            </div>
            <div className="relative h-[300px] w-[300px] cursor-pointer ">
              <Image
                src="https://s3-alpha-sig.figma.com/img/ada6/05f4/368dcd56539ea345b48c9f9484ce3474?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=et-2hw9ClNI6rPwDGWBkZMcJCdxyKUxWzGhhc3nAObFwu8~EQiTW9ItikQuBSNcqEOMg715n0jJAp8YKO3M~i3CuAN5LiOQpqZAc3rb8unMW8YpDFjyj43DkfpvRCAKJfI~XUQ4UT2W4liw1T8aH8M3~tfX83Sue3RwCfxARuwpTvQ0tnQ8wvnDSXqApv9e74EXYh7X0gpSWTjLiIgnevIEh-FMzTkah4Kzd1Lk5vmrzmbhwu22ggjCb6xBguG63zqe4uaqfpdZtPI6QRRvHh5Opp-JCURomicslPDvjbZGDzN2Ah7TlMYor-A-eLKWGETXH~KaJ699R6mAXVOogLw__"
                alt="Logo"
                fill
                className="absolute object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:max-w-[16rem]">
            <div className="h-fit whitespace-nowrap rounded-3xl bg-font-tertiary px-6 py-2 font-light tracking-widest text-shadow-right-sm md:text-2xl">
              Under the Aegis of
            </div>
            <div className="relative mt-8 h-[200px] w-[200px] cursor-pointer ">
              <Image
                src="https://s3-alpha-sig.figma.com/img/56e4/9f2b/17a2c93895f6702af1aa72d9df4c8585?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oYslaisSKxWXPrjc3jYFdiBt6yhpVglroiHV8cFeWhahaIzLdVYUB-Tj11JD2t2JyqWVeiAhPVjRbyxWui0siGzlK0WeLNlL675LMvWjIhon4WCAdwNUiJ8KpsP5AED9VUPpRQGMpvRytjiqRVPQIyNlv90GJ3jsK-d5Ohtz8GlSKFdWLRb6GJ7B~w7Txcbpc~FGFGflOwwwWYsUN-JDz6y3prMU0YCxvMNszTlPOp5DsaMqIUNDULWsG1rZEDHI3H3qLXVizJl76Bs3odn7HDWaFoz1ZS2RKvBuanbEqx2nX32JZeyseR9YJfggC4ogljdCfAj7LKFWnJtvbcj6nQ__"
                alt="Logo"
                fill
                className="absolute object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-custom-cream via-transparent to-custom-blue" />
        <div
          className="h-[16rem] w-full bg-[url('/border-img.jpg')] bg-repeat-x"
          style={{ backgroundSize: "contain" }}
        ></div>
      </div>
      {/* Background Image Section */}
      {/* <div className="relative w-full">
        <div className="relative mx-auto aspect-[16/9] w-full">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-custom-cream via-transparent to-transparent" />
          <Image
            src="https://s3-alpha-sig.figma.com/img/ac3f/805b/f5564d183bb3e99a54b84854b73c7c80?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j8xYP4cUrfgwj0pKW6eFjHGiN7S2lDvOV13paQgBbZXPuCld-QAIfuPQ6Txgpz5JLOzdV0zTgwecGo61ss9CNHMVFigt7N-xybEvKIfmdneVTkx~FA09WMsii264gYN3~sqV~cGGw6L6~tQ2P8sNAv5C9KEir2h7COTlO5~I9m2ziczwFfQ5zfmsg8eS47heLVFgVOYCyDGORMHjQgfAfvRl6wx67VvxU95Ugsa1wF6J-EWuFk533M4L42ycyJdtDr6Kw6IIvrNy70kW6zgWTuMD3YHZrwfDGD4tLvE5-ZtkyxI8BssUTXvFaWox-3ZJ61tmFIoWqcVHV5~FSNmvzw__"
            alt="Background image"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div> */}

      {/* Events Section */}
      <div className="bg-[#12365e] bg-pattern bg-center bg-repeat bg-blend-color-burn">
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

      {/* Contact Section */}
      <div ref={refContact}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

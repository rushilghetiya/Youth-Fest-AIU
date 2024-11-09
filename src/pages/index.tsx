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
    <div className="min-h-screen bg-zinc-100 font-inria text-font-primary">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-600 via-zinc-200 to-zinc-100" />

      <NavBar
        handleEventsClick={handleEventsClick}
        handleContactClick={handleContactClick}
      />
      <div className="relative m-auto flex flex-col md:max-w-6xl">
        <h1 className="text-center text-3xl font-extrabold uppercase ">
          38th AIU Inter-University South Zone Youth Festival
        </h1>
        <main className="flex w-full flex-wrap items-center justify-center py-6 ">
          <div className="relative h-[150px] w-[150px] sm:h-[250px] sm:w-[250px]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/92d4/cb55/32aa0de3d5e28859a2d591a1148f49e3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dm~r-IjwsSuqqBn~ynUQS6zXHYeQOOOCnXeCo1TfMX4-~UM7Jgok8dmKnxxs461hozAheaZ2g3Dnt~4kIGseUCqWCUF~Zx7ZFdRJTP5THXlotxQQ-tKSsGesYK1F8drEK3dmFliVn4i3zVxg5Z-ZQHGkxvZgGNHrDhvPwY-r2yaXHQnmeuIlsLkUrUOG6lv1s0HInHnIIdm-tJEmIvM5fXp7RY2zXLxQs37NgjWkh3BwtOvpDzKXhgVoVcX8StgfkHVMZhyZQpgusyKalfsVM0udoEW3ZnHMPZoJXNsISxomYXjGRBb682-lCa3X9bkr3W3v6m3RgLKJjNg2cB-GFQ__"
              alt="Home main image"
              fill
              className="absolute"
            />
          </div>
          <div className="mb-20 flex w-min flex-col items-center justify-start">
            <Image
              src="https://s3-alpha-sig.figma.com/img/375c/99a3/db8e14843080adeda2cbdcd477e350fd?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l5BWTRkeamV3sB1UlgXMu6ts2k4vKk58T1T5TNVPGZ1syUjOiGWBYTZfPHWN3fbIDYDXr6xkY559tJKDDiSu26ML3kmEF3otCaOgNerCNJW~jGIEvpFsjBhWC1IqV0QbPKsnTp6q4jHeE-jfVcbr2tujXGpPfF79z8X-M6AXIY76x1AYKyGJwdbCWt0cjjmJC~Ud8QNwCY-Esh-FsVUPp1muygafaDucsSZdaGknqQyceMdRKl30aeV0iSb-9yrrjEJxiVvMvn-WPeG-ITg4IIAqT7bEIstOIVUCR22Z6B2t8YxokYmfEzu2rxKDjpW6zPW29CwQGe4Tee6shxKLVw__"
              alt="Home main image"
              width={350}
              height={100}
              className="object-cover"
            />
            <h3 className=" max-w-[8rem] text-center text-lg font-bold uppercase italic ">
              Celebrating cultural legacy
            </h3>
          </div>
          <div className="relative h-[170px] w-[150px] sm:h-[280px] sm:w-[250px]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/9d61/5613/ca7e4803efbbf6c701b9bcd3aae40156?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M6yqyS0YY6VG~FaJYqXZsdap5lP651FZwDfIkilxis--aBZu66y6U1eFcA-jE3sqAf8MM3c5wPRXKur2bX~nwu3AK-qJs-PiXubE5jLYkM-I~Xa7f0NLTAurs57vKAyjDKFpNEuIPAvqsZdWUq-zWHgKO87FjCqkJXAERczNSjcZfc7ez6mE0~ieIK7tj55iKktnXiT0Fzf9TyWdPrnVinAjQtJFMIthvrQsVdwS~G7Nw-Rd6peLiCr1k1CfsaxCtXnG~4TF4QuNlOgwbuRZWAMYUGFh~dfiZsUiAPQSp-O6H3WGN5RnCYwGEettjnGvubeauVakcm5rmuEE7~UyIA__"
              alt="Home main image"
              fill
              className="absolute"
            />
          </div>
        </main>
        <h3 className="mb-8 text-center text-lg font-bold ">
          23rd - 27th December 2022
        </h3>
        <div className="flex w-full justify-between text-center">
          <div className=" flex max-w-[16rem] flex-col items-center">
            <div className=" h-fit max-w-[16rem] rounded-3xl bg-font-primary px-6 py-2 text-4xl font-bold text-white">
              Hosted By
            </div>
            <h3>SRM Institute of Science and Technology</h3>
          </div>
          <div className=" flex max-w-[16rem] flex-col items-center">
            <div className="h-fit max-w-[32rem] whitespace-nowrap rounded-3xl bg-font-primary px-6 py-2 text-4xl font-bold text-white">
              Organized By
            </div>
            <h3>SRM Sigaram</h3>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="relative mx-auto aspect-[16/9] w-[100vw] ">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-100 via-transparent to-transparent" />
          {/* Background Image */}
          <Image
            src="https://s3-alpha-sig.figma.com/img/ac3f/805b/f5564d183bb3e99a54b84854b73c7c80?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j8xYP4cUrfgwj0pKW6eFjHGiN7S2lDvOV13paQgBbZXPuCld-QAIfuPQ6Txgpz5JLOzdV0zTgwecGo61ss9CNHMVFigt7N-xybEvKIfmdneVTkx~FA09WMsii264gYN3~sqV~cGGw6L6~tQ2P8sNAv5C9KEir2h7COTlO5~I9m2ziczwFfQ5zfmsg8eS47heLVFgVOYCyDGORMHjQgfAfvRl6wx67VvxU95Ugsa1wF6J-EWuFk533M4L42ycyJdtDr6Kw6IIvrNy70kW6zgWTuMD3YHZrwfDGD4tLvE5-ZtkyxI8BssUTXvFaWox-3ZJ61tmFIoWqcVHV5~FSNmvzw__"
            alt="Background image"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-custom-red">
        <div
          className="m-auto flex flex-col items-center pb-12 md:max-w-7xl"
          ref={refEvents}
        >
          <span className="text-4xl font-bold text-custom-cream">EVENTS</span>
          <div className="flex flex-wrap justify-center gap-12">
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

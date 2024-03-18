// LIBRARIES
import React, { useEffect, useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// COMPONENTS
import useWindowDimensions from "~/components/hooks/useWindowDimensions";
import ChevronDown from "~/components/svgs/chevronDown";
import ReactJSLogo from "~/components/svgs/reactjsLogo";
import ContactForm from "~/components/forms/contactForm";
import SlideCard from "~/components/ui/slideCard";
import NextJsLogo from "~/components/svgs/nextjsLogo";
import DrizzleLogo from "~/components/svgs/drizzleLogo";

// COMPONENT
const Home: NextPage = () => {
  // Hero Row BG Calulation
  const [bgImg, setBgImg] = useState("lake-flow-bw-600.jpg");
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width <= 600 && bgImg !== "lake-flow-bw-600.jpg")
      setBgImg("lake-flow-bw-600.jpg");
    if (width > 600 && width <= 960) setBgImg("lake-flow-bw-960.jpg");
    if (width > 960 && width <= 1280) setBgImg("lake-flow-bw-1280.jpg");
    if (width > 1280) setBgImg("lake-flow-bw-1920.jpg");
  }, [bgImg, width]);

  return (
    <>
      <Head>
        <title>{"Oh hai <3 Neffrey"}</title>
        <meta name="description" content="Oh hai <3 Neffrey" />
        <link rel="icon" href="/CircleLogoIco.ico" />
        <meta property="og:image" content="/CircleLogo.png" />
      </Head>

      <main
        className="flex min-h-screen flex-col items-center justify-center"
        style={{ scrollBehavior: "smooth" }}
      >
        <div
          // Hero Row Container
          className="hero relative grid min-h-[90vh] grid-cols-1 justify-items-center sm:grid-cols-7 sm:grid-rows-5"
          style={{
            backgroundImage: `url(/${bgImg})`,
          }}
        >
          <div className="hero-overlay absolute left-0 top-0 bg-primary mix-blend-multiply" />
          <div className="bg-base-100/45 hero-overlay absolute left-0 top-0 mix-blend-multiply" />
          <div
            // Hero Card
            className="z-10 flex flex-col items-center justify-center rounded-lg bg-black/60 p-10 sm:col-span-5 sm:col-start-3 sm:row-span-5"
          >
            <Link href="./#about">
              <h1 className="cursor-pointer text-center text-5xl lowercase transition ease-linear hover:-translate-y-1 hover:scale-105 hover:text-success">
                Meet Neffrey
              </h1>
            </Link>
            <div className="p-4" />
            <Link href="/#flowarts">
              <div className="cursor-pointer text-center text-2xl lowercase transition ease-linear hover:-translate-y-1 hover:scale-105 hover:text-success">
                Flow Artist
              </div>
            </Link>
            <div className="p-1" />
            <Link href="/#graphic-design">
              <div className="cursor-pointer text-center text-2xl lowercase transition ease-linear hover:-translate-y-1 hover:scale-105 hover:text-success">
                Graphic Designer
              </div>
            </Link>
            <div className="p-1" />
            <Link href="/#web-developer">
              <div className="cursor-pointer text-center text-2xl lowercase transition ease-linear hover:-translate-y-1 hover:scale-105 hover:text-success">
                Web Developer
              </div>
            </Link>
            <div className="p-4" />
            <Link href="/#contact">
              <button className="btn-lg btn border-accent-focus bg-accent-focus font-bold text-white hover:-translate-y-1 hover:scale-105 hover:border-accent-focus hover:bg-accent">
                Send Me A Message
              </button>
            </Link>
          </div>

          <Link
            // Scroll down chevron
            href="./#about"
            className="absolute bottom-5 left-[50%-1.5rem] z-10 h-12 w-12 cursor-pointer text-6xl transition ease-linear hover:h-14 hover:w-14 hover:-translate-y-1 hover:scale-105"
            passHref
          >
            <ChevronDown className="fill-white hover:fill-success" />
          </Link>
        </div>

        <div
          // About Row Container
          id="about"
          className="grid min-w-full grid-cols-1 justify-items-center bg-base-100 px-8 py-20 lg:grid-cols-2 xl:grid-cols-7"
        >
          <div
            className="relative max-w-xs lg:max-w-xs xl:col-span-2 xl:col-start-2"
            // className="max-w-xs rounded-lg bg-center shadow-xl lg:max-w-xs xl:col-span-2 xl:col-start-2"
          >
            <Image
              alt="Selfie of Neffrey"
              className="rounded-lg shadow-xl"
              src="/selfie.jpg"
              // placeholder="blur"
              sizes="(max-width: 640px) 100vw, 640px"
              width={640}
              height={480}
            />
          </div>
          <div
            // Text box container
            className="mt-10 max-w-md rounded-md bg-black/40 p-10 lg:mt-0 xl:col-span-3"
          >
            <div className="flex flex-col">
              <h3 className="text-center text-4xl lowercase tracking-wider">
                {`About Me`}
              </h3>
              <div className="p-4" />
              <p className="text-base">
                {`At the start of 2020, I moved across the country to the
                Minneapolis MN area for a complete career change. With that
                change, I am no longer offering web development services.
                Nowadays you can find me at my job as a casino blackjack dealer,
                dancing around with my flow props, sometimes making graphic art,
                honing my web dev skills, and spending time with friends when
                possible!`}
              </p>
            </div>
          </div>
        </div>

        {/*
         ***    Flowarts Row container
         */}
        <div
          id="flowarts"
          className="grid min-w-full grid-cols-1 justify-items-center bg-primary px-8 py-20 lg:grid-cols-2 lg:px-24 xl:px-40"
        >
          <div
            className="relative max-w-xs lg:col-start-2 lg:row-start-1 lg:max-w-xs"
            // className="max-w-xs rounded-lg bg-center shadow-xl lg:max-w-xs xl:col-span-2 xl:col-start-2"
          >
            <Image
              alt="Selfie of Neffrey"
              className="rounded-lg shadow-xl"
              src="/konnexion.jpg"
              sizes="(max-width: 640px) 100vw, 640px"
              width={480}
              height={720}
            />
          </div>
          <div
            // Text box container
            className="mt-10 max-w-md rounded-md bg-black/60 p-10 lg:col-start-1 lg:row-start-1 lg:mt-0"
          >
            <div className="flex flex-col">
              <h3 className="text-center text-4xl lowercase tracking-wider">
                Flowarts <br />
                Dancing With Props
              </h3>
              <div className="p-3" />
              <p className="text-base">
                Prop-based dance, aka flowarts in my world, is what I love. It
                is my daily meditation and my favorite thing to do for fun.
              </p>
              <div className="p-1" />
              <p className="text-base">
                After being around it for just a few months, I made it a part of
                my daily life. It has been such a blessing in my life both
                physically AND mentally.
              </p>
              <div className="p-1" />
              <p className="text-base">
                {`I've already been lucky enough to perform in front of hundreds as a
            festival dancer. My goal is to one day travel around performing and
            teaching workshops at festivals.`}
              </p>
            </div>
          </div>
        </div>

        {/*
         ***    Graphic Design Row container
         */}
        <div
          id="graphic-design"
          className="grid min-w-full grid-cols-1 justify-items-center bg-base-100 px-8 py-20 lg:grid-cols-2 xl:grid-cols-9"
        >
          <div className="relative m-auto max-w-xs lg:max-w-lg xl:col-span-4 xl:col-start-2 xl:mr-20">
            <Image
              alt="Forest Wolf - Graphic Art Piece by Neffrey"
              className="rounded-lg shadow-xl"
              src="/forest_wolf.jpg"
              sizes="(max-width: 1024px) 100vw, 1024px"
              width={1024}
              height={602}
            />
          </div>
          <div
            // Text box container
            className="mt-10 max-w-md rounded-md bg-black/40 p-10 lg:mt-0 xl:col-span-4 xl:mr-24"
          >
            <div className="flex flex-col">
              <h3 className="text-center text-4xl lowercase">Graphic Design</h3>
              <div className="p-3" />
              <p className="text-base">
                {`Graphic design has been a hobby of mine for 15 years now. Previously
            I really enjoyed digital painting like this Forest Wolf. These types
            of projects were put on the back as most of my time in Photoshop and
            Illustrator was spent making functional art like logos and user
            interfaces. In the future I'd like to have merch with my designs for
            sale here so stay tuned.`}
              </p>
            </div>
          </div>
        </div>

        {/*
         ***    Web Dev Row container
         */}
        <div
          id="web-developer"
          className="flex min-w-full justify-center bg-secondary px-12 py-20 sm:px-24 md:px-32 lg:px-12"
        >
          <div
            // Text box container
            className="flex flex-col items-center rounded-lg bg-black/50 p-12 lg:max-w-[65vw]"
          >
            <h2 className="text-center text-4xl lowercase tracking-wider">
              Fullstack Web Development
            </h2>
            <div className="p-6" />
            <p className="text-base">
              {`Web development projects is where most of my
            time has been gone to lately. I’ve been honing my skills in the React
            ecosystem while thoroughly enjoying building my own projects like `}
              <span className="link text-warning hover:text-success">
                <a
                  target="_blank"
                  href="https://ndiceroller.com/"
                  rel="noopener noreferrer"
                >
                  ndiceroller
                </a>
              </span>
            </p>
            <div className="p-2" />
            <p className="text-base">
              {`For a while there I ended up losing my love for development and code.
          I have refound this passion after taking a big long break from it and
          only coming back to it as a hobby. I love building fun things when the
          mood for code and not building when I'm not in the mood.`}
            </p>
            <hr className="m-14 w-1/2" />
            <h3 className="text-center text-3xl lowercase">{`My favorite tech`}</h3>
            <div className="p-6" />
            <div
              // Logos Grid
              className="grid h-full w-full grid-cols-1 justify-items-center gap-10 sm:grid-cols-1 lg:grid-cols-3"
            >
              <SlideCard
                className="rounded-lg shadow-xl"
                frontTitle="ReactJS"
                frontImg={<ReactJSLogo className="text-lg" />}
                backContent="The powerhouse component based JavaScript library used for
                    building dynamic and interactive user interfaces."
              />
              <SlideCard
                className="rounded-lg shadow-xl"
                frontTitle="NextJS"
                frontImg={<NextJsLogo className="text-lg" />}
                backContent="The widely used JS framework built on top of React that
                    enables both server-side and client-side rendering for
                    production ready webapps."
              />
              <SlideCard
                className="rounded-lg shadow-xl"
                frontTitle="Drizzle ORM"
                frontImg={<DrizzleLogo className="text-lg" />}
                backContent="A modern and powerful tool that provides a type-safe and seamless database SQL access
                    and manipulation."
              />
            </div>
          </div>
        </div>

        {/*
         ***    Contact Row container
         */}
        <div
          id="contact"
          className="flex min-w-full flex-col items-center justify-center p-20"
        >
          <div
            // Text box container
            className="max-w-[70vw] rounded-lg bg-black/50 p-12"
          >
            <div className="grid-col-1 grid justify-items-center gap-10 lg:grid-cols-2">
              <div className="flex max-w-lg flex-col">
                <h2 className="mb-10 text-center text-4xl lowercase">
                  {`Get In Touch`}
                </h2>
                <div className="p-2" />
                <p className="text-base">
                  {`Currently I not offering design and development services. I
                  want any time spent on graphic art and web development to be
                  on my own projects.`}
                </p>
                <div className="p-2" />
                <p className="text-base">
                  {`There are many beautiful ideas in my head. I want to see some
                  of them actually get made.`}
                </p>
                <div className="p-2" />
                <p className="text-base">
                  {`If you do have a project that you reeaaallyyy want my help
                  with and you are prepared to pay BIG BUCKS then send me a
                  message and I’ll get back to you as soon as I can.`}
                </p>
              </div>
              <div className="flex w-full items-center justify-center">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

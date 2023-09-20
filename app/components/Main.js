'use client'

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import InstaFeeds from './InstaFeeds';

// import Slideshow from "./Slideshow";
const TOKEN = 'IGQWRPOFNINWVKdGw3akIzT1NaWmtrWlYxQmlFR3gxQ1BqMWJHaVBfalVMazRORkZApOUljV1RhOW9kblg5R19IMlBuTlBFTWlsYW9sZAElQWVBLZAkkwOVBnVm4wbmplMGhmYkRVdkdUQnQ2V1NPVjBQZA1pHelJ2TzAZD'

export default function Main() {
  return (
    <section class="text-black body-font lg:pt-20">
      <div class="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div class="flex flex-col w-full mb-2 text-left text-center ">
          <h1 class="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
            <span>Get Your </span>
            <br class="hidden lg:block"></br>
            Winning Edge
          </h1>
          <br></br>
          <p class="mx-auto  text-xl font-normal leading-relaxed text-gray-400 dark:text-gray-400 lg:w-2/3">
            Awning Support / Driver Development / Kart Hire
          </p>
        </div>
      </div>
      <div>
        <div class="container px-10 py-10 mx-auto lg:w-4/6">
          <InstaFeeds token={TOKEN} limit={3} />
        </div>
        {/* <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12}/> */}
        {/* <Slideshow /> */}
        {/* <img
          class="object-cover object-center w-full mb-10 border-gray-400 dark:border-gray-400 g327 border rounded-lg shadow-md"
          alt="hero"
          src="./images/placeholder.png"
        ></img> */}
      </div>
      <section class="text-gray-400 body-font">
        <section class="text-gray-400 body-font mb-20">
          <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 sm:w-1/3 w-1/2">
                <h2 class="title-font font-medium sm:text-5xl text-3xl text-white">
                  <CountUp end={940} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p class="leading-relaxed">Clients</p>
              </div>
              <div class="p-4 sm:w-1/3 w-1/2">
                <h2 class="title-font font-medium sm:text-5xl text-3xl text-white">
                  <CountUp end={740} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p class="leading-relaxed">Finals</p>
              </div>
              <div class="p-4 sm:w-1/3 w-1/2">
                <h2 class="title-font font-medium sm:text-5xl text-3xl text-white">
                  <CountUp end={315} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p class="leading-relaxed">Wins</p>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-400 body-font" id="services">
          <div class="container px-5 mx-auto">
            <div class="text-center mb-1">
              <h2 class="text-5xl font-medium title-font text-white mb-4">
                Services
            </h2>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-white inline-flex"></div>
              </div>
            </div>
          </div>
        </section>

        <div class="container px-5 py-24 mx-auto flex flex-wrap mb-20">
          {/* <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"> */}
          <div class="w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src="./images/wr6.png"
            ></img>
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Kart Hire
                </h2>
                <p class="leading-relaxed text-lg">
                  Experience the speed of outdoor karting. With a mechanic and coach providing the support and training, how fast can you go?
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Awning Support
                </h2>
                <p class="leading-relaxed text-lg">
                  We provide the infrastructure you need to go racing!  With awning, mechanics, coaching, buscuits and team mates all the way to the front!
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Driver Development
                </h2>
                <p class="leading-relaxed text-lg">
                  We want you to win, so do you you with bespoke packages catering for any experience level, we have you covered every step of the way to you first win and we are just getting started!
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Sim Coaching
                </h2>
                <p class="leading-relaxed text-lg">
                  Get every advantage you can on your opposition and all their trick before your race weekend.  Unlock your potiental and get that perfect lap indoors.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Kart Prep and Transport
                </h2>
                <p class="leading-relaxed text-lg">
                  Fail to prepare, prepare to fail.  With over 6 years of kart preparation experience, we can check, prepare and transport you kart ready for your race weekend.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Success
                </h2>
                <p class="leading-relaxed text-lg">
                  We win together.  With a proven record in creating winners do you want to celebrate a win with us one day?!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="text-gray-400 body-font">
        <h1>Testimonials</h1>
      </section>
      <section class="text-gray-400 body-font">
        <h1>About</h1>
      </section> */}

      <section class="text-gray-400 body-font" id="about">
        <div class="container px-5 mx-auto">
          <div class="text-center mb-1">
            <h2 class="text-5xl font-medium title-font text-white mb-4">
              About
            </h2>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-400 body-font mb-20">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:pr-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Ben Winter
                </h2>
                <p class="leading-relaxed text-lg mb-4">
                  I started my first go karting school 5 years ago at Absolute Karting, an incredible indoor circuit where I found my passion for maintaining karts and unlocking a drivers
                  potential with driver coaching.
                </p>
                <p class="leading-relaxed text-lg mb-4">
                  Win Racing was born 3 years ago, with the mission statement to provide an affordable route into outdoor karting, to give the &apos;dads and lads&apos; an opportunity to rade against the big teams, to get the big results, but without the big price tag!
                </p>
                <p class="leading-relaxed text-lg mb-4">
                  Whether it is coaching you are after, a helping hand into karting, or a friendly race team around you, one thing is certain, we will win together!
                </p>
              </div>
            </div>
          </div>
          {/* <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"> */}
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src="./images/ben.png"
            ></img>
          </div>
        </div>
      </section>

      <section class="text-gray-400 body-font" id="testimonials">
        <div class="container px-5 mx-auto">
          <div class="text-center mb-20">
            <h2 class="text-5xl font-medium title-font text-white mb-4">
              Testimonials
            </h2>
            {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400s">
              Here is our company
            </p> */}
            <div class="flex mt-6 justify-center mb-10">
              <div class="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
            <div class="container px-5 py-16 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="p-4 lg:w-1/4 md:w-1/2">
                  <div class="h-full flex flex-col items-center text-center">
                    <div class="w-full">
                      <h2 class="title-font font-medium text-lg text-white">
                        Kev
                      </h2>
                      <h3 class="text-gray-400 mb-3">Parent</h3>
                      <p class="mb-4">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <span class="inline-flex">
                        <a class="text-gray-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-gray-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>



                <div class="p-4 lg:w-1/4 md:w-1/2">
                  <div class="h-full flex flex-col items-center text-center">
                    <div class="w-full">
                      <h2 class="title-font font-medium text-lg text-white">
                        Stig
                      </h2>
                      <h3 class="text-gray-400 mb-3">Top Gear</h3>
                      <p class="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <span class="inline-flex">
                        <a class="text-gray-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-gray-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-gray-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="p-4 lg:w-1/4 md:w-1/2">
                  <div class="h-full flex flex-col items-center text-center">
                    <div class="w-full">
                      <h2 class="title-font font-medium text-lg text-white">
                        Lewis Hamilton
                      </h2>
                      <h3 class="text-gray-400 mb-3">Racing Driver</h3>
                      <p class="mb-4">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <span class="inline-flex">
                        <a class="text-gray-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-gray-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-gray-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="p-4 lg:w-1/4 md:w-1/2">
                  <div class="h-full flex flex-col items-center text-center">
                    <div class="w-full">
                      <h2 class="title-font font-medium text-lg text-white">
                        Jane Smith
                      </h2>
                      <h3 class="text-gray-400 mb-3">Parent</h3>
                      <p class="mb-4">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <span class="inline-flex">
                        <a class="text-gray-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-gray-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-gray-400">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-400 body-font" id="contact">
        <div class="container px-5 mx-auto">
          <div class="text-center mb-20">
            <h2 class="text-5xl font-medium title-font text-white mb-4">
              Contact
            </h2>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-400 body-font">
        <div class="container px-5 mx-auto">
          <form class="lg:w-1/2">
            <div class="mb-6">
              {/* <label for="email" class="block mb-2 text-lg font-medium text-gray-400 dark:text-white">Your name</label> */}
              <label for="email" class="block mb-2 text-lg text-gray-400 dark:text-white">Your name</label>
              <input type="email" id="email" class="bg-gray-50 border border-gray-400 text-gray-400 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required />
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-lg text-gray-400 dark:text-white">Your email</label>
              <input type="email" id="email" class="bg-gray-50 border border-gray-400 text-gray-400 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required />
            </div>
            <div class="mb-6">
              <label for="message" class="block mb-2 text-lg text-gray-400 dark:text-white">Your message</label>
              <textarea id="message" rows="4" class="block p-2.5 w-full text-lg text-gray-400 bg-gray-50 rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
          </form>
        </div>
      </section>

    </section >
  );
}

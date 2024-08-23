'use client';
import Image from "next/image";
import Demo from "./demo";
import Header from "./header";
import Description from "./description";
import Navi from "./navi";
import HoverCard from './hovercard';
import Spotlight from "./spotlight";
export default function Home() {
  return (
    <main className="bg-gray-900">
      <header class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0 py-4">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
          <div class="lg:flex-1 flex items-center gap-1.5">
            <div data-headlessui-state="" class="relative inline-flex text-left rtl:text-right"><div id="headlessui-menu-button-nW6MJMAKszN-0" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="" class="inline-flex w-full" role="button" data-n-ids="{&quot;nW6MJMAKszN-0&quot;:&quot;nW6MJMAKszN-0&quot;}">
              <a href="/" class="router-link-active router-link-exact-active flex gap-2 items-end" aria-current="page">
                <div class="relative inline-flex">
                  <div className="lg:flex-1 flex items-center font-semibold gap-1.5">
                    Compeasy.ai
                  </div>
                </div>
              </a>
            </div>
            </div>
          </div>
          <ul class="items-center gap-x-8 hidden lg:flex">
            <li class="relative"><div class="relative" data-headlessui-state="">
              <div class="inline-flex w-full" role="button" data-n-ids="{&quot;nin1Bero9DC-0&quot;:&quot;nin1Bero9DC-1&quot;,&quot;nin1Bero9DC-1&quot;:&quot;nin1Bero9DC-2&quot;}" id="headlessui-popover-button-nin1Bero9DC-1" aria-expanded="false" data-headlessui-state=""><a class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" href="/docs">
                Who
                <span class="iconify i-ph:caret-down transform transition-transform duration-200 flex-shrink-0 w-4 h-4" aria-hidden="true" ></span>
              </a>
              </div>
            </div>
              <div hidden="" className="fixed top-1 left-1 w-1 h-0 p-0 -m-1 overflow-hidden whitespace-nowrap border-0 hidden"></div>
            </li><li class="relative"><div class="relative" data-headlessui-state="">
              <div class="inline-flex w-full" role="button" data-n-ids="{&quot;nin1Bero9DC-0&quot;:&quot;nin1Bero9DC-3&quot;,&quot;nin1Bero9DC-1&quot;:&quot;nin1Bero9DC-4&quot;}" id="headlessui-popover-button-nin1Bero9DC-3" aria-expanded="false" data-headlessui-state=""><a class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" href="/modules">
                What
                <span class="iconify i-ph:caret-down transform transition-transform duration-200 flex-shrink-0 w-4 h-4" aria-hidden="true" ></span>
              </a>
              </div>
            </div>
              <div hidden="" className="fixed top-1 left-1 w-1 h-0 p-0 -m-1 overflow-hidden whitespace-nowrap border-0 hidden"></div>
            </li><li class="relative"><div class="relative" data-headlessui-state="">
              <div class="inline-flex w-full" role="button" data-n-ids="{&quot;nin1Bero9DC-0&quot;:&quot;nin1Bero9DC-5&quot;,&quot;nin1Bero9DC-1&quot;:&quot;nin1Bero9DC-6&quot;}" id="headlessui-popover-button-nin1Bero9DC-5" aria-expanded="false" data-headlessui-state="">
                <a class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" href="/templates">
                  Where
                  <span class="iconify i-ph:caret-down transform transition-transform duration-200 flex-shrink-0 w-4 h-4" aria-hidden="true" >
                  </span>
                </a>
              </div>
            </div>
              <div hidden="" className="fixed top-1 left-1 w-1 h-0 p-0 -m-1 overflow-hidden whitespace-nowrap border-0 hidden"></div>
            </li>
            <li class="relative"><div class="relative" data-headlessui-state="">
              <div class="inline-flex w-full" role="button" data-n-ids="{&quot;nin1Bero9DC-0&quot;:&quot;nin1Bero9DC-7&quot;,&quot;nin1Bero9DC-1&quot;:&quot;nin1Bero9DC-8&quot;}" id="headlessui-popover-button-nin1Bero9DC-7" aria-expanded="false" data-headlessui-state=""><a class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" href="/enterprise">
                Why
                <span class="iconify i-ph:caret-down transform transition-transform duration-200 flex-shrink-0 w-4 h-4" aria-hidden="true" ></span>
              </a>
              </div>
            </div>
              <div hidden="" className="fixed top-1 left-1 w-1 h-0 p-0 -m-1 overflow-hidden whitespace-nowrap border-0 hidden">
              </div>
            </li>
            <li class="relative"><div class="relative" data-headlessui-state="">
              <div class="inline-flex w-full" role="button" data-n-ids="{&quot;nin1Bero9DC-0&quot;:&quot;nin1Bero9DC-7&quot;,&quot;nin1Bero9DC-1&quot;:&quot;nin1Bero9DC-8&quot;}" id="headlessui-popover-button-nin1Bero9DC-7" aria-expanded="false" data-headlessui-state=""><a class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" href="/enterprise">
                When
                <span class="iconify i-ph:caret-down transform transition-transform duration-200 flex-shrink-0 w-4 h-4" aria-hidden="true" ></span>
              </a>
              </div>
            </div>
              <div hidden="" className="fixed top-1 left-1 w-1 h-0 p-0 -m-1 overflow-hidden whitespace-nowrap border-0 hidden">
              </div>
            </li>
            <li class="relative">
              <a class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" href="/blog">
                How
              </a>
            </li>
          </ul>
          <div class="flex items-center justify-end lg:flex-1 gap-1.5">
            <div class="relative inline-flex">
              <button type="button" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center" aria-label="Search"><span class="iconify i-ph:magnifying-glass-duotone flex-shrink-0 h-5 w-5" aria-hidden="true" ></span>
              </button>
            </div><div class="relative inline-flex">
              <button type="button" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center" aria-label="Switch to light mode">
                <span class="iconify i-ph:moon-duotone flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
              </button>
            </div><div class="relative inline-flex"><a class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center" href="https://go.nuxt.com/github" rel="noopener noreferrer" target="_blank"><span class="iconify i-simple-icons:github flex-shrink-0 h-5 w-5" aria-hidden="true" ></span>
              <span class=""></span>
            </a>
            </div>
            <button type="button" class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden" aria-label="Open Menu"><span class="iconify i-ph:list flex-shrink-0 h-5 w-5" aria-hidden="true" ></span>
            </button>
          </div>
        </div>
      </header>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-12">
      </main> */}
      <div className="py-24 sm:py-32 md:py-40 relative dark:bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
          <div className="text-center relative z-[1]">
            {/* <img src="/fullbgdsm.png" class="w-full h-[215vh] overflow-hidden absolute opacity-20 md:opacity-90 z-0" /> */}
            <div class="mb-10">
              <a class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 text-xs gap-x-1.5 px-2.5 py-1.5 ring-1 ring-inset ring-current text-primary-500 dark:text-primary-400 disabled:bg-transparent dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center font-semibold hover:bg-gray-500 rounded-full" href="/">
                <span class="">
                  Introducing Compeasy.ai
                </span>
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </a>
            </div>
            <h1 class="font-bold text-[36px] sm:text-[48px] md:text-[68px] leading-[40px] sm:leading-[54px] md:leading-[78px] overflow-visible font-uncut-sans sm:mb-2 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100/75 via-white to-gray-200/75 transition xl:animate-fade-in-down duration-500 delay-100">
              The Ultimate
              <br />
              <span class="text-primary block lg:inline-block">
                English Writing Trump Card
              </span>
            </h1>
            <div class="mt-6 text-lg tracking-tight text-gray-400">
              Compeasy.ai is a <a href="https://dictionary.cambridge.org/us/dictionary/english/framework" rel="noopener noreferrer" target="_blank" class="font-medium hover:underline underline-offset-2">tool</a> that transforms struggling students into proficient writers.
              <br />
              Automate accurate and efficient assesment and feedback for writings with confidence.
            </div>
            <div class="flex flex-wrap gap-x-6 gap-y-3 justify-center">
              <div class="mt-8 flex flex-row items-center justify-center lg:justify-start transition xl:animate-fade-in-down duration-500 delay-500">
                <div class="flex items-center text-gray-50 transform font-medium uppercase text-xs sm:px-0 px-5 text-center sm:text-xs rounded-xl leading-tight">
                  <span class="">Backed BY</span>
                </div>
                <div class="-ml-2 sm:ml-3 flex items-center justify-start">
                  {/* <img src="/yc.svg" class="h-6" alt="Y Combinator Logo" /> */}
                  <a href="https://www.hkstp.org/en/"><Image src="/hkstp-logo-dark-mode.svg" width={50} height={50} /></a>
                  {/* <span class="ml-[6px] bg-gradient-to-br from-white to-mendable-300 bg-clip-text text-transparent sm:inline-block text-sm font-semibold">
                Combinator
              </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center ">
        <HoverCard /><HoverCard /><HoverCard /><HoverCard />
      </div> */}
      <Demo />
      <div className="py-24 sm:py-32 md:py-40 relative dark:bg-gradient-to-b from-gray-950 to-gray-900">

      </div>
      <div className="flex items-center justify-center ">
        <Spotlight />
      </div>
      <section className="w-full px-10 py-10 sm:mt-10 z-100 text-gray-50 lg:px-0 tails-selected-element">
        <div className="max-w-4xl pt-10 sm:pt-0 md:py-20 mx-auto ">
          <div class="max-w-3xl mx-auto text-center pb-4 md:pb-8">
          </div>
          <div className="mt-4 mb-2 grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-2 grid-rows-1">
          </div>
        </div>
        <div className="max-w-4xl pt-10 sm:pt-0 md:py-20 mx-auto ">
        </div>
      </section>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mx-auto">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-800 hover:bg-neutral-700/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Student{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Access writing assignments, view feedback and track progress.
          </p>
        </a>
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-800 hover:bg-neutral-700/30"
          target="_blank"
          rel="noopener noreferrer"        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Teacher{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Assign writing tasks, monitor student progress, provide feedback, and manage classroom settings.
          </p>
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-800 hover:bg-neutral-700/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            School admin{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Manage users, content, and settings across the platform.
          </p>
        </a>
      </div>
      <div className="relative mt-8 flex flex-col items-center md:mt-0 md:px-28">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Student{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>
      </div>
    </main>
  );
}
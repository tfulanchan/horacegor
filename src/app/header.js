import Image from "next/image";

export default function header() {
    <>
        <header className="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 pt-3 pb-3 -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0">
            <div className="mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
                <div className="lg:flex-1 flex items-center font-semibold gap-1.5">
                    Compeasy.ai
                </div>
                {/* <ul className="items-center gap-x-8 hidden lg:flex">
            <li className="relative">your buddy to 5** in English</li>
          </ul> */}
                <div className="flex items-center justify-end lg:flex-1 gap-1.5">
                    <div className="relative inline-flex">why</div>
                    <div className="relative inline-flex">feature</div>
                    <div className="relative inline-flex">pricing</div>
                    <button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden" aria-controls="mobile-menu-4" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg class="hidden h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                </div>
            </div>
        </header>
        <div className="z-100 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <Image
                    src="/narrates.png"
                    alt="narrates. Logo"
                    className="dark:invert"
                    width={50}
                    height={12}
                    priority
                />
                <p>narrates.</p>
            </div>

            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                <a
                    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By{" "}
                    <h1
                        width={100}
                        height={24}
                        priority
                        className="font-mono font-bold"
                    >Horace</h1>
                    &
                    <h1
                        width={100}
                        height={24}
                        priority
                        className="font-mono font-bold"
                    >
                        Digi
                    </h1>
                </a>
            </div>
        </div>
    </>
}
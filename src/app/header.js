import Image from "next/image";

export default function header() {
    <>
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
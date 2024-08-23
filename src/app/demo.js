import Image from "next/image";

export default function demo() {
    return (
        <>
            <div className="tracking=[-2.93px] pt-3 mb-8 text-center text-[24px] font-bold leading-none md:text-[40px]">
                All-in-One Writing Ability Enhancement Platform
            </div>
            <div class="relative mt-8 flex flex-col items-center md:mt-0 md:px-28">
                <Image src="/laptop.png"
                    className="z-10 h-auto w-[300px] md:block md:h-[518px] md:w-[930px] md:min-w-[930px]"
                    width={930}
                    height={518}
                />
                <div className="absolute top-[10px] z-[10] w-[220px] bg-white md:top-[20px] md:block md:h-[427.5px] md:w-[700px] ">
                </div>
                <Image src="/Solution_1.webp"
                    className="absolute top-[10px] z-[11] w-[220px] h-[140px]	transition-opacity duration-[1.2s] md:top-[20px] md:block md:h-[427.5px] md:w-[700px]"
                    width={700}
                    height={427.5}
                />
                {/* <Image src="/left-triangle.svg" width="360" height="711" class="absolute left-[-100px] top-[-160px] hidden md:block" />
                <Image src="/right-triangle.svg" width="360" height="711" class="absolute right-[-100px] top-[-160px] hidden md:block" /> */}
            </div>
        </>
    )
}
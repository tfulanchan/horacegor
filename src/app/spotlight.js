import { useEffect, useRef } from "react";

const Spotlight = () => {
  const cardsContainer = useRef(null);

  const applyOverlayMask = (e) => {
    const documentTarget = e.currentTarget;

    if (!cardsContainer.current) {
      return;
    }

    const x = e.pageX - cardsContainer.current.offsetLeft;
    const y = e.pageY - cardsContainer.current.offsetTop;

    cardsContainer.current.setAttribute(
      "style",
      `--x: ${x}px; --y: ${y}px; --opacity: 1`
    );
  };

  useEffect(() => {
    document.body.addEventListener("pointermove", (e) => {
      applyOverlayMask(e);
    });

    return () => {
      document.body.removeEventListener("pointermove", (e) => {
        applyOverlayMask(e);
      });
    };
  }, []);

  return (
    <>
      <main className="max-w-[1000px] p-14">
        <h1 className="text-center mb-5 text-2xl">Pricing</h1>
        <div className="relative" ref={cardsContainer}>
          <div className="flex flex-wrap gap-10">
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#eceff133] border border-solid rounded-xl transition-colors bg-[#212121] hover:bg-[#303030]">
              <h2>Student</h2>
              <p>$9.99</p>
              <ul className="list-disc">
                <li>Access to standard workouts and nutrition plans</li>
                <li>Email support</li>
              </ul>
              <a
                href="#Student"
                className="block bg-black rounded-lg p-3 w-full text-center font-semibold mt-auto"
              >
                Get Started
              </a>
            </div>
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#eceff133] border border-solid rounded-xl transition-colors bg-[#212121] hover:bg-[#303030]">
              <h2>Educator</h2>
              <p>$19.99</p>
              <ul className="list-disc">
                <li>Access to advanced workouts and nutrition plans</li>
                <li>Priority Email support</li>
                <li>Exclusive access to live Q&A sessions</li>
              </ul>
              <a
                href="#Educator"
                className="block bg-black rounded-lg p-3 w-full text-center font-semibold mt-auto"
              >
                Upgrade to Educator
              </a>
            </div>
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#eceff133] border border-solid rounded-xl transition-colors bg-[#212121] hover:bg-[#303030]">
              <h2>Admin</h2>
              <p>$29.99</p>
              <ul className="list-disc">
                <li>Access to all premium workouts and nutrition plans</li>
                <li>24/7 Priority support</li>
                <li>1-on-1 virtual coaching session every month</li>
                <li>Exclusive content and early access to new features</li>
              </ul>
              <a
                href="#Admin"
                className="block bg-black rounded-lg p-3 w-full text-center font-semibold mt-auto"
              >
                Go Admin
              </a>
            </div>
          </div>

          {/* twin cards */}
          <div
            className="flex flex-wrap gap-10 select-none pointer-events-none absolute inset-0"
            style={{
              opacity: "var(--opacity, 0)",
              mask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
              WebkitMask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 50%
                )`,
            }}
          >
            {/* card */}
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#f5ff3c] border border-solid rounded-xl transition-colors bg-[#767221] text-transparent">
              <h2>Student</h2>
              <p>$9.99</p>
              <ul className="list-disc">
                <li>Access to standard workouts and nutrition plans</li>
                <li>Email support</li>
              </ul>
              <a
                href="#Student"
                className="block bg-[#e9af1d] rounded-lg p-3 w-full text-center font-semibold mt-auto"
              >
                Get Started
              </a>
            </div>
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#3cffce] border border-solid rounded-xl transition-colors bg-[#217661] text-transparent">
              <h2>Educator</h2>
              <p>$19.99</p>
              <ul className="list-disc">
                <li>Access to advanced workouts and nutrition plans</li>
                <li>Priority Email support</li>
                <li>Exclusive access to live Q&A sessions</li>
              </ul>
              <a
                href="#Educator"
                className="block bg-[#1de9b6] rounded-lg p-3 w-full text-center font-semibold mt-auto"
              >
                Upgrade to Educator
              </a>
            </div>
            <div className="flex-1 flex flex-col items-start p-10 gap-5 text-white border-[#ce3cff] border border-solid rounded-xl transition-colors bg-[#762169] text-transparent">
              <h2>Admin</h2>
              <p>$29.99</p>
              <ul className="list-disc">
                <li>Access to all premium workouts and nutrition plans</li>
                <li>24/7 Priority support</li>
                <li>1-on-1 virtual coaching session every month</li>
                <li>Exclusive content and early access to new features</li>
              </ul>
              <a
                href="#Admin"
                className="block bg-[#e91db3] rounded-lg p-3 w-full text-center font-semibold mt-auto"
              >
                Go Admin
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Spotlight;
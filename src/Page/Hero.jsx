function Hero() {
  return (

    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-24 pt-44">
      <div className="relative z-10">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg className="h-[60rem] w-[100rem] flex-none stroke-violet-950 opacity-20" aria-hidden="true">
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width="200"
                height="200"
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none"></path>
              </pattern>
            <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
              <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth="0"></path>
            </svg>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"></rect>
          </svg>
        </div>
      </div>
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-bold tracking-tight text-slate-800 text-6xl">
            Inclusive 
            <span className="text-violet-600"> underwear</span>
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Ropa interior inclusiva, diseñada para celebrar y respetar la diversidad de cuerpos y géneros, ofreciendo comodidad y estilo para todas las identidades.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700 focus-visible:outline-violet-600"
            >
              Ver productos
            </button>
          </div>
        </div>
        <div className="mx-auto mt-10 container">
          <img
            className="w-full rounded-2xl border border-slate-100 transition trnas hover:scale-105 ease-out duration-300 "
            src="/images/Poratada-inclusive.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

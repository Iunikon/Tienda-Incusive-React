function Hero() {
return (

<div>
    <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-bold tracking-tight text-slate-800 text-6xl">
                Inclusive
                <span className="text-violet-600"> underwear</span>
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
                Ropa interior inclusiva, diseñada para celebrar y respetar la diversidad de cuerpos y géneros,
                ofreciendo comodidad y estilo para todas las identidades.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
                <button
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700 focus-visible:outline-violet-600">
                    Ver productos
                </button>
            </div>
        </div>
        <div className="mx-auto mt-10 container">
            <img className="w-full rounded-2xl border border-slate-100 transition trnas hover:scale-105 ease-out duration-300 "
                src="/images/Poratada-inclusive.jpg" alt="" />
        </div>
    </div>
</div>
);
}

export default Hero;
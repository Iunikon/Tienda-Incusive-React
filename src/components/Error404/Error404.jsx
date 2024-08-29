const Error404 = () => {

return (

    <div className="container relative z-10 px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="w-full lg:w-2/5">
            <p className="text-sm font-medium text-violet-500">
                Error 404 
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-gray-800">
                Page not found
            </h1>
            <p className="mt-4 text-gray-500">
                Sorry, the page you are looking for doesn't exist. Here are some
                helpful links:
            </p>

            <div className="flex items-center mt-6 gap-x-3">
                <button
                    className="flex items-center justify-center text-gray-700 px-4 py-2.5 text-sm font-semibold bg-transparent rounded-full bg-gray-200  hover:bg-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-5 h-5 mr-1 rtl:rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Atras</span>
                </button>

                <button
                    className="px-4 py-2.5 text-sm font-semibold bg-transparent rounded-full bg-violet-600 hover:bg-violet-700 focus:bg-violet-600 focus:outline-none focus:shadow-outline text-white ">
                    Volver al inicio
                </button>
            </div>
        </div>

        <div className=" w-full mt-8 lg:w-3/5 lg:mt-0">
                    <img
            className="w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover"
            src="/images/Poratada-inclusive.jpg"
            alt="Page not found inclusive"
            />
        </div>
    </div>
);
};

export default Error404;
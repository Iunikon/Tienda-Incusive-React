const Spinner = () => {
return (
<div className="flex items-center justify-center  min-h-[45vh]" aria-label="Loading...">
    <div
        className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-violet-600 border-solid rounded-full animate-spin">
    </div>
</div>
);
};

export default Spinner;
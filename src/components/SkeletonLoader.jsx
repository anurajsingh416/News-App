export default function SkeletonLoader() {
    return (
        <>
            
            <div className="flex justify-center items-center bg-gray-200 py-4">
                <div className="flex max-w-3xl rounded overflow-hidden shadow-lg bg-white animate-pulse w-full mx-4">
                    <div className="flex flex-col flex-grow px-6 py-4 space-y-4">
                        <div className="relative ">
                            <div className=" flex-grow px-6 py-4 space-y-4 w-3/4 block">
                                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                                <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                            </div>
                            <div className="h-28 md:h-32 lg:h-32 absolute top-0 right-0 float-right bg-gray-300 rounded w-2/6 md:w-1/4 lg:w-1/4"></div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="h-6 ml-6 bg-gray-300 rounded w-1/4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
import { Link } from "react-router-dom";

export default function NewsItem({name,author,title,description,url,urlToImage,content}) {
    return (
        <>
            
            <div className="flex justify-around items-center bg-gray-200  p-y-4">
                <div className="p-6 my-2 m-4 bg-white flex flex-row md:flex-row lg:flex-row w-full max-w-xl md:max-w-3xl lg:max-w-3xl overflow-hidden items-center  shadow-2xl rounded-lg">
                    <div className="flex flex-col space-y-1 mr-2 flex-grow">
                        <Link to={url} target="_blank" rel="" className="block">
                            <h2 className="font-bold text-md mg:text-xl lg:text-xl hover:underline">
                                {title}
                            </h2>
                        </Link>
                        <p
                            className={`text-gray-500 hover:text-blue-500 hover:underline hidden md:block lg:block `}
                        >
                            <a href={url}>Read full article</a>
                        </p>
                        
                    </div>
                    <div className="max-w-32 md:max-w-64 lg:max-w-64 float-right">
                        <img
                            src={urlToImage}
                            className="w-full max-h-40 rounded"
                            alt={title}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

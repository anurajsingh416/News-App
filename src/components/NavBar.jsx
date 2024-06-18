import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
export default function NavBar({setSearch}) {
    const [activeCategory, setActiveCategory] = useState('');
    const location = useLocation();
    useEffect(() => {
        if(location.pathname == '/'){
            setActiveCategory('/headlines');
        }else{
            setActiveCategory(location.pathname);
        }
    }, [location.pathname])

    const [visible, SetVisible] = useState(true);

    useEffect(()=>{
        let prevScrollPos = window.scrollY;
        const handleScroll = () =>{
            const currentScrollPos = window.scrollY;
            SetVisible(prevScrollPos > currentScrollPos || currentScrollPos < 40);
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    const categories = [
        "Headlines",
        "Entertainment",
        "Business",
        "Sports",
        "Technology",
        "Health",
        "Science",
        "Politics"
    ];
    function handleCategory(category) {
        setActiveCategory(`/${category.toLowerCase()}`);
    }

    return (
        <>
            <nav className={`px-12 py-2  text-center font-semibold flex justify-between w-full bg-gray-900 text-white font-serif shadow-lg shadow-gray-400 ${visible?"block":"hidden"} transition-all durstion-500`}>
                <div className="flex-grow flex lg:justify-center items-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl items-center">Hindustan Times</h1>
                </div>
                <div className="flex items-center p-1 hover:outline outline-2 cursor-pointer rounded-full" onClick={()=>{
                    setSearch();
                }}>
                    <CiSearch size={28} />
                    <span className="hidden md:inline">Search</span>
                </div>
            </nav>
            <nav className={`px-12 py-1 z-10 w-full ${!visible?"fixed":"block"} overflow-x-auto whitespace-nowrap bg-white`}>
                <ul className="flex space-x-6">
                    {categories.map((category, index) => (
                        <li key={index} className={`cursor-pointer text-lg p-1 hover:text-blue-400 ${ activeCategory === `/${category.toLowerCase()}`?"text-blue-400 border-b-4 border-blue-400":"text-black"} `}><Link to={`/${category.toLowerCase()}`} className="" onClick={() => handleCategory(category)}>{category} </Link></li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
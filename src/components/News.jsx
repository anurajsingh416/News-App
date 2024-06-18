import NewsItem from "./NewsItem";
import axios from "axios";
import sampleData from "../utils/sampleData";
import SkeletonLoader from "./SkeletonLoader";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useState, useEffect} from 'react';
export default function News({category, showSearch}){
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(''); 

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedSearchQuery(searchQuery);
        },3000)
        return ()=>{
            clearTimeout(handler);
        }
    },[searchQuery])

    useEffect(() =>{
        const getArticles = async()=>{
            setLoading(true);
            setError(null);
            try{
                const response = await axios.get(`https://gnews.io/api/v4/top-headlines`,{
                    params:{
                        category:category !== 'headlines' ? category :'',
                        q:debouncedSearchQuery,
                        apikey:import.meta.env.VITE_GNEWS_API_KEY,
                        lang:"en",
                        // pageSize:100,
                        page: page
                    }
                })
                const fetchedArticles = response.data.articles;
                setArticles((prev)=>
                    page === 1 ? fetchedArticles:[...prev, ...fetchedArticles]
                );
                if(fetchedArticles.length === 0 || fetchedArticles.length < 10){
                    setHasMore(false);
                }
            }catch(error) {
                // setError(error.response.data.message)
                console.error(error);
            }
            setLoading(false);
        }
        getArticles();
    },[category,page,debouncedSearchQuery]);

    const fetchMoreData = () => {
        setPage((prevPage) => prevPage+1);
    }
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setPage(1);
        setHasMore(true);
    };

    return (
        <div className="">
            {showSearch && <div className="mb-4 mx-4">
                <input 
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="px-4 py-2 border rounded w-full"
                />
            </div>
            }
        <InfiniteScroll
        dataLength = {articles.length}
        next = {fetchMoreData}
        hasMore = {hasMore}
        loader = {hasMore && <p  className="text-center text-base bg-blue-400">Loading more articles...</p>}
        endMessage = {
            <p style={{textAlign: 'center' }} className="text-center text-base bg-blue-400">Yay! You have seen it all</p>
        }
        >
            <h1 className="text-gray-700 font-serif font-bold text-xl text-center"><span className="text-blue-400">[</span>Top News<span className="text-blue-400">]</span></h1>
            {loading && <p className="text-center text-base bg-blue-400">Loading...</p>}
            {loading && Array.from({length:10}).map((_,index)=><SkeletonLoader key={index}/>)}
            {error && (<p>{error}</p>)}
            {
            articles.map((item,index)=>(
                <NewsItem 
                    key={index}
                    name={item.source.name}
{/*                     author={item.author} */}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    urlToImage={item.image}
                    content={item.content}
                />)
            )
            }
        </InfiniteScroll>
        </div>
    );
}

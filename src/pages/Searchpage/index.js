import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import {useDebounce} from "../../hooks/useDebounce";
import './SearchPage.css'

const SearchPage = () => {
    const navigate = useNavigate()
    const [searchResults, setSearchResults] = useState([]);
 const {search} = useLocation()
    const useQuery = () => {
        return new URLSearchParams(search);
    };
    let query = useQuery();
    const searchTerm = query.get("q");
    const debouncedSearchTerm = useDebounce(searchTerm,1000)
    console.log(searchTerm);
    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchSearchMovie(debouncedSearchTerm);
        }else{
            setTimeout(()=>{
                navigate('/',{replace:true})
            },1000)
           
        }
    }, [debouncedSearchTerm]);

    const fetchSearchMovie = async (debouncedSearchTerm) => {
        try {
            const request = await axios.get(
                `/search/multi?include_adult=false&query=${debouncedSearchTerm}`
            );
            console.log(request);
            setSearchResults(request.data.results);
        } catch (error) {}
    };
    console.log(searchResults);

    const renderSearchResults = () => {
        return searchResults.length > 0 ? (
            <section className='search-container'>
                {searchResults.map((movie) => {
                    if (
                        movie.backdrop_path !== null &&
                        movie.media_type !== "person"
                    ) {
                        const movieImageUrl =
                            "http://image.tmdb.org/t/p/w500" +
                            movie.backdrop_path;

                        return (
                            <div className='movie'>
                                <div className='movie__conlumn-poster'
                                onClick={()=>{navigate(`/${movie.id}`,{state:{movie}})}}>
                                    <img
                                        src={movieImageUrl}
                                        alt='movie image'
                                        className='moive__poster'
                                    />
                                </div>
                            </div>
                        );
                    }
                })}
            </section>
        ) : (
            <section className="no-results">
                <div className="no-results__text">
                    <p>찾고하는 검색어"{debouncedSearchTerm}"없다</p>
                </div>
            </section>
        );
    };
    return renderSearchResults();
};


export default SearchPage;

import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const DetailPage = ({ movie }) => {
    const location = useLocation();
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState({});
    console.log(location, movieId);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(`/movie/${movieId}`);

            console.log(request);
            setMovieData(request.data);
        };
        fetchData();
    }, []);
    if(!movieData){
        return <div>...loading</div>;
    }
    return (
        <section>
            <img
                src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
                alt='modal_poster-img'
                className='modal__poster-img'
            />
        </section>
    );
};

export default DetailPage;

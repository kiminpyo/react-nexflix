import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import MovieModal from "./MovieModal";
const Row = ({ isLargeRow, title, id, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});
    useEffect(() => {
        fetchMovieData();
    }, []);
    const fetchMovieData = async () => {

        const request = await axios.get(fetchUrl);
        console.log(request.data);
        setMovies(request.data.results);
    };

    const handleClick = (item) => {
        setModalOpen(true);
        setMovieSelected(item);
    };
    console.log(movieSelected);
    return (
        <section className='row'>
            <h2>{title}</h2>
            <div className='slider'>
                <div className='slider__arrow-left'>
                    <span
                        className='arrow'
                        onClick={() => {
                            document.getElementById(id).scrollLeft -=
                                window.innerWidth;
                        }}>
                        {"<"}
                    </span>
                </div>
                <div id={id} className='row__posters'>
                    {movies.map((item) => (
                        <img
                            onClick={() => handleClick(item)}
                            key={item.id}
                            className={`row__poster ${
                                isLargeRow && "row__posterLarge"
                            }`}
                            src={`https://image.tmdb.org/t/p/original/${
                                isLargeRow
                                    ? item.poster_path
                                    : item.backdrop_path
                            }`}
                            alt={item.name}
                        />
                    ))}
                </div>
                <div className='slider__arrow-right'>
                    <span
                        className='arrow'
                        onClick={() => {
                            document.getElementById(id).scrollLeft +=
                                window.innerWidth;
                        }}>
                        {">"}
                    </span>
                </div>
            </div>
            {modalOpen && (
                <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
            )}
        </section>
    );
};

export default Row;

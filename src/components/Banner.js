import React, { useState, useEffect, useCallback } from "react";
import axios from "../api/axios";
import requests from "../api/requests";
import "./Banner.css";
import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;
export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.85;
    border: none;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100;
    }
`;
const Banner = React.memo(() => {
    console.log("랜더");
    const [movie, setMovie] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
        fetchData();
    }, []);
    const bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
    };

    const fetchData = async () => {
        // 현재 상영중인 영화
        const request = await axios.get(requests.fetchNowPlaying);
        console.log(request);

        const movieId =
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ].id;

        // 특정 영화의 더 상세한 정보가져오기
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: "videos" },
        });
        console.log(movieDetail);

        setMovie(movieDetail);
    };

    const truncate = useCallback(
        (overview, maxlength) => {
            return overview?.length > maxlength
                ? overview.slice(0, maxlength - 1) + "..."
                : overview;
        },
        [movie]
    );
    const PlayButton = ({ props }) => {
        if (props.videos.results.length >= 1) {
            return (
                <button
                    className='banner__button play'
                    onClick={() => setIsClicked(true)}>
                    Play
                </button>
            );
        } else {
            return null;
        }
    };

    if (!isClicked) {
        return (
            <header className='banner' style={bannerStyle}>
                <div className='banner__contents'>
                    <h1 className='banner__title'>
                        {movie.title || movie.name || movie.original_name}
                    </h1>

                    <div className='banner__buttons'>
                        {movie.title && <PlayButton props={movie} />}
                        <button className='banner__button info'>
                            More Information
                        </button>
                    </div>
                    <h1 className='banner__description'>
                        {truncate(movie.overview, 100)}
                    </h1>
                </div>
                <div className='banner--fadeBottom' />
            </header>
        );
    } else {
        return (
            <Container>
                <HomeContainer>
                    <Iframe
                        width='640'
                        height='360'
                        src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=0&playlist=${movie.videos.results[0].key}`}
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; fullscreen'></Iframe>{" "}
                </HomeContainer>
            </Container>
        );
    }
});

export default Banner;

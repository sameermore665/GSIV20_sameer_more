import React, { useEffect, useState } from "react";
import Axios from "axios";
//import { API_KEY } from "../App";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 2px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 400px;
  border: 1px solid lightgray;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  
`;
const MovieName = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 550;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 80%;
  cursor: pointer;
  opacity: 0.9;
`;
const poster_link = "https://image.tmdb.org/t/p/w400";
const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=509f948a394c82461342104f61f96a82&language=en-US`,
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <Container>
      {movieInfo ? (
        <>
          <CoverImage src={poster_link + movieInfo?.poster_path} alt={movieInfo?.title} />
          <InfoColumn>
            <MovieName>
              {movieInfo?.Type} <span>{movieInfo?.title}</span>
            </MovieName>
            <MovieInfo>
              IMDB Rating: <span>{movieInfo?.vote_average}</span>
            </MovieInfo>
            <MovieInfo>
              Release Date: <span>{movieInfo?.release_date}</span>
            </MovieInfo>
            <MovieInfo>
              Language: <span>{movieInfo?.original_language}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime/Min: <span>{movieInfo?.runtime}</span>
            </MovieInfo>
            <MovieInfo>
              Details: <span>{movieInfo?.overview}</span>
            </MovieInfo>
           
           
        
          </InfoColumn>
          <Close onClick={() => props.onMovieSelect()}>X</Close>
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};
export default MovieInfoComponent;
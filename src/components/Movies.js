/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} />
              </Link>
            </Wrap>
          ))}
        <Wrap>
          <img src="https://filmspell.com/wp-content/uploads/2018/04/october-Movie-Review.jpeg"></img>
        </Wrap>
        <Wrap>
          <img src="https://filmspell.com/wp-content/uploads/2018/04/october-Movie-Review.jpeg"></img>
        </Wrap>
        <Wrap>
          <img src="https://filmspell.com/wp-content/uploads/2018/04/october-Movie-Review.jpeg"></img>
        </Wrap>
        <Wrap>
          <img src="https://filmspell.com/wp-content/uploads/2018/04/october-Movie-Review.jpeg"></img>
        </Wrap>
        <Wrap>
          <img src="https://filmspell.com/wp-content/uploads/2018/04/october-Movie-Review.jpeg"></img>
        </Wrap>
        <Wrap>
          <img src="https://filmspell.com/wp-content/uploads/2018/04/october-Movie-Review.jpeg"></img>
        </Wrap>
        <Wrap>
          <img src="https://filmspell.com/wp-content/uploads/2018/04/october-Movie-Review.jpeg"></img>
        </Wrap>
        <Wrap>
          <img src="https://filmspell.com/wp-content/uploads/2018/04/october-Movie-Review.jpeg"></img>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow: hidden;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;

    border-color: rgba(249, 249, 249, 0.8);
  }
`;

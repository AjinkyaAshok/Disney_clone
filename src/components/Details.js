/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
// import { setMovies } from "../features/movie/movieSlice";
import db from "../firebase";
function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
        }
      });
  }, []);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg}></img>
          </Background>
          <TitleWrap>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/%27Iron_Man%27.svg/1200px-%27Iron_Man%27.svg.png"></img>
          </TitleWrap>
          <Controls>
            <LightButton>
              <img src="images/play-icon-black.png"></img>
              <span>PLAY</span>
            </LightButton>
            <DarkButton>
              <img src="images/play-icon-white.png"></img>
              <span>TRAILER</span>
            </DarkButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupButton>
              <img src="images/group-icon.png"></img>
            </GroupButton>
          </Controls>
          <SubTitle>{movie.SubTitle}</SubTitle>
          <Discription>{movie.description}</Discription>
        </>
      )}
    </Container>
  );
}

export default Details;

const Container = styled.div`
  min-height: calc(100vh -70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    /* height: 100%; */
    object-fit: contain;
  }
`;

const TitleWrap = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
`;

const LightButton = styled.button`
  border-radius: 4px;
  display: flex;
  border: none;
  align-items: center;
  background-color: rgb(249, 249, 249);
  padding: 0px 24px;
  height: 40px;
  margin: 0px 10px;
  letter-spacing: 1.8px;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const DarkButton = styled(LightButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled(DarkButton)`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  span {
    font-size: 40px;
    padding-bottom: 10px;
  }
`;

const GroupButton = styled(DarkButton)`
  border: 2px solid white;
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin-top: 10px;
  margin-left: 10px;
`;

const Discription = styled(SubTitle)`
  width: 50%;
  text-align: justify;
  line-height: 1.5;
`;

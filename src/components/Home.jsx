/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import React from 'react';
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Recommends from './Recommends'

import Series from './Series'

import Terror from './Terror'
import Romance from './Romance'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/user/userSlice";


const Home = (props) => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let trending = [];
  let movies = [];
  let series = [];
  let terror = [];
  let romance = [];




  useEffect(() => {
    //console.log("hello");
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        //console.log(recommends);
        switch (doc.data().type) {
            case "recommend":   
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;
            case "trending":        
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
            case "movies":
              movies = [...movies, { id: doc.id, ...doc.data() }];
              break;
            case "series":
              series = [...series, { id: doc.id, ...doc.data() }];
              break;
            case "terror":
                terror = [...terror, { id: doc.id, ...doc.data() }];
              break;
            case "romance":
                  romance = [...romance, { id: doc.id, ...doc.data() }];
              break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          trending: trending,
          movies: movies,
          series: series,
          terror: terror,
          romance: romance,
        })
      );
    });
  }, [userName]);



  return (
    <Container>
      <ImgSlider/>
      <Recommends />
      <Series/>
      <Terror/>
      <Romance/>
    </Container>
  )
}


const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

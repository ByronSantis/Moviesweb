import styled from 'styled-components'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import ReactPlayer from 'react-player'
import '../App.css'

const Detail = () => {
  
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);
  return (
    <Container>
      <ReactPlayer
      style={{ paddingTop: '25px' }}
      height="100%"
      width="100%"
      className='react-player'
      url={detailData.movieUrl}
      playIcon controls={true}
      >
      <Background>
        <img 
        className='img'
        alt={detailData.title}
        src={detailData.backgroundImg} />
      </Background>
      <ContentMeta>
        <Controls> 
       {/* <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
  </Player> 
            <ReactPlayer
            height="100%"
            width="100%"
            className='react-player'
            url={detailData.movieUrl}
            playIcon controls={true}
            >*/}
        </Controls>
      </ContentMeta>
      </ReactPlayer>
      <Title>{detailData.title}</Title>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
    </Container>
  )
}

<script>
  
</script>

const Title = styled.h1`
  color: rgb(249, 249, 249);
  font-size: 25px;
  min-height: 20px;
  padding-top: 20px;
  border: 3px;
  border-radius: 3px;
  border-color: #000;

  @media (max-width: 768px) {
  }
`;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  .img:after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(88, 88, 88, 0.863);
  }

  img {
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;


const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.4px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  font-family: Avenir-Roman, sans-serif;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  span {
    left: 100px;
    right: 100px;
    padding: 15px;
    font-family: Avenir-Roman, sans-serif;

  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  padding-top: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  padding-top: 35px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail

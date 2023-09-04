import ReactPlayer from 'react-player'
import '../App.css';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase'

const Player = () => {
    const {id} = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        db.collection("movies")
          .doc(id)
          .get()
          .then((doc) =>{
          if (doc.exists) {
            setDetailData(doc.data());
          }else{
            console.log('no such document in firebase')
          }
        })
        .catch((error) => {
            console.log('Error getting doc', error);
        })
      }, [id]);

  return (
    <div>
      <ReactPlayer alt={detailData.movieUrl}></ReactPlayer>
    </div>
  )
}

export default Player

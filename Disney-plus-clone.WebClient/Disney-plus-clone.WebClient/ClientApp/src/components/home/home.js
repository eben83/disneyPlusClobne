import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ImgSlider from "../imgSlider/imgSlider";
import Viewers from "../viewers/viewers";
import Recommends from "../recommends/recommends";
import NewDisney from "../newDisney/newDisney";
import Originals from "../originals/originals";
import Trending from "../trending/trending";
import db from '../../firebase'
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";

const Home = (props) => {
    
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    
    let recommends = []
    let newDisneys = []
    let originals = []
    let trending = []
    
    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                console.log(recommends)
                switch (doc.data().type) {
                    case "recommend":
                        //expand what ever it was, and add in the new record
                        recommends = [...recommends, {id: doc.id, ...doc.data()}]
                        break;
                    case 'new':
                        newDisneys = [...newDisneys, {id: doc.id, ...doc.data()}]
                        break;
                    case 'original':
                        originals = [...originals, {id: doc.id, ...doc.data()}]
                        break;
                    case 'trending':
                        trending = [...trending, {id: doc.id, ...doc.data()}]
                        break;
                }
            })

            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trending,
            }))
        })
    }, [userName]);
    
    return (
        <>
            <Container>
                <ImgSlider />
                <Viewers />
                <Recommends />
                <NewDisney />
                <Originals />
                <Trending />
            </Container>
        </>
    );
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    
    &:after {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;
import React, {} from 'react';
import styled from "styled-components";
import ImgSlider from "../imgSlider/imgSlider";
import Viewers from "../viewers/viewers";
import Recommends from "../recommends/recommends";
import NewDisney from "../newDisney/newDisney";
import Originals from "../originals/originals";
import Trending from "../trending/trending";

const Home = (props) => {
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
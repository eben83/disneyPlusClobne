import React, {} from 'react';
import styled from "styled-components";

const Detail = (props) => {
    return (
        <>
            <Container>
                <Background>
                    <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D53D1F5D357587A8D09067AB09FFC7096F837CBAAE02BDC3C0E75814471A1E36/scale?width=1440&aspectRatio=1.78&format=jpeg'
                         alt='img'/>
                </Background>
                
                <ImageTitle>
                    <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/47A6FB38D95B3A5EF5583C9EED0B698ED2992CBA4AC7222DD3269DC92DFA03A6/scale?width=1440&aspectRatio=1.78'
                         alt='image'/>
                </ImageTitle>
                
                <ContentMeta>
                    <Controls>
                        controls
                    </Controls>
                </ContentMeta>
            </Container>
        </>
    );
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0;
    opacity: 0.8;
    position: fixed;
    right: 0;
    top: 0;
    z-index: -1;
    
    img {
        width: 100vw;
        height: 100vh;
        
        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

const ImageTitle = styled.div`
    align-item: flex-end;
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;
    
    img {
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`
    max-with: 874px;
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0;
    min-height: 56px;
`;

export default Detail;
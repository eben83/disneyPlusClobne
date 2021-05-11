import React, {} from 'react';
import Tiles from "../titles/titles";
import styled from "styled-components";

const Trending = (props) => {
    return (
        <>
            <Container>
                <h4>Trending</h4>
                <Tiles
                    image1='/images/viewers-disney.png'
                    image2='/images/viewers-disney.png'
                    image3='/images/viewers-disney.png'
                    image4='/images/viewers-disney.png'
                />
            </Container>
        </>
    );
}

const Container = styled.div`
    padding: 0 0 26px;
`;

export default Trending;
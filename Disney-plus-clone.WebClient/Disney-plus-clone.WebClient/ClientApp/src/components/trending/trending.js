import React, {} from 'react';
import Tiles from "../titles/titles";
import styled from "styled-components";
import { selectTrending } from "../../features/movie/movieSlice";

const Trending = (props) => {
    
    return (
        <>
            <Container>
                <h4>Trending</h4>
                    <Tiles selector={selectTrending} />
            </Container>
        </>
    );
}

const Container = styled.div`
    padding: 0 0 26px;
`;

export default Trending;
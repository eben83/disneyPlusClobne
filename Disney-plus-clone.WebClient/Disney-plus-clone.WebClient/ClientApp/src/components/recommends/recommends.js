import React, {} from 'react';
import styled from "styled-components";
import { selectRecommend } from "../../features/movie/movieSlice";
import Tiles from "../titles/titles";

const Recommends = (props) => {
    return (
        <>
            <Container>
                <h4>Recommended for you</h4>
                <Tiles selector={selectRecommend} />
            </Container>
        </>
    );
}

const Container = styled.div`
    padding: 0 0 26px;
`;

export default Recommends;
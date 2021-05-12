import React, {} from 'react';
import Tiles from "../titles/titles";
import styled from "styled-components";
import { selectOriginal } from "../../features/movie/movieSlice";

const Originals = (props) => {
    return (
        <>
            <Container>
                <h4>Originals</h4>
                <Tiles selector={selectOriginal}/>
            </Container>
        </>
    );
}

const Container = styled.div`
    padding: 0 0 26px;
`;

export default Originals;
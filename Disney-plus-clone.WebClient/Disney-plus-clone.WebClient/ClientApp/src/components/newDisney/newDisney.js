import React, {} from 'react';
import styled from "styled-components";
import { selectNewDisney } from "../../features/movie/movieSlice";
import Tiles from "../titles/titles";

const NewDisney = (props) => {
    return (
        <>
            <Container>
                <h4>New to Disney+</h4>
                <Tiles selector={selectNewDisney} />
            </Container>
        </>
    );
}

const Container = styled.div`
    padding: 0 0 26px;
`;

export default NewDisney;
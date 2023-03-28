import React from 'react';
import styled from 'styled-components';

const NetflixCard = ({actualData}) => {
    const {jawSummary} = actualData;
  return (
   <>
   <Wrapper>
        <div className="container">
            <div className="wrapper">
                <div className="image-banner">
                    <figure>
                        <img src={jawSummary.backgroundImage.url} alt={jawSummary.title} />
                    </figure>
                </div>
                <h1>{jawSummary.title}</h1>
                <p> {jawSummary.synopsis} </p>
                <p className='episode'> Total Episode:  <strong> {jawSummary.episodeCount} </strong> </p>
            </div>
        </div>
   </Wrapper>
   </>
  )
}

export default NetflixCard;

// style component styleing for this component
const Wrapper = styled.section`
    padding:3rem;
    font-family: 'Lexend Deca', sans-serif;
`
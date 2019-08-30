// TODO FIXME Please implement this
import React from 'react';
import styled from 'styled-components';

const Theme = styled.div`
  img {
    margin: 0;
    text-align: left;
  }
  .strong {
    font-weight: bold;
  }
`;

const Evolution = (props) => {
  const {evolution, all} = props;
  const direction = Object.keys(evolution)[0].replace('_', ' ');
  const pokemon = all[Object.values(evolution)[0]];

  return (
    <Theme>
      <img src={pokemon.image_url} />
      <p>
        {direction}
        <span className="strong"> {pokemon.identifier}</span>{' '}
        {evolution.trigger}
      </p>
    </Theme>
  );
};

export default Evolution;

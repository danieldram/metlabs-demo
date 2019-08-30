import * as React from 'react';
import styled from 'styled-components';


import masterball from 'assets/pokeball.gif';

const size = 80;
const pokeballSize = 30;

const pokeballs = [masterball];

const LoadingWrapper = styled.div`
  position: fixed;
  width: ${size}px;
  height: ${size}px;
  top: calc(50% - ${size / 2}px);
  left: calc(50% - ${size / 2}px);
  background-color: white;
  border-radius: 8px;
  pointer-events: none;
`;

const PokeBall = styled.img`
  width: ${pokeballSize}px;
  height: ${pokeballSize}px;
`;

class Loading extends React.PureComponent {
  render() {
    const {loading} = this.props;
    if (!loading) return null;

    return (
      <LoadingWrapper>
        {pokeballs.map((ball, i) => (
          <PokeBall key={`pokeball-${i}`} src={ball} alt="loading" />
        ))}
      </LoadingWrapper>
    );
  }
}

export default Loading;

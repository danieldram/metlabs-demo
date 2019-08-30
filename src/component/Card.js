import * as React from 'react';
import styled from 'styled-components';
import ResizeObserver from 'react-resize-observer';
import DetailsPopover from './DetailsPopover';

import {colors, constants} from '/config';

const Container = styled.div`
  transition: all 250ms ease;
  position: relative;
  height: ${constants.cardHeight}px;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: #efefef;
  }

  ${({isOpen}) => (isOpen ? 'background-color: #efefef' : '')};
`;

const Pokemon = styled.div`
  cursor: pointer;
  user-select: none;
  height: 100%;
  box-sizing: border-box;
  text-align: center;

  img {
    height: 96px;
    display: block;
    margin: auto;
  }
`;

class Card extends React.PureComponent {
  state = {flowTipTarget: null};

  _handleTargetReflow = (flowTipTarget) => {
    this.setState({flowTipTarget});
  };

  render() {
    const {onClick, closePopover, pokemon, isOpen} = this.props;
    const {flowTipTarget} = this.state;

    return (
      <Container isOpen={isOpen}>
        <ResizeObserver onReflow={this._handleTargetReflow} />
        <Pokemon key={pokemon.id} onClick={() => onClick(pokemon)}>
          <img alt={pokemon.identifier} src={pokemon.image_url} />
          {pokemon.identifier}
        </Pokemon>
        {isOpen && (
          <DetailsPopover
            pokemon={pokemon}
            target={flowTipTarget}
            close={closePopover}
          />
        )}
      </Container>
    );
  }
}

export default Card;

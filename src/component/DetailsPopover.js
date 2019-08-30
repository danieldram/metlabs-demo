import * as React from 'react';
import styled from 'styled-components';
import FlowTip from 'flowtip-react-dom';
import ClickOutside from 'react-click-outside';
import {connect} from 'react-redux';
import {X} from 'react-feather';

import Evolution from '/component/Evolution';
import Type from '/component/Type';

import {colors} from '/config';
import {actions} from '/state';

const Content = styled.div`
  padding: 10px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  min-width: 250px;
  z-index: 1;

  img {
    display: block;
    margin: 0 auto;
  }
`;

const Title = styled.h3`
  margin-bottom: 6px;
`;

const CloseButton = styled(X)`
  position: absolute;
  top: 10px;
  right: 20px;
  transition: all 350ms ease;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }
`;

const NoEvolutionText = styled.div`
  margin-top: 16px;
`;

class DetailsPopover extends React.PureComponent {
  componentDidMount() {
    const {pokemon, fetchEvolutions} = this.props;
    fetchEvolutions(pokemon.id);
  }

  renderEvolutions() {
    const {evolutions, fetchingEvolutions, all} = this.props;
    // TODO: Add loading state while the request is happening
    if (fetchingEvolutions) {
      return <NoEvolutionText>loading...</NoEvolutionText>;
    }

    if (!evolutions.length) {
      return <NoEvolutionText>This Pokemon has no evolutions</NoEvolutionText>;
    }

    return evolutions.map((evolution) => {
      return (
        <Evolution evolution={evolution} all={all} key={Object.values(evolution)[0]} />
      );
    });
  }

  render() {
    const {pokemon, target, close} = this.props;

    return (
      <ClickOutside onClickOutside={close}>
        <FlowTip
          target={target}
          content={Content}
          region="right"
          sticky={false}
          align="start"
        >
          <CloseButton onClick={close} size={20} />
          <Title>
            #{pokemon.id} {pokemon.identifier}
          </Title>
          {pokemon.types.map((type) => (
            <Type type={type} key={type.id} />
          ))}
          {this.renderEvolutions()}
        </FlowTip>
      </ClickOutside>
    );
  }
}

// Grab the evolution for the current pokemon and the loading state for the evolution
const mapStateToProps = ({evolutions, fetchingEvolutions, all}, {pokemon}) => ({
  all,
  evolutions: evolutions || [],
  fetchingEvolutions: fetchingEvolutions,
});

const mapDispatchToProps = {
  fetchEvolutions: (id) => actions.fetchEvolutions(id),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsPopover);

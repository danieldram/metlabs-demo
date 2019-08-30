import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Card from './Card';
import Search from './Search';
import Loading from './Loading';

import GlobalStyles from '/global.styles';

import {colors, media, constants} from '/config';
import {actions} from '/state';

const GUTTER = 10;
const COL_WIDTH = 200;
const COL_HEIGHT = constants.cardHeight;
const NUM_COLS = 6;

// Placeholder cells to render while we are fetching data
const placeholders = Array(50).fill(1);

const Container = styled.section`
  padding: 8px 0;
  max-width: ${COL_WIDTH * NUM_COLS + GUTTER * (NUM_COLS - 1)}px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${NUM_COLS}, 1fr);
  grid-auto-rows: ${COL_HEIGHT}px;
  margin: 0 auto;
  justify-items: center;

  ${media.desktop`
    grid-template-columns: repeat(4, 1fr);
  `};

  ${media.mobile`
    grid-template-columns: repeat(2, 1fr);
  `};
`;

const LoadingCard = styled.div`
  background-color: ${colors.cardBackground};
`;

class Home extends React.PureComponent {
  state = {
    selectedPokemon: null,
    evolutions: {},
    loading: true,
  };

  componentDidMount() {
    this.props.fetchPokemon().then(() => this.setState({loading: false}));
  }

  onSearch = (e) => {
    const regex = new RegExp(`^${e.target.value}`, 'i');
    this.state.regexFilter = regex;

    const newList = this.props.pokemon;
    this.props.filter(newList);
  };
 
  onClick = (pokemon) => this.setState({selectedPokemon: pokemon});

  render() {
    const {pokemon, evolutions} = this.props;
    const {loading, selectedPokemon} = this.state;

    return (
      <Container>
        <GlobalStyles />
        <Search onChange={this.onSearch} />
        <Grid>
          {pokemon
            .filter((p) => p.identifier.match(this.state.regexFilter))
            .map((pokemon) => (
              <Card
                key={pokemon.id}
                pokemon={pokemon}
                evolution={{}}
                onClick={(pokemon) => this.onClick(pokemon)}
                isOpen={selectedPokemon === pokemon}
                closePopover={() => this.setState({selectedPokemon: null})}
              />
            ))}
          {loading && placeholders.map((_, i) => <LoadingCard key={i} />)}
        </Grid>
        <Loading loading={loading} />
      </Container>
    );
  }
}

// Map the array of pokemon ids to pokemon objects
const mapStateToProps = (state) => ({
  pokemon: state.list.map((pId) => state.all[pId]),
  evolutions: state.evolutions,
});

const mapDispatchToProps = {
  fetchPokemon: actions.fetchAll,
  fetchEvolutions: (id) => actions.fetchEvolutions(id),
  filter: actions.filter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

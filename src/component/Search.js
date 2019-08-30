import * as React from 'react';
import styled from 'styled-components';

import {colors} from '/config';

const SearchInput = styled.input`
  width: 300px;
  margin-bottom: 24px;
  display: block;
  outline: none;
  font-size: 16px;
  padding: 8px 12px;
  border: solid 1px #eaeaea;
  transition: border-color 250ms ease;
  background-color: ${colors.cardBackground};

  transition: all 250ms ease;

  &:focus {
    border-color: ${colors.primary};
    /* box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2); */
  }
`;

class Search extends React.PureComponent {
  render() {
    return (
      <SearchInput onChange={this.props.onChange} placeholder="Filter..." />
    );
  }
}

export default Search;

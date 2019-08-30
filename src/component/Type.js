import * as React from 'react';
import styled from 'styled-components';

import {types} from '/config';

const Type = styled.div`
  display: inline-block;
  ${({type}) => `background-color: ${types[type]}`}
  padding: 2px 4px;

  & + & {
    margin-left: 8px;
  }
`;

export default ({type}) => (
  <Type type={type.identifier} key={type.id}>
    {type.identifier}
  </Type>
);

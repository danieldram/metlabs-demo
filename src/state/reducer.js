import * as types from './types';

/**
 * `all` is a hash of { pokemon id -> pokemon data }
 * `list` is a flat list of ordered pokemon id's
 * `evolutions` is a hash of { pokemon id -> evolution data }
 *
 * You can iterate over `list` and map each id to an entry
 * in the `all` hash to create an ordered list of Pokemon.
 */
const defaultState = {
  all: {},
  list: [],
  evolutions: [],
  fetchingEvolutions: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FILTER:
    case types.FETCH_ALL:
      return {...state, all: action.all, list: action.list};
    case types.FETCH_EVO:
      return {...state, evolutions: action.payload};
    case types.FETCHING_EVOS:
      return {...state, fetchingEvolutions: action.payload};
    default:
      return state;
  }
};

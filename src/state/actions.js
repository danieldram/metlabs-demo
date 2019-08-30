import * as types from './types';

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const normalize = (data) => {
  const all = {};
  const list = [];

  data.forEach((pokemon) => {
    all[pokemon.id] = {
      ...pokemon,
      identifier: capitalize(pokemon.identifier),
    };
    list.push(pokemon.id);
  });

  return {all, list};
};

export const fetchAll = () => {
  return (dispatch) => {
    return fetch(`${API_ROOT}/pokemon`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const {all, list} = normalize(data);

        dispatch({
          type: types.FETCH_ALL,
          list,
          all,
        });
      });
  };
};

export const fetchEvolutions = (id) => {
  return (dispatch) => {
    dispatch({
      type: types.FETCHING_EVOS,
      payload: true,
    });

    return fetch(`${API_ROOT}/pokemon/${id}/evolutions`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: types.FETCH_EVO,
          payload: data,
        }),
      )
      .then((data) => {
        dispatch({
          type: types.FETCHING_EVOS,
          payload: false,
        });
      });
  };
};

export const filter = (data) => {
  const {all, list} = normalize(data);
  return {
    type: types.FILTER,
    all,
    list,
  };
};

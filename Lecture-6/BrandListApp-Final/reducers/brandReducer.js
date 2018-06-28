import { asyncBrands } from '../api';

const SET_BRANDS = 'SET_BRANDS';
const START_LOADING = 'START_LOADING';
const END_LOADING = 'END_LOADING';

const initialState = {
  brandList: [],
  isLoading: false
};

// action creators
export const startLoading = () => ({
  type: START_LOADING
});

export const endLoading = () => ({
  type: END_LOADING
});

export const setBrands = (brands) => ({
  type: SET_BRANDS,
  payload: {
    brands
  }
});

export const fetchBrandList = () => async (dispatch) => {
  dispatch(startLoading());
  const brands = await asyncBrands();
  dispatch(setBrands(brands));
};

// reducers
const brandReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_BRANDS:
      return ({
        ...state,
        brandList: payload.brands,
        isLoading: false
      });
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case END_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default brandReducer;


import { asyncBrands } from '../api';

// Actions
export const SET_BRANDS = 'hb-brand-list/brands/SET_BRANDS';
export const START_LOADING = 'hb-brand-list/brands/START_LOADING';
export const END_LOADING = 'hb-brand-list/brands/END_LOADING';

const initialState = {
  brandList: [],
  isLoading: false
};

// Action creators
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

// Reducers
const reducer = (state = initialState, action) => {
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

export default reducer;


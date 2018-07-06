import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, { START_LOADING, startLoading, endLoading, END_LOADING, SET_BRANDS, setBrands, fetchBrandList } from '../../ducks/brands';
import { mockBrands } from '../mocks';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('test brands action creators, reducers, and async action', () => {
  const defaultState = {
    brandList: [],
    isLoading: false
  };

  // test action creators
  it('should start loading', () => {
    const expectedAction = {
      type: START_LOADING
    };

    expect(startLoading()).toEqual(expectedAction);
  });

  it('should stop loading', () => {
    const expectedAction = {
      type: END_LOADING
    };

    expect(endLoading()).toEqual(expectedAction);
  });

  it('should set brands', () => {
    const expectedAction = {
      type: SET_BRANDS,
      payload: {
        brands: mockBrands
      }
    };

    expect(setBrands(mockBrands)).toEqual(expectedAction);
  });

  // test reducers
  it('should set isloading true', () => {
    expect(reducer(defaultState, { type: START_LOADING })).toEqual({
      ...defaultState,
      isLoading: true
    });
  });

  it('should set isloading true', () => {
    expect(reducer({ ...defaultState, isLoading: true }, { type: END_LOADING })).toEqual({
      ...defaultState,
      isLoading: false
    });
  });

  it('should set brands', () => {
    expect(reducer(
      defaultState,
      {
        type: SET_BRANDS,
        payload: { brands: mockBrands }
      }
    )).toEqual({
      ...defaultState,
      brandList: mockBrands,
      isLoading: false
    });
  });

  // async action
  it('should start loading, fetch brands, and end loading', async () => {
    const store = mockStore({});
    fetch.mockResponse(JSON.stringify(mockBrands));

    const expectedActions = [
      {
        type: START_LOADING
      },
      {
        type: SET_BRANDS,
        payload: { brands: mockBrands }
      }
    ];

    await store.dispatch(fetchBrandList());
    expect(store.getActions()).toEqual(expectedActions);
  });
});


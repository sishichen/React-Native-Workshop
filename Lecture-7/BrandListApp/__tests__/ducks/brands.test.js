import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, {
  SET_BRANDS,
  START_LOADING,
  END_LOADING,
  setBrands,
  startLoading,
  endLoading,
  fetchBrandList
} from '../../ducks/brands';
import { mockBrands } from '../mocks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test brands ducks', () => {
  const defaultState = {
    brandList: [],
    isLoading: false
  };

  // test action creators
  it('should set brands', () => {
    const expectedAction = {
      type: SET_BRANDS,
      payload: { brands: mockBrands }
    };
    expect(setBrands(mockBrands)).toEqual(expectedAction);
  });

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

  // test reducers
  it('should set isLoading to true', () => {
    expect(reducer(defaultState, {
      type: START_LOADING
    })).toEqual({
      ...defaultState,
      isLoading: true
    });
  });

  it('should set isLoading to false', () => {
    expect(reducer({ ...defaultState, isLoading: true }, {
      type: END_LOADING
    })).toEqual({
      ...defaultState,
      isLoading: false
    });
  });

  it('should set brands into state, and stop loading', () => {
    expect(reducer(defaultState, {
      type: SET_BRANDS,
      payload: { brands: mockBrands }
    })).toEqual({
      ...defaultState,
      brandList: mockBrands,
      isLoading: false
    });
  });

  // test async actions
  it('should start loading, fetch brand list, and stop loading when brands set', async () => {
    fetch.mockResponse(JSON.stringify(mockBrands));
    const store = mockStore({});

    const expectedAction = [
      {
        type: START_LOADING
      },
      {
        type: SET_BRANDS,
        payload: { brands: mockBrands }
      }
    ];

    await store.dispatch(fetchBrandList());
    expect(store.getActions()).toEqual(expectedAction);
  });
});

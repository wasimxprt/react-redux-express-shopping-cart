import loadingReducer from '../loadingReducer';

describe('Loading Reducer', () => {
    it('Should return default state', () => {
        const newState = loadingReducer(undefined, {});
        expect(newState).toEqual({ isLoading: false });
    })
    it('Should return loading state as true', () => {
        const loadingState = { isLoading: true };
        const newState = loadingReducer(undefined, {
            type: "START_LOADING_REQUEST"
        });
        expect(newState).toEqual(loadingState)
    });
    it('Should return loading state as false', () => {
        const loadingState = { isLoading: false };
        const newState = loadingReducer(undefined, {
            type: "STOP_LOADING_REQUEST"
        });
        expect(newState).toEqual(loadingState)
    });
})
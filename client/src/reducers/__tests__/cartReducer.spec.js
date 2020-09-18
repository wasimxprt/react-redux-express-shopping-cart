import cartReducer from '../cartReducer';
import initialState from '../cartReducer';

describe('cart reducer', () => {
    it('should return the initial state', () => {
        expect(cartReducer(undefined, {})).toMatchSnapshot()
    })

    it('should handle ADD_TO_CART', () => {
        expect(
            cartReducer({
                
                totalAmount: 0
            },
                {
                    type: 'ADD_TO_CART',
                    payload: {
                        product:{_id: "5f1d397ea15c6e1be4aa10e2",name: "Handcrafted Concrete Shoes",price: 999},
                        quantity: 1
                    }
                })
        ).toMatchSnapshot()
    })
})
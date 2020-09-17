import productReducer from '../productReducer';

describe('Product Reducer', () => {
    it('Should return default state', () => {
        const newState = productReducer(undefined, {});
        expect(newState).toEqual({
            products: [],
            error: ""
        });
    })
    it('Should return products', () => {
        const products = [{ "_id": "5f1d397ea15c6e1be4aa10df", "name": "Awesome Steel Ball", "price": 752, "category": "Baby", "description": "Est pariatur maiores ipsa culpa vero illum occaecati. Et voluptatem aut. Et nesciunt nihil. Laudantium dolores et. Enim doloribus distinctio. Et voluptatibus praesentium fugiat et esse labore sit ipsa.", "image": "https://images-na.ssl-images-amazon.com/images/I/4196ru-rkjL.jpg", "__v": 0 }];
        const newState = productReducer(undefined, {
            type: "SET_PRODUCTS",
            payload: products
        });
        expect(newState).toEqual({ error: "", products: products })
    });
})
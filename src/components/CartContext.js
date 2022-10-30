import React, {createContext, useContext, useState} from 'react'

export const ProductsContext = createContext({items: [], total: 0, cantidadTotal: 0});

export const UseProductsContext = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
    const [CartList, SetCartList] = useState({items: [], total: 0, cantidadTotal: 0});
    const [totalItems, SetTotalItems] = useState(0)
    const AddProduct = (item, itemQuantity) => {
    const index = CartList.items.findIndex((i) => i.id === item.id);

    if (index > -1 ) {  
        CartList.items[index].cantidad += itemQuantity
        CartList.total += itemQuantity * CartList.items[index].price
        CartList.cantidadTotal += itemQuantity
        SetCartList(CartList);
        SetTotalItems(CartList.cantidadTotal);
        
    } else {
        item.cantidad = itemQuantity
        CartList.total += item.cantidad * item.price
        CartList.cantidadTotal += itemQuantity
        SetCartList({
        items: [...CartList.items , item],
        total: CartList.total,
        cantidadTotal: CartList.cantidadTotal
        } );
        SetTotalItems(CartList.cantidadTotal)
    }
    };

    const ClearCart = () => {
        SetCartList({items: [], total: 0, cantidadTotal: 0});
    };

    const RemoveProduct = (item) => {
        const index = CartList.items.findIndex((i) => {
            return i.id === item.id
    });

        if (index > -1 ) {
            CartList.total -= CartList.items[index].cantidad * CartList.items[index].price
            CartList.cantidadTotal -= CartList.items[index].cantidad
            CartList.items.splice(index, 1);
            SetCartList(CartList); 
        }
        SetTotalItems(CartList.cantidadTotal)
        return totalItems
    };

    return (
        <ProductsContext.Provider
        value={{
            CartList,
            SetCartList,
            AddProduct,
            ClearCart,
            RemoveProduct
        }}
        >
        {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;
import React from 'react'
import useLocaleStorage from '../hooks/useLocaleStorage'
const ShopContext = React.createContext();
export function useShopContext(){
    return React.useContext(ShopContext);
}
export function ShopContextProvdier({children}) {
    const [shop,setShop] = useLocaleStorage('owner',{})

    const createShop = (name,value)=>{
         return setShop({name,value})
    }
    return (
        <ShopContext.Provider value={{
            shop,
            createShop
        }}>
        {children}
        </ShopContext.Provider>
    )
}



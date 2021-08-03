import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite:    (favorite) => {},
    removeFavorite: (id) => {},
    isFav:          (id) => {},
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);
    
    function addFavoriteHandler(fav) {
        setUserFavorites((prevFavState) => {
            return prevFavState.concat(fav);
        });
    }

    function removeFavoriteHandler(id) {
        setUserFavorites((prevFavState) => {
            return prevFavState.filter(item => item.id !== id);
        });
    }

    function activityIsFavHandler(id) {
        return userFavorites.some(activity => activity.id === id);
    }
    
    const context = {
        favorites:      userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite:    addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFav:          activityIsFavHandler,
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext; 
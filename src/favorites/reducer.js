export default function favoritesReducer(state, action){
    switch(action.type){  
        case "add":{
            if(state.find((element) => element.apiUrl === action.newArticle.apiUrl) == undefined){
                window.localStorage.setItem("favoritesList", JSON.stringify([...state, action.newArticle]));
                return [...state, action.newArticle];
            }
            window.localStorage.setItem("favoritesList", JSON.stringify([...state]));
            return [...state];
        }
        case "delete":{
            var newState = state.filter((element) => element.apiUrl !== action.url);
            window.localStorage.setItem("favoritesList", JSON.stringify([...newState]));
            console.log(newState);
            return [...newState];
        }
    }
}
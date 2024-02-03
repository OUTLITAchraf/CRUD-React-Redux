import { ADD_Film, CLEAR_FILTER_Film, DELETE_Film, FILTER_Film, UPDATE_Film } from "./actionType";

const initialState = {
    Countrys_Region : [
    {   
        id : 1 ,
        country : 'United States'
    },
    {
        id : 2 ,
        country : 'China'
    },
    {
        id : 3 ,
        country : 'Mexico'
    },{
        id : 4 ,
        country : 'France'
    },
    {
        id : 5 ,
        country : 'Germany'
    },
    {
        id : 6 ,
        country : 'United Kingdom'
    }

    ],
    Films : [ 
    {
        id : 1 ,
        title : "Joker" ,
        description : "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        Release_Date :'2019-10-04',
        genres : ["Crime" , "Drama" , "Thriller"],
        country : 1
    },
    {
        id : 2 ,
        title : "Interstellar" ,
        description : "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        Release_Date :'2014-11-07',
        genres :[ "Adventure" , "Drama" , "Sci-Fi"],
        country : 6
    },
    ]
}

const reducer = (state=initialState,actions)=>{
    switch (actions.type) {
        case ADD_Film :
            return {...state, Films : [...state.Films,actions.payload]}
        
        case UPDATE_Film :
            const film = state.Films.find((f)=>f.id==parseInt(actions.payload.id))
            if (film) {
                film.title=actions.payload.title
                film.description=actions.payload.description
                film.Release_Date=actions.payload.Release_Date
                film.genres=actions.payload.genres
            }
            return state

        case DELETE_Film :
            return {...state, Films : [...state.Films.filter((f)=>f.id !== parseInt(actions.payload))]}
        
        case FILTER_Film :
            return {...state, FilmsFilter : [...state.Films.filter((f)=>f.country === parseInt(actions.payload))]}
    
        case CLEAR_FILTER_Film :
            return {...state, FilmsFilter : null}
            
        default:
            return state
    }
}

export default reducer;
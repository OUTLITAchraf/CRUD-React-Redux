import { ADDFilm, DELETEFilm, UPDATEFilm } from "./actionType";

const initialState = {
    Films : [ 
    {
        id : 1 ,
        title : "Joker" ,
        description : "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        Release_Date :'2019-10-04',
        genres : ["Crime" , "Drama" , "Thriller"]
    },
    {
        id : 2 ,
        title : "Interstellar" ,
        description : "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        Release_Date :'2014-11-07',
        genres :[ "Adventure" , "Drama" , "Sci-Fi"]
    },
    ]
}

const reducer = (state=initialState,actions)=>{
    switch (actions.type) {
        case ADDFilm :
            return {...state, Films : [...state.Films,actions.payload]}
        
        case UPDATEFilm :
            const film = state.Films.find((f)=>f.id==parseInt(actions.payload.id))
            if (film) {
                film.title=actions.payload.title
                film.description=actions.payload.description
                film.Release_Date=actions.payload.Release_Date
                film.genres=actions.payload.genres
            }
            return state

        case DELETEFilm :
            return {...state, Films : [...state.Films.filter((f)=>f.id !== parseInt(actions.payload))]}

        default:
            return state
    }
}

export default reducer;
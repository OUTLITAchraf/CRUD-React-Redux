import { ADD_Film, CLEAR_FILTER_Film, DELETE_Film, FILTER_Film, UPDATE_Film } from "./actionType"

export const AddFilmAction = (newFilm)=>{
    return {
        type : ADD_Film , 
        payload : newFilm
    }
}
export const UpdateFilmAction = (Film)=>{
    return {
        type : UPDATE_Film , 
        payload : Film
    }
}
export const DeleteFilmAction = (id)=>{
    return {
        type : DELETE_Film , 
        payload : id
    }
}
export const FilterFilmAction = (idCountry)=>{
    return {
        type : FILTER_Film, 
        payload : idCountry
    }
}
export const ClearFilterFilmAction = ()=>{
    return {
        type : CLEAR_FILTER_Film, 
    }
}
import { ADDFilm, DELETEFilm, UPDATEFilm } from "./actionType"

export const AddFilmAction = (newFilm)=>{
    return {
        type : ADDFilm , 
        payload : newFilm
    }
}
export const UpdateFilmAction = (Film)=>{
    return {
        type : UPDATEFilm, 
        payload : Film
    }
}
export const DeleteFilmAction = (id)=>{
    return {
        type : DELETEFilm, 
        payload : id
    }
}
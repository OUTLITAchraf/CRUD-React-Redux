import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddFilmAction } from "../Config/actions"
import { useNavigate } from "react-router-dom";

export default function AddFilm() {
    const count = useSelector((data=>data.Films.length));
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [releaseDate,setReleasedate]=useState('')
    const [genres,setGenres]=useState([])
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleAdd = ()=>{
        dispatch(AddFilmAction({
            id : count + 1,
            title : title,
            description : description,
            Release_Date :releaseDate,
            genres :genres
        }))
        navigate('/')
    }
    function handleGenres(event) {
        const { value, checked } = event.target;

        // Add or remove the value from the array based on checkbox status
        if (checked) {
            setGenres((prevGenres) => [...prevGenres, value]);
        } else {
            setGenres((prevGenres) => prevGenres.filter((item) => item !== value));
        }
    }
    return (
        <form>
            <label>Title Film :</label><br/>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br/>
            <label>Description Film :</label><br/>
            <input type="text" value={description}  onChange={(e)=>{setDescription(e.target.value)}}/><br/>
            <label>Realise date Film :</label><br/>
            <input type="date" value={releaseDate}  onChange={(e)=>{setReleasedate(e.target.value)}}/><br/>
            <label>Genres Film :</label><br/>
            <input type="checkbox" name="genre" value='Action'  onChange={handleGenres}/>Action<br/>
            <input type="checkbox" name="genre" value='Adventure'  onChange={handleGenres}/>Adventure<br/>
            <input type="checkbox" name="genre" value='Drama'  onChange={handleGenres}/>Drama<br/>
            <input type="checkbox" name="genre" value='Sci-Fi'  onChange={handleGenres}/>Sci-Fi<br/>
            <input type="checkbox" name="genre" value='Romance'  onChange={handleGenres}/>Romance<br/>
            <input type="checkbox" name="genre" value='Comedy'  onChange={handleGenres}/>Comedy<br/>
            <input type="checkbox" name="genre" value='Horror'  onChange={handleGenres}/>Horror<br/>
            <input type="checkbox" name="genre" value='Animation'  onChange={handleGenres} />Animation<br/>
            <input type="checkbox" name="genre" value='Familly'  onChange={handleGenres} />Familly<br/>
            <input type="checkbox" name="genre" value='War'  onChange={handleGenres} />War<br/>
            <input type="checkbox" name="genre" value='Music'  onChange={handleGenres} />Music<br/>
            <input type="checkbox" name="genre" value='Biography'  onChange={handleGenres} />Biography<br/>
            <input type="checkbox" name="genre" value='Historique'  onChange={handleGenres} />Historique<br/>
            <input type="checkbox" name="genre" value='Crime'  onChange={handleGenres} />Crime<br/>
            <input type="checkbox" name="genre" value='Fantasy'  onChange={handleGenres} />Fantasy<br/>
            <input type="checkbox" name="genre" value='Thriller'  onChange={handleGenres} />Thriller<br/>
            <input type="checkbox" name="genre" value='Sport'  onChange={handleGenres} />Sport<br/>
            <button onClick={handleAdd}>
                Add film
            </button>
        </form>
    )
}

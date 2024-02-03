import './App.css';
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddFilmAction, UpdateFilmAction , DeleteFilmAction , FilterFilmAction , ClearFilterFilmAction } from './CRUD SP and filter/Config/actions';

function AppFilter() {
    const count = useSelector((data=>data.Films.length));
    const Films = useSelector((d)=>d.Films);
    const FilmsFilter = useSelector((d)=>d.FilmsFilter);
    const listContryMap=FilmsFilter?FilmsFilter:Films
    const countrys = useSelector((d)=>d.Countrys_Region);
    const [id,setId]=useState('')
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [releaseDate,setReleasedate]=useState('')
    const [country,setCountry]=useState(1)
    const [countryFilter,setCountryFilter]=useState(1)
    const [genres,setGenres]=useState([])
    const dispatch=useDispatch()

    const handleAdd = ()=>{
        dispatch(AddFilmAction({
            id : count + 1,
            title : title,
            description : description,
            Release_Date :releaseDate,
            country : country,
            genres :genres
        }))
    }

    const handleClear = ()=>{
        setTitle('')
        setDescription('')
        setCountry(1)
        setReleasedate('')
        setGenres([])
        
    }

    const handleRemplireForm = (id)=>{
        const film = Films.find((f)=>f.id === parseInt(id))
        setId(id)
        setTitle(film.title)
        setDescription(film.description)
        setCountry(film.country)
        setReleasedate(film.Release_Date)
        setGenres(film.genres)
    }
    function handleGenres(event) {
        const { value, checked } = event.target;
        if (checked) {
            setGenres((prevGenres) => [...prevGenres, value]);
        } else {
            setGenres((prevGenres) => prevGenres.filter((item) => item !== value));
        }
    }

    const handleUpdate = ()=>{
        dispatch(UpdateFilmAction({
            id : id,
            title : title,
            description : description,
            Release_Date :releaseDate,
            country : country,
            genres :genres
        }))
        setId('')
    }

    const handleDelete = (id)=>{
        dispatch(DeleteFilmAction(id))
    }

    const handleFilter = ()=>{
        dispatch(FilterFilmAction(countryFilter))
    }

    const handleFilterClear = ()=>{
        dispatch(ClearFilterFilmAction(countryFilter))
    }

  return (
    <div>
      <h1>CRUD REACT-REUX FILTER:</h1>
      <div style={{paddingBottom : '10px'}}>
        <label>Title : </label>
        <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <label> | Description : </label>
        <input type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        <label> | Release_Date : </label>        
        <input type='date' value={releaseDate} onChange={(e)=>{setReleasedate(e.target.value)}}/>
        <label> | Country : </label>
        <select value={country} onChange={(e)=>{setCountry(e.target.value)}}>
            {countrys.map((c , i )=><option key={i} value={c.id}>{c.country}</option>)}
        </select><br/>
        <label>Genres : </label><br/>
        <input type="checkbox" name="genre"  checked={genres.includes("Action")} onChange={handleGenres} value='Action' />Action
        <input type="checkbox" name="genre"  checked={genres.includes("Adventure")} onChange={handleGenres} value='Adventure' />Adventure
        <input type="checkbox" name="genre"  checked={genres.includes("Drama")} onChange={handleGenres} value='Drama' />Drama
        <input type="checkbox" name="genre"  checked={genres.includes("Sci-Fi")} onChange={handleGenres} value='Sci-Fi' />Sci-Fi
        <input type="checkbox" name="genre"  checked={genres.includes("Romance")} onChange={handleGenres} value='Romance' />Romance
        <input type="checkbox" name="genre"  checked={genres.includes("Comedy")} onChange={handleGenres} value='Comedy' />Comedy<br/>
        <input type="checkbox" name="genre"  checked={genres.includes("Horror")} onChange={handleGenres} value='Horror' />Horror
        <input type="checkbox" name="genre"  checked={genres.includes("Animation")} onChange={handleGenres} value='Animation'  />Animation
        <input type="checkbox" name="genre"  checked={genres.includes("Familly")} onChange={handleGenres} value='Familly'  />Familly
        <input type="checkbox" name="genre"  checked={genres.includes("War")} onChange={handleGenres} value='War'  />War
        <input type="checkbox" name="genre"  checked={genres.includes("Music")} onChange={handleGenres} value='Music'  />Music
        <input type="checkbox" name="genre"  checked={genres.includes("Biography")} onChange={handleGenres} value='Biography'  />Biography
        <input type="checkbox" name="genre"  checked={genres.includes("Historique")} onChange={handleGenres} value='Historique'  />Historique<br/>
        <input type="checkbox" name="genre"  checked={genres.includes("Crime")} onChange={handleGenres} value='Crime'  />Crime
        <input type="checkbox" name="genre"  checked={genres.includes("Fantasy")} onChange={handleGenres} value='Fantasy'  />Fantasy
        <input type="checkbox" name="genre"  checked={genres.includes("Thriller")} onChange={handleGenres} value='Thriller'  />Thriller
        <input type="checkbox" name="genre"  checked={genres.includes("Sport")} onChange={handleGenres} value='Sport' style={{marginBottom : '10px'}} />Sport
        <br/>
        {id?<button onClick={handleUpdate}>Update</button>
        :<button onClick={handleAdd}>Add</button>}
        <button onClick={handleClear}>Clear</button>
      </div>
      <div style={{marginBottom : '10px'}}>
        <label>Filter By Coutry : </label>
        <select value={countryFilter} onChange={(e)=>setCountryFilter(e.target.value)}>
            {countrys.map((c , i )=><option key={i} value={c.id}>{c.country}</option>)}  
        </select>
        <button onClick={()=>handleFilter()}>Filter</button>
        <button onClick={()=>handleFilterClear()}>Clear Filter</button>
      </div>
      <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Release_Date</td>
                        <td>Country</td>
                        <td>Genre</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        listContryMap.map((film,index)=>{
                            const country=countrys.find((c)=>c.id===parseInt(film.country))
                            return (
                                <tr key={index}>
                                    <td>{film.id}</td>
                                    <td>{film.title}</td>
                                    <td>{film.description}</td>
                                    <td>{film.Release_Date}</td>
                                    <td>{country.country}</td>
                                    <td>{film.genres.join(" , ")}</td>
                                    <td>
                                        <button onClick={()=>handleRemplireForm(film.id)}>Edit</button>   
                                        <button onClick={()=>handleDelete(film.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
  );
}

export default AppFilter;

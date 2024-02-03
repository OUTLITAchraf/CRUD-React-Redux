import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateFilmAction } from "../Config/actions";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UpdateFilm() {
  const { id } = useParams();
  const film = useSelector((data) =>
    data.Films.find((f) => f.id === parseInt(id))
  );
  const [title, setTitle] = useState(film.title);
  const [description, setDescription] = useState(film.description);
  const [releaseDate,setReleasedate]=useState('')
  const [genres, setGenres] = useState(film.genres);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Update component state when film details change
    setTitle(film.title);
    setDescription(film.description);
    setReleasedate(film.Release_Date)
    setGenres(film.genres);
  }, [film]);

  const handleUpdate = () => {
    dispatch(
      UpdateFilmAction({
        id: parseInt(id),
        title: title,
        description: description,
        Release_Date :releaseDate,
        genres: genres,
      })
    );
    navigate('/');
  };

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
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/><br/>
        <label>Description Film :</label><br/>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/><br/>
        <label>Realise date Film :</label><br/>
        <input type="date" value={releaseDate}  onChange={(e)=>{setReleasedate(e.target.value)}}/><br/>
        <label>Genres Film :</label><br/>
        <input type="checkbox" name="genre" value='Action' onChange={handleGenres} checked={genres.includes('Action')}/>Action<br/>
        <input type="checkbox" name="genre" value='Adventure'  onChange={handleGenres} checked={genres.includes('Adventure')}/>Adventure<br/>
        <input type="checkbox" name="genre" value='Drama'  onChange={handleGenres} checked={genres.includes('Drama')}/>Drama<br/>
        <input type="checkbox" name="genre" value='Sci-Fi'  onChange={handleGenres} checked={genres.includes('Sci-Fi')}/>Sci-Fi<br/>
        <input type="checkbox" name="genre" value='Romance'  onChange={handleGenres} checked={genres.includes('Romance')}/>Romance<br/>
        <input type="checkbox" name="genre" value='Comedy'  onChange={handleGenres} checked={genres.includes('Comedy')}/>Comedy<br/>
        <input type="checkbox" name="genre" value='Horror'  onChange={handleGenres} checked={genres.includes('Horror')}/>Horror<br/>
        <input type="checkbox" name="genre" value='Animation'  onChange={handleGenres} checked={genres.includes('Animation')}/>Animation<br/>
        <input type="checkbox" name="genre" value='Familly'  onChange={handleGenres} checked={genres.includes('Familly')}/>Familly<br/>
        <input type="checkbox" name="genre" value='War'  onChange={handleGenres} checked={genres.includes('War')}/>War<br/>
        <input type="checkbox" name="genre" value='Music'  onChange={handleGenres} checked={genres.includes('Music')}/>Music<br/>
        <input type="checkbox" name="genre" value='Biography'  onChange={handleGenres} checked={genres.includes('Biography')}/>Biography<br/>
        <input type="checkbox" name="genre" value='Historique'  onChange={handleGenres} checked={genres.includes('Historique')}/>Historique<br/>
        <input type="checkbox" name="genre" value='Crime'  onChange={handleGenres} checked={genres.includes('Crime')}/>Crime<br/>
        <input type="checkbox" name="genre" value='Fantasy'  onChange={handleGenres} checked={genres.includes('Fantasy')}/>Fantasy<br/>
        <input type="checkbox" name="genre" value='Thriller'  onChange={handleGenres} checked={genres.includes('Thriller')}/>Thriller<br/>
        <input type="checkbox" name="genre" value='Sport'  onChange={handleGenres} checked={genres.includes('Sport')}/>Sport<br/>

        <button type="button" onClick={handleUpdate}>
            Update Film
        </button>
    </form>
  );
}

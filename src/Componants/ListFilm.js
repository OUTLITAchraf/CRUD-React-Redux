import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { DeleteFilmAction } from "../Config/actions";

export default function ListFilm() {
    const Films = useSelector((d)=>d.Films);
    const dispatch=useDispatch()
    const handleDelete = (id)=>{
        dispatch(DeleteFilmAction(id))
    }
    return (
        <div>
            <Link to={"/add-film"}>
                <button>Add film</button>
            </Link>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Release Date</td>
                        <td>Genre</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Films.map((film,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{film.id}</td>
                                    <td>{film.title}</td>
                                    <td>{film.description}</td>
                                    <td>{film.Release_Date}</td>
                                    <td>{film.genres.join(" , ")}</td>
                                    <td>
                                        <Link to={`/update-film/${film.id}`}>
                                            <button>Edit</button>   
                                        </Link>
                                        <button onClick={()=>handleDelete(film.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
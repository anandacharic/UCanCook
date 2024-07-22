import { useEffect, useState } from "react";
import api from "../api";
import {Heading, SimpleGrid} from "@chakra-ui/react"
import CusineCountry from "../components/CuisineType"
import { useNavigate } from "react-router-dom";
import Cusine from "../components/Cuisine";

function Cuisines(){

    const [cuisines,setCuisines] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        getCuisine();
    }, []);

    const deleteCuisine = (id) => { 
        api
            .delete(`/api/cuisines/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete cuisine.");
                setCuisines([])
                getCuisine()
            })
            .catch((error) => alert(error));
    };

    const getCuisine = () => {
        api
            .get("/api/cuisines/")
            .then((res) => res.data)
            .then((data) => {
                setCuisines(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    // const getCuisine = ()=>{
    //     api
    //         .get("/api/cuisines/")
    //         .then((data)=>{
    //             // console.log('data:')
    //             // console.log(data)
    //             setCuisines(data.data)
    //             filterCuisines(0, 10)
    //             // console.log(data)
    //         })
    //         .catch((err)=>console.log(err))
    // }

    const createCuisine = (e) => {
        e.preventDefault();
        api
            .post("/api/cuisines/", { name,description,imageUrl,type })
            .then((res) => {
                if (res.status === 201) alert("Cuisine created!");
                else alert("Failed to make note.");
                getCuisine();
            })
            .catch((err) => alert(err));
    };

    const nav = useNavigate();
    const Logout=()=>{
        localStorage.clear()
        nav("/login");
    }

    const makeNotes =()=>{
        nav("/");
    }

    // let cardCuisines = filterCuisines(0, 10);
    // function filterCuisines(startItem, endItem) {
    //     if (startItem == null || endItem == null) {
    //         startItem = 0;
    //         endItem = pageSize;
    //     }
    //     console.log(cuisines)
    //     return cuisines.slice(startItem, endItem).map(cuisine => {
    //         return (
    //             <CusineCountry key={cuisine.id} cusine={cuisine} deleteit={() => deleteCuisine(cuisine.id)} />
    //         )
        
    //     });
    // }

    return (
            <div>

                <div>
                    <Heading style={{textAlign:"center"}}>Cuisine</Heading>

                    <button className="logout-button" onClick={Logout}>
                        Logout
                    </button>
                </div>
                

                {/* <div className="main">
                    <SimpleGrid columns={3} spacing={10}>
                        {cardCuisines}
                    </SimpleGrid>
                </div> */}

                <div className="cuisineList">
                    {cuisines.map((cuisine)=>(
                        <Cusine cuisine={cuisine} key={cuisine.id} onDelete={deleteCuisine}/>
                        // <CusineCountry key={cuisine.id} cuisine={cuisine} />
                    ))}
                </div>

               <div>
                    <button className="register-button" onClick={makeNotes}>
                        Make notes
                    </button>
                </div>
                

                <Heading style={{textAlign:"center",padding:"20px"}}> Share your Cuisine.....!!! </Heading>
                <form onSubmit={createCuisine}>
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <label htmlFor="description">Description:</label>
                    <br />
                    <textarea
                        id="description"
                        name="description"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <br />
                    <label htmlFor="imageUrl">ImageUrl:</label>
                    <br />
                    <textarea
                        id="imageUrl"
                        name="imageUrl"
                        required
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    ></textarea>
                    <br />
                    <label htmlFor="type">Type:</label>
                    <br />
                    <textarea
                        id="type"
                        name="type"
                        required
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    ></textarea>
                    <br />
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
    );
}

export default Cuisines;
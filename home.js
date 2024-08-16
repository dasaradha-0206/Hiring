import { useNavigate} from "react-router-dom";

const Home=()=>{
    const navigate=useNavigate()
    function register(){
        navigate('/adddetails')
    }
    register()
    return <div className="home">
        <div className="img-title-btn">
            <h1 className="home-title">Hey developers lets's start your journey !!</h1>
            <img className="home-img" src="https://media.istockphoto.com/id/1190408194/photo/website-design-developing-programming-and-coding-technologies.jpg?s=1024x1024&w=is&k=20&c=weqSAS0nVJn6RkMHcEHvI-f7tgb84S_z6TYfChq2_Oc="></img>
        </div>
        <button className="home-button" onClick={register}>Register now</button>
    </div>
}
export default Home;
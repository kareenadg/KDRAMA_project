import { UserContext } from "../context/userContext";
import { useContext } from "react";

const Home = () => {
const {user} = useContext(UserContext);
    return <h1>Welcome {user}</h1>
}
export default Home;
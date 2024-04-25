import "./home.css"
import Topbar from "./topbar"
import SideBar from "./sidebar/sideCode"
import RightBar from "./Rightbar/Rightbar"
function Home(){
    return (
        <div>
            <Topbar />
            <div className="underTopbar">
            <SideBar />
           <RightBar />  
            </div>
        </div>
           
    );
}



export default Home;
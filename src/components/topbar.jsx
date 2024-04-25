import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@mui/icons-material"

function topbar(){
return(
    <div className="topbarContainer">
    <div className="topbarLeft">
        <img className="logo" src="./logoImage.jpg" alt=""/>
        <span></span>
    </div>
    <div className="topbarCenter">
    <div className="searchbar">
        <Search className="searchIcon"/>
        <input placeholder="search for freinds" type="text" className="seachInput" />
        
    </div>
    
    </div>
    <div className="topbarRight">

    <div className="topbarLinks">
    <a href="./Home">Home page</a>
    </div>
        <div className="topbaricons">
        <Person className="icon" />
            <span className="topbarIconBarge">1</span>
        </div>
        <div className="topbaricons">
            <Chat className="icon"/>
            <span className="topbarIconBarge">2</span>
        </div>
        <div className="topbaricons">
            <Notifications className="icon" />
            <span className="topbarIconBarge">3</span>
        </div>
        <img className="topbarProfile" src="./download.jpg" alt=""/>
        
    </div>

    </div>
) ;
}


export default topbar;
import "./Post.css"
import React from "react"

import {MoreVert,Favorite,ThumbUpAlt} from "@mui/icons-material"



function Post(){
    return(
        <div className="Post">
            <div className="postdetails">
                <div>
                <span className="userName">Kaneza Joe</span>
                <span className="postDate">5 Mins ago</span>
                </div>
                <MoreVert/>
            </div>
            <source src="" type="video/mp4"/>
            <img id="postImage" src="./nice1.jpg" alt="Nice Girls post"/>
            <div className="postIconContainer">
                <div className="postIcons">
                <div className="singleIcon">
                <ThumbUpAlt className="icons" htmlColor="white"/>
            
                </div>
            <div className="singleIcon">
            <Favorite className="heartIcons" htmlColor="white" />
                <span className="peopleLikeMessage">44 People Like it</span>
            </div>
                </div>
                
            <span>9 Comments</span>
                
                
            </div>
        </div>
    );
}
export default Post;
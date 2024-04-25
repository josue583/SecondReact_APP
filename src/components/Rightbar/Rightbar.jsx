import Post from "./postInformation/post"
import "./Rightbar.css"

import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material"

function RightBar(){
    return (
        <div className="RightBar">
            <div className="leftOfRightBar">
            <div className="feed">
            <div className="shareDetails">
            <img className="sharePersonProfile" src="./nice2.jpg" alt=""/>
                <input className="shareTitle" type="text" placeholder="what is in your mind Joe?" disabled />
            </div>
            
                <hr className="hr"/>
                <div className="selectMoreImages">
                <div className="selectImage">
                    <PermMedia className="shareImageIcons" htmlColor="gray" />
                    <div className="imageVideo">
                    <span className="shareImage">photo</span>
                    <span>video</span>
                    </div>
                  

                </div>
                <div className="selectImage">
                    <Label className="photoIcons" htmlColor="green" />
                    <div className="imageVideo">
                    <span className="shareImage">Tag</span>
                    </div>
                  

                </div>
                <div className="selectImage">
                    <Room className="photoIcons" htmlColor="blue" />
                    <div className="imageVideo">
                    <span className="shareImage">Location</span>
                    </div>
                  

                </div>
                <div className="selectImage" >
                    <EmojiEmotions className="photoIcons" htmlColor="orange" />
                    <div className="imageVideo">
                    <span className="shareImage">Feelings</span>
                    </div>
                  

                </div>
                <button className="shareButton">Share</button>
                </div>
                
           </div>
           <Post/>
            </div>
           

           <div className="nextfeed">         

           </div>
           
            </div>
    );
}
export default RightBar;
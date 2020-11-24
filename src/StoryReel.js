import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className = 'storyreel'>
      <Story
        image="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
        profileSrc="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
        title="React JS"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
        title="Javascript"
      />
      <Story
        image="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png"
        profileSrc="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png"
        title="HTML 5"
      />
      <Story
        image="https://seeklogo.com/images/C/css3-logo-FD8D698B77-seeklogo.com.png"
        profileSrc="https://seeklogo.com/images/C/css3-logo-FD8D698B77-seeklogo.com.png"
        title="CSS 3"
      />
      <Story
        image="https://img.icons8.com/color/452/firebase.png"
        profileSrc="https://img.icons8.com/color/452/firebase.png"
        title="Firebase"
      />
      
    </div>
  );
}

export default StoryReel;

import React, { Component } from "react";
import ReactDOM from "react-dom";

import HoverScroll from "./hoverScroll";

//https://medium.com/skylar-salernos-tech-blog/creating-an-image-puzzle-in-react-f0748ed03801

//https://app.codility.com/programmers/lessons/1-iterations/

//https://programmingwithmosh.com/react/drag-and-drop-react/
//https://codeburst.io/image-uploading-using-react-and-node-to-get-the-images-up-c46ec11a7129

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pagination-Hover</h1>
        <HoverScroll />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

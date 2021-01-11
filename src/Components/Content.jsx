import React from "react";
import "../style/content.css";
function Content(props) {
  return (
    <div className="content">
      <a href={props.link} rel="noopener noreferrer" target="_blank">
        <img className="content_image" src={props.image} alt="" />
      </a>
      <span className="content_title">
        {" "}
        <a href={props.link} rel="noopener noreferrer" target="_blank">
          {props.title}
        </a>
      </span>
      <p className="content_content">{props.content}</p>
      <span className="content_more">
        <a href={props.link} rel="noopener noreferrer" target="_blank">
          {" "}
          Read More...{" "}
        </a>
      </span>
      <span className="content_author">{props.author}</span>
      <br />
    </div>
  );
}

export default Content;

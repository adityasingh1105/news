import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, Newsurl, urlToImage } = this.props;
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={imageUrl}
            alt="Card image cap"
            width="286px"
            height="160px"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={Newsurl} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

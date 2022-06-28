import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, Newsurl,publishedAt } = this.props;
    return (
      <div>
        <div className="card my-3">
          <img
            className="card-img-top"
            src={
              !imageUrl
                ? "https://st4.depositphotos.com/14431644/21781/i/450/depositphotos_217810498-stock-photo-handwriting-text-demo-concept-meaning.jpg"
                : imageUrl
            }
            alt="Card image cap"
            width="286px"
            height="160px"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-muted"> dews{publishedAt}</small></p>
            <a href={Newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Read More</a>

          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

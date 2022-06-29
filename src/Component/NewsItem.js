import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, Newsurl, date, Author ,Source} = this.props;
    return (
      <div className="my-3">
        <div className="card"> <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{right:'-4%' , top:'-1%'}}>{Source}<span className="visually-hidden"></span> </span>
          <img src={
            !imageUrl
              ? "https://st4.depositphotos.com/14431644/21781/i/450/depositphotos_217810498-stock-photo-handwriting-text-demo-concept-meaning.jpg"
              : imageUrl
          } className="card-img-top" alt=".." />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted"> By {!Author ? "Unknown" : Author}  on {new Date(date).toLocaleDateString()}</small></p>

            <a href={Newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Read More</a>

          </div>

        </div>
      </div>
    );
  }
}

export default NewsItem;
// alt="Card image cap"
// width="286px"
// height="160px"
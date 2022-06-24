import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
   
  ];
  constructor() {
    super();
    this.state = { articles: this.articles ,loading: false};
  }
async componentDidMount(){
  let url ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2007a177d157481dbdaac2d015e1fbe1"
  let data =await fetch (url);
  let parsedData = await data.json()
  console.log(parsedData)
  this.setState({articles: parsedData.articles })
}
  render() {
    return (
      <div className="container my-2">
        <div className="row">

          {this.state.articles.map((element) => {
          return <div className="col-md-3" key={element.url} >
          <NewsItem
            title={element.title?element.title.slice(0,30):""}
            description={element.description?element.description.slice(0,48):"Lorem Ipsum is simply dummy text of  "}
            imageUrl={element.urlToImage}
            Newsurl={element.url}
          />
        </div>
          })}
          
        </div>
      </div>
    );
  }
}

export default News;

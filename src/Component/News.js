import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Weather from "./Weather";

export class News extends Component {

  articles = [];
  constructor(props) {
    super(props);
    this.state = { articles: this.articles, loading: false, page: 1 };
  }
  async componentDidMount() {
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=63f764b20b6942b19ffff6c8bf3a7857&pageSize=${this.props.pageSize}`;
    let data = await fetch(url); this.props.setProgress(100)
    let parsedData = await data.json();

  //   this.setState({
  //     articles: parsedData?.articles || [],
  //     totalResults: parsedData?.totalResults || 0
  //   });
  // }
    this.setState({
      // articles: parsedData ? articles : [],
      // totalResults: parsedData ? totalResults : 0,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    }
    );
  }

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category
        }&apiKey=63f764b20b6942b19ffff6c8bf3a7857&page=${this.state.page + 1
        }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();


      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  handlePrevClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category
      }&apiKey=63f764b20b6942b19ffff6c8bf3a7857&page=${this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();


    this.setState({ page: this.state.page - 1, articles: parsedData.articles });
  };
  render() {
    return (<>
    <div className="row">
<div className="col-md-1 centre"> <Weather/></div>
<div className=" col-md-10">     
      <div className="container my-2">        
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 30) : ""}
                  description={
                    element.description
                      ? element.description.slice(0, 48)
                      : "Lorem Ipsum is simply dummy text of  "
                  }
                  imageUrl={element.urlToImage}
                  Newsurl={element.url}
                  date={element.publishedAt}
                  Author={element.author}
                  Source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div></div>
      <div className="col-md-1"></div>
    </div></>
    );
  }
}

export default News;

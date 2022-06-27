import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
export class News extends Component {
  static defultsProps = { country: "in", pageSize: 5, category: "general" };
  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [];
  constructor() {
    super();
    this.state = { articles: this.articles, loading: false, page: 1 };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=0231c69f97a3477aa7010a909256216d&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
        this.props.category
      }&apiKey=0231c69f97a3477aa7010a909256216d&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=0231c69f97a3477aa7010a909256216d&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({ page: this.state.page - 1, articles: parsedData.articles });
  };
  render() {
    return (
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
      </div>
    );
  }
}

export default News;

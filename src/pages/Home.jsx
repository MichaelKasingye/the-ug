import React, { Component } from "react";
import { api } from "../Library/keys";
import NavBar from "../Components/NavBar";
import Content from "../Components/Content";
import Heading from "../Components/Heading";
import Footer from "../Components/Footer";

import "../style/Home.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    fetch(`${api.base}&apiKey=${api.API_key}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          articles: result.articles,
        });
      })
      .catch((err) => err);
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="display">
          {this.state.articles.slice(7, 10).map((item) => (
            <div className="display_image" key={item.url}>
              <a href={item.url} rel="noopener noreferrer" target="_blank">
                <img src={item.urlToImage} alt="" />
                <div className="display_content">{item.title}</div>
              </a>
            </div>
          ))}
        </div>

        <Heading />

        <div className="content_display">
          {this.state.articles.map((item, index) => (
            <Content
              key={item.title}
              link={item.url}
              image={item.urlToImage}
              title={item.title}
              content={item.content}
              author={item.author}
              more={item.url}
            />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default News;

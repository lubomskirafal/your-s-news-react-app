import React from 'react';


const RenderNews = props => {
    const timeRegex = /[A-Z]/gi;
    const stockImg = './img-placeholder.jpg';
    const articles = props.searched.map((article, index)=>{
      const {description, image, publishedAt, source, title, url, } = article;
     
      return (
        <article key={source.name?source.name+index:url+index}  className="app__content-box">
          <div className="app__content-titles">
            <a href={url} target="blank"><h2 className="app__content-title">{title?title:"Can't load article title"}</h2></a>
            <p className="app__content-time">{publishedAt.replace(timeRegex,' ')}</p>
          </div>
          <figure className="app__content-figure">
                <a href={url} target="blank">
                  <img className="app__content-img" loading="lazy" src={image?image:stockImg} alt={source.name}/>
                </a>
          </figure>
          <figcaption className="app__content-figure-caption">{source.name? source.name:null}</figcaption>
          <p className="app__content-article">{description}</p>
        </article>
      );
    });
    return (
      articles
    )
};

export const NoArticles = ()=> {
    return (
        <h2 className="app__content__no-articles">No articles to display</h2>
    );
  };

export default RenderNews;
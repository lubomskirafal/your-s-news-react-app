
import './../sass/App.scss';
import React from 'react';
import {CookiePage, CookieAlert} from './components/CookieInfo';
import Header from './components/Header';
import RenderNews, {NoArticles} from './components/RenderNews';
import Footer from './components/Footer';
import {getUserCountry, getUserLang} from './components/getUsersNavigator';

class App extends React.Component {
  state = {
    searched: null,
    onLoad: null,
    noData: false,
    query:'',
    cookieInfo: false,
    cookies: false
  };

  showCookies = ()=> {
    this.setState(prevState=>({
      cookieInfo: !prevState.cookieInfo,
    }));
  };

  readCookie = (name)=> {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return this.setState({
          cookies: true,

        });
        return this.setState({
          cookies: false,
          onLoad: null,
          flag: true,
        });
    };
  };

  createCookie = (name, value, days)=> {
    this.setState({cookie: true},()=>{
      let date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      let expires = "; expires=" + date.toGMTString();
      document.cookie = name+"="+value+expires+"; path=/";
      this.readCookie('cookies_accepted');
    });
  };

  handleInput = (value)=> {
    this.setState({query: value});
  };

  getDate = (key = 0)=> {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate() ;
    const todayDate = (`${year}-${month+1}-${day + key}`);
    return todayDate;
  };

  handleDataFetch = (e)=> {
    e.preventDefault();
    if(!this.state.query) return;
    const url =  ` https://gnews.io/api/v3/search?lang=${getUserLang()}&maxdate=${this.getDate(7)}&q=${this.state.query.toLowerCase()}&token=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then(res=>{
          if(res.status !== 200) return this.setState(prevState=>({
            onLoad: null,
            noData: true,
            query: !prevState.query
          }));
          if(res.status === 200) return res.json();
      })
      .then(data=>{
        if(data.articleCount < 1 ) return this.setState(prevState=>({
          searched: null,
          noData: true, 
          onLoad: null,
          query: !prevState.query
        }));
        this.setState(prevState=>({
          searched: data.articles,
          onLoad:null,
          noData: false,
          query: !prevState.query
        }))
      })
      .catch(err=> new Error(err));
  };

  handleDataFetchOnLoad = ()=> {
    const url = `https://gnews.io/api/v3/search?q=${getUserCountry(getUserLang())}&lang=${getUserLang()}&maxdate=${this.getDate(1)}&token=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then(res=>{
          if(res.status !== 200)  this.setState({
            noData: true
          });
          if(res.status === 200) return res.json();
      })
      .then(data=>{
        this.setState({
          onLoad: data.articles
        })
      })
      .catch(err=> new Error(err));
      
  };

  handleHideNavBar = ()=> {
    const navBar = document.querySelector('.header');
    let initialScrollPos = 0;
    
    const initHide = ()=> {
      const currentScrollPos = window.scrollY;
      if(currentScrollPos> initialScrollPos + 100) {
          navBar.style.transform =  'translateY(-200px)';
          initialScrollPos = currentScrollPos;
      };
      if(currentScrollPos< initialScrollPos) {
          navBar.style.transform =  'translateY(0)';
          initialScrollPos = currentScrollPos;
      };
    };
    return document.addEventListener('scroll',()=>initHide());
  };

  componentDidMount () {
    this.handleDataFetchOnLoad();
    this.readCookie('cookies_accepted');
    this.handleHideNavBar();
  };

  render () {
    const {searched, onLoad, noData, cookieInfo, cookies} = this.state;
    return (
        <React.Fragment>
          <div className="wrapper">
            <Header 
            click={this.handleDataFetch} 
            defaultValue={this.state.query} 
            onInput={this.handleInput}
            />
          </div>
          <div className="wrapper">
            <main className="app__content">
              {searched&&!cookieInfo? <RenderNews searched={searched}/> : null}
              {onLoad&&cookies&&!cookieInfo? <RenderNews searched={onLoad}/> : null}
              {noData&&!cookieInfo&&cookies? <NoArticles /> : null}
              {cookieInfo? <CookiePage showCookies={this.showCookies} />: null}
              {!cookies&&!cookieInfo? <CookieAlert createCookie={this.createCookie} showCookies={this.showCookies}/> : null}
            </main>
          </div>
          <Footer showCookies={this.showCookies}/>
        </React.Fragment>
    );
  }
};

export default App;

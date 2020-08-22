import React from 'react';


const Header = props => {
    return (
        
        <header className="header">
            <div className='wrapper'>
                <div className="logo">
                    <img className="logo__img" src="./safari-pinned-tab.svg" alt="logo"/>
                    <h1 className="logo__text" >Your's News</h1>
                </div>

                <div className="search">
                <form  onClick={props.click} >
                    <input 
                        onChange={(e)=>props.onInput(e.target.value)}
                        value={!props.defaultValue?'':props.defaultValue} 
                        className="search__input" 
                        type="text" 
                        placeholder="Search"
                    />
                    <button 
                        className="search__button">
                        <img className="search__button-img" src="./search-icon.svg" alt="search"/>
                    </button>
                </form>
                </div>
            </div>
        </header>
        
    );
};

export default Header;
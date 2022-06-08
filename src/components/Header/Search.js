import React from 'react';
import './search.css';
export default class Search extends React.Component {
    
   
    render() {
        return (
<div className="search_section">
 <form id="search_form">
                            <input type="text" placeholder="Images, #tags, @users oh my!" id="search"/>
                        </form>
                        <button className="submit_search">
                        <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-search.94d41ef40ad4e47162607d90122c892f.svg" alt=""/>
                        </button>
</div>
        	)
    }
}
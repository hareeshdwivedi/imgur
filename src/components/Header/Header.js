import React from 'react';
import './header.css';
import {NavLink} from 'react-router-dom';
import Search from './Search.js';
import Account from '../Account/Account.js';
export default class Header extends React.Component {
    
    render() {
        return (
            <div>
                <div className="header_main">
                    <div className="header_name">
                        <div className="header_logo">
                    <NavLink exact to="/home"><img src="https://s.imgur.com/desktop-assets/desktop-assets/Navbar-logo.bcf646386406b43008da913e901b916d.svg" alt="" /></NavLink>
                        </div>

                        <a href="" className="ButtonLink" title="New post">
                            <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.e31d38c8dcf98b5c9ce5483756923188.svg" alt="" />
                            <span>New post</span>
                        </a>
                    </div>
                    <div className="header_search">
                       <Search/>
                    </div>
                    <div className="header_right">
                    <div className="right_wrapper">                   
                         <div className="header_icon">
                
                    <a href="">
                    <img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-leaderboard.99437df2b52eceb16428afa3c5ae40c1.svg" alt="" /></a>
      
                        <a href=""><img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-chat.951724718c8a2113148427d8aaba480a.svg" alt="" /></a>
                        
                        
                        <a href=""><img src="https://s.imgur.com/desktop-assets/desktop-assets/icon-notifications.6a14dca2fac0255d147c87f73d2ceed3.svg" alt="" /></a>
                        
                        </div>
                     <div className="avatar_header">
                        <Account/>
                            </div>    
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import './account.css';

export default class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: [],
            show: false
        }
    }

    componentDidMount() {
        let clientId = "d91512873124780";
        axios({
            method: 'get',
            url: 'https://api.imgur.com/3/account/hardw123',
            headers: {
                'authorization': 'Client-ID ' + clientId
            }
        }).then(response => {
            this.setState({
                account: response.data.data
            });
        }).catch(function (error) {
            console.log(error);
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            show: !this.state.show
        })
    }

    render() {

        return (
            <div id="avatar">
                <a href="" onClick={this.handleClick} style={{display: 'block', position: 'relative'}}><img
                    className="account_img" src={this.state.account.avatar} alt=" "/></a>
                <div>{this.state.show ? <Settings/> : null}</div>
            </div>
        )
    }
}

const Settings = () => {
    return (
        <div id="dropdown_list">
            <div className="dropdown_option_group">
                <a href="" className="dropdown_option">Posts</a>
                <a href="" className="dropdown_option">Favorites</a>
                <a href="" className="dropdown_option">Comments</a>
                <a href="" className="dropdown_option">About</a>
                <a href="" className="dropdown_option">Images</a>
                <a href="" className="dropdown_option">Albums</a>
            </div>
            <div className="dropdown_option_group dropdown_option_group_footer">
                <a href="" className="dropdown_option"><img className="settings"
                                                            src="https://s.imgur.com/desktop-assets/desktop-assets/icon-settings.7399c1dde71a66bb11f5674b02f8a5f1.svg"
                                                            alt=""/><span>Settings</span></a>
                <a href="" className="dropdown_option"><img className="sign-out"
                                                            src="https://s.imgur.com/desktop-assets/desktop-assets/icon-sign-out.21a5a43e3814a8148874cef50962eedf.svg"
                                                            alt=""/><NavLink to="/"><span>Sign Out</span></NavLink></a>
            </div>
            <div className="top_arrow"></div>
        </div>

    )

}
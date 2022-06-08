import React from 'react';
import axios from 'axios';
import Comment from '../comment/Comment';
import PopularSub from '../popularsub/PopularSub.js';
import './allbum.css';
import HeaderSub from '../../Header/HeaderSub.js';
import {Scrollbars} from 'react-custom-scrollbars';
import {Button} from 'react-bootstrap';
import AllbumFooter from './AllbumFooter.js';
import './allbumfooter.css';
import Loader from 'react-loader';

export default class Allbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allbum: [],
            loaded:false
        }
    }

    componentDidMount() {
        let clientId = "d91512873124780";
        axios({
            method: 'get',
            url: `https://api.imgur.com/3/album/${this.props.match.params.id}`,
            headers: {
                'authorization': 'Client-ID ' + clientId
            }
        }).then(response => {
            this.setState({
                allbum: response.data.data,
                loaded:true
            });
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        var arr = [];
        var res;
        if (this.state.allbum.images) {
            for (var i = 0; i < this.state.allbum.images.length; i++) {
                arr.push({"link": this.state.allbum.images[i].link, "des": this.state.allbum.images[i].description});
            }
        }

        res = arr.map((el, id) => {
            return (
                <div key={id}>
                    <div className="post_image">
                        <img src={el.link}
                             style={{objectPosition: '80% 20%', objectFit: 'cover'}} alt="" / >
                    </div>
                    <div className="post_img_meta">
                        <p>{el.des}</p>
                    </div>
                </div>
        )
        });
        return (
            <div className="main_allbum_body">
                <HeaderSub/>
                <Loader loaded={this.state.loaded} color="blue">
                <div className="wrapper">
                    <div className="post_container">

                        <div className="post_header">

                            <div className="post_title_container">
                                <h1 className="post_title">{this.state.allbum.title}</h1>

                                <div className="post_title_meta">
                                    <span>by</span><span>{this.state.allbum.account_url}</span>
                                </div>
                            </div>

                            <div className="next_prev">
                                <div className="prev">
                                    <span>&#60;</span>
                                </div>
                                <div className="btn_action">
                                    <div className="text">Next Post</div>
                                    <span className="right_arrow"></span>
                                </div>
                            </div>
                        </div>
                        <div className="post_images">
                            {res}
                        </div>

                        <div className="poster_action">
                            <div className="poster_inner">
                                <div>
                                    <span><i className="fas fa-long-arrow-alt-up"></i></span>
                                    <span><i className="fas fa-long-arrow-alt-down"></i></span>
                                    <span><i className="fas fa-heart"></i></span>

                                </div>
                                <div>
                                    <div className="social_icons_blog">

                                        <span><i className="fab fa-facebook-f social_icon"></i></span>
                                        <span><i className="fab fa-twitter social_icon"></i></span>
                                        <span><i className="fab fa-pinterest-p social_icon"></i></span>
                                        <span><i className="fab fa-reddit-alien social_icon"></i></span>

                                    </div>


                                </div>
                            </div>
                            <div className="allbum_views">{this.state.allbum.views} views</div>

                        </div>
                        <div id="new_comment">
                            <form>
                                <input type="text" placeholder="write a comment" id="textarea"/>
                            </form>
                            <div className="summary">
                                <div>
                                    <a href="">remember the community rules</a>
                                </div>
                                <div>
                                    <Button disabled>Post</Button>
                                </div>
                            </div>
                        </div>
                        <div className="comment_header">
                            <div>
                                {this.state.allbum.images_count}COMMENTS
                            </div>
                            <div>
                                <span>Expand All</span>
                                <span>Best</span>
                            </div>
                        </div>
                        <div className="comment_details_main">
                            <Comment id={this.props.match.params.id}/>
                        </div>
                    </div>
                    <div className="popular_item_list">

                        <div className="header_side_list">
                            <div>
                                <p>MOST VIRAL IMAGES</p>
                                <span>SORTED BY POPULARITY</span>
                            </div>
                            <div>
                                <i className="fas fa-th-list list"></i>
                                <i className="fas fa-th th"></i>
                            </div>
                        </div>
                        <Scrollbars style={{width: 300, height: 350}}>
                            <PopularSub/>

                        </Scrollbars>

                        <AllbumFooter/>


                    </div>


                </div>
                </Loader>
            </div>

        )

        }
        }


import React from 'react';
import axios from 'axios';
import './Images.css';
import {Link} from 'react-router-dom';
import Loader from 'react-loader';

export default class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popular: [],
            loaded: false
        }
}
       
        componentWillReceiveProps(nextProps){

            axios.get(nextProps.url).then(response => {
            this.setState({
                    popular: response.data.data,
                    loaded: true
                });
        })
        }

    render() {
       
        if(!this.state.popular){
            return null;
        }

const filte=this.state.popular.filter(el=>{
    return el.images&&el.images[0].link.length>1?el.images[0].link:null;
});

            var result = filte.map((el, id) => {
                return (

                    <div id="grid_column" key={id}>
                    <Link to={`/gallery/${el.id}`} >
                            <div className="post_item_media">
                                {el.images&&el.images[0].link.substr(el.images[0].link.length-1)==='4'?<Vid sr={el.images?el.images[0].link:null}/>:<Img sr={el.images?el.images[0].link:null}/>}
                            </div>
                            
                            <div id="post-item-title_wrap">
                                <div className="post_title">
                                    <p>{el.title}</p>
                                </div>
                                <div className="post_ups_dws">
                                    <div>
                                        <p className="inner_icons"><i class="fas fa-arrow-up"></i>{el.ups}</p>
                                    </div>
                                    <div>
                                        <p className="inner_icons"><i class="fas fa-arrow-up"></i>{el.downs}</p>
                                    </div>
                                    <div>
                                        <p className="inner_icons"><i className="fas fa-comment-alt"></i>{el.comment_count}</p>
                                    </div>
                                    <div>
                                        <p className="inner_icons"><i className="fas fa-eye"></i>{el.views}</p>
                                    </div>
                                </div>
                             </div>
                         

                    </Link>
                    </div>
                )
            
          
            });
        

        return (
                <div className="home_grid">

                    {this.state.loaded?result: <Loader loaded={this.state.loaded} color="blue"/>}
                </div>
        )
    }
}

const Img=(props)=>{
    return (
<img src={props.sr} alt=""/>
    )
}
const Vid=(props)=>{
    return(
        <div>
        <video  controls>
        <source src={props.sr} type="video/mp4"/>
      </video>
      </div>
    )
}
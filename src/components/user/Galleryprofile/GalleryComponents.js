import React from 'react';
import axios from 'axios';
import Footer from './Footer.js';
import './gallerycomponent.css';

const url = 'https://api.imgur.com/3/gallery/hot/viral/0?showViral=true&client_id=5d692219f4e58cd';

export default class GalleryComponents extends React.Component{

	render(){
return(
<div>
<div className="left">
<Comments/>
<Popular/>
<Footer/>
</div>
<div className="right">
<PanelMenu/>
<Account/>
<Neutral/>
</div>
</div>
	)
}
}
const Comments=()=>{

	return(
<div className="panel">
<div className="panel_header textbox">
<h2>Gallery comments</h2>
<div className="options">
<ul>
<li><a href="">Newest</a></li>
<li><a href="">Oldest</a></li>
<li><a href="">Best</a></li>
<li><a href="">Worst</a></li>
</ul>
</div>
</div>
</div>

	);
}

class Popular extends React.Component{
constructor(props){
	super(props);
	this.state={
		popular:[]
	}
}
componentDidMount() {
        axios.get(url).then(response => {
            this.setState({
                    popular: response.data.data,
                });
        })
    }

    render(){
var result = this.state.popular.map((el, id) => {
                
                return (
                    <div id="grid" key={id}>
                                <img src={el.images?el.images[0].link: null}  alt=" "/>
                            </div>
                            );
                        });
	return(
<div className="panel">
<div className="panel_header textbox">
<h2>What's popular right now</h2>
</div>
<div className="popular_result">
{result}
</div>
</div>
	)
}
}
const PanelMenu=()=>{
	return(
<div className="panel_menu panel">
<div className="textbox btn">
<h2>Comments</h2>
</div>
<div className="textbox btn">
<h2>Submitted images</h2>
</div>
<div className="textbox btn">
<h2>Gallery favorites</h2>
</div>
<div className="textbox btn">
<h2>Replies</h2>
</div>
</div>
	)
}
const Account=()=>{
return(
<div className="panel_menu panel">
<div id="account-bio" className="textbox profile-access">
<i>This is your public profile. Write something about yourself!</i>
</div>
<div className="textbox bold">
<span className="stat">0</span>reputation . since Apr 2018
</div>
</div>
)
}
const Neutral=()=>{
return(
<div className="panel_menu panel">
<div class="textbox notoriety-container">
<h1 className="notoriety-container-title">Notoriety:
<span className="green">Neutral</span></h1>
</div>
<div id="notoriety-link">
<a href="">show list</a>
</div>
</div>
)
}

import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
export default class BackImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: []
        }
    }
    componentDidMount() {

        axios.get(`https://api.imgur.com/3/image/${this.props.res}?client_id=d91512873124780`).then(response => {
            this.setState({
                    img: response.data.data
                })
        })
    }

    render() {
       
        return(
            <div>
                         <img src={this.state.img.link} alt="" id="back_img" /> 

            </div>
        )   
        }
}

BackImg.propTypes={
    res:PropTypes.string.isRequired
}
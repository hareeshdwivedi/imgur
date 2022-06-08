import React from 'react';
import Images from './Gallery/Images/Images.js';
import Tags from './tag/Tags';
import Header from './Header/Header';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../index.css';

const img = 'https://s.imgur.com/desktop-assets/desktop-assets/bg-home-2.f1df058d8494e2f402781cc93a7f4003.png';
const options = [
    'popular', 'newest', 'random'
]
const option = [
    'most viral', 'user submitted'
]
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: ''
        }
    }

    componentDidMount() {
        this.setState({
            val: 'https://api.imgur.com/3/gallery/hot/viral/0?showViral=true&client_id=d91512873124780'
        });
    }

    _onSelect = () => {
        if (options[1] === 'newest') {
            this.setState({
                val: 'https://api.imgur.com/3/gallery/hot/time/0?showViral=true&client_id=d91512873124780'
            });
        }
        else {
            return null;
        }
    }

    render() {

        const defaultOption = option[0];
        const defaultOptions = options[0];

        var arr = ['The center of a donut is 100% fat free.', 'Never be bored again.', 'On the internet, nobody knows you"re a dog"'];
        var res = arr[Math.floor(arr.length * Math.random())];
        return (
            <div style={{backgroundImage: `url(${img})`, height: '450px', backgroundSize: 'cover'}}>
                <Header/>
                <div className="random-title">
                    <h2 style={{fontSize: '20px'}}> {res}</h2>
                </div>
                <div className="tag-container">
                    <Tags/>
                </div>
                <div className="content-wrapper">
                    <div className="content-inner">
                        <div>
                            <Dropdown options={option} onChange={this._onSelect} value={defaultOption}/>

                        </div>
                        <div>
                            <Dropdown options={options} onChange={this._onSelect} value={defaultOptions}/>
                        </div>

                    </div>
                    <div>
                        {<Images url={this.state.val}/>}

                    </div>

                </div>
            </div>
        )
    }
}
import React from 'react';
import axios from 'axios';
import BackImg from './BackImg ';
import './tag.css';
import Feature from './Feature.js';
import TagLabel from './TagLabel.js';

const url = 'https://api.imgur.com/3/tags?client_id=d91512873124780';

export default class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            status: false,
            loaded: false,
            val: "MORE TAGS+"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        axios.get(url).then(response => {
            this.setState({
                tags: response.data.data.tags,
                loaded: true

            });
        })
    }
    handleClick(e) {
        e.preventDefault();
        this.setState({
            status: !this.state.status
        });

    }
    render() {


        let result = this.state.tags.slice(0, 7).map((el, id) => {

            return (
                <div className="tag" key={id}>
        
                   <div className="tags_inner">
                        <div className="back_img_main">
                            <BackImg res={el.background_hash} />
                        </div>

                            <TagLabel name={el.name} total_items={el.total_items} accent={el.accent}/>
                    </div>
                </div>

            );
        })
        let result1 = this.state.tags.slice(7, 34).map((el, id) => {
            return (
                <div className="tag">
                    <div className="tags_inner">
                        <div className="back_img_main">
                            <BackImg res={el.background_hash} />
                        </div>
                 <TagLabel name={el.name} total_items={el.total_items} accent={el.accent}/>

                    </div>
                </div>
            );
        })
      
        return (
            <div className="trending">
                <div className="trendingtags-header">
                    <div className="trendingtags_label">
                        <span>Explore Tags</span>
                    </div>
                    <div className="label_toggle">
                    <a href="" onClick={this.handleClick} ref={(node) => { this.myref = node }}>{!this.state.status ? this.state.val : "LESS TAGS -"}</a>
                    </div>
                </div>
                    <div className="trending_tags_container">

              <Feature/>  {result}
                
                        {this.state.status ? result1 : null}
                    </div>

                
            </div>
        )
    }
}






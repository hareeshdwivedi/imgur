import React from 'react';
export default class TagLabel extends React.Component{
    
    render(){

return(
<div className="tag_label" style={{backgroundColor:`#${this.props.accent}`}}>
<div className="tag_name">{this.props.name}</div>
                            <div className="tag_post">{this.props.total_items}<span style={{ marginLeft: '2px' }}>Posts</span></div>
</div>
)

    }
}
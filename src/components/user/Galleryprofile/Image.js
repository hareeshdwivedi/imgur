import React from 'react';
import Footer from './Footer.js';
import './Images.css';
const Image=()=>{

	return(
<div className="all-left-panel">
<div className="nav-wrapper">
<h2><span className="total">0</span><span className="tottal-image-suffix">images</span></h2>
</div>
<div id="options">
<div id="view" className="combobox left">
<div className="section">All Images</div>
<div className="triangle"></div>
</div>
<div className="left" id="sort">
<div className="section">Time Uploaded</div>
<div className="triangle"></div>
</div>
<div className="left" id="order">
<div className="section">Ascending</div>
<div className="triangle"></div>

</div>
<div className="left" id="mode">
<div className="section">View Image Info</div>
<div className="triangle"></div>

</div>
</div>
<div className="thumbs-container">
<p>It's time to upload your first image. Use the upload buttons to the right, or drag and drop directly to this page to get started.</p>
</div>
<Footer/>
</div>
		)
}
export default Image;
import React from 'react';
import Urls from './Urls';
import Options from './Options';
import './both.css'


class Both extends React.Component{

    constructor(props) {
        super(props);
        
    }
	

	tellall(newall){
        this.props.ALL.all = newall;
        // console.log(this.props.ALL.all);
        this.props.tellindexurl(newall);
	}


	tellopts(newoptions){
        this.props.ALL.opt = newoptions; 
        // console.log(this.props.ALL.opt);
        this.props.tellindexopt(newoptions);
    }

	render() {

		return(
		<div>
			<div id='url'>
				<div id='urltop' align="center"><h1>PT Websites</h1></div>
				<div id="root"><Urls tellall={this.tellall.bind(this)} all={this.props.ALL.all} /></div>
			</div>
			<div id='options'>
				<div id='opttop' align="center"><h1>Helper Options</h1></div>
				<div id="root2"><Options tellopts={this.tellopts.bind(this)} opt={this.props.ALL.opt} /></div>
			</div>
		</div>

		)
	}
	
}



export default Both;
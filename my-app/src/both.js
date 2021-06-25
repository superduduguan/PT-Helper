import React from 'react';
import Urls from './Urls';
import Options from './Options';
import './both.css'


var name = ['NanyangPT', 'NpuPT ', 'ByrPT'];        
var address = ['http://nanyangpt.com/', 'http://npupt.com/', 'https://bt.byr.cn/'];
var ckb = [true, true, true];
var opt = [true, true, true, true, true];

class Both extends React.Component{

    constructor(props) {
        super(props);
        this.state = {name: [], address: [], ckb:[], opt:[]};
    }
	
	// synchronous states

	
	
	
	tellme_1(state){
		this.setState({name: state});
		name = [...state];
		this.props.TellMeAll([name, address, ckb, opt]);
	}
	tellme_2(state){
		this.setState({address: state});
		address = [...state]
		this.props.TellMeAll([name, address, ckb, opt]);
	}
	tellme_ckb(state){
		ckb = [...state]
		this.setState({ckb: state});
		this.props.TellMeAll([name, address, ckb, opt]);
	}
	tellme2(state){
		opt = [...state]
		this.setState({opt: state});
		this.props.TellMeAll([name, address, ckb, opt]);
	}
	
	render() {
		return(
		<div>
			<div id='url'>
				<div id='urltop' align="center"><h1>PT Websites</h1></div>
				<div id="root"><Urls tellme1={this.tellme_1.bind(this)} tellme2={this.tellme_2.bind(this)} tellmeckb={this.tellme_ckb.bind(this)}/></div>
			</div>
			<div id='options'>
				<div id='opttop' align="center"><h1>Helper Options</h1></div>
				<div id="root2"><Options tellme={this.tellme2.bind(this)} /></div>
			</div>
		</div>

		)
	}
	
}



export default Both;
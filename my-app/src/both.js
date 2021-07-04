import React from 'react';
import Urls from './Urls';
import Options from './Options';
import './both.css'


var name = ['NanyangPT', 'NpuPT ', 'ByrPT'];        
var add = ['http://nanyangpt.com/', 'http://npupt.com/', 'https://bt.byr.cn/'];
var ckb = [true, true, true];
var opt = [true, true, true, true, true];
var all = {name: name, add: add, ckb: ckb}
class Both extends React.Component{

    constructor(props) {
        super(props);
        
    }
	
	// synchronous states
	
	tellall(all){

        all = all;
        console.log(all);
	}



	tellopts(newoptions){
        opt = newoptions; 
        console.log(opt);
    }

	render() {
        
		return(
		<div>
			<div id='url'>
				<div id='urltop' align="center"><h1>PT Websites</h1></div>
				<div id="root"><Urls tellall={this.tellall.bind(this)} all={all} /></div>
			</div>
			<div id='options'>
				<div id='opttop' align="center"><h1>Helper Options</h1></div>
				<div id="root2"><Options tellopts={this.tellopts.bind(this)} opt={opt} /></div>
			</div>
		</div>

		)
	}
	
}



export default Both;
import React from 'react';
class Options extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ckb:[],
			options: ['Show Search button on Douban list', 'Show Search button on Douban subject', 'Add to interest when button clicked', 'Return the results collection page', 'Show result on the following page']
        }
    }
    
    tellhimopts(i){
        this.props.tellopts(i);
    }

	change(index, e){
		let newopt = this.props.opt;
		newopt[index] = e.target.checked
		this.tellhimopts(newopt);
        this.setState({ckb: newopt});
	}

	


	render() {
        return (
            <div>
                {this.state.options.map(
                	(item, index)=>
                	{
                		return(
							<div style={{marginTop:'2em', fontSize:'1.5em', paddingLeft: '3%'}} key={(index+index)*5}>
								<input type="checkbox" key={index*index} value={item} style={{zoom:'150%'}} onChange={this.change.bind(this, index)} checked={this.props.opt[index]}/>
								<span style={this.props.opt[index]? {marginLeft:'3%', border: 'cyan solid', borderRadius: '40px', background:'#E0FFFF', padding:'0.4em'}: {marginLeft:'3%', padding:'0.4em', borderRadius: '40px'}} key={-index*index-1}>{item}</span>
							</div>
					
							
						)
					}
				)}
			</div>
        );
    }
}
export default Options;
// TODO: connect
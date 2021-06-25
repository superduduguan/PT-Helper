import React from 'react';
class Options extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            ckb:[true, true, true, true, true],
			options: ['Show Search button on Douban list', 'Show Search button on Douban subject', 'Add to interest when button clicked', 'Return the results collection page', 'Show result on the following page']
        }
    }
    
	ckb(index, e){
		let ckb = [...this.state.ckb];
		ckb[index] = e.target.checked
		this.setState({ckb: ckb});
		this.tellhim(ckb);
		
	}
	
	tellhim(a){
		this.props.tellme(a);
	}

	render() {
        return (
            <div>
                {this.state.options.map(
                	(item, index)=>
                	{
                		return(
							<div style={{marginTop:'2em', fontSize:'1.5em', paddingLeft: '3%'}} key={(index+index)*5}>
								<input type="checkbox" key={index*index} value={item} style={{zoom:'150%'}} onChange={this.ckb.bind(this, index)} checked={this.state.ckb[index]}/>
								<span style={this.state.ckb[index]? {marginLeft:'3%', border: 'cyan solid', borderRadius: '40px', background:'#E0FFFF', padding:'0.4em'}: {marginLeft:'3%', padding:'0.4em', borderRadius: '40px'}} key={-index*index-1}>{item}</span>
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
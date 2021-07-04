import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)




class Urls extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: [],
            add: [],
            ckb: [],
            inputval1: '',
			inputval2: '',
        };
		this.input1ref = React.createRef();
		this.input2ref = React.createRef();
    }
	

    inputchange1(e){
        this.setState({inputval1: e.target.value});  
    }
	inputchange2(e){
	    this.setState({inputval2: e.target.value});
	}
	fire(a, b, c){
		MySwal.fire({didOpen: () => {
			MySwal.clickConfirm()}}).then(() => {
		  return MySwal.fire(a, <h3 style={{margin: '0'}}>{b}</h3>, c);
		})
	}

    buttonclick1(){
		if(this.state.inputval1 === ''){

			this.fire("ERROR", "Empty input.", "error");
			return
		}
		if(this.props.name.length === 6){
			this.fire("ERROR", "Up to 6 websites are accepted.", "error");
			return
		}
		if(this.props.name.length > this.props.add.length ){
			this.fire("ERROR", "Please confirm the last address first.", "error");
			return
		}
		let newname = [...this.props.name, this.state.inputval1];
		let newckb = [...this.props.ckb, true];
        console.log(newname);
		this.props.tellname(newname);
        this.props.tellckb(newckb);
        this.setState((state, props) => ({
            name: [...props.name, state.inputval1]
          }));
        this.setState((state, props) => ({
            ckb: [...props.ckb, true]
          }));
    }
	
    buttonclick2(){
		if(this.state.inputval2 === ''){
			this.fire("ERROR", "Empty input.", "error");
			return
		}
		if(this.props.add.length === 6){
			this.fire("ERROR", "Up to 6 websites are accepted.", "error");
			return
		}

        let newadd = this.props.add
        let newinput = this.state.inputval2
        newadd.push(newinput);
		if(newadd.length > this.props.name.length){
			this.fire("ERROR", "Please confirm the name first.", "error");
			return
		}
				
        
        
        this.props.telladd(newadd);
        this.setState({add: newadd});
		if(this.props.add.length - this.props.name.length === 0){
			
			this.input1ref.current.value=' ';
			this.setState({inputval1: ''});
			this.input2ref.current.value=' ';
			this.setState({inputval2: ''});
		}


		
    }
	
	ckb(index, e){
		let newckb = this.props.ckb
		newckb[index] = e.target.checked
		this.props.tellckb(newckb);
        this.setState({ckb: newckb});
	}
	

	
	dlt(index, e){
		
		const newname = this.props.name;
		const newadd = this.props.add;
		const newckb = this.props.ckb;
		newname.splice(index, 1);
		newadd.splice(index, 1);
		newckb.splice(index, 1);
		
		this.props.tellname(newname);
		this.props.telladd(newadd);
		this.props.tellckb(newckb);
        this.setState({ckb: newckb});
        this.setState({add: newadd});
        this.setState({name: newname});
	}

	render() {
        return (
            <div>
                <div style={{display: 'inline', width:'30%'}}>
					<h3 style={{display: 'inline', fontSize:'1.75em'}}>Name:    </h3>
                    <input value={this.state.inputval1} onChange={this.inputchange1.bind(this)} style={{width:'30%', fontSize:'1.75em'}} id='input1' ref={this.input1ref} />
                    <button onClick={this.buttonclick1.bind(this)} style={{width:'2.5em', fontSize:'1.75em'}}>add</button>
                </div>
				
				<div style={{display: 'inline', width:'30%'}}>
					<h3 style={{display: 'inline', marginLeft:'1.75em', fontSize:'1.5em'}}>URL:    </h3>
					<input value={this.state.inputval2} onChange={this.inputchange2.bind(this)} style={{width:'30%', fontSize:'1.75em'}} id='input2' ref={this.input2ref} />
					<button onClick={this.buttonclick2.bind(this)} style={{width:'2.5em', fontSize:'1.75em'}}>add</button>
				</div>
				<div style={{marginLeft: '0'}}>
					{
						this.props.name.map(
							(item, index)=>
							{
								return (
								<div style={{marginTop: '2em', marginLeft: '20%', fontSize: '150%'}} key={-index-1000}>
									<img src="./Delete.png" height="20px" onClick={this.dlt.bind(this, index)} alt='delete'></img><span>    </span>
									<input type="checkbox" key={index} value={item} style={{zoom:'150%'}} onChange={this.ckb.bind(this, index)} checked={this.props.ckb[index]}/>
									<span>    </span><span style={this.props.ckb[index]? {border: 'cyan solid', borderRadius: '40px', background:'#E0FFFF', padding:'0.4em'}: {padding:'0.4em', borderRadius: '40px'}} key={-index-1}>{item}</span><span style={this.props.ckb[index]? {color:'cyan', marginLeft:'4px', fontWeight:'1000'}: {}}>     =>   </span><span style={this.props.ckb[index]? {border: 'cyan solid', borderRadius: '40px', background:'#E0FFFF', padding:'0.4em'}: {borderRadius: '40px', padding:'0.4em'}} key={-index-100}>{this.props.add[index]}</span>
								</div>
								)
								
							}
						)
					}
				</div>

                
            </div>
        );
    }
}
export default Urls;
// TODO: options; connect
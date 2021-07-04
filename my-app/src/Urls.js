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
            over: false
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
		if(this.props.all.name.length === 6){
			this.fire("ERROR", "Up to 6 websites are accepted.", "error");
			return
		}
		if(this.props.all.name.length > this.props.all.add.length ){
			this.fire("ERROR", "Please confirm the last address first.", "error");
			return
		}
		let newname = [...this.props.all.name, this.state.inputval1];
		let newckb = [...this.props.all.ckb, true];
        console.log(newname);
        this.props.all.ckb = newckb;
        this.props.all.name = newname;
		this.props.tellall(this.props.all)
        this.setState((state, props) => ({
            name: [...props.all.name, state.inputval1]
          }));
        this.setState((state, props) => ({
            ckb: [...props.all.ckb, true]
          }));
        this.setState({over: true});
    }
	
    buttonclick2(){
		if(this.state.inputval2 === ''){
			this.fire("ERROR", "Empty input.", "error");
			return
		}
		if(this.props.all.add.length === 6){
			this.fire("ERROR", "Up to 6 websites are accepted.", "error");
			return
		}


		if(this.props.all.add.length === this.props.all.name.length){
			this.fire("ERROR", "Please confirm the name first.", "error");
			return
		}
				
        this.props.all.add = [...this.props.all.add, this.state.inputval2]
        this.props.tellall(this.props.all);
        this.setState({add: [...this.props.all.add, this.state.inputval2]});
		if(this.props.all.add.length - this.props.all.name.length === 0){
			
			this.input1ref.current.value=' ';
			this.setState({inputval1: ''});
			this.input2ref.current.value=' ';
			this.setState({inputval2: ''});
		}


		this.setState({over: false});
    }
	
	ckb(index, e){
		let newckb = this.props.all.ckb
		newckb[index] = e.target.checked
        this.props.all.ckb = newckb;
		this.props.tellall(this.props.all);
        this.setState({ckb: newckb});
	}
	

	
	dlt(index, e){
		
		const newname = this.props.all.name;
		const newadd = this.props.all.add;
		const newckb = this.props.all.ckb;
		newname.splice(index, 1);
		newadd.splice(index, 1);
		newckb.splice(index, 1);
		
		this.props.all.name = newname;
		this.props.all.add = newadd;
		this.props.all.ckb = newckb;
        this.props.tellall(this.props.all);
        this.setState({ckb: newckb});
        this.setState({add: newadd});
        this.setState({name: newname});
	}

	render() {
        return (
            <div>
                <div style={{display: 'inline', width:'30%'}}>
					<h3 style={{display: 'inline', fontSize:'1.75em'}}>Name:    </h3>
                    <input value={this.state.inputval1} onChange={this.inputchange1.bind(this)} style={{width:'30%', fontSize:'1.75em'}} disabled = {(this.state.over)? "disabled" : ""} id='input1' ref={this.input1ref} />
                    <button onClick={this.buttonclick1.bind(this)} style={{width:'2.5em', fontSize:'1.75em'}}>add</button>
                </div>
				
				<div style={{display: 'inline', width:'30%'}}>
					<h3 style={{display: 'inline', marginLeft:'1.75em', fontSize:'1.5em'}}>URL:    </h3>
					<input value={this.state.inputval2} onChange={this.inputchange2.bind(this)} style={{width:'30%', fontSize:'1.75em'}} id='input2' ref={this.input2ref} />
					<button onClick={this.buttonclick2.bind(this)} style={{width:'2.5em', fontSize:'1.75em'}}>add</button>
				</div>
				<div style={{marginLeft: '0'}}>
					{
						this.props.all.name.map(
							(item, index)=>
							{
								return (
								<div style={{marginTop: '2em', marginLeft: '20%', fontSize: '150%'}} key={-index-1000}>
									<img src="./Delete.png" height="20px" onClick={this.dlt.bind(this, index)} alt='delete'></img><span>    </span>
									<input type="checkbox" key={index} value={item} style={{zoom:'150%'}} onChange={this.ckb.bind(this, index)} checked={this.props.all.ckb[index]}/>
									<span>    </span><span style={this.props.all.ckb[index]? {border: 'cyan solid', borderRadius: '40px', background:'#E0FFFF', padding:'0.4em'}: {padding:'0.4em', borderRadius: '40px'}} key={-index-1}>{item}</span><span style={this.props.all.ckb[index]? {color:'cyan', marginLeft:'4px', fontWeight:'1000'}: {}}>     =>   </span><span style={this.props.all.ckb[index]? {border: 'cyan solid', borderRadius: '40px', background:'#E0FFFF', padding:'0.4em'}: {borderRadius: '40px', padding:'0.4em'}} key={-index-100}>{this.props.all.add[index]}</span>
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
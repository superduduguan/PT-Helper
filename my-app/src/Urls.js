import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)




class Urls extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            list1:['NanyangPT', 'NpuPT ', 'ByrPT'],
			list2:['http://nanyangpt.com/', 'http://npupt.com/', 'https://bt.byr.cn/'],
			listckb:[true, true, true],
            inputval1: '',
			inputval2: '',
			save: false
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
		if(this.state.list1.length === 6){
			this.fire("ERROR", "Up to 6 websites are accepted.", "error");
			return
		}
		if(this.state.list1.length > this.state.list2.length ){
			this.fire("ERROR", "Please confirm the last address first.", "error");
			return
		}
		let newList1 = [...this.state.list1, this.state.inputval1]
		let newListckb = [...this.state.listckb, true]
        this.setState({list1: [...newList1], listckb: [...newListckb]})
		this.tellhimckb(newListckb);
    }
	
    buttonclick2(){
		if(this.state.inputval2 === ''){
			this.fire("ERROR", "Empty input.", "error");
			return
		}
		if(this.state.list2.length === 6){
			this.fire("ERROR", "Up to 6 websites are accepted.", "error");
			return
		}

		var newList2 = [...this.state.list2, this.state.inputval2]
		if(newList2.length > this.state.list1.length){
			this.fire("ERROR", "Please confirm the name first.", "error");
			return
		}
		
        this.setState({list2: [...newList2]})

		if(this.state.list2.length - this.state.list1.length === -1){
			
			this.input1ref.current.value=' ';
			this.setState({inputval1: ''});
			this.input2ref.current.value=' ';
			this.setState({inputval2: ''});
		}
		let return1 = this.state.list1;
		let return2 = this.state.list2;
	
		this.tellhim1(return1);
		this.tellhim2(return2);
		
    }
	
	ckb(index, e){
		let newListckb = [...this.state.listckb]
		newListckb[index] = e.target.checked
		
		this.setState({
			listckb: [...newListckb]
		})
		this.tellhimckb(newListckb);
	}
	
	tellhim1(a){
		this.props.tellme1(a);
	}
	tellhim2(a){
		this.props.tellme2(a);
	}
	tellhimckb(a){
		this.props.tellmeckb(a);
	}
	
	dlt(index, e){
		
		const newList1x = [...this.state.list1];
		const newList2x = [...this.state.list2];
		const newListckb = [...this.state.listckb]
		newList1x.splice(index, 1);
		newList2x.splice(index, 1);
		newListckb.splice(index, 1);
		this.setState({list1: newList1x, list2: newList2x, listckb: newListckb});
		this.tellhim1(newList1x);
		this.tellhim2(newList2x);
		this.tellhimckb(newListckb);
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
						this.state.list1.map(
							(item, index)=>
							{
								return (
								<div style={{marginTop: '2em', marginLeft: '20%', fontSize: '150%'}} key={-index-1000}>
									<img src="./Delete.png" height="20px" onClick={this.dlt.bind(this, index)} alt='delete'></img><span>    </span>
									<input type="checkbox" key={index} value={item} style={{zoom:'150%'}} onChange={this.ckb.bind(this, index)} checked={this.state.listckb[index]}/>
									<span>    </span><span style={this.state.listckb[index]? {border: 'cyan solid', borderRadius: '40px', background:'#E0FFFF', padding:'0.4em'}: {padding:'0.4em', borderRadius: '40px'}} key={-index-1}>{item}</span><span style={this.state.listckb[index]? {color:'cyan', marginLeft:'4px', fontWeight:'1000'}: {}}>     =>   </span><span style={this.state.listckb[index]? {border: 'cyan solid', borderRadius: '40px', background:'#E0FFFF', padding:'0.4em'}: {borderRadius: '40px', padding:'0.4em'}} key={-index-100}>{this.state.list2[index]}</span>
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
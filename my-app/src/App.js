import React from 'react';
class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            list1:['NanyangPT', 'NpuPT ', 'ByrPT'],
			list2:['http://nanyangpt.com/', 'http://npupt.com/', 'https://bt.byr.cn/'],
			listckb:['true', 'true', 'ture'],
            inputval1: '',
			inputval2: ''
        }
    }
    inputchange1(e){
        this.setState({inputval1: e.target.value});  
    }
	inputchange2(e){
	    this.setState({inputval2: e.target.value});
	}

    buttonclick1(){
		if(this.state.list1.length == 6){
			alert('Up to 6 websites are accepted')
			return
		}
		if(this.state.list1.length > this.state.list2.length ){
			alert('Please finish the last address first')
			return
		}
		let newList1 = [...this.state.list1, this.state.inputval1]
		let newListckb = [...this.state.listckb, 'true']
        this.setState({list1: [...newList1], listckb: [...newListckb]})
    }
    buttonclick2(){
		if(this.state.list2.length == 6){
			alert('Up to 6 websites are accepted')
			return
		}

		var newList2 = [...this.state.list2, this.state.inputval2]
		if(newList2.length > this.state.list1.length){
			alert('Please input the name first')
			return
		}
		var newListckb = [...this.state.listckb, 'true']
        this.setState({list2: [...newList2], listckb: [...newListckb]})
    }
	
	ckb(index, e){
		
		let newListckb = [...this.state.listckb]
		newListckb[index] = e.target.checked
		this.setState({
			listckb: [...newListckb]
		})
		
	}

	render() {
        return (
            <div>
                <div style={{display: 'inline', width:'30%'}}>
					<h3 style={{display: 'inline', fontSize:'1.5em'}}>Name:    </h3>
                    <input value={this.state.inputval1} onChange={this.inputchange1.bind(this)} style={{width:'30%', fontSize:'2em'}} />
                    <button onClick={this.buttonclick1.bind(this)} style={{width:'2.5em', fontSize:'2em'}}>add</button>
                </div>
				
				<div style={{display: 'inline', width:'30%'}}>
					<h3 style={{display: 'inline', marginLeft:'1.5em', fontSize:'1.5em'}}>URL:    </h3>
					<input value={this.state.inputval2} onChange={this.inputchange2.bind(this)} style={{width:'30%', fontSize:'2em'}} />
					<button onClick={this.buttonclick2.bind(this)} style={{width:'2.5em', fontSize:'2em'}}>add</button>
				</div>
				<div style={{marginLeft: '0'}}>
					{
						this.state.list1.map(
							(item, index)=>
							{
								return (
								<div style={{marginTop: '2em', marginLeft: '20%', fontSize: '150%'}} key={-index-1000}>
									<input type="checkbox" key={index} value={item} style={{zoom:'150%'}} onChange={this.ckb.bind(this, index)} checked={this.state.listckb[index]}/>
									<span>    </span><span className='Back' style={{border: 'cyan solid', borderRadius: '40px', background:'#E0FFFF', padding:'0.4em'}} key={-index-1}>{item}</span>   =>   <span className='Back' style={{border: 'cyan solid', borderRadius: '40px', background:'#E0FFFF', padding:'0.4em'}} key={-index-100}>{this.state.list2[index]}</span>
								</div>)
								
							}
						)
					}
				</div>

                
            </div>
        );
    }
}
export default App;
// TODO: delete; OPTIONS; logo
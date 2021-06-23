import React from 'react';
class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            list:['NanyangPT   =>   http://nanyangpt.com/',
			'NpuPT   =>   http://npupt.com/',
			'ByrPT   =>   https://bt.byr.cn/'],
            inputval: ''
        }
    }
    inputchange(e){
        this.setState({inputval: e.target.value});
        
    }

    buttonclick(){
        this.setState({
            list:[...this.state.list, this.state.inputval],
            inputval: ''
        })
    }

    liclick(index){
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({list: list});
    }

	render() {
        return (
            <div>
                <div>
                    <input value={this.state.inputval} onChange={this.inputchange.bind(this)} />
                    <button onClick={this.buttonclick.bind(this)}>add</button>
                </div>
				<div>
					{
						this.state.list.map(
							(item, index)=>
							{
								return (<div text-align='center'><input type="checkbox" key={index} value={item} />{item}</div>)
								
							}
						)
					}
				</div>

                
            </div>
        );
    }
}
export default App;
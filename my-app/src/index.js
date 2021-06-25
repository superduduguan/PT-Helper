import React from 'react';
import ReactDOM from 'react-dom';
import Urls from './Urls';
import Options from './Options';
import reportWebVitals from './reportWebVitals';

console.log(Urls)
ReactDOM.render(
  <React.StrictMode>
    <Urls />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Options ref="opt"/>
  </React.StrictMode>,
  document.getElementById('root2')
);

var x = document.getElementById('btn')
x.onclick = function(){
	return this.refs.demo.state.
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

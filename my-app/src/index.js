import React from 'react';
import ReactDOM from 'react-dom';
import Both from './both';
import reportWebVitals from './reportWebVitals';

var ALL = [, , ,]

function TellMeAll(a){
	ALL = a
}

ReactDOM.render(
  <React.StrictMode>
    <Both TellMeAll={TellMeAll.bind(this)}/>
  </React.StrictMode>,
  document.getElementById('main')
);

var a = document.getElementById('btn');
a.onclick = function(){
	
	alert('saved!');
	console.log(ALL[0]);
	console.log(ALL[1]);
	console.log(ALL[2]);
	console.log(ALL[3]);
}

// var x = document.getElementById('btn')
// x.onclick = function(){
// 	return this.refs.demo.state.
// }



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

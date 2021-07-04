import React from 'react';
import ReactDOM from 'react-dom';
import Both from './both';
import reportWebVitals from './reportWebVitals';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

var ALL = []; 
const MySwal = withReactContent(Swal)
function TellMeAll(a){
	ALL = a
	console.log(a);
}
function fire(a, b, c){
	MySwal.fire({didOpen: () => {
		MySwal.clickConfirm()}}).then(() => {
	  return MySwal.fire(a, <h3 style={{margin: '0'}}>{b}</h3>, c);
	})
}


ReactDOM.render(
  <React.StrictMode>
    <Both TellMeAll={TellMeAll.bind(this)}/>
  </React.StrictMode>,
  document.getElementById('main')
);

var a = document.getElementById('btn');
a.onclick = function(){
	
	fire("Saved Successfully.", "", "success");
	alert(ALL);
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

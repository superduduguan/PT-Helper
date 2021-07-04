import React from 'react';
import ReactDOM from 'react-dom';
import Both from './both';
import reportWebVitals from './reportWebVitals';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

var name = ['NanyangPT', 'NpuPT ', 'ByrPT'];        
var add = ['http://nanyangpt.com/', 'http://npupt.com/', 'https://bt.byr.cn/'];
var ckb = [true, true, true];
var opt = [true, true, true, true, true];
var all = {name: name, add: add, ckb: ckb};
var ALL = {all: all, opt: opt};
function tellindexurl(newall){
	ALL.all = newall
	console.log(newall);
}

function tellindexopt(newopt){
	ALL.opt = newopt
	console.log(newopt);
}

const MySwal = withReactContent(Swal)
function fire(a, b, c){
	MySwal.fire({didOpen: () => {
		MySwal.clickConfirm()}}).then(() => {
	  return MySwal.fire(a, <h3 style={{margin: '0'}}>{b}</h3>, c);
	})
}


ReactDOM.render(
  <React.StrictMode>
    <Both tellindexurl={tellindexurl.bind(this)} tellindexopt={tellindexopt.bind(this)} ALL={ALL}/>
  </React.StrictMode>,
  document.getElementById('main')
);

var a = document.getElementById('btn');
a.onclick = function(){
	console.log(ALL);
	fire("Saved Successfully.", "", "success");
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

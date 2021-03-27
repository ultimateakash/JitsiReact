import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from  'react-router-dom';

//I have add basename for github pages deployment
ReactDOM.render(
    <BrowserRouter basename={'/JitsiReact/'}>
	<React.StrictMode>
		<App />
	</React.StrictMode>
    </BrowserRouter>,
	document.getElementById('root')
);

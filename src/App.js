import React from 'react'
 
//import 'antd/dist/antd.css';
import '~antd/dist/antd.css';
import { Alert } from 'antd'; 

export default function App() { 
return ( 
	<div style={{ 
	display: 'block', width: 700, padding: 30 
	}}> 
	<h4>ReactJS Ant-Design Alert Component</h4> 
	<Alert message="This is a Success Alert" type="success" /> 
	<Alert message="This is a Error Alert" type="error" /> 
	<Alert message="This is a Warning Alert" type="warning" /> 
	<Alert message="This is a Info Alert" type="info" /> 
	</div> 
); 
}
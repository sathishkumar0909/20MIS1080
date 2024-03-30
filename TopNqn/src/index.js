import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Content from './content';
import Footer from './footer';
import Request from './requestapi';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
<div className='container'>
<Content Name="Polo Shirt"Company="Polo"Category="Shirt"Rating={5}Price={100}Discount={10}Availability="Yes"/>
<Content Name="Polo Shirt"Company="Polo"Category="Shirt"Rating={5}Price={100}Discount={10}Availability="Yes"/>
<Content Name="Polo Shirt"Company="Polo"Category="Shirt"Rating={5}Price={100}Discount={10}Availability="Yes"/>
<Content Name="Polo Shirt"Company="Polo"Category="Shirt"Rating={5}Price={100}Discount={10}Availability="Yes"/>
<Content Name="Polo Shirt"Company="Polo"Category="Shirt"Rating={5}Price={100}Discount={10}Availability="Yes"/>
   
</div>
<Footer />
   
  </React.StrictMode>
);
reportWebVitals();

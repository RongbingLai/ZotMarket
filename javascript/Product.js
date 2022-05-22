import React from 'react';
import ReactDOM from 'react-dom';

'use strict';

const products = [
    {name: 'laptop', brand: "Apple", price: 1300, description: "a macbook that I never used", 
    delivery: "get by yourself at UCI", contactInfo: "email: rongbil1@uci.edu"}
];

export default function Product() {
    return (
        <div>
            <h1>{products.name}</h1>
        </div>
    );
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.Product());
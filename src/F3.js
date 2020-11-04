//F3 collects credit card #, expiry date, CVV, and billing zip code.
import React from 'react';

class F3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>cardNumber</h1>
                <h2>expDate</h2>
                <h3>cvv</h3>
                <h4>billZipCode</h4>
                <button>Purchase</button>
            </div>
        )
    }
}


export default F3;
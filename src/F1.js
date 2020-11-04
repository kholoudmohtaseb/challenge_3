
//F1 collects name, email, and password for account creation.
import React from 'react';

class F1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>name</h1>
                <h2>email</h2>
                <h3>password</h3>
                <button>Next</button>
            </div>
        )
    }
}


export default F1;
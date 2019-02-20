import React, { Component } from 'react';

const authenticate = (WrappedComponent) => class extends Component {
    render() {
        return (
            <div className="authenticate-container">
                <WrappedComponent />
            </div>
        )
    }
}

export default authenticate;
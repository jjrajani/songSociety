import React, { Component } from 'react';
import { Nav } from '../';

class App extends Component {
    render() {
        return (
            <div>
                <Nav auth={this.props.auth} />
                {this.props.children}
            </div>
        );
    }
}

export default App;

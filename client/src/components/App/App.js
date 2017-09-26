import React from 'react';
import { Nav } from '../';

const App = ({ auth, children }) =>
    <div>
        <Nav auth={auth} />
        {children}
    </div>;

export default App;

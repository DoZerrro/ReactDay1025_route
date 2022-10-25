import React from 'react';

function Layout(prop) {
    return (
        <div>
            <div>
                <h1>HEADER</h1>
            </div>
            <div>
                {prop.children}
            </div>
            <div>
                <h1>FOOTER</h1>
            </div>
        </div>
    );
}

export default Layout;
import './Main.css';
import React from 'react';
import Header from '../Header/Header';

export default props => 
    <React.Fragment>
        <Header {...props}></Header>
        <main className="content container-fluid">
            <div className="mt-3 p-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>

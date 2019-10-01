import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="content">
                            <div className="title m-b-md">Soon™</div>

                            <div className="subtitle">A Laravel app made with ReactJS and hosted on Microsoft Azure</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <footer className="page-footer font-small unique-color-dark pt-4">
                <div classNmae="container">
                <ul classNmae="list-unstyled list-inline text-center py-2">
                    <li classNmae="list-inline-item">
                        <h5 classNmae="mb-1">Register for free</h5>
                    </li>
                    <li classNmae="list-inline-item">
                        <a href="#!" classNmae="btn btn-outline-white btn-rounded">Sign up!</a>
                    </li>
                </ul>
                </div>
                <div classNmae="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                </div>
            </footer>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

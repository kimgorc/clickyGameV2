import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="nav justify-content-center">
                <div className="nav-item">
                    <p>{this.props.isCorrect}</p>
                </div>   
            </div>
        );
    }
};

export default Navbar;
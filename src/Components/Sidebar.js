import React from 'react';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            //Added an onClick function to the entire nav as well as the links so that the menu will close
            //when clicking either a link or the background of the menu
            <nav className={this.props.show ? "side-menu open" : "side-menu"} onClick={this.props.click}>
                <ul>
                    <li onClick={this.props.click}><a href="#">Home</a></li>
                    <li onClick={this.props.click}><a href="#">About</a></li>
                    <li onClick={this.props.click}><a href="#">Services</a></li>
                    <li onClick={this.props.click}><a href="#">Contact</a></li>
                </ul>
            </nav>
        );
   }
};

export default SideBar;
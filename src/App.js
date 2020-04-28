import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Transition from './Components/Transition';
import Sidebar from './Components/Sidebar';

const SideMenu = Transition(Sidebar);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sideMenuOpen: false }
  }

  //Open and close the Menu when clicking the menu button
  menuClickHandler= () => {
    this.setState((prevState) => {
      return {sideMenuOpen: !prevState.sideMenuOpen};
    })
  }

  //Close the menu when clicking on the menu links, or when clicking on the background of the menu
  sideMenuClickHandler = () => {
    this.setState({sideMenuOpen: false});
  }

  render() {
    return (
      <div className="App">
        <SideMenu isMounted={this.state.sideMenuOpen} delayTime={500} click={this.sideMenuClickHandler} />
        <Navbar click={this.menuClickHandler} />
        <div className="body">
          <h1>Responsive Navigation Bar</h1>
          <p>Change the screen size to see how the Navigation Bar responds!</p>
        </div>
      </div>
    );
  }
}

export default App;

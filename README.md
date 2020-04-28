# Responsive-Navbar
React Navbar that responds to screen size to work for mobile and desktop.

This navigation bar includes links on the right side, which disappear when the screen size is below 700px. For smaller screens, there is instead a menu which can be opened up to view the missing links.

This Navbar uses four components, one for the navbar itself, one for the menu icon, one for the sidebar, and the last to create the sidebar's transition.

The transition component renders the sidebar when the menu icon is clicked. It loads the component with an initial state of "show: false" and then immediately changes "show" to true to toggle the CSS transition. When closing the sidebar, the transition component will wait for the transition to be complete before removing the component.

```javascript
        componentDidUpdate (prevProps) {
            if (prevProps.isMounted && !this.props.isMounted) {
                this.setState({ show: false })
                setTimeout(
                    () => this.setState({ shouldRender: false }),
                    this.props.delayTime
                );
            } else if (!prevProps.isMounted && this.props.isMounted) {
                this.setState({ shouldRender: true })
                //Returns Component with initial state "show: false" then sets show to true after 1 millisecond
                setTimeout(
                    () => this.setState({show: true }),
                    1
                );
            }
        }
```

The sidebar receives the state of "show" which toggles its transition. The state change adds the class "open" which allows the sidebar to be shown over the other components. The onClick function is sent back to the transition function to close the sidebar.

```javascript
<nav className={this.props.show ? "side-menu open" : "side-menu"} onClick={this.props.click}>
```

The side menu is shown and hidden with a CSS clip-path. This creates a circular mask which uncovers the sidemenu from the top-left corner.

```CSS
.side-menu {
  clip-path: circle(0 at 25px 25px);
}

.side-menu.open {
  clip-path: circle(150% at 25px 25px);
}
```

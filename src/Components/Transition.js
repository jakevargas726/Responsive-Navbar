import React from 'react';

export default function transition(Component) {
    return class extends React.Component {
            state = { shouldRender: this.props.isMounted, show: false };

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

        componentWillUnmount () {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
        }

        render() {
            return this.state.shouldRender ? <Component {...this.props} show={this.state.show} /> : null;
        }
    };
}
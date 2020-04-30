import * as React from 'react';
/**
 * @extends {React.Component<CounterProps>}
 */
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        const { interval = 100 } = this.props;
        setInterval(() => {
            const { count } = this.state;
            this.setState({
                count: count + 1,
            });
        }, interval);
    }
    render() {
        const { title } = this.props; //Read from injected values
        const { count } = this.state; //Read from component state
        return (
            <div>
                <div>
                    {title} -> {count}
                </div>
            </div>
        );
    }
}
export default Counter;
/**
 * @typedef CounterProps
 * @property {string} [title]
 * @property {number} [interval]
 */

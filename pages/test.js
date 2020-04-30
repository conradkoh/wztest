import * as React from 'react';
import Button from '@material-ui/core/Button';
import Counter from '../components/Counter';
/**
 * @extends {React.Component<TestPageProps>}
 */
class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Counter title="Counter 1" />
                <Counter title="Counter 2" interval={200} />
                <Counter title="Counter 3" interval={500} />
                <Button color="primary">Click me!</Button>
                <Button color="primary" variant="contained">
                    Click me!
                </Button>
                <Button color="primary" variant="outlined">
                    Click me!
                </Button>
            </div>
        );
    }
}
export default TestPage;
/**
 * @typedef TestPageProps
 * @property {} []
 */

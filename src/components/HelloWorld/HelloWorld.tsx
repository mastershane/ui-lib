import * as React from 'react';
import './HelloWorld.css';

export interface IProps {
    /**
     * Message to append to component
     */
    message?: string;
}

export default class HelloWorld extends React.Component<IProps, { }> {

    public static defaultProps: IProps = {
        message: 'World'
    };

    constructor(props: IProps) {
        super(props);
    }

    public render() {

        return (
            <div>
                Hello, Mr. {this.props.message}
            </div>
        );
    }
}
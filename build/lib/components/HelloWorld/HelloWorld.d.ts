/// <reference types="react" />
import * as React from 'react';
import './HelloWorld.css';
export interface IProps {
    /**
     * Message to append to component
     */
    message?: string;
}
export default class HelloWorld extends React.Component<IProps, {}> {
    static defaultProps: IProps;
    constructor(props: IProps);
    render(): JSX.Element;
}

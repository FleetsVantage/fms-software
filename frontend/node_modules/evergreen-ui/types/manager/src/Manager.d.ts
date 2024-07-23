/**
 * This component is a utility component to manage state in stories and examples.
 */
export default class Manager extends React.Component<any, any, any> {
    static propTypes: {
        children: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: any);
    state: any;
    _setState: (...args: any[]) => void;
    render(): any;
}
import React from "react";
import PropTypes from "prop-types";

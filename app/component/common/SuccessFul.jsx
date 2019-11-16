import React from "react";
import {Modal} from "antd-mobile";
import "../../assets/css/page/receivemodal.scss";

export default class SuccessFul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visible: true};
    }

    close = () => {
        this.setState({
            visible: false,
            user: {},
        });
    };

    render() {
        return <div>

        </div>
    }


}

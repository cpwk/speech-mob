import React from "react";
import {Modal} from "antd-mobile";

export default class Successmodal extends React.Component {
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
            <Modal
                title=""
                visible={this.state.visible}
                transparent
                closable={true}
                maskClosable={false}
                onClose={() => this.close()}
            >
                <div className="success">
                    <img src={require('../../assets/image/modal/success.png')} alt="领取成功"/>
                    <div className="success-foot">
                        <h1>领取成功</h1>
                        <div className="text">
                            24小时内将会有工作人员与您联系，请您保持电话，防止漏接来电，感谢您的配合
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    }


}

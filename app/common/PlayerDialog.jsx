import React from 'react'
import Utils from '../common/Utils.jsx'
import {Modal} from 'antd-mobile';

const id_div = 'div-dialog-player';

export default class PlayerDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wrap: this.props.wrap,
            visible: true
        };
    }

    close = () => {
        this.setState({visible: false});
        Utils.common.closeModalContainer(id_div);
    };

    render() {

        let {wrap = {}, visible} = this.state;
        let {name, src} = wrap;
        let index = parseInt(Math.random() * 100);

        return <Modal
            className="player"
            getContainer={() => Utils.common.createModalContainer(id_div)}
            transparent
            closable={true}
            maskClosable={true}
            onClose={() => this.close()}
            visible={visible}>
            <video src={src} autoPlay='autoPlay' style={{marginTop: '25vh'}} width='300px' height='300px'/>

            {/*<AliPlayer src={src} index={index} width='300px' height='300px' style={{marginTop: '25vh'}}/>*/}
        </Modal>
    }
}

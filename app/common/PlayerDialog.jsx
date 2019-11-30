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

    componentDidMount() {
        document.getElementById('video_modal').play();
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
            <video id='video_modal' src={src} autoPlay style={{marginTop: '25vh'}} width='300px' height='300px'
                // x5-video-player-type="h5"
                // 启用H5播放器,是微信安卓版的专有特性，恶心不？
                // x5-video-player-fullscreen="true"
                // 全屏设置，防止横屏
            />

            {/*<AliPlayer src={src} index={index} width='300px' height='300px' style={{marginTop: '25vh'}}/>*/}
        </Modal>
    }
}

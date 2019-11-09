import React from 'react';
import '../assets/css/ali-player.scss'

export default class AliPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index: this.props.index || 0};
    }
    componentDidMount() {
        let {index} = this.state;
        let player = new Aliplayer({
            id: `J_prismPlayer_${index}`,
            source: this.props.src,
            preload: true,
            autoplay: false,
            controlBarVisibility: 'hover',
            showBarTime: '30000',
        });
    }

    render() {
        let {index} = this.state;
        return <div className="prism-player" id={`J_prismPlayer_${index}`}/>;
    }

}
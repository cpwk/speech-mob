import React from "react";
import "../../assets/css/page/brandshow.scss";
import {Banners} from "../Comps";
import {App} from "../../common";
import Utils from "../../common/Utils";


class BrandShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: [],
            billion: [],
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        let {type, stars = [], billion = []} = this.state;
        App.api('/ws/home/findAllVideo', {
            videoQo: JSON.stringify({
                type,
                pageSize: 50,
            })
        }).then((result) => {
            let {content = []} = result;
            content.map((item, index) => {
                let {type} = item;
                if (type === 2) {
                    if (stars.length < 4) {
                        stars.push(item);
                    } else {
                        return null;
                    }
                } else if (type === 3) {
                    if (billion.length < 3) {
                        billion.push(item);
                    } else {
                        return null;
                    }
                }
            });
            this.setState({stars, billion});
        })
    };


    render() {
        let {stars = [], billion = []} = this.state;
        return <div className="home-box">
            <div className="banner">
                <Banners/>
            </div>
            <div className="wingBlank">
                <div className="piece brand-page">
                    <div className="title">
                        <h2 className="mark">“演说家”大IP系列已播出十季</h2>
                        <h2/>
                    </div>
                    <div className="content border-list">
                        <div className="header">平均收视率1%，稳坐语言类第一IP</div>
                        <div className="waterfall">
                            <div className="left">
                                <div className="top"/>
                                <div className="bottom"/>
                            </div>
                            <div className="right">
                                <div className="top"/>
                                <div className="bottom"/>
                            </div>
                        </div>
                    </div>
                    <div className="video-list">
                        <div className="header">演说家们的梦工厂 缔造100亿流量神话</div>
                        <div className="icon-arrow-down"/>
                        <div className="list-video">
                            {billion.map((item, index) => {
                                let {img, title, videoSummary, videoIntro, url} = item;
                                return <div className="video" key={index}>
                                    <div className="caption">{title}</div>
                                    <div className="videoSummary">
                                        <div className="summary">
                                            {videoSummary}
                                        </div>
                                    </div>
                                    <div className="img" style={{
                                        backgroundImage: `url('../../assets/image/common/mask.png'),url(${img})`
                                    }}>
                                        <div className="icon-play" onClick={() => {
                                            Utils.view({src: url, title})
                                        }}/>
                                    </div>
                                    <div className="videoIntro">{videoIntro}</div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="piece stars-list">
                    <div className="title">
                        <h2 className="mark">星光熠熠 明星演说</h2>
                        <h2/>
                    </div>
                    <div className="stars">
                        {stars.map((item, index) => {
                            let {img, title, url} = item;
                            return <div className="item" key={index}>
                                    <div className="img" style={{
                                        backgroundImage: `url(${img})`
                                    }}>
                                        <div className="icon-play" onClick={() => {
                                            Utils.view({src: url, title})
                                        }}/>
                                    </div>

                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    }
}

export default BrandShow;

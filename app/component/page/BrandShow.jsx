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
                if (type === 4) {
                    if (stars.length < 4) {
                        stars.push(item);
                    } else {
                        return null;
                    }
                } else if (type === 5) {
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
                                    <div className="bottom">
                                        <div className='inner' id={`video-inner_${index}`} style={{
                                            backgroundImage: `url(${img})`,
                                            backgroundPosition: '50% 50%',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                        }}>
                                            <div className="mask"/>
                                            <div className="icon-play" onClick={() => {
                                                document.getElementById(`video-inner_${index}`).style.display = 'none';
                                                let video = document.getElementById(`video_${index}`);
                                                video.setAttribute('class', 'video-block-play');
                                                video.play();
                                            }}/>
                                        </div>
                                        <video src={url} id={`video_${index}`} controls className='video-block'
                                               webkit-playsinline="true"  /*iOS 10中设置可以让视频在小窗内播放*/
                                               playsinline="true"
                                               x-webkit-airplay="allow"  /*启用AirPlay支持*/
                                               x5-playsinline
                                               x5-video-player-type="h5"  /*对于x5内核声明启用同层H5播放器*/
                                               x5-video-player-fullscreen="true"   /*全屏设置设置为 true 是防止横屏*/
                                               x5-video-orientation="portraint"  /*播放器的方向，默认为竖屏*/
                                               x5-video-orientation="portraint" /*播放器支付的方向，landscape横屏，portraint竖屏，默认值为竖屏*/
                                        />
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
                                    <div className="img">
                                        <div className='inner' id={`stars_video-inner_${index}`} style={{
                                            backgroundImage: `url(${img})`,
                                            backgroundPosition: '50% 50%',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                        }}>
                                            <div className="mask"/>
                                            <div className="icon-play" onClick={() => {
                                                Utils.view({src: url});
                                            }}/>
                                        </div>
                                    </div>

                                </div>
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    }
}

export default BrandShow;

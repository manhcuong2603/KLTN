import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import vtv1 from '../../../assets/vtv1.png'
import suckhoedoisong from '../../../assets/suckhoedoisong.png'
import vne from '../../../assets/vne.png'
import yte from '../../../assets/yte.png'

import { changeLanguageApp } from '../../../store/actions';
class About extends Component {
    changeLanguage = (language) => {
        // alert(language)
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        return (
            <div className=' section-share section-about'>
                <div className='section-about-header'>
                    <FormattedMessage id="homepage.media-talk" />
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%%" height="400px" src="https://www.youtube.com/embed/FyDQljKtWnI"
                            title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                    <div className='content-right'>
                        <ul className='content-media'>
                            <li>
                                <img src={vtv1}></img>
                            </li>
                            <li>
                                <img src={suckhoedoisong}></img>
                            </li>
                            <li>
                                <img src={yte}></img>
                            </li>
                            <li>
                                <img src={vne}></img>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

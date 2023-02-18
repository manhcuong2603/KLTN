import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.png';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';
import { withRouter } from 'react-router-dom';
class HomeHeader extends Component {
    changeLanguage = (language) => {
        // alert(language)
        this.props.changeLanguageAppRedux(language)
    }
    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`);
        }
    }
    render() {
        let language = this.props.language
        return (
            <React.Fragment>
                {this.props.isShowTop === true ?
                    <div className='home-header-container'>
                        <div className='home-header-content'>
                            <div className='left-content'>
                                <i className="fas fa-bars"></i>
                                <img className='header-logo' src={logo} onClick={() => this.returnToHome()} />
                            </div>
                            <div className='center-content'>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id="homeHeader.speaciality" /></b></div>
                                    <div className='subs-title'><FormattedMessage id="homeHeader.searchdoctor" /></div>
                                </div>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id="homeHeader.health-facility" /></b></div>
                                    <div className='subs-title'><FormattedMessage id="homeHeader.select-room" /></div>
                                </div>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id="homeHeader.doctor" /></b></div>
                                    <div className='subs-title'><FormattedMessage id="homeHeader.select-doctor" /></div>
                                </div>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id="homeHeader.fee" /></b></div>
                                    <div className='subs-title'><FormattedMessage id="homeHeader.check-health" /></div>
                                </div>
                            </div>
                            <div className='right-content'>
                                <div className='support'>
                                    <i className="fas fa-question-circle"></i><FormattedMessage id="homeHeader.support" />
                                </div>
                                <div className='switch-wp'>
                                    <input type='check-box' id='switch' hidden ></input>
                                    <label for='switch'></label>
                                </div>
                                <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                                <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='home-header-container-detail'>
                        <div className='home-header-content'>
                            <div className='left-content'>
                                <i class="fas fa-chevron-left" onClick={() => this.returnToHome()}></i>
                            </div>
                            <div className='center-content'>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id="homeHeader.speaciality" /></b></div>
                                    <div className='subs-title'><FormattedMessage id="homeHeader.searchdoctor" /></div>
                                </div>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id="homeHeader.health-facility" /></b></div>
                                    <div className='subs-title'><FormattedMessage id="homeHeader.select-room" /></div>
                                </div>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id="homeHeader.doctor" /></b></div>
                                    <div className='subs-title'><FormattedMessage id="homeHeader.select-doctor" /></div>
                                </div>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id="homeHeader.fee" /></b></div>
                                    <div className='subs-title'><FormattedMessage id="homeHeader.check-health" /></div>
                                </div>
                            </div>
                            <div className='right-content'>
                                <div className='support'>
                                    <i className="fas fa-question-circle"></i><FormattedMessage id="homeHeader.support" />
                                </div>
                                <div className='switch-wp'>
                                    <input type='check-box' id='switch' hidden ></input>
                                    <label for='switch'></label>
                                </div>
                                <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                                <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                            </div>
                        </div>
                    </div>
                }
                {this.props.isShowBaner === true &&
                    <div className='home-header-banner'>
                        <div className='content-up'>
                            <div className='title1'><FormattedMessage id="banner.BACKGROUND" /></div>
                            <div className='title2'><FormattedMessage id="banner.HEALTHCARE" /></div>
                            <div className='search'>
                                <i className="fas fa-search"></i>
                                <input type='text' placeholder='Tìm chuyên khoa khám bệnh'></input>
                            </div>
                        </div>
                        <div className='content-dow'>
                            <div className='options'>
                                <div className='option-child'>
                                    <div className='icon-child'>
                                        <i className="fas fa-hospital"></i>
                                    </div>
                                    <div className='text-child'><FormattedMessage id="banner.Specialist" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-mobile-alt"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.Telemedicine" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-book"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.General" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-vial"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.Medical" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-heartbeat"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.Mental" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-medkit"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.Dental" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));

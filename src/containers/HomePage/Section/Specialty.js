import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick"
import imgOne from '../../../assets/one.png'
import { LANGUAGES } from '../../../utils';
import { changeLanguageApp } from '../../../store/actions';

class Specialty extends Component {
    changeLanguage = (language) => {
        // alert(language)
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        let settings = this.props.settings
        let language = this.props.language
        return (
            <div className=' section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id="homepage.popular-specialties" /></span>
                        <button className='btn-section'><FormattedMessage id="homepage.more-infor" /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <h3>Cơ sương khớp 1</h3>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <h3>Cơ sương khớp 2</h3>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <h3>Cơ sương khớp 3</h3>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <h3>Cơ sương khớp 4</h3>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <h3>Cơ sương khớp 5</h3>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <h3>Cơ sương khớp 6</h3>
                            </div>
                        </Slider>
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
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss'
import Slider from "react-slick"
import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from '../../../store/actions';
class MedicalFacility extends Component {

    render() {
        let settings = this.props.settings
        return (
            <div className='section-share  section-medical-facilty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id="homepage.notable-medical-facilities" /></span>
                        <button className='btn-section'><FormattedMessage id="homepage.more-infor" /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facilty' />
                                <h3>Cơ sở y tế 1</h3>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facilty' />
                                <h3>Cơ sở y tế 2</h3>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facilty' />
                                <h3>Cơ sở y tế3</h3>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facilty' />
                                <h3>Cơ sở y tế 4</h3>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facilty' />
                                <h3>Cơ sở y tế 5</h3>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facilty' />
                                <h3>Cơ sở y tế 6</h3>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);

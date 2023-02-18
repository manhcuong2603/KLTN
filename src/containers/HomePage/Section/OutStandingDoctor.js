import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick"
import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from '../../../store/actions';
import { LANGUAGES } from '../../../utils'
import * as actions from '../../../store/actions'
import { Redirect, withRouter } from 'react-router-dom';
class OutStandingDoctor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            arrDoctors: []
        }
    }
    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }
    }
    componentDidMount = () => {
        this.props.loadTopDoctors();
    }
    changeLanguage = (language) => {
        // alert(language)
        this.props.changeLanguageAppRedux(language)
    }
    handleViewDetailDoctor = (doctor) => {
        console.log('check view infor', doctor);
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${doctor.id}`);
        }
    }
    render() {
        let arrDoctors = this.state.arrDoctors;
        let { language } = this.props
        // arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors)
        console.log('check props Redux', arrDoctors);
        let settings = this.props.settings
        return (
            <div className='section-share  section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id="homepage.outstanding-doctor" /></span>
                        <button className='btn-section'><FormattedMessage id="homepage.more-infor" /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            {arrDoctors && arrDoctors.length > 0 && arrDoctors.map((item, index) => {
                                let imageBase64 = ''
                                if (item.image) {
                                    if (item.image) {
                                        imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                    }
                                }
                                let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
                                let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
                                return (
                                    <div className='section-customize' key={index} onClick={() => this.handleViewDetailDoctor(item)}>
                                        <div className='customize-boder'>
                                            <div className='outer-bg'>
                                                <div className='bg-image section-outstanding-doctor'
                                                    style={{ backgroundImage: `url(${imageBase64})` }} />
                                            </div>
                                            <div className='possition text-center'>
                                                <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                <div>Sức khỏe tâm thần 1</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        topDoctorsRedux: state.admin.topDoctors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor));

import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../containers/HomePage/HomeHeader'
import './DetailDoctor.scss'
import { getDetaileInforDoctors } from '../../services/userService'
import { isBuffer } from 'lodash';
import { LANGUAGES } from '../../utils';
import DoctorSchedule from './DoctorSchedule';
class DetailDoctor extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            detaileDoctor: {}
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await getDetaileInforDoctors(id);
            if (res && res.errCode === 0) {
                this.setState({
                    detaileDoctor: res.data
                })
            }
            // console.log('check ress.data',res);

        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        // console.log('check res: ', this.state);
        let { detaileDoctor } = this.state;
        let { language } = this.props
        let nameVi = '', nameEn = '';
        if (detaileDoctor && detaileDoctor.positionData) {
            nameVi = `${detaileDoctor.positionData.valueVi}, ${detaileDoctor.lastName} ${detaileDoctor.firstName}`;
            nameEn = `${detaileDoctor.positionData.valueEn}, ${detaileDoctor.firstName} ${detaileDoctor.lastName}`;

        }
        return (
            <>
                <HomeHeader isShowBaner={false} />
                <div className='doctor-detail-container'>
                    <div className='intro-doctor'>
                        <div className='content-left'
                            style={{ backgroundImage: `url(${detaileDoctor && detaileDoctor.image ? detaileDoctor.image : ''})` }} >

                        </div>
                        <div className='content-right'>
                            <div className='up'>
                                {language === LANGUAGES.VI ? nameVi : nameEn}
                            </div>
                            <div className='down'>
                                {detaileDoctor && detaileDoctor.Markdown && detaileDoctor.Markdown.description
                                    && <span>
                                        {detaileDoctor.Markdown.description}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='schedule-doctor'>
                        <div className='content-left'>
                            <DoctorSchedule
                                doctorIdFromParent={detaileDoctor && detaileDoctor.id ? detaileDoctor.id : -1}
                            />
                        </div>
                        <div className='content-right'>

                        </div>
                    </div>
                    <div className='detail-infor-doctor'>
                        {detaileDoctor && detaileDoctor.Markdown && detaileDoctor.Markdown.contentHTML
                            &&
                            <div dangerouslySetInnerHTML={{ __html: detaileDoctor.Markdown.contentHTML }}></div>
                        }
                    </div>
                    <div className='comment-doctor'>

                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);

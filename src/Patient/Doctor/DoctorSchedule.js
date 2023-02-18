import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../containers/HomePage/HomeHeader'
import './DoctorSchedule.scss'
import { getDetaileInforDoctors } from '../../services/userService'
import { isBuffer } from 'lodash';
import { LANGUAGES } from '../../utils';
import moment from 'moment';
import localization from 'moment/locale/vi'
import { getScheduleDoctorByDate } from '../../services/userService';

class DoctorSchedule extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            allDays: [],
        }
    }
    async componentDidMount() {
        let { language } = this.props
        console.log('moentVi', moment(new Date()).format('dddd - DD/MM'));
        console.log('moentEn', moment(new Date()).locale('en').format('dddd - DD/MM'));
        this.setArrDays(language);
    }
    setArrDays = (language) => {
        let allDays = []
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (language === LANGUAGES.VI) {
                object.lable = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
            } else {
                object.lable = moment(new Date()).add(i, 'days').locale('en').format('dddd - DD/MM');
            }
            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();
            allDays.push(object);
        }
        this.setState({
            allDays: allDays
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language != prevProps.language) {
            this.setArrDays(this.props.language);
        }
    }
    onchangeSelect = async (e) => {
        if (this.props.doctorIdFromParent && this.propsdoctorIdFromParent != -1) {
            let doctorId = this.props.doctorIdFromParent;
            let date = e.target.value
            let res = await getScheduleDoctorByDate(doctorId, date)
            console.log(res);

        }
        // console.log('even', e.target.value);
    }
    render() {

        let { allDays } = this.state
        return (
            <div className='doctor-schedule-container'>
                <div className='all-schedule'>
                    <select onChange={(e) => this.onchangeSelect(e)}>
                        {allDays.length > 0 && allDays.map((item, index) => {
                            return (
                                <option value={item.value} key={index}>
                                    {item.lable}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className='all-available-time'>

                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);

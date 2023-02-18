import actionTypes from './actionTypes';
import {
    getAllCodeService, createNewUserService, getAllUsers,
    deleteUserService, editUserService, getTopDoctorHomeService, getAllDoctors,
    saveDetailDoctorService
} from '../../services/userService'
import { toast } from 'react-toastify';
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })



//GENDER
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })
            let res = await getAllCodeService('GENDER');
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderFailed err ', e);
        }
    }

}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

//POSITION
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('POSITION');
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPositionFailed err ', e);
        }
    }
}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})


//ROLE
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('ROLE');
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleFailed err ', e);
        }
    }
}
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})


//CREATE
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            // console.log('check reate user redux', res);
            toast.success("Creacte a new User Succeed!");
            if (res && res.errCode === 0) {
                dispatch(saveUserSuccess());
                dispatch(fetchAllUserstart());
            } else {
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed err ', e);
        }
    }
}
export const saveUserSuccess = () => ({
    type: 'CREATE_USER_SUCCESS'
})
export const saveUserFailed = () => ({
    type: 'CREATE_USER_FAILED'
})

//DELETE
export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            // console.log('check reate user redux', res);
            toast.success("Delete the User Succeed!");
            if (res && res.errCode === 0) {
                dispatch(deleteUsersSuccess());
                dispatch(fetchAllUserstart()); //remove tt input
            } else {
                toast.error("Delete the User Error!");
                dispatch(deleteUsersFailed());
            }
        } catch (e) {
            toast.error("Delete the User Error!");
            dispatch(deleteUsersFailed());
            console.log('saveUserFailed err ', e);
        }
    }
}
export const deleteUsersSuccess = (data) => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})
export const deleteUsersFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})

//EDIT
export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            // console.log('check reate user redux', res);
            toast.success("Update the User Succeed!");
            if (res && res.errCode === 0) {
                dispatch(editUsersSuccess());
                dispatch(fetchAllUserstart()); //remove tt input
            } else {
                toast.error("Update the User Error!");
                dispatch(editUsersFailed());
            }
        } catch (e) {
            toast.error("Update the User Error!");
            dispatch(editUsersFailed());
            console.log('editUsersFailed err ', e);
        }
    }
}
export const editUsersSuccess = (data) => ({
    type: actionTypes.EDIT_USER_SUCCESS,
    users: data
})
export const editUsersFailed = (data) => ({
    type: actionTypes.EDIT_USER_FAILED,
    users: data
})


//DOCTOR
export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            // console.log('check-------------- res', res);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED,

                })
            }

        } catch (e) {
            console.log('FAILED: ', e);
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED,

            })
        }
    }
}
export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors();
            // console.log('check--------------', res);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED,

                })
            }

        } catch (e) {
            console.log('FETCH_ALL_DOCTORS_FAILED: ', e);
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILED,

            })
        }
    }
}
export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data);
            // console.log('check--------------', res);
            if (res && res.errCode === 0) {
                toast.success("Save infor detail Doctor Succeed!");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                toast.error("Save infor detail Doctor Err!");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                })
            }
        } catch (e) {
            console.log('SAVE_DETAIL_DOCTOR_FAILED: ', e);
            toast.error("Save infor detail Doctor Err!");
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,

            })
        }
    }
}



export const fetchAllUserstart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers('ALL');
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()));
            } else {
                toast.error("Delete the User Error!");
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
            toast.error("Delete the User Error!");
            dispatch(fetchAllUsersFailed());
            console.log('fetchAllUsersFailed err ', e);
        }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: 'FETCH_ALL_USER_SUCCESS',
    users: data
})
export const fetchAllUsersFailed = () => ({
    type: 'FETCH_ALL_USER_FAILED',
})


export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME");
            // console.log('check--------------', res);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,

                })
            }

        } catch (e) {
            console.log('FETCH_ALLCODE_SCHEDULE_TIME_FAILED: ', e);
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,

            })
        }
    }
}




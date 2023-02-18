import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService'
import ModalUser from './ModalUser';
import ModalEdit from './ModalEdit';
import { ToastContainer, toast } from 'react-toastify';
import { emitter } from '../../utils/emitter';

class UserManage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModaEditlUser: false,
            userEdit: {}
        }
    }


    async componentDidMount() {
        await this.getAllUserFromReact();
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,

        })
    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,

        })
    }
    toggleEditUserModal = () => {
        this.setState({
            isOpenModaEditlUser: !this.state.isOpenModaEditlUser,

        })
    }
    getAllUserFromReact = async () => {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }
    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
            console.log('response awai user: ', response);
        } catch (e) {
            toast.error("Creacte a new User Error!");
            console.log(e);
        }
        console.log('check data from child', data);
    }
    handerDeleteUser = async (user) => {
        console.log('cleck', user);
        try {
            let res = await deleteUserService(user.id);
            toast.success("Delete the User Succeed!");
            if (res && res.errCode === 0) {
                await this.getAllUserFromReact();
            } else {
                toast.error("Delete the User Error!");
                alert(res.errMessage)
            }
        } catch (e) {
            toast.error("Delete the User Error!");
            console.log(e);
        }
    }
    handleEditUser = (user) => {
        console.log('edit', user);
        this.setState({
            isOpenModaEditlUser: true,
            userEdit: user
        })
    }
    doEditUser = async (user) => {
        try {
            let res = await editUserService(user)
            toast.success("Edit a new User Succeed!");
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModaEditlUser: false
                })
                await this.getAllUserFromReact()
            } else {
                alert(res.errCode)
            }
        } catch (e) {
            toast.error("Edit a new User error!");
            console.log(e);
        }
    }
    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container ">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {this.state.isOpenModaEditlUser &&
                    <ModalEdit
                        isOpen={this.state.isOpenModaEditlUser}
                        toggleFromParent={this.toggleEditUserModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}
                    />
                }

                <div className='title'>Manage users with react</div>
                <div className=''>
                    <button
                        className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewUser()}
                    ><i className="fas fa-plus px-1"></i>Add New User
                    </button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>FristName</th>
                                <th>LastName</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button onClick={() => { this.handleEditUser(item) }} className='btn-edit'><i className="fas fa-edit"></i></button>
                                            <button onClick={() => { this.handerDeleteUser(item) }} className='btn-delete'><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);


import { after } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from 'lodash'
class ModalEdit extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
    }

    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'harcode',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
        console.log('mounting edit modal', this.props.currentUser);
    }

    toggle() {
        this.props.toggleFromParent();
    }

    handleOnchangeInput = (e, id) => {
        // console.log(e.target.value, id);
        let copyState = { ...this.state }
        copyState[id] = e.target.value;
        this.setState({
            ...copyState
        })
    }
    checkValideInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleSaveUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            //gọi api edit modal
            this.props.editUser(this.state);
        }

    }
    render() {
        console.log('check props ', this.props);
        // console.log('check child props', this.props);
        // console.log('check child openModal', this.props.isOpen);
        return (
            <Modal
                isOpen={this.props.isOpen} toggle={() => this.toggle()}
                className={'modal-user-container'}
                size='lg'
            >
                <ModalHeader toggle={() => this.toggle()} close={() => this.toggle()}>
                    Edit user
                </ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                disabled
                                onChange={(e) => this.handleOnchangeInput(e, 'email')}
                                value={this.state.email} type='text'>
                            </input>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                disabled
                                onChange={(e) => this.handleOnchangeInput(e, 'password')}
                                value={this.state.password} type='password'>
                            </input>
                        </div>
                        <div className='input-container'>
                            <label>FirstName</label>
                            <input onChange={(e) => this.handleOnchangeInput(e, 'firstName')}
                                value={this.state.firstName} type='text'>
                            </input>
                        </div>
                        <div className='input-container'>
                            <label>LastName</label>
                            <input onChange={(e) => this.handleOnchangeInput(e, 'lastName')}
                                value={this.state.lastName} type='text'>
                            </input>
                        </div>
                        <div className='input-container max-with-input'>
                            <label>Addres</label>
                            <input onChange={(e) => this.handleOnchangeInput(e, 'address')}
                                value={this.state.address} type='text'>
                            </input>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className='px-3' color="primary"
                        onClick={() => this.handleSaveUser()}>
                        Save
                    </Button>{' '}
                    <Button className='px-3' color="secondary" onClick={() => this.toggle()}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);

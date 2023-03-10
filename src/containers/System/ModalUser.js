
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
class ModalUser extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }
        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
            })
        })
    }
    componentDidMount() {
        console.log('mounting modal');
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
    handleAddNewUser = () => {
        let isValid = this.checkValideInput();
        if (isValid === true) {
            //gọi api create modal
            this.props.createNewUser(this.state);
        }

    }
    render() {
        // console.log('check child props', this.props);
        // console.log('check child openModal', this.props.isOpen);
        return (
            <Modal
                isOpen={this.props.isOpen} toggle={() => this.toggle()}
                className={'modal-user-container'}
                size='lg'
            >
                <ModalHeader toggle={() => this.toggle()} close={() => this.toggle()}>
                    Create a new user
                </ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input onChange={(e) => this.handleOnchangeInput(e, 'email')}
                                value={this.state.email} type='text'>
                            </input>
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input onChange={(e) => this.handleOnchangeInput(e, 'password')}
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
                        onClick={() => this.handleAddNewUser()}>
                        Add new
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

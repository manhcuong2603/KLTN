
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Modaimage.scss'

class Modalimage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }
    componentDidMount = () => { }

    toggle = () => {
        this.props.togglePreview()
    }
    render() {
        // console.log('check child', this.props);
        // console.log('check open', this.props.isOpen);
        return (
            <Modal isOpen={this.props.isOpen} toggle={() => this.toggle()} className={'abcClassName'}>
                <ModalHeader toggle={() => this.toggle()}>Preview Avatar</ModalHeader>
                <ModalBody>
                    <img src={this.props.previewImg} />
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="primary" onClick={() => this.toggle()}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={() => this.toggle()}>Cancel</Button>
                </ModalFooter> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Modalimage);

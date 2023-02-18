import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import './TableUser.scss';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}

class TableUser extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            usersRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }
    handleDelete = (user) => {
        // console.log('check user', user);
        this.props.deleteAUserReudx(user.id)
    }
    handleEditUser = (user) => {
        // console.log('check edit',user);
        this.props.handleEditUserFromParentKey(user)
    }

    render() {
        // console.log('check all TableUser: ', this.props.listUsers);
        // console.log('check state TableUser: ', this.state.usersRedux);
        let arrUsers = this.state.usersRedux;
        return (
            <React.Fragment>
                <table id='TableUser'>
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
                        {arrUsers && arrUsers.length > 0 && arrUsers.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button
                                            onClick={() => this.handleEditUser(item)}
                                            className='btn-edit'><i className="fas fa-edit"></i></button>
                                        <button
                                            onClick={() => this.handleDelete(item)}
                                            className='btn-delete'><i className="fas fa-trash"></i></button>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUserstart()),
        deleteAUserReudx: (id) => dispatch(actions.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableUser);

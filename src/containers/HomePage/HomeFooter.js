import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {
    changeLanguage = (language) => {
        // alert(language)
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        return (
            <div className=' home-footer'>
                <p>&copy; 2022 BookingCare with nodejs. More Information, Please visit my github <a target='_blank' href='https://github.com/manhcuong2603'> &#8594; Click Here &#8592;</a></p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

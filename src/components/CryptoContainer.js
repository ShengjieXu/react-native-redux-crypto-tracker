import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import FetchCoinData from './../Actions/FetchCoinData';

class CryptoContainer extends React.Component {

    componentDidMount() {
        this.props.FetchCoinData();
    }

    render() {
        return (
            <View>
                <Text>
                    CryptoContainer
                </Text>
            </View>
        );
    }
}

CryptoContainer.propTypes = {
    FetchCoinData: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
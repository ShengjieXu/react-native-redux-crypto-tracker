import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends React.Component {

    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.map((coin) => (
                <CoinCard
                    key={coin.id}
                    coin_name={coin.name}
                    symbol={coin.symbol}
                    price_usd={coin.price_usd}
                    percent_change_24h={coin.percent_change_24h}
                    percent_change_7d={coin.percent_change_7d}
                />
            )
        )
    }

    render() {
        const { crypto } = this.props;

        if (crypto.isFetching) {
            console.log('fetching');
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={'Loading...'}
                        textStyle={styles.spinner}
                        animation='fade'
                    />
                </View>
            );
        }

        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        );
    }
}

CryptoContainer.propTypes = {
    FetchCoinData: PropTypes.func.isRequired,
    crypto: PropTypes.object
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

const styles = StyleSheet.create({
    spinner: {
        color: '#253145'
    },
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 50
    }
});

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
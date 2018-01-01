import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

import { images } from './../Utils/CoinIcons';

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => (
    <View style={styles.container}>

        <Image
            style={styles.image}
            source={{ url: images[symbol] }}
        />
        <Text>{symbol}</Text>
        <Text>{coin_name}</Text>
        <Text>{price_usd}<Text style={styles.bold}>$</Text></Text>
        <Text>Change past 24 hours: {percent_change_24h}</Text>
        <Text>Change past 7 days: {percent_change_7d}</Text>

    </View>
);

CoinCard.propTypes = {
    symbol: PropTypes.string,
    coin_name: PropTypes.string,
    price_usd: PropTypes.string,
    percent_change_24h: PropTypes.string,
    percent_change_7d: PropTypes.string
}

const styles = StyleSheet.create({
    container: {
        display: 'flex'
    },
    image: {
        width: 40,
        height: 40
    },
    bold: {
        fontWeight: 'bold'
    }
});

export default CoinCard;
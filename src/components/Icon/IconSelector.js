import React from "react"
import PropTypes from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const IconSelector = (props) => {
    const { set, name, style } = props;

    switch (set) {
        case 'Entypo':
            return <Entypo name={name} style={style} />;
        case 'EvilIcons':
            return <EvilIcons name={name} style={style} />;
        case 'Feather':
            return <Feather name={name} style={style} />;
        case 'FontAwesome':
            return <FontAwesome name={name} style={style} />;
        case 'Foundation':
            return <Foundation name={name} style={style} />;
        case 'Ionicons':
            return <Ionicons name={name} style={style} />;
        case 'MaterialIcons':
            return <MaterialIcons name={name} style={style} />;
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={name} style={style} />;
        case 'Octicons':
            return <Octicons name={name} style={style} />;
        case 'Zocial':
            return <Zocial name={name} style={style} />;
        case 'SimpleLineIcons':
            return <SimpleLineIcons name={name} style={style} />;
        default:
            return null;
    }
}

export default IconSelector
import PropTypes from 'prop-types';

import React from 'react';
import api from '~/config/api';

import { withNavigation } from 'react-navigation';

import { colors } from '~/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View } from 'react-native';
import {
  Type,
  ImageType,
  TextTypeName,
  TextTypeDescription,
  WrapperTypeTime,
  TextTypeTime,
} from './styles';

function ListTypes({ types, navigation }) {
  const handleTypeClick = (typeId) => {
    navigation.navigate('Products', {
      type_id: typeId,
    });
  };

  return (
    <>
      {types.map(type => (
        <Type
          key={type.id}
          onPress={() => handleTypeClick(type.id)}
          // using for box-shadow on Android
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ elevation: 15 }}
        >
          <ImageType
            source={{
              uri: `${api.baseURL}/files?name=${type.file.file}`,
            }}
          />
          <View>
            <TextTypeName>{type.name}</TextTypeName>
            <TextTypeDescription>{type.description}</TextTypeDescription>
            <WrapperTypeTime>
              <Icon name="alarm" color={colors.light} size={14} />
              <TextTypeTime>{`${type.time} mins`}</TextTypeTime>
            </WrapperTypeTime>
          </View>
        </Type>
      ))}
    </>
  );
}

ListTypes.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.isRequired,
      time: PropTypes.number.isRequired,
      file: PropTypes.shape({
        file: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ListTypes);

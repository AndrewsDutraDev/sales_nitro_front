import React, { Component } from 'react';
import { Button } from 'react-native'

const Register = ({ navigation }) => {
  return (
    <Button
      title="Register Screen"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};

export default Register;
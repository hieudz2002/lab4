import React from 'react';
import { View, Text } from 'react-native';

const ServiceDetail = ({ route }) => {
  // Lấy thông tin về dịch vụ từ route.params
  const { service } = route.params;

  return (
    <View>
      <Text>Service Detail</Text>
      <Text>Name: {service.name}</Text>
      <Text>Description: {service.description}</Text>
      {/* Thêm thông tin khác về dịch vụ nếu cần */}
    </View>
  );
};

export default ServiceDetail;

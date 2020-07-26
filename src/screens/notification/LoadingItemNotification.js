import * as React from 'react';
import Card from 'src/components/Card';
import {shadowDefault} from 'src/utils/shadow';

function LoadingItemNotification(props) {
  const {style, ...rest} = props;
  return (
    <Card
      {...rest}
      style={[{height: 106, borderRadius: 8, ...shadowDefault}, style]}
    />
  );
}

export default LoadingItemNotification;

import React from 'react';
import { Icon } from 'antd';

interface IconProps {
  icon: string
}
const IconItem = (props: IconProps) => {
  const { icon } = props

  return (
    <div className="icon">
      <Icon type={icon} />
      <br />
      <span>{icon}</span>
    </div>
  );
}

export default IconItem;
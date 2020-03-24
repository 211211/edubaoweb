import React, { Component } from 'react';
import { Badge, Icon, Button } from 'antd';

class RedBadge extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Red Badge</h3>

        <div>
          <Badge dot>
            <Icon type="notification" />
          </Badge>
          <Badge className="ml20" dot>
            <Button type='link'>Link something</Button>
          </Badge>
        </div>
      </section>
    );
  }
}
 
export default RedBadge;
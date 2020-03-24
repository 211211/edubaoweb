import React, { Component } from 'react';
import { Card, Button } from 'antd';

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic Card</h3>

        <Card title="Card title" extra={<Button type='link'>More</Button>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </section>
    );
  }
}
 
export default Basic;
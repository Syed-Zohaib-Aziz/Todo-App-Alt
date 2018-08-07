import React, { Component } from 'react';
import { Button, List, Row, Col, Divider } from 'antd';

class TodoList extends Component {
  removeTodo = (value) => {
    this.props.removeTodo(value)
  }
  markTodoAsCompleted = (value) => {
    this.props.markTodoAsCompleted(value);
  }
  renderPreviousTodo = () => {
    if (this.props) {
      return (
        < List
          style={{ margin: "5%", textAlign: 'center' }}
          itemLayout="vertical"
          dataSource={this.props.data}
          split={false}
          size="small"
          renderItem={
            item => (
              <List.Item style={{ textAlign: 'center' }}>
                <Row>
                  <Col lg={12} style={{ textAlign: 'center' }}>
                    {item.text}
                  </Col>
                  <Col lg={12} style={{ textAlign: 'center' }}>
                    <Button onClick={() => this.removeTodo(item.text)}
                      style={{ marginLeft: 10 }} disabled={!item.isCompleted}>Remove
                    </Button>
                    <Divider type='vertical' style={{ height: 30 }} />
                    <Button onClick={() => this.markTodoAsCompleted(item.text)} disabled={item.isCompleted}
                      style={{ marginLeft: 10 }} >Mark As Completed
                    </Button>
                  </Col>
                </Row>
              </List.Item>
            )
          }
        />

      );
    }
    return null;
  }
  render() {
    return (
      this.renderPreviousTodo()
    )
  }
}

export default TodoList;

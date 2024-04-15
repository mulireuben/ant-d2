import { } from '@testing-library/user-event/dist/tab';
import { Collapse, Divider, Form, Menu, PageHeader, Row ,Input,Tabs } from 'antd'
import React from 'react'

const Praco = () => {
  const { Panel } = Collapse;
  const {TabPane}=Tabs
  function callback(key){
    console.log(key)
  }
  return (
    <div className='main-div'>
      <Menu>
        <Menu.ItemGroup title='basic info'>
          <Menu.Item key="setting:1">
            <Collapse>
            <Collapse.Panel key={1} header="contact" >
              <Form.Item>
                <adress/>
              </Form.Item>
              <Form.Item>
                <adress/>
              </Form.Item>
              <Form.Item>
                <adress/>
              </Form.Item>
            </Collapse.Panel>
            </Collapse>

  
            </Menu.Item>
          <Menu.Item key="setting:1">location</Menu.Item>
          <Menu.Item key="setting:1">job title</Menu.Item>
        </Menu.ItemGroup>
      </Menu>
      <Collapse defaultActiveKey={['1']} >
    <Panel header="contact" key="1">
      <Form.Item>
        <Input placeholder ="Hello"/>
      </Form.Item>
    </Panel>
    <Panel header="residence" key="2">
      <Form.Item>
        <Input placeholder ="Hello"/>
      </Form.Item>
    </Panel>
    <Panel header="job details" key="3" >
      <Form.Item>
        <Input placeholder ="Hello"/>
      </Form.Item>
    </Panel>
  </Collapse>,


  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>,
     
    </div>
  )
}

export default Praco

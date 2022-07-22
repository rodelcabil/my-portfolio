import React from 'react'
import { Collapse, List } from 'antd';
const { Panel } = Collapse;

const CollapseQ = () => {
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ];

    return (
        <Panel header="This is sample pre-defined FAQ">
        <List bordered
            dataSource={data}
            renderItem={item => (
                <List.Item> {item} </List.Item> )}/>
    </Panel>
    )
}

export default CollapseQ

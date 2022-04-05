import { Button, Table } from 'antd';
import React from 'react';

const columns = [
    {
        title: 'Type of Vehicle',
        dataIndex: 'type',
        key: 'type',
        render: (icon) => (<img src={icon} style={{height: 60, width: 60}} />)
    },
    {
        title: 'Cost/hr',
        dataIndex: 'cost',
        key: 'cost'
    }
]

const data = [
    {
        'key': '1',
        'cost': '50/hr',
        'type': 'https://png.pngtree.com/element_our/sm/20180516/sm_5afbf1d28feb1.png'
    },
    {
        'key': '2',
        'cost': '10/hr',
        'type': 'https://thumbs.dreamstime.com/b/motorcycle-vector-thin-line-icon-motorcycle-icon-website-design-desktop-envelopment-apps-development-premium-pack-164036211.jpg'
    }
]

function Welcome(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{fontSize: 30, fontWeight: 'bold'}}>Welcome to Parking</div>
            <div style={{display: 'flex', flexDirection: 'row', paddingTop: 40, paddingBottom: 40}}>
                <h2>Total no of floors: 4 (A, B, C, D)</h2>
                <div style={{width: 50}} />
                <h2>Total capacity of all floors: 10</h2>
            </div>

            <Table columns={columns} dataSource={data} pagination={false} style={{width: 400, paddingBottom: 45}} />

            <Button type='primary' onClick={() => props.setScreen('options')}>Proceed</Button>
        </div>
    )
}

export default Welcome;
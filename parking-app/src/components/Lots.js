import { Button, Table } from 'antd';
import React from 'react';

const columns = [
    {
        title: 'Floor',
        dataIndex: 'floor',
        key: 'floor'
    },
    {
        title: 'Capacity',
        dataIndex: 'capacity',
        key: 'capacity'
    },
    {
        title: 'No. of vehicle',
        dataIndex: 'count',
        key: 'count'
    },
    {
        title: 'Availability',
        dataIndex: 'free',
        key: 'free'
    }
]

function Lots({setScreen, parking}) {

    const data = [
        {
            'key': '1',
            'floor': 'A',
            'capacity': 10,
            'count': parking['A'].length,
            'free': 10 - parking['A'].length
        },
        {
            'key': '2',
            'floor': 'B',
            'capacity': 10,
            'count': parking['B'].length,
            'free': 10 - parking['B'].length
        },
        {
            'key': '3',
            'floor': 'C',
            'capacity': 10,
            'count': parking['C'].length,
            'free': 10 - parking['C'].length
        },
        {
            'key': '4',
            'floor': 'D',
            'capacity': 10,
            'count': parking['D'].length,
            'free': 10 - parking['D'].length
        }
    ]

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{fontSize: 30, fontWeight: 'bold'}}>Show Lots</div>
            <div style={{display: 'flex', flexDirection: 'row', paddingTop: 40, paddingBottom: 40}}>
                <h2>Total no of floors: 4</h2>
            </div>

            <Table columns={columns} dataSource={data} pagination={false} style={{width: 400, paddingBottom: 45}} />
        </div>
    )
}

export default Lots;
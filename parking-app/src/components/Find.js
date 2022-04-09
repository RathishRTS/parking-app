import { Button, Form, Input, message, Table } from 'antd';
import React, { useState } from 'react';

const columns = [
    {
        title: 'Floor',
        dataIndex: 'floor',
        key: 'floor'
    },
    {
        title: 'CheckIn Time',
        dataIndex: 'checkin',
        key: 'checkin'
    },
    {
        title: 'CheckOut Time',
        dataIndex: 'checkout',
        key: 'checkout'
    }
]

function Find({history}) {

    const [num, setNum] = useState()

    const [vechiclePresent, setVechiclePresent] = useState(false)
    const [data, setData] = useState([])

    function find() {
        if (history[num]) {
            setData(history[num])
            setVechiclePresent(true)
        } else {
            setVechiclePresent(false)
            message.error(`Vehicle ${num} not found`)
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{fontSize: 30, fontWeight: 'bold', marginBottom: 30}}>FIND MY VEHICLE</div>

            <Form>
                <Form.Item label='Vehicle Number'>
                    <Input onChange={(e) => setNum(e.target.value)} value={num} />
                </Form.Item>
            </Form>


            <Button type='primary' onClick={find}>Find</Button>

            {
                vechiclePresent
                ?
                <Table columns={columns} dataSource={data} pagination={false} style={{width: 400, paddingBottom: 45}} />
                :
                <></>
            }
        </div>
    )
}

export default Find;
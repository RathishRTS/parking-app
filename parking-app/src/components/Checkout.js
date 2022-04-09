import { Button, Form, Input, message, TimePicker } from 'antd';
import { cloneDeep } from 'lodash';
import React, { useState } from 'react';

function Checkout({history}) {

    const [num, setNum] = useState('');
    const [checkin, setCheckin] = useState('');

    function checkOut() {
        if (history[num]) {
            let historyData = cloneDeep(history);
            let lastHistory = historyData[num][historyData[num].length-1];
            

        } else {
            message.error('Vechicle not found')
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{fontSize: 30, fontWeight: 'bold', marginBottom: 30}}>CHECK OUT</div>

            <Form>
                <Form.Item label='Vehicle Number'>
                    <Input onChange={(e) => setNum(e.target.value)} value={num} />
                </Form.Item>
                <Form.Item label='CheckOut Time'>
                    <TimePicker use12Hours format="h:mm a" onChange={(time, timeString) => {
                        // console.log(time, timeString);
                        setCheckin(timeString)
                    }} />
                </Form.Item>
            </Form>

            <Button type='primary' onClick={checkOut}>CHECK OUT</Button>
        </div>
    )
}

export default Checkout;
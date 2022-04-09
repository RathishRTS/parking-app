import { Button, Form, Input, Radio, TimePicker, message } from 'antd';
import { cloneDeep } from 'lodash';
import React, { useState } from 'react';

const success = (msg) => {
    message.success(msg);
};

const error = (msg) => {
    message.error(msg);
};

function Checkin({parking, setParking, history, setHistory}) {

    const [num, setNum] = useState('');
    const [vtype, setVtype] = useState();
    const [lot, setLot] = useState('');
    const [checkin, setCheckin] = useState('');

    function checkIn() {
        console.log(num, vtype, lot, checkin)
        // Lot input validation
        if (!['A', 'B', 'C', 'D'].includes(lot)) {
            error(`Invalid lot - ${lot}`)
        } else {
            let vehicleToBeParked = { num, vtype, lot, checkin }
            let parkingData = cloneDeep(parking);
            parkingData[lot].push(vehicleToBeParked)
            setParking(parkingData)
    
            let historyData = cloneDeep(history)
            let vehicleHistory = historyData[num];
            if (vehicleHistory) {
                vehicleHistory.push({lot, checkin})
            } else {
                vehicleHistory = [{floor: lot, checkin, key: checkin}]
            }
            historyData[num] = vehicleHistory
            setHistory(historyData)

            success(`${vtype} - ${num} parked at lot ${lot}`)
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{fontSize: 30, fontWeight: 'bold', marginBottom: 30}}>CHECK IN</div>

            <Form>
                <Form.Item label='Vehicle Number'>
                    <Input onChange={(e) => setNum(e.target.value)} value={num} />
                </Form.Item>
                <Form.Item label='Vehicle Type'>
                    <Radio.Group 
                        options={[
                            {
                                label: 'Car',
                                value: 'car'
                            },
                            {
                                label: 'Bike',
                                value: 'bike'
                            }
                        ]}
                        onChange={(e) => setVtype(e.target.value)}
                        value={vtype}
                    />
                </Form.Item>
                <Form.Item label='Lot'>
                    <Input onChange={(e) => setLot(e.target.value)} value={lot} />
                </Form.Item>
                <Form.Item label='CheckIn Time'>
                    <TimePicker use12Hours format="h:mm a" onChange={(time, timeString) => {
                        // console.log(time, timeString);
                        setCheckin(timeString)
                    }} />
                </Form.Item>
            </Form>


            <Button type='primary' onClick={checkIn}>CHECK IN</Button>
        </div>
    )
}

export default Checkin;
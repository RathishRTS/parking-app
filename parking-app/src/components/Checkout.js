import { Button, Form, Input, message, TimePicker } from 'antd';
import { cloneDeep, round } from 'lodash';
import React, { useState } from 'react';

function getHrDiff(checkinTime, checkoutTime) {
    let date = new Date()
    let d = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    return (Date.parse(`${d} ${checkoutTime}`)-Date.parse(`${d} ${checkinTime}`))/1000/3600
}


function Checkout({history, setHistory, parking, setParking}) {

    const [num, setNum] = useState('');
    const [checkout, setCheckout] = useState('');

    function checkOut() {
        if (history[num]) {
            let historyData = cloneDeep(history);
            let lastHistory = historyData[num][historyData[num].length-1];
            if (lastHistory.checkout) {
                message.error('Vechicle checked out already')
            } else {
                // Updating history
                lastHistory.checkout = checkout
                historyData[num][historyData[num].length-1] = lastHistory
                // console.log(historyData)
                setHistory(historyData)

                // Updating parking
                let lot = lastHistory.floor;
                let parkingData = cloneDeep(parking)
                console.log(parkingData)
                let lotParking = parkingData[lot]
                lotParking = lotParking.filter(obj => obj.num !== num)
                parkingData[lot] = lotParking
                setParking(parkingData)

                // Display price message
                let hrDiff = getHrDiff(lastHistory.checkin, checkout)
                let price = lastHistory.vtype==='car' ? hrDiff*50 : hrDiff*10
                price = round(price, 2)
                message.success(`Successfully checked out ${num} from lot ${lot}. Parking Charges: Rs.${price} for ${round(hrDiff, 2)} hr`)
            }
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
                        setCheckout(timeString)
                    }} />
                </Form.Item>
            </Form>

            <Button type='primary' onClick={checkOut}>CHECK OUT</Button>
        </div>
    )
}

export default Checkout;
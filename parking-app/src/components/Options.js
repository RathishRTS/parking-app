import { Button } from 'antd';
import React from 'react';

function Options(props) {
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: 250, marginTop: 120}}>
                <div>
                    <Button size='large' type='primary' onClick={() => props.setScreen('checkin')}>CHECK IN</Button>
                </div>
                <div>
                    <Button size='large' type='primary' onClick={() => props.setScreen('checkout')}>CHECK OUT</Button>
                </div>
                <div>
                    <Button size='large' type='primary' onClick={() => props.setScreen('find')}>FIND VEHICLE</Button>
                </div>
            </div>
            <div style={{paddingTop: '10%', paddingLeft: '80%'}}>
                <Button size='large' type='primary' onClick={() => props.setScreen('lots')}>SHOW LOTS</Button>
            </div>
        </div>
    )
}

export default Options;
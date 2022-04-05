import { Button } from 'antd';
import React from 'react';

function Options(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: 250, marginTop: 120}}>
            <div>
                <Button size='large' type='primary' onClick={() => props.setScreen('checkin')}>CHECK IN</Button>
            </div>
            <div>
                <Button size='large' type='primary'>CHECK OUT</Button>
            </div>
            <div>
                <Button size='large' type='primary'>FIND VEHICLE</Button>
            </div>
        </div>
    )
}

export default Options;
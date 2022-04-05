import { Button, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';

function Checkin() {

    const [num, setNum] = useState('');
    const [vtype, setVtype] = useState();
    const [lot, setLot] = useState('');
    const [checkin, setCheckin] = useState('');

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{fontSize: 30, fontWeight: 'bold'}}>CHECK IN</div>

            <Form>
                <Form.Item label='Vehicle Number'>
                    <Input onChange={(e) => setNum(e.target.value)} value={num} />
                </Form.Item>
                <Form.Item label='Vehicle Type'>
                    <Radio.Group 
                        options={[
                            {
                                // label: () => (<img src={'https://png.pngtree.com/element_our/sm/20180516/sm_5afbf1d28feb1.png'} style={{height: 60, width: 60}} />),
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
                    <Input onChange={(e) => setCheckin(e.target.value)} value={checkin} />
                </Form.Item>
            </Form>


            <Button type='primary'>CHECK IN</Button>
        </div>
    )
}

export default Checkin;
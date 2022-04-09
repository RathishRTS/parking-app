import 'antd/dist/antd.css';
import { useState } from 'react';
import { Button } from 'antd';

import Welcome from './components/Welcome';
import Options from './components/Options';
import Checkin from './components/Checkin';
import Lots from './components/Lots';
import Find from './components/Find';
import Checkout from './components/Checkout';

function App() {

    const [screen, setScreen] = useState('welcome')

    const [parking, setParking] = useState({
        'A': [],
        'B': [],
        'C': [],
        'D': []
    })

    const [history, setHistory] = useState({})

    return (
        <div className="App">
            {screen !== 'welcome' ? <Button type='primary' style={{position: 'absolute', top: 20, left: 30}} onClick={() => setScreen('welcome')}>Home</Button> : <></>}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 40}}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Parking_icon.svg/2048px-Parking_icon.svg.png' style={{height: 50, width: 50}} />
                <div style={{fontSize: 50, fontWeight: 'bold', paddingLeft: 30}}>PARKING LOT</div>
            </div>
            {
                screen==='welcome'
                ?
                <Welcome setScreen={setScreen} />
                    :
                    screen==='options'
                    ?
                    <Options setScreen={setScreen} />
                        :
                        screen==='checkin'
                        ?
                        <Checkin setScreen={setScreen} parking={parking} setParking={setParking} history={history} setHistory={setHistory} />
                            :
                            screen==='lots'
                            ?
                            <Lots setScreen={setScreen} parking={parking} />
                                :
                                screen==='find'
                                ?
                                <Find history={history} />
                                    :
                                    screen==='checkout'
                                    ?
                                    <Checkout history={history} />
                                        :
                                        <></>
            }     
        </div>
    );
}

export default App;

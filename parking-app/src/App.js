import logo from './logo.svg';
// import './App.css';
import 'antd/dist/antd.css';
import Welcome from './components/Welcome';
import { useState } from 'react';
import Options from './components/Options';
import { Button } from 'antd';
import Checkin from './components/Checkin';

function App() {

    const [screen, setScreen] = useState('welcome')

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
                        <Checkin setScreen={setScreen} />
                            :
                            <></>
            }     
        </div>
    );
}

export default App;

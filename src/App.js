import React from 'react';
import './App.scss';
import DrumPad from './Components/DrumPad'
import Title from './Components/Title'
import MPD from './Components/MPD'
import Footer from './Components/Footer'

//Kit 1 files
import kick1 from './Assets/Kit1/kick1.wav'
import snare1 from './Assets/Kit1/snare1.wav'
import closedhat1 from './Assets/Kit1/closedhat1.wav'
import openhat1 from './Assets/Kit1/openhat1.wav'
import kick2 from './Assets/Kit1/kick2.wav'
import snare2 from './Assets/Kit1/snare2.wav'
import closedhat2 from './Assets/Kit1/closedhat2.wav'
import openhat2 from './Assets/Kit1/openhat2.wav'
import tambourine from './Assets/Kit1/tambourine.wav'
import cowbell from './Assets/Kit1/cowbell.wav'
import crash from './Assets/Kit1/crash.wav'
import ride from './Assets/Kit1/ride.wav'
import tom1 from './Assets/Kit1/tom1.wav'
import tom2 from './Assets/Kit1/tom2.wav'
import tom3 from './Assets/Kit1/tom3.wav'
import tom4 from './Assets/Kit1/tom4.wav'


//Kit 2 files
import WorkIt from './Assets/Kit2/1-work-it.wav';
import MakeIt from './Assets/Kit2/2-make-it.wav';
import DoIt from './Assets/Kit2/3-do-it.wav';
import MakesUs from './Assets/Kit2/4-makes-us.wav';
import Harder from './Assets/Kit2/5-harder.wav';
import Better from './Assets/Kit2/6-better.wav';
import Faster from './Assets/Kit2/7-faster.wav';
import Stronger from './Assets/Kit2/8-stronger.wav';
import MoreThan from './Assets/Kit2/9-more-than.wav';
import Hour from './Assets/Kit2/10-hour.wav';
import Our from './Assets/Kit2/11-our.wav';
import Never from './Assets/Kit2/12-never.wav';
import Ever from './Assets/Kit2/13-ever.wav';
import After from './Assets/Kit2/14-after.wav';
import WorkIs from './Assets/Kit2/15-work-is.wav';
import Over from './Assets/Kit2/16-over.wav';





const kit1 = [
    { id: 'Tom 1', letter: '1', src: tom1, volume: 1},
    { id: 'Tom 2', letter: '2', src: tom2, volume: 1 },
    { id: 'Tom 3', letter: '3', src: tom3, volume: 1 },
    { id: 'Tom 4', letter: '4', src: tom4, volume: 1 },
    { id: 'Tambourine', letter: 'Q', src: tambourine, volume: 1 },
    { id: 'Cowbell', letter: 'W', src: cowbell, volume: 1 },
    { id: 'Crash', letter: 'E', src: crash, volume: .3 },
    { id: 'Ride', letter: 'R', src: ride, volume: .5},
    { id: 'Kick 2', letter: 'A', src: kick2, volume: 1 },
    { id: 'Snare 2', letter: 'S', src: snare2, volume: 1 },
    { id: 'Closed Hat 2', letter: 'D', src: closedhat2, volume: .5 },
    { id: 'Open Hat 2', letter: 'F', src: openhat2, volume: .3 },
    { id: 'Kick 1', letter: 'Z', src: kick1, volume: 1 },
    { id: 'Snare 1', letter: 'X', src: snare1, volume: 1 },
    { id: 'Closed Hat 1', letter: 'C', src: closedhat1, volume: .3 },
    { id: 'Open Hat 1', letter: 'V', src: openhat1, volume: .3 },
  ]

const kit2 = [
  { id: 'Ever', letter: '1', src: Ever, volume: 1 },
  { id: 'After', letter: '2', src: After, volume: 1 },
  { id: 'Work Is', letter: '3', src: WorkIs, volume: 1 },
  { id: 'Over', letter: '4', src: Over, volume: 1 },
  { id: 'More Than', letter: 'Q', src: MoreThan, volume: 1 },
  { id: 'Hour', letter: 'W', src: Hour, volume: 1 },
  { id: 'Our', letter: 'E', src: Our, volume: 1 },
  { id: 'Never', letter: 'R', src: Never, volume: 1 },
  { id: 'Harder', letter: 'A', src: Harder, volume: 1 },
  { id: 'Better', letter: 'S', src: Better, volume: 1 },
  { id: 'Faster', letter: 'D', src: Faster, volume: 1 },
  { id: 'Stronger', letter: 'F', src: Stronger, volume: 1 },
  { id: 'Work It', letter: 'Z', src: WorkIt, volume: 1 },
  { id: 'Make It', letter: 'X', src: MakeIt, volume: 1 },
  { id: 'Do It', letter: 'C', src: DoIt, volume: 1 },
  { id: 'Makes Us', letter: 'V', src: MakesUs, volume: 1 },
]



  class App extends React.Component {

    constructor(props) {
      super(props);
      this.switchBank = React.createRef();
      this.onBankChanged = this.onBankChanged.bind(this);
    }


    state = {
        display: 'Click or Press a Key',
        padStyle: undefined,
        currentBank: kit1
    }

    
    handleDisplay = display => this.setState({ display })


    onBankChanged({ target }) {
      const currentBank = target.checked ? kit2 : kit1;

      this.setState({
        currentBank: currentBank
      });

    }

    
    render(){


        return(
        <div>
          <div className='title-wrapper'>

            <Title/>


            <div className='kit-select'>
              <p className='kit'>Kit 1</p>
                <input type="checkbox" id='switch' onChange={this.onBankChanged} ref={this.switchBank}/>
                <label title='switch bank' for='switch'>
              </label>
              <p className='kit'>Kit 2</p>
            </div>
          </div>

            <div id='elements-wrap'>
                <div className='drum-machine' id='drum-machine'>
                    <div className='pad-wrapper' id='pad-wrapper'>{this.state.currentBank.map(i => (
                        <DrumPad
                        id={i.id}
                        letter={i.letter}
                        src={i.src}
                        handleDisplay={this.handleDisplay}
                        volume={i.volume}
                        />   
                        ))}
                    </div>

                </div>
                <MPD />
            </div>
            <div className='display'>{this.state.display}</div>
            <Footer />
        </div>
      )
    }
  }


export default App;

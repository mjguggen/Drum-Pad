import React from 'react';
import './App.scss';
import DrumPad from './Components/DrumPad'
import Title from './Components/Title'
import MPD from './Components/MPD'

import WorkIt from './Assets/1-work-it.wav';
import MakeIt from './Assets/2-make-it.wav';
import DoIt from './Assets/3-do-it.wav';
import MakesUs from './Assets/4-makes-us.wav';
import Harder from './Assets/5-harder.wav';
import Better from './Assets/6-better.wav';
import Faster from './Assets/7-faster.wav';
import Stronger from './Assets/8-stronger.wav';
import MoreThan from './Assets/9-more-than.wav';
import Hour from './Assets/10-hour.wav';
import Our from './Assets/11-our.wav';
import Never from './Assets/12-never.wav';
import Ever from './Assets/13-ever.wav';
import After from './Assets/14-after.wav';
import WorkIs from './Assets/15-work-is.wav';
import Over from './Assets/16-over.wav';


const kit1 = [
    { id: 'tom 1', letter: '1', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Low%20Tom-21882-Free-Loops.com.mp3' },
    { id: 'tom 2', letter: '2', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Mid%20Tom.wav-21921-Free-Loops.com.mp3' },
    { id: 'tom 3', letter: '3', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Tom%20Low%2002-5862-Free-Loops.com.mp3' },
    { id: 'tom 4', letter: '4', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/CR%20800%20Tom.wav-20922-Free-Loops.com.mp3' },
    { id: 'tamborine', letter: 'Q', src: 'http://gamelay.usami.com/~netboy/w30/samples/01_roland_mc-303/wavs/Hittamb.wav' },
    { id: 'cowbell', letter: 'W', src: 'http://www.denhaku.com/r_box/sr16/sr16perc/mdcowbel.wav' },
    { id: 'crash', letter: 'E', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Crash%20Hit%20001-1692-Free-Loops.com.mp3' },
    { id: 'ride', letter: 'R', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Ride-7941-Free-Loops.com.mp3' },
    { id: 'kick 2', letter: 'A', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Drum%20Kick%2016-924-Free-Loops.com.mp3' },
    { id: 'snare 2', letter: 'S', src: 'http://www.denhaku.com/r_box/ddd1/snare1.wav' },
    { id: 'closed hat 2', letter: 'D', src: 'http://www.denhaku.com/r_box/sr16/sr16hat/wet%20hat1.wav' },
    { id: 'open hat 2', letter: 'F', src: 'http://www.denhaku.com/r_box/sr16/sr16hat/half%20hat.wav' },
    { id: 'kick 1', letter: 'Z', src: 'http://electrongate.com/dmxfiles/21KICK.wav' },
    { id: 'snare 1', letter: 'X', src: 'http://s1download-universal-soundbank.com/mp3/sounds/4406.mp3' },
    { id: 'closed hat 1', letter: 'C', src: 'http://www.denhaku.com/r_box/sr16/sr16hat/smallhat.wav' },
    { id: 'open hat 2', letter: 'V', src: 'http://www.denhaku.com/r_box/sr16/sr16hat/openhat2.wav' },
  ]

const kit2 = [
  { id: 'Ever', letter: '1', src: Ever },
  { id: 'After', letter: '2', src: After },
  { id: 'Work Is', letter: '3', src: WorkIs },
  { id: 'Over', letter: '4', src: Over },
  { id: 'More Than', letter: 'Q', src: MoreThan},
  { id: 'Hour', letter: 'W', src: Hour },
  { id: 'Our', letter: 'E', src: Our },
  { id: 'Never', letter: 'R', src: Never },
  { id: 'Harder', letter: 'A', src: Harder },
  { id: 'Better', letter: 'S', src: Better },
  { id: 'Faster', letter: 'D', src: Faster },
  { id: 'Stronger', letter: 'F', src: Stronger },
  { id: 'Work It', letter: 'Z', src: WorkIt },
  { id: 'Make It', letter: 'X', src: MakeIt },
  { id: 'Do It', letter: 'C', src: DoIt },
  { id: 'Makes Us', letter: 'V', src: MakesUs },
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
          <Title/>


          <div className='kit-select'>
            <p className='kit'>Kit 1</p>
              <input type="checkbox" id='switch' onChange={this.onBankChanged} ref={this.switchBank}/>
              <label title='switch bank' for='switch'>
            </label>
            <p className='kit'>Kit 2</p>
          </div>

            <div id='elements-wrap'>
                <div className='drum-machine' id='drum-machine'>
                    <div className='pad-wrapper' id='pad-wrapper'>{this.state.currentBank.map(i => (
                        <DrumPad
                        id={i.id}
                        letter={i.letter}
                        src={i.src}
                        handleDisplay={this.handleDisplay} />   ))}
                    </div>

                </div>
                <MPD />
            </div>
            <div className='display'>{this.state.display}</div>

        </div>
      )
    }
  }


export default App;

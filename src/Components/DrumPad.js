import React from 'react';



const activeStyle = {
    boxShadow: "0px 0px 8px red",
}
  
const inactiveStyle = {

}



class DrumPad extends React.Component {
    state = {
        padStyle: inactiveStyle
    }
 
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeydown)
      window.focus()
      document.getElementById(this.props.letter).volume = this.props.volume
    }
    
   componentWillUnmount() {
     document.removeEventListener('keydown', this.handleKeydown)
   }
    
    handleKeydown = e => {
      if(e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
        this.activatePad()
        setTimeout(() => this.deactivatePad(), 100)
      }
    }
   
    handleClick = () => {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
      this.activatePad()
      setTimeout(() => this.deactivatePad(), 100) 
    }

        
    
    activatePad() {
        this.setState ({
            padStyle: activeStyle
        })
      }

    deactivatePad() {
        this.setState ({
            padStyle: inactiveStyle
        })
    }

    

    render() {

      return (

        <div>

            <div 
                className='drum-pad' 
                id={this.props.id}
                onClick={this.handleClick}
                style={this.state.padStyle}
            >
            <h1 classname = 'padLetter' id="padLetter">{this.props.letter}</h1>
            <p className='padID'>{this.props.id} </p> 
            <audio id={this.props.letter}
                    className='clip'
                    src={this.props.src}
                    ref={ref => this.audio = ref}
                ></audio>
            </div>

        </div>
      )
    }
  }


export default DrumPad
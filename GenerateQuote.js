import  React, { Component }   from  'react';
import sound from '../sound/Sound-P90.mp3'


class gunSound extends Component {
     
    constructor(props) {
        super(props);
    
          this.state = { play: false };
          this.src = sound;
          this.audio = new Audio(this.src);
          this.play = this.play.bind(this);
        }
    
        play() {
          this.setState({ play: this.state.play });
          console.log(this.audio);
          this.state.play = this.audio.play();
        }
    
    
    render (){

    return (
    
        <div>
        <button onClick={ this.play } ></button>
        </div>
    );
};
}

export  default  gunSound;
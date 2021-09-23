const drumPads = [
  {
    id : "high",
    text : "Q",
    audio_src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Timbales/17[kb]TIMB2HIGH.WAV.mp3"
  },
  {
    id: "ow",
    text: "W",
    audio_src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Timbales/15[kb]TIMB2OW.WAV.mp3"
  },
  {
    id: "timbales1",
    text: "E",
    audio_src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Timbales/137[kb]TIMBALES_1.WAV.mp3"
  },
  {
    id: "timbales2",
    text: "A",
    audio_src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Timbales/126[kb]TIMBALES_2.WAV.mp3"
  },
  {
    id: "timbales3",
    text: "S",
    audio_src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Timbales/120[kb]TIMBALES_3.WAV.mp3"
  },
  {
    id: "timbales4",
    text: "D",
    audio_src : "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Timbales/146[kb]TIMBALES_4.WAV.mp3"
  },
  {
    id: "bigClap",
    text: "Z",
    audio_src : "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/16[kb]Bg-clap.wav.mp3"
  },
  {
    id: "bigVerbyClap",
    text: "X",
    audio_src : "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/295[kb]big-verby-clap.wav.mp3"
  },
  {
    id: "brightClap",
    text: "C",
    audio_src : "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/34[kb]brightclap.aif.mp3"
  }
];
const DrumPad = ({id, text, audio_src, handleClick}) => {
  return(
    <button className="drum-pad" id={id} onClick={handleClick(id, text)}>
      {text}
      <audio className="clip" id={text} src={audio_src}/>
    </button>
  );
};
class DrumMachine extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {current: ""};
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount(){
    window.addEventListener('keypress',this.handleKeyPress);
  }
  componentWillUnMount(){
    window.removeEventListener('keypress',this.handleKeyPress)
  }
  handleClick(description, song){
    return () =>{
      this.setState({current : description})
      document.getElementById(song).play();
    };
  }
  handleKeyPress(e){
    const pad = drumPads.find(p => p.text === e.key.toUpperCase());
    if(pad){
      document.getElementById(pad.id).click();
    }
  }
  render(){
    return(
      <div id = "drum-machine">
        <div id="pads">
          {drumPads.map(p => (
          <DrumPad id = {p.id} text = {p.text} audio_src = {p.audio_src} handleClick = {this.handleClick}/>))}
        </div>
        <p id="display">{this.state.current}</p>
       </div>
    );
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById("container"));

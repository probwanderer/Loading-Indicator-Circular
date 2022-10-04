class CircularProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
   
    const sqSize = this.props.sqSize;
    
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
   
    const dashArray = radius * Math.PI * 2;
  
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;

    return (
      React.createElement("svg", {
        width: this.props.sqSize,
        height: this.props.sqSize,
        viewBox: viewBox }, 
      React.createElement("circle", {
        className: "circle-background",
        cx: this.props.sqSize / 2,
        cy: this.props.sqSize / 2,
        r: radius,
        strokeWidth: `${this.props.strokeWidth}px` }),
      React.createElement("circle", {
        className: "circle-progress",
        cx: this.props.sqSize / 2,
        cy: this.props.sqSize / 2,
        r: radius,
        strokeWidth: `${this.props.strokeWidth}px`
        
        , transform: `rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`,
        style: {
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset } }), 

      React.createElement("text", {
        className: "circle-text",
        x: "50%",
        y: "50%",
        dy: ".3em",
        textAnchor: "middle" },
      `${this.props.percentage}%`)));



  }}


CircularProgressBar.defaultProps = {
  sqSize: 100,
  percentage: 25,
  strokeWidth: 5,
 };


class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0,
      t:""


      
     };


    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleChangeEvent2 = this.handleChangeEvent2.bind(this);
  }


  handleChangeEvent() {
   this.t1=setInterval(()=>{
    this.setState(prevState=>({percentage:(prevState.percentage+1)%100}))
   },100)
  }

  
  handleChangeEvent2()
  {
    clearInterval(this.t1)
  }
 

  render() {
    return (
      React.createElement("div", null, 
      React.createElement(CircularProgressBar, {
        strokeWidth: "10",
        sqSize: "200",
        percentage: this.state.percentage }), 
      React.createElement("div", null,
      React.createElement("button", {
       
        
        onClick: this.handleChangeEvent },"Start"),React.createElement("button", {
       
          
          onClick: this.handleChangeEvent2 },"Stop"))));



  }}


ReactDOM.render(
React.createElement(App, null),
document.getElementById('app'));
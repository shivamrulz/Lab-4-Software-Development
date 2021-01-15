import {Component} from 'react';
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        };
    }
    componentDidMount(){
            this.timer = setInterval(
                () => this.setState({date: new Date()}),
                1000
            );
        }
    componentWillUnmount(){
            clearInterval(this.timer);
        }
    render(){
        const isTicking = this.props.isTicking;
        var style= {
            'listStyleType':'none',
            fontWeight: 'bold',
            backgroundColor: 'whitesmoke',
            color: 'black',
            padding: '5px',
            borderRadius: '5px',
            opacity: 0.75,
            marginTop: '2%',
            marginBottom: '2%',
            textAlign: 'center',
            fontSize: '30px'

        };
        if (isTicking) {
            return( 
                <div>
                    <div style={style} >{this.state.date.toLocaleTimeString()}</div>
                </div>
            )
        }
        else return <></>
    }      
}
export default Clock;
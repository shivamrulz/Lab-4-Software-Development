import {Component} from 'react';
import '../Style/Timer.css';
import './LogItem';
import './Clock';
import LogItem from './LogItem';
import Clock from './Clock';

class Timer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            startTimeObj: '',
            endTimeObj : '',
            duration: "",
            timeLog: [],
            isTicking:false
        }

        this.handleStartBtnClick=this.handleStartBtnClick.bind(this);
        this.handleStopBtnClick=this.handleStopBtnClick.bind(this);
        this.handleResetBtnClick=this.handleResetBtnClick.bind(this);
    }

    handleStartBtnClick = (event) =>{
        const startTime= new Date();
        this.setState({
            startTimeObj : startTime,
            isTicking : true,
            endTimeObj : null
        })
        console.log("handle handleStartBtnClick");
    }

    handleStopBtnClick = (event) =>{
        const endTime= new Date();
        let calcDuration = endTime - this.state.startTimeObj;
        let newTimerLog={
            duration: Math.floor(calcDuration/60000)+" Minutes and "+Math.floor((calcDuration%60000)/1000)+" seconds",
            key: Date.now()
        };
        this.setState((prevState)=>{
            return{
                timeLog:prevState.timeLog.concat(newTimerLog)
            };
        });
        console.log(this.state.timeLog)

        this.setState({
            endTimeObj : endTime,
            duration: newTimerLog.duration,
            isTicking: false
        })
        console.log("handle handleStopBtnClick");

    }

    handleResetBtnClick = (event) =>{
        this.setState({
            startTimeObj: '',
            endTimeObj: '',
            duration: "",
            isTicking:false,
            timeLog: []
        })
        console.log("handle handleResetBtnClick");

    }

    render(){
        let displayStartTime="";
        let displayEndTime="";
        if(this.state.startTimeObj instanceof Date){
            displayStartTime=this.state.startTimeObj.toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true });
        }
        if(this.state.endTimeObj instanceof Date){
            displayEndTime=this.state.endTimeObj.toLocaleDateString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true });
        }
        return(
        <>
            <table className='container'>
                <tbody>
                    <tr>
                        <td>
                            <span>Start Time:</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type='text' id ='startTimeText' readOnly value={displayStartTime}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span >End Time:</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type='text' id ='stopTimeTxt' readOnly value={displayEndTime}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span >Duration:</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Clock isTicking={this.state.isTicking}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id='startTimeBtn' onClick={this.handleStartBtnClick}>Start Timer</button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button id='stopTimeBtn' onClick={this.handleStopBtnClick} > Stop Timer </button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <button id='resetTimeBtn' onClick={this.handleResetBtnClick} > Reset Timer </button>
                        </td>
                    </tr>
                    </tbody>
            </table>
            <div className='logContainer'>
                <LogItem timeLog={this.state.timeLog}/>
            </div>
            
        </>
        )
    }
}


export default Timer;
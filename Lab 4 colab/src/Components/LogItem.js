import { Component } from 'react';
class LogItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            timeLog: []
         }
    }
    createLogs(timeLogEntry) {
        return (
        <li key={timeLogEntry.key} class="container-item" > {timeLogEntry.duration}</li>
        )
    }

    render() { 
        var timeLogEntries=this.props.timeLog;
        var listItems= timeLogEntries.map(this.createLogs);
        var style= {'listStyleType':'none'};
        return ( 
            <ul style={style}>
                {listItems}
            </ul>
         );
    }
}
 
export default LogItem;
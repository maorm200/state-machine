let eventsHistory = '';
let lastEvent = '';
class Call {
    async EventHandler(newEvent) {
        let items = {
            'L1CN-': ['call.new'],
            'L1CN-L1UCo-': ['call.connecting'],
            'L1CN-L1UCo-@': ['DUPLICATE DETECTED: IGNORING'],
            'L1CN-L1UCo-L1UCd-': ['call.connected'],
            'L1CN-L1UCo-L1UCd-L1UCm-': ['call.completed', '*']
        };
        let eHistory = await this.getEventHistory(eventsHistory, newEvent);
        eventsHistory = eHistory;
        if (items[eHistory][items[eHistory].length - 1] === '*') {
            const returnValue = items[eHistory];
            eventsHistory = '';
            return returnValue;
        }
        return items[eHistory];
    }

    async getEventHistory(eHistory, newEvent){
        if (lastEvent === newEvent){
            eHistory += '@';
        }
        else{
            if (eHistory.endsWith('@')){
                eHistory = eHistory.slice(0, -1);
            }
            eHistory += newEvent;
        }
        lastEvent = newEvent;
        return eHistory;
    }
}

module.exports = Call;
var eventHistoryDictionary = {};
var items = require('./dictionary').items;
var allowedEvents = require('./dictionary').allowedEvents;

class Call {
    async EventHandler(callId, newEvent) {
        //eHistory returns call to getEventHistory with parameters from our test(callId, newEvent)
        let eHistory = await this.getEventHistory(callId, newEvent);

        // history does not exist in dictionary
        if (!(eHistory in items)){
            if(!(eHistory.includes('*'))){
                console.log(callId, eHistory, "These sequence of events aren't found in dictionry")
            }
            return ''
        }

        // initialization of variables from imported dictionary
        let action = items[eHistory];
        let end = action[action.length - 1];

        // if reached end with *, then exit process. Nothing else happens if more events show up.
        if (end === '*') {
            console.log('Found the *, reached the end');
            await this.getEventHistory(callId, '*');
            return action;
        }
        return action;
    }

    async getEventHistory(callId, newEvent){
        // if callId key doesn't exist in dictionary, then we add new key with the new callId
        if (!eventHistoryDictionary.hasOwnProperty(callId)){
            eventHistoryDictionary[callId] = {'lastEvent': '', 'eventHistory': ''};
        }
        // Initialization of variables from the dictionary
        let eHistory = eventHistoryDictionary[callId]['eventHistory'];
        let lastEvent = eventHistoryDictionary[callId]['lastEvent'];
        if (lastEvent === newEvent){
            let end = eHistory[eHistory.length - 1];
            if(end !== '@'){
                eventHistoryDictionary[callId] = {'lastEvent' : newEvent, 'eventHistory': eHistory += '@'};
            }
        } else {
            let end = eHistory[eHistory.length - 1];
            if(end === '@'){
                // if the history is equal to @ and event is different than previous event
                // it will delete the @ and add the new event to history.
                eHistory = eHistory.substring(0, eHistory.length - 1)
            }
            eventHistoryDictionary[callId] = {'lastEvent' : newEvent, 'eventHistory': eHistory += newEvent};
        }
        console.log(eventHistoryDictionary)
        return eHistory;
    }
}

module.exports = Call;
var eventHistoryDictionary = {};
var items = require('./dictionary').items;
var allowedEvents = require('./dictionary').allowedEvents;

class Call {
    async EventHandler(callId, newEvent) {
        let eHistory = await this.getEventHistory(callId, newEvent);
        // history does not exist in dictionary
        if (!(eHistory in items)){
            return ''
        }
        // initialization of variables from imported dictionary
        let action = items[eHistory];
        let end = action[action.length - 1];

        // if reached end with *, then exit process. Nothing else happens if more events show up.
        if (end === '*') {
            console.log('Found the *, reached the end');
            process.exit();
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
            eHistory += '@';
        }
        // Building elements into the dictionary, else is added if lastEvent doesn't equal new event
        else{
            eventHistoryDictionary[callId] = {'lastEvent' : newEvent, 'eventHistory': eHistory += newEvent};
        }
        console.log(eventHistoryDictionary)
        return eHistory;
    }
}

module.exports = Call;
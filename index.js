let callIdArray = []
let callIdArrayCall2 = []
let eventsHistoryDict =
    [{'callIdArray': callIdArray, 'lastEvent': '', 'eventHistory': ''}];
let eventsHistoryDictCall2 =
    {'callIdArray': callIdArrayCall2, 'lastEvent': '', 'eventHistory': ''};

var items = require('./dictionary').items;
var allowedEvents = require('./dictionary').allowedEvents;


class Call {
    async EventHandler(callId, newEvent) {
        let eHistory = await this.getEventHistory(callId, newEvent);
        var action = eHistory['eventHistory'];
        if (action === undefined){
            return [''];
        }
        if (end === '*') {
            console.log('here')
            var returnValue = action;
            action = '';
            return returnValue;
        }
        return items[action];
    }

    async getEventHistory(callId, newEvent){
        // initialization of variables from the two dictionaries (for 2 calls)
        let eHistory = eventsHistoryDict[0]['eventHistory'];
        let eHistoryCall2 = eventsHistoryDictCall2['eventHistory'];
        let lEvent = eventsHistoryDict[0]['lastEvent'];
        let lEventCall2 = eventsHistoryDictCall2['lastEvent'];

        // check if callId exists in eventHistory dictionary, and create new entry if not.
        if(callIdArray.length === 0){
            callIdArray.push(callId);
        }

        // checks if callId exists in callID array, if not, then we push to 2nd dictionary
        if (!callIdArray.includes(callId)){
            callIdArrayCall2[0] = callId;
            lEventCall2 = newEvent;
            eHistoryCall2 += newEvent;
            eventsHistoryDict.push(eventsHistoryDictCall2);
            eventsHistoryDictCall2['lastEvent'] = lEventCall2;
            eventsHistoryDictCall2['eventHistory'] = eHistoryCall2;
        }
        // if same callID, then keep on adding to 1st dictionary
        else{
            eHistory += newEvent
            lEvent = newEvent;
            eventsHistoryDict[0]['lastEvent'] = lEvent;
            eventsHistoryDict[0]['eventHistory'] = eHistory;
        }

        return eHistory;
    }
}


// async getEventHistory(callId, newEvent, eHistory){
//     console.log(eHistory)
//     if (!allowedEvents.includes(newEvent)){
//         console.log(`Error, event ${newEvent} not found`);
//         return eHistory;
//     }
//     if (eHistory['lastEvent'] === newEvent){
//         eHistory += '@';
//     } else {
//         if (eHistory['eventHistory'].endsWith('@')){
//             eHistory['eventHistory'] = eHistory['eventHistory'].slice(0, -1);
//         }
//         eHistory['eventHistory'] += newEvent;
//         eHistory['callId'] = callId;
//     }
//     eHistory['lastEvent'] = newEvent;
//     return eHistory;
// }

module.exports = Call;
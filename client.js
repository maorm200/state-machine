class Client {
    async process (call_id, event){
        const action = await index.EventHandler(call_id, event);
        console.log(action)
        return action;
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


module.exports = Client;
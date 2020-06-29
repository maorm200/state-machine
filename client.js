class Client {
    async process (event){
        //reverse array of events to match correct order in requestinator
        event = event.reverse();
        for(let JsonEvent of event){
            // iterate over all json events, for each event run the event handler.
            JsonEvent = JSON.parse(JsonEvent);
            const payload = JsonEvent['payload'];
            const call_id = payload['call_id'];
            const namedEvent = await this.nameEvent(JsonEvent);
            const action = await index.EventHandler(call_id, namedEvent);
            if (action !== ''){
                console.log('Key Found: ' , action)
            }
        }
        // if(action !== ''){
        //     console.log(call_id,action);
        // }
        // return action;
    }

    async nameEvent (event){
        //initialization of variables frm the requestinator.txt file
        const payload = event['payload'];
        const call_id = payload['call_id'];
        const type = event['type'];
        const leg = payload['first_leg'];
        const state = payload['state'];

        // return our program's unique representation of the event string for each scenario
        if (type === 'call.new' && leg === true){
            event = 'L1CN-';
        }
        if (type === 'call.new' && leg === false){
            event = 'L2CUne-';
        }
        if(type === 'call.update' && state === 'connecting' && leg === true){
            event = 'L1CUci-';
        }
        if (type === 'call.update' && state === 'connecting' && leg === false){
            event = 'L2CUci-';
        }
        if (type === 'call.update' && state === 'connected' && leg === true){
            event = 'L1CUco-';
        }
        if (type === 'call.update' && state === 'connected' && leg === false){
            event = 'L2CUco-';
        }
        if (type === 'call.complete' && payload['completion_state'] === 'success'){
            event = 'L1CC-';
        }
        if(type === 'call.log'){
            event = '';
        }
        return event;

    }

}



module.exports = Client;
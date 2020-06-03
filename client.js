class Client {
    async process (call_id, event){
        const events = await index.EventHandler(call_id, event);
        // console.log(events)
        return events;
    }
}

module.exports = Client;
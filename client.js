class Client {
    async process (event){
        const events = await index.EventHandler(event);
        console.log(events);
        return events;
    }
}

module.exports = Client;
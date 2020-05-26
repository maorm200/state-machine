const Index = require('./index');
proceed_events = []
class Client {
    async process (event){
        proceed_events.push(event);
        const full_string = proceed_events.join("");
        const events = await index.call(full_string);
        console.log(events);
    }

}

// console.log(proceed_events)

module.exports = Client;
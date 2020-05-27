proccessed_events = '';
class Call {
    async EventHandler(event) {
        let items = {
            'A': ['Event A received'],
            'AB': ['Event A and B received'],
            'ABC': ['Event C received after A & B', 'Call disconnected'],
            'ABCD': ['Event D received after A,B,C', '*']
        };
        proccessed_events = proccessed_events + event;
        if (items[proccessed_events][items[proccessed_events].length - 1] === '*') {
            const returnValue = items[proccessed_events];
            proccessed_events = '';
            return returnValue;
        } else {
            return items[proccessed_events];
        }
    }
}

module.exports = Call;
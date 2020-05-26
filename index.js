class Call {
    async call(payload){
        let items = {
            'A': 'Event A received',
            'AB':'Event A and B received',
            'ABC': 'Event C received after A & B',
            'ABCD': 'Event D received after A,B,C'
        }
        for(let index in items) {
            const key = index
            const value = items[index];
            if (payload === key){
                return value;
            }
        }
    }
}


module.exports = Call;
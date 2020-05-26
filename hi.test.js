const Index = require('./index');
const Client = require('./client');


index = new Index()
client = new Client();

test('test1', async() => {
    await client.process('A');
    await client.process('B');
    await client.process('C');
})
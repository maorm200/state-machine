const Index = require('./index');
const Client = require('./client');


index = new Index();
client = new Client();

output1 =

test('test1', async() => {
    await client.process('A');
    await client.process('B');
    await client.process('C');
    await client.process('D');
    await client.process('A');
    await client.process('B');
    await client.process('C');
    await client.process('D');
    // await client.process('B');
    // await client.process('C');
    // await client.process('D');
})
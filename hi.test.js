const Index = require('./index');
const Client = require('./client');

index = new Index();
client = new Client();

test('test1', async() => {
    await client.process('L1CN-');
    await client.process('L1UCo-');
    await client.process('L1UCo-');
    await client.process('L1UCd-');
    await client.process('L1UCm-');
    await client.process('L1CN-');
    await client.process('L1UCo-');
    await client.process('L1UCo-');
    await client.process('L1UCd-');
    await client.process('L1UCm-');
});
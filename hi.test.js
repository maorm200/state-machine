const Index = require('./index');
const Client = require('./client');

index = new Index();
client = new Client();

// Tests normal state
test('normal-state', async() => {
    await client.process('50e056d4-85df-41c2-85eb-b4123a7b26f6' ,'L1CN-');
    await client.process('50e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CUci-');
    await client.process('70e056d4-85df-41c2-85eb-b4123a7b26f6', 'L2CUne-');
    await client.process('70e056d4-85df-41c2-85eb-b4123a7b26f6','L2CUci-');
    // await client.process('70e056d4-85df-41c2-85eb-b4123a7b26f6','L2CUco-');
    // await client.process('70e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CUco-');
    // await client.process('70e056d4-85df-41c2-85eb-b4123a7b26f6', 'L2CUcc-');
    // await client.process('70e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CC-');
});

test('concurrent-calls-normal-state', async() => {
    await client.process('L1CN-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CUci-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUne-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUci-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUco-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CUco-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUcc-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CC-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CN-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CUci-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUne-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUci-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUco-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CUco-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUcc-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CC-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');


});

//Tests state when call connecting comes in first
test('call-connecting-is-first', async() => {
    await client.process('L1CUci-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CN-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CUco-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUne-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUci-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUco-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CC-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUcc-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
})
//test to handle non existing event
test('handling-non-existing-event', async() => {
    await client.process('L2CUne-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L3CUci-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L4CUci-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUne-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
})

// tests non existing events
test('handling-non-existing-event', async() => {
    await client.process('L2CUne-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L3CUci-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L4CUci-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUne-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
})

// testing communicator calling from communicator to mobile phone
test('communicator', async() => {
    await client.process('L2CUne-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CUci-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CN-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUci-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CUcc-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L2CUcc-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
    await client.process('L1CC-', '50e056d4-85df-41c2-85eb-b4123a7b26f6');
})






// Tests normal state with duplication of call connecting
// test('normal-state-with-duplication', async() => {
//     await client.process('L1CN-');
//     await client.process('L1UCo-');
//     await client.process('L1UCo-');
//     await client.process('L1UCd-');
//     await client.process('L1UCm-');
// });


//Tests call completed only
// test('call-completed-only', async() => {
//     await client.process('L1UCm-');
// });
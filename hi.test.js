const Index = require('./index');
const Client = require('./client');
const fs = require('fs');
index = new Index();
client = new Client();


// read contents of the file
const data = fs.readFileSync('requestinator.txt', 'UTF-8');

// split the contents by new line
const lines = data.split(/\r?\n/);
let array = [];
let newLine = '';

// print all lines
lines.forEach((line) => {
    if(!(line.startsWith('X-') || line.startsWith('#') || line.startsWith('Headers') || line.startsWith('chr-events')
        || line.startsWith('Content-Type') || line.startsWith('Host') || line.startsWith('User-'))){
        newLine += line;
        if(newLine.endsWith('}}')){
            array.push(newLine);
            newLine = '';
        }
    }
});

// Tests normal state
test('normal-state', async() => {
    await client.process(array);
});

test('normal-state2', async() => {
    await client.process('Call 1' ,'L1CN-');
    await client.process('Call 1', 'L1CUci-');
    await client.process('Call 1', 'L2CUne-');
    await client.process('Call 1','L2CUci-');
    await client.process('Call 1','L2CUco-');
    await client.process('Call 1', 'L1CUco-');
    await client.process('Call 1', 'L2CUcc-');
    await client.process('Call 1', 'L1CC-');
    // process.exit();

});

//tests normal state with two concurrent calls
test('normal-state-two-calls', async() => {
    await client.process('Call 1' ,'L1CN-');
    await client.process('Call 1', 'L1CUci-');
    //duplicate events
    await client.process('Call 1', 'L2CUne-');
    await client.process('Call 1', 'L2CUne-');
    await client.process('Call 1', 'L2CUne-');
    await client.process('Call 1', 'L2CUne-');
    await client.process('Call 1', 'L2CUne-');

    await client.process('Call 1','L2CUci-');
    await client.process('Call 1','L2CUco-');
    await client.process('Call 1', 'L1CUco-');
    await client.process('Call 1', 'L2CUcc-');
    await client.process('Call 1', 'L1CC-');

    await client.process('Call 2' ,'L1CN-');
    await client.process('Call 2', 'L1CUci-');
    await client.process('Call 2', 'L2CUne-');
    await client.process('Call 2', 'L2CUne-');
    await client.process('Call 2','L2CUci-');
    await client.process('Call 2','L2CUco-');
    await client.process('Call 2', 'L1CUco-');
    await client.process('Call 2', 'L2CUcc-');
    await client.process('Call 2', 'L1CC-');

    // await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CC-');


});

//tests normal state with two concurrent calls with SAME ID, second one shouldn't work
test('normal-state-two-calls', async() => {
    await client.process('Call 1' ,'L1CN-');
    await client.process('Call 1', 'L1CUci-');
    await client.process('Call 1', 'L2CUne-');
    await client.process('Call 1', 'L2CUne-');
    await client.process('Call 1','L2CUci-');
    await client.process('Call 1','L2CUco-');
    await client.process('Call 1', 'L1CUco-');
    await client.process('Call 1', 'L2CUcc-');
    await client.process('Call 1', 'L1CC-');
    await client.process('Call 1' ,'L1CN-');
    await client.process('Call 1', 'L1CUci-');
    await client.process('Call 1', 'L2CUne-');
    await client.process('Call 1', 'L2CUne-');
    await client.process('Call 1','L2CUci-');
    await client.process('Call 1','L2CUco-');
    await client.process('Call 1', 'L1CUco-');
    await client.process('Call 1', 'L2CUcc-');
    await client.process('Call 1', 'L1CC-');

});

//tests normal state with three concurrent calls
test('normal-state-three-calls', async() => {
    await client.process('Call 1' ,'L1CN-');
    await client.process('Call 1', 'L1CUci-');
    await client.process('Call 1', 'L2CUne-');
    await client.process('Call 1', 'L2CUne-');
    await client.process('Call 1','L2CUci-');
    await client.process('Call 1','L2CUco-');
    await client.process('Call 1', 'L1CUco-');
    await client.process('Call 1', 'L2CUcc-');
    await client.process('Call 1', 'L1CC-');
    await client.process('Call 2' ,'L1CN-');
    await client.process('Call 2', 'L1CUci-');
    await client.process('Call 2', 'L2CUne-');
    await client.process('Call 2', 'L2CUne-');
    await client.process('Call 2','L2CUci-');
    await client.process('Call 2','L2CUco-');
    await client.process('Call 2', 'L1CUco-');
    await client.process('Call 2', 'L2CUcc-');
    await client.process('Call 2', 'L1CC-');
    await client.process('Call 3' ,'L1CN-');
    await client.process('Call 3', 'L1CUci-');
    await client.process('Call 3', 'L2CUne-');
    await client.process('Call 3', 'L2CUne-');
    await client.process('Call 3','L2CUci-');
    await client.process('Call 3','L2CUco-');
    await client.process('Call 3', 'L1CUco-');
    await client.process('Call 3', 'L2CUcc-');
    await client.process('Call 3', 'L1CC-');
});

test('normal-call-with-L1CUCI arriving before L1CN switched', async() => {
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CUci-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6' ,'L1CN-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CUco-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L2CUne-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6','L2CUci-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6','L2CUco-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CC-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L2CUcc-');
})

test('normal-call-switched', async() => {
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6' ,'L1CN-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CUci-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CUco-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L2CUne-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6','L2CUci-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6','L2CUco-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CC-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L2CUcc-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L2CUcc-');

})



// Tests duplicate feature (with @)
test('normal-state-duplicates', async() => {
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6' ,'L1CN-');
    await client.process('50e056d4-85df-41c2-85eb-b4123a7b26f6' ,'L1CN-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CUci-');
    await client.process('50e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CUci-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L2CUne-');
    await client.process('50e056d4-85df-41c2-85eb-b4123a7b26f6', 'L2CUne-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6','L2CUci-');
    await client.process('50e056d4-85df-41c2-85eb-b4123a7b26f6','L2CUci-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6','L2CUco-');
    await client.process('50e056d4-85df-41c2-85eb-b4123a7b26f6','L2CUco-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CUco-');
    await client.process('50e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CUco-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L2CUcc-');
    await client.process('50e056d4-85df-41c2-85eb-b4123a7b26f6', 'L2CUcc-');
    await client.process('40e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CC-');
    await client.process('50e056d4-85df-41c2-85eb-b4123a7b26f6', 'L1CC-');

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
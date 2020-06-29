let allowedEvents = ['L1CN-','L1CUci-', 'L2CUne-','L2CUci-', 'L2CUco-','L2CUcc-','L1CC-', 'L1CUco-'];

let items = {
        // normal call
        'L1CN-': [''],
        'L1CN-@': [''], // allow duplicate call new events
        'L1CN-L1CUci-': [''],
        'L1CN-L1CUci-L2CUne-': ['SCREEN POP'],
        'L1CN-L1CUci-L2CUne-@': [''], // Allow duplicate events of L2CUne
        'L1CN-L1CUci-L2CUne-L2CUci-': ['PHONE EXTENSION RINGING'],
        'L1CN-L1CUci-L2CUne-L2CUci- ': [''],
        'L1CN-L1CUci-L2CUne-L2CUci-L2CUco-L1CUco-': ['PHONE EXTENSION ANSWERED'],
        'L1CN-L1CUci-L2CUne-L2CUci-L2CUco-L1CUco-L2CUcc-': ['CALL ENDED', '*'],
        'L1CN-L1CUci-L2CUne-L2CUci-L2CUco-L1CUco-L2CUcc-L1CC-': [''],

        //adam scenario: simulring communicator

        'L1CN-': [''],
        'L1CN-@': [''],
        'L1CN-L1CUci-': [''],
        'L1CN-L1CUci-L2CUci-': ['PHONE EXTENSION RINGING'],
        'L1CN-L1CUci-L2CUci-L1CUco-': [''],
        'L1CN-L1CUci-L2CUci-L1CUco-L2CUco-': ['PHONE EXTENSION ANSWERED'],
        'L1CN-L1CUci-L2CUci-L1CUco-L2CUco-L1CC-': [''],


        //adam scenario: menu transfer communicator
        'L1CN-' : [''],
        'L1CN-L1CUci-' : [''],
        'L1CN-L1CUci-L1CUco-' : [''],
        'L1CN-L1CUci-L1CUco-L2CUci-' : ['PHONE EXTENSION RINGING', 'SCREEN POP'],
        'L1CN-L1CUci-L1CUco-L2CUci-L2CUco-' : ['PHONE EXTENSION ANSWERED'],
        'L1CN-L1CUci-L1CUco-L2CUci-L2CUco-L1CC-': ['CALL ENDED', '*'],


        //adam scenatio : menu transfer to mobile

        'L1CN-': [''],
        'L1CN-L1CUci-' : [''],
        'L1CN-L1CUci-L1CUco-' : [''],
        'L1CN-L1CUci-L1CUco-L1CC-' : [''],

        //adam scenario: simulating pick up bug

        'L1CN-' : [''],
        'L1CN-L1CUci-' : [''],
        'L1CN-L1CUci-L2CUci-' : ['PHONE EXTENSION RINGING'],
        'L1CN-L1CUci-L2CUci-L1CUco-' : [''],
        'L1CN-L1CUci-L2CUci-L1CUco-L1CC-' : [''],

        // //Call from cellular phone to a menu, typing extension number
        // // call new arrived after call connecting
        'L1CUci-' : [''],
        'L1CUci-L1CN-': [''],
        'L1CUci-L1CN-L1CUco-': [''],
        'L1CUci-L1CN-L1CUco-L2CUne-': ['SCREEN POP'],
        'L1CUci-L1CN-L1CUco-L2CUne-L2CUci-': ['PHONE EXTENSION RINGING'],
        'L1CUci-L1CN-L1CUco-L2CUne-L2CUci-@' : [''],
        'L1CUci-L1CN-L1CUco-L2CUne-L2CUci-L2CUco-' : ['PHONE EXTENSION ANSWERED'],
        'L1CUci-L1CN-L1CUco-L2CUne-L2CUci-L2CUco-L1CC-': [''],
        'L1CUci-L1CN-L1CUco-L2CUne-L2CUci-L2CUco-L1CC-L2CUcc-': ['CALL ENDED', '*'],

        //Call from cellular phone to a menu, typing extension number
        'L1CN-' : [''],
        'L1CN-L1CUci-': [''],
        'L1CN-L1CUci-L1CUco-': [''],
        'L1CN-L1CUci-L1CUco-L2CUne-': ['SCREEN POP'],
        'L1CN-L1CUci-L1CUco-L2CUne-L2CUci-': ['PHONE EXTENSION RINGING'],
        'L1CN-L1CUci-L1CUco-L2CUne-L2CUci-@': [''],
        'L1CN-L1CUci-L1CUco-L2CUne-L2CUci-L2CUco-': ['PHONE EXTENSION ANSWERED'],
        'L1CN-L1CUci-L1CUco-L2CUne-L2CUci-L2CUco-L1CC-': [''],
        'L1CN-L1CUci-L1CUco-L2CUne-L2CUci-L2CUco-L1CC-L2CUcc-': ['CALL ENDED', '*'],

        // // Call from communicator to cellular phone
        'L1CN-' : [''],
        'L1CN-L2CUne-': ['SCREEN POP'],
        'L1CN-L2CUne-L1CUco-': [''],
        'L1CN-L2CUne-L1CUco-L2CUco-': ['PHONE EXTENSION ANSWERED'],
        'L1CN-L2CUne-L1CUco-L2CUco-@': [''],
        'L1CN-L2CUne-L1CUco-L2CUco-L2CUcc': [''],
        'L1CN-L2CUne-L1CUco-L2CUco-L2CUcc-L1CUcc': ['CALL ENDED', '*'],
        'L1CN-L2CUne-L1CUco-L2CUco-L2CUcc-L1CUcc-L1CC-': [''],

        //
        // // call from communicator to a cell phone
        'L2CUne-' : ['SCREEN POP'],
        'L2CUne-L1CUci-' : [''],
        'L2CUne-L1CUci-L1CN-' : [''],
        'L2CUne-L1CUci-L1CN-L2CUci-' : ['PHONE EXTENSION RINGING'],
        'L2CUne-L1CUci-L1CN-L2CUci-@' : [''],
        'L2CUne-L1CUci-L1CN-L2CUci-L1CUcc-' : ['CALL ENDED', '*'],
        'L2CUne-L1CUci-L1CN-L2CUci-L1CUcc-L2CUcc-' : [''],
        'L2CUne-L1CUci-L1CN-L2CUci-L1CUcc-L2CUcc-L1CC-' : [''],

        // call from mobile phone to extension, answered
        'L2CUci-': ['PHONE EXTENSION RINGING'],
        'L2CUci-L1CUco-': [''],
        'L2CUci-L1CUco-L2CUco-': [''],
        'L2CUci-L1CUco-L2CUco-L1CC': [''],

        // another call from mobile phone to extension, answered
        'L1CN-': [''],
        'L1CN-L1CUci-':[''],
        'L1CN-L1CUci-L2CUne-': ['SCREEN POP'],
        'L1CN-L1CUci-L2CUne-L2CUci-': [''],
        'L1CN-L1CUci-L2CUne-L2CUci-L2CUci-': ['PHONE EXTENSION RINGING'],
        'L1CN-L1CUci-L2CUne-L2CUci-L2CUci-L2CUco-':['PHONE EXTENSION ANSWERED'],
        'L1CN-L1CUci-L2CUne-L2CUci-L2CUci-L2CUco-L1CUco-': [''],
        'L1CN-L1CUci-L2CUne-L2CUci-L2CUci-L2CUco-L1CUco-L1CUcc-':['CALL ENDED', '*'],
        'L1CN-L1CUci-L2CUne-L2CUci-L2CUci-L2CUco-L1CUco-L1CUcc-L2CUcc-': [''],

        //call from communicator to mobile phone
        'L1CN-': [''],
        'L1CN-L1CUci-': [''],
        'L1CN-L1CUci-L2CUci-': ['PHONE EXTENSION RINGING', 'SCREEN POP'],
        'L1CN-L1CUci-L2CUci-L2CUco-': ['DESTINATION NUMBER ANSWERED'],
        'L1CN-L1CUci-L2CUci-L2CUco-L1CUco-' : [''],
        'L1CN-L1CUci-L2CUci-L2CUco-L1CUco-L2CUcc-': ['CALL ENDED', '*'],
        'L1CN-L1CUci-L2CUci-L2CUco-L1CUco-L2CUcc-L1CC-': [''],

        //call has two legs with different Call_ID
        //call is from mobile phone to communicator
        //problem: events come after Call completed
        //needs to be retested after one has call id and not two separate legs
        'L1CUci-': [''],
        'L1CUci-L1CN-': [''],
        'L1CUci-L1CN-L1CUco-':[''],
        'L1CUci-L1CN-L1CUco-L1CC-': [''],
        'L1CUci-L1CN-L1CUco-L1CC-L2CUci-': ['SCREEN POP'],
        'L1CUci-L1CN-L1CUco-L1CC-L2CUci-L2CN': [''],
        'L1CUci-L1CN-L1CUco-L1CC-L2CUci-L2CN-L2CC-': [''],
        'L1CUci-L1CN-L1CUco-L1CC-L2CUci-L2CN-L2CC-L2CUco-':['']
};


exports.items = items;
exports.allowedEvents = allowedEvents;
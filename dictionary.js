let allowedEvents = ['L1CN-','L1CUci-', 'L2CUne-','L2CUci-', 'L2CUco-','L2CUcc-','L1CC-', 'L1CUco-'];

let items = {
        // normal call
        'L1CN-': ['first leg created'],
        'L1CN-L1CUci-': [''],
        'L1CN-L1CUci-L2CUne-': ['2nd leg created'],
        'L1CN-L1CUci-L2CUne-@': ['DUPLICATE DETECTED: IGNORING'],
        'L1CN-L1CUci-L2CUne-L2CUci-': [''],
        'L1CN-L1CUci-L2CUne-L2CUci-L2CUco-': ['2nd leg connected'],
        'L1CN-L1CUci-L2CUne-L2CUci-L2CUco-L1CUco-': ['leg 1 connected'],
        'L1CN-L1CUci-L2CUne-L2CUci-L2CUco-L1CUco-L2CUcc-': ['leg 2 disconnected'],
        'L1CN-L1CUci-L2CUne-L2CUci-L2CUco-L1CUco-L2CUcc-L1CC-': ['leg 1 disconnected', '*'],

        //Call from cellular phone to a menu, typing extension number
        // call new arrived after call connecting
        'L1CUci-' : [''],
        'L1CUci-L1CN-': ['first leg created'],
        'L1CUci-L1CN-L1CUco-': ['first leg connected'],
        'L1CUci-L1CN-L1CUco-L2CUne-': ['leg 2 created'],
        'L1CUci-L1CN-L1CUco-L2CUne-L2CUci-': [''],
        'L1CUci-L1CN-L1CUco-L2CUne-L2CUci-@' : [''],
        'L1CUci-L1CN-L1CUco-L2CUne-L2CUci-L2CUco-' : ['leg 2 connected'],
        'L1CUci-L1CN-L1CUco-L2CUne-L2CUci-L2CUco-L1CC-': [''],
        'L1CUci-L1CN-L1CUco-L2CUne-L2CUci-L2CUco-L1CC-L2CUcc-': ['Good call ended', '*'],

        //Call from cellular phone to a menu, typing extension number
        'L1CN-' : [''],
        'L1CN-L1CUci-': [''],
        'L1CN-L1CUci-L1CUco-': [''],
        'L1CN-L1CUci-L1CUco-L2CUne-': [''],
        'L1CN-L1CUci-L1CUco-L2CUne-L2CUci-': [''],
        'L1CN-L1CUci-L1CUco-L2CUne-L2CUci-@': [''],
        'L1CN-L1CUci-L1CUco-L2CUne-L2CUci-L2CUco-': ['Good call connected'],
        'L1CN-L1CUci-L1CUco-L2CUne-L2CUci-L2CUco-L1CC-': [''],
        'L1CN-L1CUci-L1CUco-L2CUne-L2CUci-L2CUco-L1CC-L2CUcc-': ['Good call ended', '*'],

        // Call from communicator to cellular phone
        'L1CN-' : [''],
        'L1CN-L2CUne-': [''],
        'L1CN-L2CUne-L1CUco-': [''],
        'L1CN-L2CUne-L1CUco-L2CUco-': [''],
        'L1CN-L2CUne-L1CUco-L2CUco-@': [''],
        'L1CN-L2CUne-L1CUco-L2CUco-L2CUcc': [''],
        'L1CN-L2CUne-L1CUco-L2CUco-L2CUcc-L1CUcc': ['Good call connected'],
        'L1CN-L2CUne-L1CUco-L2CUco-L2CUcc-L1CUcc-L1CC-': ['Good call ended', '*'],


        // call from communicator to a cell phone
        'L2CUne-' : [''],
        'L2CUne-L1CUci-' : [''],
        'L2CUne-L1CUci-L1CN-' : [''],
        'L2CUne-L1CUci-L1CN-L2CUci-' : [''],
        'L2CUne-L1CUci-L1CN-L2CUci-@' : [''],
        'L2CUne-L1CUci-L1CN-L2CUci-L1CUcc-' : [''],
        'L2CUne-L1CUci-L1CN-L2CUci-L1CUcc-L2CUcc-' : [''],
        'L2CUne-L1CUci-L1CN-L2CUci-L1CUcc-L2CUcc-L1CC-' : ['']




};


exports.items = items;
exports.allowedEvents = allowedEvents;
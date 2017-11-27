/*
    bypass_jb_tm.js
    ---------------
    The script bypasses TicketMaster 1.23.0 jailbreak detection
    Created 2017-11-09 by Dima Kovalenko (kov4l3nko@gmail.com)
    Tested with Frida 10.6.21 and TicketMaster 1.23.0 on 64bit iOS devices
*/

// Resolve the address of +[UIDevice isWonderful]
var resolver = new ApiResolver('objc');
var matches = resolver.enumerateMatchesSync("+[UIDevice isWonderful]");
if (matches.length > 0 ) {
    // The address found, set a hook
    Interceptor.attach(matches[0]["address"], {
        onLeave: function(retval) {
            // Always return 0
            retval.replace(0);
        }    
    });
    console.log("SUCCESS! +[UIDevice isWonderful] hooked!");
} else {
    // The address not found
    console.log("ERROR! Can't find the address of +[UIDevice isWonderful]");
}
# This is test.py 

import lldb

def test(debugger, command, result, internal_dict):
    """ Just a test command to set a breakpoint """
    target = debugger.GetSelectedTarget()
    breakpoint = target.BreakpointCreateByName("SSLWrite")
    # add a callback to the breakpoint
    breakpoint.SetScriptCallbackFunction('test.breakpoint_callback')

# This is the callback function, it does nothing useful but says "Hit!"
def breakpoint_callback(frame, bp_loc, dict):
    print "Hit!"
	
def __lldb_init_module(debugger, internal_dict):
    debugger.HandleCommand('command script add -f test.test test')
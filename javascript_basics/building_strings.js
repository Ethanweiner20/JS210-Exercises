// Building Strings

/*

Yes, there is an error, because of the trailing whitespace at the end of line 5.
For multiline strings to work properly, there can not be trailing whitespace
after the \ character.

Even after fixing this, there is still a bug: there is whitespace in the middle
of some sentences. This is because Javascript considers the whole string to be
continuous, and so includes any whitespace at the start of newlines as part of 
the string.

*/

# twig

Hello, thankyou for sending me this, it gave me alot to think about but I think i has met the specifications as laid out in the brief.

My initial attempt was to create and empty array, loop ovre it and do a check for whether it exists and its size. I would then either push this to the new array 
or add it to the current element. 

I wrote some sudo code for this and it seemed a bit convuluted. I then checked the MDN docs for methods on intergers and found Math.ceil() which rounds up to the nearest interger.
So what i put together was the following function:

(1) Decalre a variable called result which is a new array to avoid mutating the original
(2) Work out the new array size since the original is being divided equally
(3) Run Math.ceil() to round it up
(4) Loop over the array
(5) The apply .slice() to specifically extract values from certain points in the array
(6) Push extracted values to result array.

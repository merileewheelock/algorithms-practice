Bubble Sort
-Start at the first element, and compare it to the next one to it
-If the left is bigger, they are out of order. Switch!
-Go to the next one, repeat
-Do the entire list, n times, and the list MUST be sorted

var unsorted = [5,2,6,3,1,3];

First time through
-Check [0] and [1] ... 5 > 2? Yes. Switch.
2,5,6,3,1,3
-Check [1] and [2] ... 5 > 6? No.
-Check [2] and [3] ... 6 > 3? Yes. Switch.
2,5,3,6,1,3
-Check [3] and [4] ... 6 > 1? Yes. Switch.
2,5,3,1,6,3
-Check [4] and [5] ... 6 > 3? Yes. Switch.
2,5,3,1,3,6

Second time through...
The largest numbers will continue to bubble up to the top. This would repeat n-1 times (so 5 times through)

-If n is list length, the biggest number is at n after 1 time.
-If n is list length, the 2 biggest numbers are at the end after 2 times.
-Run a loop that goes through the whole array and checks each one.
-We only actually have to loop through the whole array minus the number of times already through.

1st iteration = loop whole array
2nd iteration - loop whole array - 1
3rd iteration = loop whole array - 2
4th iteration = loop whole array - 3

Consider the cases...
List is in reverse: Have to go through n elements, n times
List is in order: Still have to go through n elements, n times


Modified Bubble Sort
To optimize, set up a bool to false that checks if any switched have been made. If a switch has been made, set to true.
At the end of the loop, if the bool is STILL false, no switches were made. List is in order! Stop. Saves time.

Now the cases are different....
List is in reverse: Have to go through n elements, n times
List is in order: Loop once, bool is still false, stop
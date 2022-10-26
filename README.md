# thinking-in-react

![tabl](https://user-images.githubusercontent.com/85868026/198066311-2405cd82-3b98-4170-8fcb-c84797fb5d1d.png)

In this read, I understood how to use `state` and pass `props` from the in a react parent-child component hierachy.
I also learnt how to set state precisely on input elements through their `onChange` function.

We assign state to the input element's `value property`. And through it's onChange property we set the set whenever the user changes it. The onChange function takes an event handler and that passes the event `(e)` and then accesses and sets its new value through `e.target.value`.

useState is an array object that carries two things; a variable state and a function to track and update that variable state.

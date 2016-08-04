Your Mission

You must recreate our TODO List application using Angular. DO NOT COPY your JavaScript code from before. You should write everything from scratch using Angular concepts learned this week. You can, however, reuse our HTML and Sass from the previous assignment. (Of course, the HTML will have to be refactored to use Angular bindings!)

Your Angular application must have separate files for different pieces of code... most likely one module, one or two Controllers, and a Service.

Important Changes

There is one added piece to our application from the original assignment: you must store the items in localStorage so they persist from one page load to another!
In addition to this new functionality, your application must have tests!
Write a thorough test for your controller(s)
You can ignore testing your service for now
Make sure you can see your code coverage report
TODO List Functionality

As a reminder, here is what our application must be able to do otherwise:

Create a TODO item when the user submits the form (the box that says "What needs to be done?" in the mockup below)
Clicking on a todo item's text allows the user to edit the item inline (see image #2)
Clicking on the circle to the left of an item toggles whether it is complete or not
Hovering over a todo shows the red "X", and clicking on that "X" deletes the item
The incomplete item count should always be displayed in the bottom left corner (see mockup)
Clicking on "Active" at the bottom nav results in only showing incomplete items
Clicking on "Completed" at the bottom results in only showing complete items
Clicking on "All" at the bottom results in showing all items, regardless of status
Clicking "Clear completed" removes any todo item that is marked complete (delete from the UI and data!)
Screenshots

todo app items
todo app item edit

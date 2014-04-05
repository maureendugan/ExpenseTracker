ExpenseTracker
==============

This is an epicodus assignment

Make a web page to track your expenses. To start off with, just make a form where users can input a description and amount for each purchase, and list out all the purchases:
mockup of an expense tracker

Make a prototype called Purchase to create objects for the purchases. It's always a good idea to pick out names for prototypes that closely match the real-world language we use to talk about them.

An expense tracker isn't very useful if you can't categorize your purchases. Make a form where users can create new categories. When users picks a category, it lists all the purchases in the category, and has a place to add new purchases:
mockup of an expense tracker with categories

You should make a prototype called Category for this feature.

Our users should be able to easily see where they're spending their money. Let's add a chart to the page displaying the amount and percentage the user has spent in each category:
mockup of an expense tracker with reports

Here's a couple hints to help you figure out how to how to calculate these values. Make a method for instances of Category called .totalSpent() that calculates the total cost of all the purchases in that category. Then make a method on Category called .totalSpentEverywhere that calculates the total amount spent in all categories. Then, use the two of these to calculate percentages.

If you get this far, add a feature to help users budget their expenses. Give your users a place to enter the most they want to spend in each category. Show how much the user has left to spend in that category. If the users enters a purchase that would go over the budget, pop up an alert to let them know.

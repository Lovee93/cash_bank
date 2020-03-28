# Welcome to Cash Bank! 

## Please use instructions given in Instructions.md to start the server. Steps for the app are listed below in a section.

## What is it?

Well, it's a simple banking app where users can login and they will see their acount balance as well as Bank's total balance (which is the sum of account balances of all users). 
They can further deposit or withdraw money, thereby changing the bank balance. If the user doesn't have enough money in their account, they are unable to withdraw.


## Assumptions:

Before we understand the working of the application, let's have some understanding of what I have assumed here:

 1. There are 4 sample users in the users.js file, each of which have a username, password and some account balance. 
 2. The changes to all the account balances is lost, once the app is closed, we are not writing onto the users.js file - this app is simply a sample.
 3. While, it might lose changes on closing, it doesn't lose its balance information on logging out of the account. 

## Steps:

1. Enter the username and password and click **Login**. You can access them from **src/users.js** file.
2. Once, loggedIn, you can see your balance and bank balance - which matches the same in **src/users.js**
3. To deposit, enter any positive number and click on **Deposit**, you will see that both your balance and bank balance have updated.
4. To withdraw, enter any positive number and click on **Withdraw** - note here you cannot withdraw more than you have in your account. You get alert!
5. **Logout**!

6. Login again with different user or same and try out the above steps!

## Code Inspiration and Design: 
Given the instructions, the idea seemed simple! We needed a simple app (or program), that allow us to do simple transactions that we do in our daily life. 

We deposit money and withdraw it. We cannot withdraw more than we have in our account. Next, our balance adds to the banks total balance.

However, each user is different, and can have different balances and transactions.

This simplified the idea of creating a Login Screen - always for user management and authentication! But how would we know, that user has logged in? Hence, we need to maintain a flag during our session. There comes our *isLoggedIn* whose state is updated to true as soon as there is a username and password match. 
Again, for a match, we need some data - some sample users - we can use API calls, or here we are using a simple array of objects.

Next, once the user has logged in what do we need to render? We need to show their account balance and bank balance as per requirements. And hence, here we have it. Quite clear.
Now these balances must update with deposit and withdrawl of money. And hence to perform that - we need an input text field to gather what amount they want to deposit/withdraw. And there we have our two main functionalities of deposit and withdrawl available on a click of a button!

Once pressed must update the balances. Now, the biggest challenge here is to actually update the balances in *users.js* file - which is not possible at this stage, and hence we bring users from *users.js* in users prop, whose state we can update, transfer and rotate with the login of multiple users, without ever going back to *users.js* to fetch any data, until the app is refreshed!

Once the state of users is managed and so is its accessibility, *deposit* and *withdraw* are easier tasks.

Another thing that we are doing is swapping the rendering of components on Login and Logout - this makes trasnfering users state easy.  
Why do we swap and pass users state and bank_balance at logout and login? To be able to access updated balances, while making new updates!

As simple as that, this app can further be improved by having some real-time data, proper user authentication and usage of loads of APIs. We can further include functionalities of money transfer. And another idea that I got while working on this project is how about we had an app that could actually tell me the total balance I have from my multiple bank accounts (including, international accounts, credit cards and digital currencies) - as my total net worth. 

Another thing about test-cases, if we try to build this app using a TDD approach, we can certainly include more validation checks, to make our app secure and unbreakable. 

## Code Structure:

We have users.js file that consists of our sample users, which we pass as a prop to our **App.js** file in our initial call (i.e. in **index.js**)
Next, in **App.js** - we declare users in state and copy the *users* from props, to use it and update it further in the app. For this we use lifecycle method.
Next, we have a default login screen when the state of *isLoggedIn = false* (as declared in constructor). As soon as we enter the username and password, these are checked against our users details and if there is a match, the state of *isLoggedIn changes to 'true'* and hence our new component **UserAccount** is rendered. (Wrong username or password, generates alert!)
Now for **UserAccount** to render and function properly, we have passed *users and username* as props. Here again we use lifecycle hooks to modify users and it's items state.
Also, we have got *Bank Balance* which we are calculating as the sum of users account balances (not from users file, but using users prop -> state). This hence updates, with changes in user account balance.
So, now we are presented with *user balance* and *bank balance* on the screen - which is generated from the initial call. 
In order to deposit, I may write number, say 10, and click on *deposit*, this increments the user balance and bank balance by 10. For this to happen we change the state of users and since we are displaying real-time user state, as it updates, it re-renders the new balances. 
We have also used somewhere *myIndex*, this helps us to correctly match the user which has logged in and whose account is being updated. 
Similarly for withdrawl, if I enter some amount and click on withdrawl, there is a change in state of user's balance, affecting bank balance and hence re-rendering with updated balance. However, there's an additional check of getting a negative balance due to extra withdrawl, which prevents the user to withdraw more than they have in their account, by giving an alert.
Alright, once the user is happy with the transaction, they can logout. But this will not change the state of user or bank balance, rather it will be again transferred as props to the **App** component that initially recieved users from **users.js**, but this time from **UserAccount.js**
This allows the cycle to go on, even with the login and updating of different users.  

## Testing:

Used enzyme for shallow testing. Haven't written many tests due to time constraints. But can create them in near future. 
1. About app not crashing
2. About showing up Welcome message
3. About not showing UserAccount at first render

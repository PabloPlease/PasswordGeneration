# PasswordGeneration

## Surface level working
In this program, I wanted to create a file generation tool. It will take certain parameters and then give a password to the textbox which is able to be copied and pasted. It works in this manner:
Four prompts will ask you for a certain type of character for your passwrod. To make certain that that type of character will appear in your password, make sure to type in "Yes" exactly. That does include the capital "Y". In the last question, it askes for a length between 8 and 128 characters. Then you click the button for the password to generate.

### Under the hood working
The program evaluates which characters you want in your program based on the answers the user provides. When it evaluates that response to be true, it adds those characters to an empty array. The number of characters needed are then used to generate the amount. It a "for" loop that is limited by the desired amount.
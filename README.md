# Let's Play! - Iro

CS177 Long Project

## Group Members

| Name | CCSF username | Github username |
| ---- | ------------- | --------------- |
Ilmira Andronico | iandroni  | iandroni |
Christopher Black | cblack1 |  |
Jasmine Farrell | jfarrel6 | jasmineiris |
Evan Morrison | emorris7 | evmo |
Zack Pierce | ppierce2 | zackerypierce |
Tatyana Polyakova | tpolyako | tatyana12 |
Robert Mitchell | rmitchel | squeakyheatr |
Ariel Salazar |  | itozann |
Greg Stephens |  |  |
David Wayman | dwayman | r3dcrosse |

### Roles

- Coding: Jasmine Farrell, David Wayman
- Documentation: Ilmira Andronico, Evan Morrison
- QA testing: Ilmira Andronico

## Overview

**Let’s Play! - Iro** is browser-based, interactive, educational game in which the player sorts colors and counts yellow color balls. Players advance through levels by selecting the correct combination of color and shape within a specified time limit. 

## Requirements

- Coded in Javascript, HTML, and CSS.
- Game is platform-independent and can be played in any modern web browser.
- Splash/intro screen, which leads to the first (simple) level of the game, which leads to subsequent (more complex) levels.
- Each level is worth a certain number of points. Advanced levels are worth more points than earlier levels.
- An overall point total is kept for each session.
- Players can register their name to include their total score on a ranked scoreboard.
- After completing each level, players have an option of continuing to the next level, or exiting.
- Players have posibility to evaluate this game and provide their comments using the form provided.
## Functional Specification

### Possible Scenario

Kate wants to play this game. She will have to go online and start “Let’s play! -Iro” game. After Kate opened this software she will have to register her name to keep the score. Ones player has gotten a color, different shapes with that color from the player will appear  on the screen with extra shapes  and different colors. Kate would have to detect the color that has been provided originally  and count amount of colored objects.  After time runs out , this screen will turn into blank field where she would enter her count then push check button to get correct result. This score will be saved and after getting 5 correct results she will move to next  more complex level.

### Non Goals

“Let’s play! -Iro  will not provide description of appearing objects.

#### Input

Primary input will come from user. She/He will be able to register her/his name to keep the score then enter count of colored objects. Secondary input will come from generating random color for user to interact. 

#### Output

This software will compare results from a user and a program and will keep score of user entries/answers.

### Screen by screen specification

“Let’s play! Iro” software will consist of home screen, game mode and result screen

#### Home screen

After launching this software welcome message will appear with description/rules of the game . User will also be able to register their name.

#### Game screen

List with different colors will be provided for player to make their choice.  This screen will contain timer and picture of different objects and different colors.

#### Result screen

This screen will provide  a field to enter  for a player and will have result button to compare correct amount of objects. User will get message about result of this game and will see their name on the scoreboard.

### Technical Specification

Software “Let’s play! -Iro” will be developed using Java Script programming language. It will consist of home screen, game mode and result screen.
Home screen should have simple description/rules of the game for a player (and field to register their name ). “Next” button will take player to game mode screen.

The screen will  include 10 different colors on color list for user to choose and  a timer . After player has chosen color, timer will start and Screen with different colors and objects will appear. First level of the game should have min  of 2 - max  of 4 different colors, including selected by user color and min of 3 - max 6 different objects. Timer will be set at 10 sec. Each level will add 2 different colors and 2 different objects and 5 sec on the clock.

After timer runs out player will be moved to result screen where she/he can enter hers/his result in field “Enter number of objects in your color”. By clicking “Check” button results will be compared and message “You are correct! Good job!” or “Sorry, try again!” will appear. Button “Play again” can take a player to a game mode screen or “Exit” button will close this game. On the bottom of that screen user can see a list of the players and their scores. 
Score will increase by 1 after correct result . When player gets 5 correct answers she/he will be moved to a higher level.

### User Experience

The design should be very simple and responsive with mobile being the default to start. While K-5 is intended target, it can be marketed as K & Over, which is actually easier and leaves open the possibility of other ancillary benefits.  Being simple the game should also be able to be played in guest mode with some limited functionality so it just works and requires no language skills, account or adult supervision to begin. Without having to do anything, the game should automatically keep track of scores when the same computer revisits the site insuring a more customized, engaging, and intelligent experience regardless. It will work both ways in guest and user mode invisibly and seamlessly for K & Over. Graphical Icons can be used instead of words for easier and simpler navigation and messaging in particular younger audience and different language markets. Instructions can also be shown in either graphical form or an animated video example sample.


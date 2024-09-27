# Special X&O

This project is a web-based **Special X&O** game, an enhanced version of traditional Tic-Tac-Toe. The game now includes two gameplay modes:
- **Player vs Player** (Two players take turns to play)
- **Player vs Bot** (Play against an upgraded, nearly unbeatable bot with enhanced difficulty)

## Features
- **Enhanced Gameplay Modes**: 
  - **Player Mode**: Two players can enjoy the new special gameplay format.
  - **Bot Mode**: Play against a more advanced AI bot that has increased difficulty, making it harder to win.

- **Dynamic Role Management**: Each player (X or O) can only place up to 3 marks on the board at a time. If a player places a fourth mark, the first one they placed will be removed, adding a strategic twist to the classic gameplay.

- **Bot Delay**: The bot will wait 1 second before making its move, creating a more realistic and engaging experience.

- **Responsive UI**: Playable on both desktop and mobile devices with an intuitive design.

## How Special X&O is Different
Unlike traditional Tic-Tac-Toe, **Special X&O** introduces a unique twist:
1. **Dynamic Roles**: Players are only allowed 3 marks on the board at any given time. If a player places a fourth mark, the first one they placed gets removed. This makes the game more strategic and challenging as you need to plan your moves while managing your previous marks.
   
2. **Increased Bot Difficulty**: The bot now uses an improved version of the **Minimax algorithm** with enhanced decision-making capabilities. This makes the bot harder to beat, as it calculates all possible moves and ensures optimal gameplay.

## Why We Changed Tic-Tac-Toe
The traditional Tic-Tac-Toe game often becomes predictable and boring, as the player using X frequently wins or the game ends in a draw. To enhance the gameplay experience, we made significant changes to create a more dynamic and engaging version called **Special X&O**. Our modifications aim to provide players with equal opportunities, making the game more enjoyable and challenging for everyone involved.

## How to Play
### Player vs Player Mode:
1. Click the "Player Mode" button to start a two-player game.
2. Player X makes the first move by clicking on any empty cell.
3. Player O then takes their turn by clicking on another empty cell.
4. Remember, each player can only have 3 active marks on the board. Placing a fourth mark will remove the first one placed.
5. The game ends when one player wins or there is a draw.

### Player vs Bot Mode:
1. Click the "Bot Mode" button to start a game against the advanced bot.
2. Player X (you) makes the first move by clicking on any empty cell.
3. After 1 second, the bot (O) will place its move on the board.
4. The bot is designed to never lose, making it more challenging to win.
5. The game ends when either player wins or there is a draw.

## Link to the Game
Here is the link to play Special X&O: <a href="https://walidbnslimane.github.io/Special-Tic-Tae-Toe/" target="_blank">Play Special X&O</a>

### Project Structure
```plaintext
special-xo/
│
├── index.html       # The main HTML file
├── style.css        # Styling for the game board and layout
├── script.js        # JavaScript logic for game mechanics and AI bot
└── README.md        # This file

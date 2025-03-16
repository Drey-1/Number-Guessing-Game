# 🎯 Number Guessing Game

Idea : https://roadmap.sh/projects/number-guessing-game . 

A simple **CLI (Command Line Interface)** number guessing game where the computer randomly selects a number, and the player tries to guess it within a limited number of attempts.

## 📜 Game Rules
1. The computer selects a random number between **1 and 100**.
2. The player chooses a difficulty level, which determines the number of attempts available:
   - **Easy:** 10 attempts
   - **Medium:** 5 attempts
   - **Hard:** 3 attempts
3. After each guess, the game informs whether the secret number is **higher** or **lower** than the player's guess.
4. The game ends when the player **guesses the number correctly** or **runs out of attempts**.
5. After the game ends, the player can choose to **restart** or **exit**.

## 🛠️ Technologies Used
- **Node.js** for script execution
- **readline** for user input via terminal
- **JavaScript (ES6+)** for game logic

## 🚀 How to Run the Game
### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/number-guessing-game.git
```

### 2️⃣ Navigate to the project folder
```sh
cd number-guessing-game
```

### 3️⃣ Run the game
Ensure that **Node.js** is installed on your system. Then, run the following command:
```sh
node index.js
```

## 📸 Example Gameplay
```sh
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)

Enter your choice: 2
Try to guess the number: 50
Incorrect! The number is lower than your guess.
Try to guess the number: 25
Incorrect! The number is greater than your guess.
Try to guess the number: 30
Congratulations! You got the answer right in 3 tries.
Do you want to restart? (y/n):
```

## 📄 License
This project is under the **MIT** license. You are free to use it as you wish, as long as proper attribution is given.

---

💡 *Have fun playing and improving this project!* 🚀




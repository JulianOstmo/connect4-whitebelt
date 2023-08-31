# connect4-whitebelt

Connect 4 kata completed as a White belt

https://en.wikipedia.org/wiki/Connect_Four

"Connect Four is a game in which the players choose a color and then take turns dropping coloured tokens into a six-row, seven-column vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own tokens.

If the board fills up before either player achieves four in a row, then the game is a draw."

"Object: Connect four of your checkers in a row while preventing your opponent from doing the same. But, look out – your opponent can sneak up on you and win the game!

— Milton Bradley, Connect Four "Pretty Sneaky, Sis" television commercial, 1977"

## Entities

- Grid
  - Column (7)
    - Space (6)
      - Contents: empty/Checker
- Checker
  - Colour: Red/Yellow

## Yellow Belt Exam Requirements

You can read more about the [general process here]({{ site.baseurl }}{% link graduation/index.md %}).

### Scoring Sheet

- Repository setup
  - The solution should be stored in GitHub (IBM or public)
  - The first commit shouldn't contain any domain-related code (boilerplate is ok)
- Workflow
  - The solution should be finished in a 4 pomodoro (2 hour) timebox
  - It's implemented in solo mode
  - It should be written during the graduation (no copy & paste from a previous attempt)
  - A `NOTES.md` file with pomodoro plans and progress should be present
  - There should be a git commit at every red stage
- Coding
  - The implementation should follow a strict TDD (red-green-refactor) workflow
  - The code should have a 100% code coverage
  - The code is created using the simple design & emerging architecture approach
- The implementation follows the clean code approach:
  - The test report is readable as a book (using DDD vocabulary)
  - The production and test code should use the same wording (DDD vocabulary)
  - The production code is readable as a book (hidden complexity)

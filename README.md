# BattleShip Game

> ### this is a battleShip game made using react/redux/ tailwindCss and other helping libraries

## todo today

- can't select ship before place the selected ship
- when select a ship on hover effects the cells that should be placed upon
- upon click while a ship is selected place the ship and change the cells status to occupied by the ship

## todo

1. placing

   - placing page is done and working
   - placing page directly changes the global s
   <!-- tate and store in local storage (ship place , and get over write ) -->
   - placing have a reset button
   - shows hovering effect of the cells before placing

2. moving to battle page

   - generating the newCell for bot and then placing all ships in
   - placing all ships in the bot grid up on mounting
   - start the turn with the player he hit the bot's grid in cell that cell is dispatching hit event on it
     - when mounting the battle page component we set player turn to true
     - when the player hit a cell we notify him using portal abut hit or mis
     - then we set the bot turn to true and randomly hit a cell
     - after bot hit a cell we add new notifier to the portal and keeps going
     - when a hit for the bot / player we inc their score by 1
     - after that when any of the bot / player collect 15 point it means he won cuz theirs 15
     - 1 boat + 2 ship + 3 submarine + 4 battleship + 5 carrier = 15 points
     - calc game time save score / name / time of game / duration in local storage / make is accessible from the welcome page
     - ideas to add
     - hover effect on placing
     -

3. then results page
   - get the results object from localStorage if there's not show a button to the welcome page ..
   - display the results on cards each has the data stored in it

- how should the game go

* welcome page + get players name /protect other routes with name
* rules if needed else placing page
* place ship H/V and show hover effect and after placing a ship it disappears from the fleet
* battle when your turn hit other player map and show hit or miss
* when it's pc turn randomly hit an un hit cell and turn switch turns
* use the main message to notify the player id it's his turn
* show results and store then in local storage

<!-- // VscError bg-pink/rose-300,, GiSpikyExplosion bg-green-500 -->

bugs to be fixed

<!-- weird notifications from bot //done -->
<!-- the layout on the battle page //done -->

<!-- the winner page img and background -->

the number of cell by the slider on the start
the head message on the battle page when hit a hit cell

<!-- the result object -->
<!-- submarine over occupy a cell -->

<!-- the vertical position -->

make responsiveness for placing page mg sm
make responsiveness for battle page /results page lg/md/sm
make rest to restart the game again
write readme for this game / add it to the portfolio and also add the sloth e commerce
complete your c.v and linked in
make a wazzaf/indeed /stackoverflow's / any other platform
apply for your first job tomorrow

<!-- upon hitting a cell display this VscError bg-pink/rose-300,, GiSpikyExplosion bg-green-500 -->

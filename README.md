# React BattleShip

this is a fully responsive **BattleShip** game made in **react/redux** and other tools , the game is 5 pages and has 3 reducers to mange actions & state ,it optimizes DRY concept and other react best practices , the rules of the game is explained in it ,you can start playing it [here][live] ,the game routes is protected by the name , it won't work unless you provide your name ,and you can choose to make the game remember that so you don't need to enter it again, and there's a dashboard for all the results where you can see all the other games result and other information.

<br>
###  [live][live]
<hr>

## runit on your machine !

#### install dependencies

> npm install

#### Run in dev mode

> npm start

<hr>

## tools used in this app

- react
- redux / react-redux
- framer motion
- tailwindCss
- react-icons
- toastify
- rect router
- react-icons
  <hr>

## how it works

<br>

### how the game work

- if there's no name redirect tot welcome page get players name and remember it if chooses
- rules if needed else go to placing page
- place ship in H/V mode and after placing a ship it disappears from the fleet
- battle when your turn hit other player map and show hit or miss
- when it's bot turn randomly hit a cell and switch turns
- use the main message to notify the player the result / guides
- when there's a winner wait 4 sec then redirect to the winner page
- the results page get the stored results from the local storage and add the new one to them

### placing the ship

> - if select a ship can't select ship before place the selected ship
> - upon click while a ship is selected and removed from the fleet , then as a player place the ship and change the cells status to occupied by the ship

### battle start

> - generating the newCell for bot and then placing all ships in
> - placing all ships in the bot grid up on mounting
> - start the turn with the player he hit the bot's grid in cell that cell is dispatching hit action on it
> - when mounting the battle page component we set player turn to true
> - when the player hit a cell we notify him using portal (notification panel component) about hit or mis
> - then we set the bot turn to true and randomly hit a cell (will add difficult mode in the future )
> - after bot hit a cell we add new notifier to the portal and keeps going
> - when a hit for the bot / player we inc their score by 1
> - after that when any of the bot / player collect 15 point it means he won cuz theirs 15 occupied cell
> - 1 boat + 2 ship + 3 submarine + 4 battleship + 5 carrier = 15 points
> - calc game time save score / name / time of game / duration in local storage
> - on small screen hide the notification panel and show one notification only for each hit

## _File structure_

```bash
.
├── public
│  
└── src
    ├── assets (all assists used)
    │   └── readme-images
    │
    ├── components (all project Components)
    │
    ├── helpers (helper functions)
    │
    ├── pages (routes Components)
    │
    └── store (redux Store/Reducers/Actions)
        ├── cells
        │   └── botCells
        └── main

```

## images from the game

![all view from the game im many sizes ][all]

<hr/>

## Acknowledgements

Great thanks to:

1. [The odin project](https://www.theodinproject.com)
<br>
<hr >
<br>

## License

[MIT](./LICENSE.md)

[repo]: https://github.com/ahmedmaher2481998/react-battleships
[live]: https://battleship-react-amaher938.netlify.app/
[all]: src/assets//all.png

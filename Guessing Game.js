/**
 * Created by ulyses.parra488 on 11/1/16.
 */
// Here below are all my varaibles
var players_input;
//Number of Inputs/Guess at
// a time which is 1.
var assumption = 1;
// The choises/options the user can pick.
var colors = ["PINK", "PURPLE", "RED", "BLUE", "GREEN", "YELLOW", "ORANGE", "BLACK", "SILVER", "BROWN", "CHROME", "LIME"];

var colors = colors.sort();

var colors_message; // = colors.join(", ");
// The users Input/guess
var Assumption_Input = "none";

var assumption_input;

var finished = false;

//End of VARIABLES!!

// Basiclly what picks the color in
// a random order.
function game_structer() {
    colors_message = colors.join(", ");

    var random_number =
        Math.random() * (colors.length - 1);
    var random_number_integer =
        Math.floor(random_number);
    players_input = random_number_integer;
    var answer =
        String(colors[random_number_integer]);
    ("The correct answer is: " + answer);

    while (!finished) {
        Assumption_Input =
            prompt("I am thinking💡of one of these colors:\n\n" + "Must type ANSWER in all CAPS! \n\n" +
            colors_message + "\n\n What color🌈am I thinking of?").toUpperCase();
        assumption_input =
            colors.indexOf(Assumption_Input);
        finished = check_guess();
    }

    function check_guess() {
    // When the user enters an invalid value,
    // which causes it to show the message below!!
        if (assumption_input == -1) {
            alert
            ("Sorry, I don't recognize your color. \n\n Please try again.");
            return false;
        }
     // End of invalid MESSAGE!!
        if (assumption_input > players_input) {
            alert
            ("Sorry, your guess is not correct! \n\n Hint: Your color is alphabetically higher than mine.\n\n Please try again.");
            assumption += 1;
            return false;
        }
        if (assumption_input < players_input) {
            alert
            ("Sorry, your guess is not correct!\n\n Hint: Your color is alphabetically lower than mine.\n\n Please try again.");
            assumption += 1;
            return false;


    // Message When The User guesses the color correct!!
        }
        if (assumption_input = players_input) {
            var myBody = document.getElementsByTagName("body")[0];
            myBody.style.background = Assumption_Input;
            document.getElementsByTagName("body", "bgcolor");
            alert
            ("Congratulations! You have guessed the color!\n\n It took you " + assumption +
                " guesses to finish the game!\n\n You can see the color in the background." +
                "\n\n  Thanks for playing 😃\n\n");
            return true;
        }
    }
}

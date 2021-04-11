function computerPlay()
{
    let num = 0;
    do
    {
        num = Math.round(Math.random() * 3)
        if (num === 1)
        {
            return "rock"
        }
        else if (num === 2)
        {
            return "paper"
        }
        else if (num === 3)
        {
            return "scissors"
        }
    } while (num === 0)
    
    
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === "rock" && computerSelection === "scissors")
    {
        return "You Won! Rock beats Scissors!"
    }
    else if (playerSelection === "paper" && computerSelection === "rock")
    {
        return "You Won! Paper beats Rock!"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper")
    {
        return "You Won! Scissors beats Paper!"
    }
    else if (computerSelection === "rock" && playerSelection === "scissors")
    {
        return "You Lost! Rock beats Scissors!"
    }
    else if (computerSelection === "paper" && playerSelection === "rock")
    {
        return "You Lost! Paper beats Rock!"
    }
    else if (computerSelection === "scissors" && playerSelection === "paper")
    {
        return "You Lost! Scissors beats Paper!"
    }
    else
    {
        return "It's a Tie!"
    }
    console.log(playerSelection)
    console.log(computerSelection)
}

function play()
{
    let computerWins = 0;
    let playerWins = 0;

    for (let i = 0; i < 5; i++)
    {
        let computerSelection = computerPlay()

        let playerSelection = prompt()

        let result = playRound(playerSelection, computerSelection)

        if (result.search("You Lost!") != -1)
        {
            computerWins++
            console.log(`Computer: ${computerWins}\nPlayer: ${playerWins}`)
        }
        else if (result.search("You Won!") != -1)
        {
            playerWins++
            console.log(`Computer: ${computerWins}\nPlayer: ${playerWins}`)
        }
        else
        {
            console.log("Tie")
            console.log(`Computer: ${computerWins}\nPlayer: ${playerWins}`)
        }
    }

    if (playerWins > computerWins)
    {
        console.log("You Won!")
    }
    else if (playerWins < computerWins)
    {
        console.log("You Lost!")
    }
    else
    {
        console.log("It's a Tie!")
    }
}



play()
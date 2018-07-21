module.exports.run = async(client, message, args) => {

    // var board = {};
	// var score = {};
	// var move;
	// var turn;
	// var numGames;
	// var winner;
	
	// function game(message) {
	// 	let p1 = startingPlayer.lastMessage.member.nickname
	// 	message.channel.send(`Tic tac toe started \nPlayer 1: ${p1}\nWho is player 2?`)
	// 	await message.channel.awaitMessages(msg => {
	// 		console.log(msg)
	// 	})
	// 	// console.log('game running')
	// 	init();
	// 	numGames = 1;
	// 	// play();
	// }
	
	// function init() {
	// 	score = {
	// 		X: 0,
	// 		O: 0,
	// 		T: 0,
	// 	};
	// 	turn = 'X';
	// }
	
	// function newGame() {
	// 	board = {
	// 		top: '     A   B   C',
	// 		line: '   -----------',
	// 		A1: ' ', A2: ' ', A3: ' ',
	// 		B1: ' ', B2: ' ', B3: ' ',
	// 		C1: ' ', C2: ' ', C3: ' '
	// 	};
	// }
	
	// function drawBoard() {
	// 	console.log(`${board.top}\n
	// 	1) ${board.A1} | ${board.B1} | ${board.C1}\n
	// 	2) ${board.A2} | ${board.B2} | ${board.C2}\n
	// 	3) ${board.A3} | ${board.B3} | ${board.C3}\n`);
	// }
	
	// function moveLookup() {
	// 	client.on("message", message => {
	// 		var input = message.content.toUpperCase();
	// 		if (input in board && board[input]) {
	// 			board[input] = turn
	// 		} else {
	// 			message.channel.send('Try again')
	// 		}
	// 	}
	// 	// (`${turn}'s move`).toUpperCase();
	// 	// if (move in board && board[move]) {
	// 	// 	board[move] = turn;
	// 	// } else {
	// 	// 	console.log('Nope');
	// 	// 	moveLookup();
	// 	// }
	// 	)
	// }
	
	// function switchTurn() {
	// 	if (turn === 'X') {
	// 		turn = 'O';
	// 	} else {
	// 		turn = 'X';
	// 	}
	// }
	
	// function play() {
	// 	while (score.X !== numGames && score.O !== numGames) {
	// 		newGame();
	// 		while (winner !== 'x' && winner !== 'o' && winner !== 't') {
	// 		drawBoard();
	// 		moveLookup();
	// 		switchTurn();
	// 		checkWin();
	// 		}
	// 	}
	// }
	
	// function any(arr, val) {
	// 	return arr.some(arrVal => val === arrVal);
	// }
	
	// function checkWin() {
	// 	var winningCombos = [
	// 		board.A1 + board.B1 + board.C1,
	// 		board.A2 + board.B2 + board.C2,
	// 		board.A3 + board.B3 + board.C3,
	// 		board.A1 + board.A2 + board.A3,
	// 		board.B1 + board.B2 + board.B3,
	// 		board.C1 + board.C2 + board.C3,
	// 		board.A1 + board.B2 + board.C3,
	// 		board.A3 + board.B2 + board.C1,
	// 	];
	// 	if (any(winningCombos, 'XXX') || any(winningCombos, 'OOO')) {
	// 		drawBoard();
	// 		winner = turn;
	// 		score[winner] += 1;
	// 		console.log(`${winner.toUpperCase()} wins!`);
	// 		console.log(`X wins: ${score.X} | O wins: ${score.O} | Ties: ${score.T}`);
	// 	} else if (!any(Object.values(board), ' ')) {
	// 		drawBoard();
	// 		winner = 'T';
	// 		score.t += 1;
	// 		console.log('Looks like we got a tie');
	// 		console.log(`X wins: ${score.X} | O wins: ${score.O} | Ties: ${score.T}`);
	// 	}
	// }
	// game(message);
}

module.exports.help = {
    name: 'ticTacToe'
}
module.exports.run = async(client, message, args) => {
    var board = {};
	var score = {};
	var move;
	var turn;
	var numGames;
	var winner = false;

	game(message);
	
	function game(message) {
		init();
		// let p1 = message.member.nickname
		// message.channel.send(`Tic tac toe started \nPlayer 1: ${p1}\nWho is player 2?`)
		// message.channel.send('How many games?')
		// message.channel.awaitMessages(msg => {
		// 	if (msg.author.bot) return
		// 	console.log(msg.content)
		// 	return;
		// }, {time: 5000})
		newGame();
		// numGames = 1;
		drawBoard(message)
		message.channel.awaitMessages(msg => {
			if (msg.author.bot) return;
			play(msg)
		})
		// play(message);
		
		// message.channel.awaitMessages(msg => {
		// 	if (msg.author.bot) return;
			
		// 	console.log(msg.content)
		// })
		// console.log('game running')
	}
	
	function init() {
		score = {
			X: 0,
			O: 0,
			T: 0,
		};
		turn = '❌';
	}
	
	function newGame() {
		board = {
			top: '--🇦 |  🅱 | 🇨',
			line: '-----------',
			A1: '🔲', A2: '🔲', A3: '🔲',
			B1: '🔲', B2: '🔲', B3: '🔲',
			C1: '🔲', C2: '🔲', C3: '🔲'
		};
	}
	
	function drawBoard(message) {
		console.log(`draw board`)
		message.channel.send(`${board.top}\n𝟷 ${board.A1} | ${board.B1} | ${board.C1}\n𝟸 ${board.A2} | ${board.B2} | ${board.C2}\n3 ${board.A3} | ${board.B3} | ${board.C3}`)
	}
	
	function moveLookup(move) {
		let moveUpper = move.content.toUpperCase()

		console.log(`move lookup: ${move}`)
		console.log(move)
		// client.on("message", message => {
		// 	var input = message.content.toUpperCase();
		// 	if (input in board && board[input]) {
		// 		board[input] = turn
		// 	} else {
		// 		message.channel.send('Try again')
		// 	}
		// }

		// (`${turn}'s move`).toUpperCase();
		if (moveUpper in board && board[moveUpper]) {
			board[moveUpper] = turn;
			return true
		} else {
			move.message.channel.send('Nope');
			return false
			// console.log('nopes')
		}
		// )
	}
	
	function switchTurn() {
		if (turn === '❌') {
			turn = '⭕';
		} else {
			turn = '❌';
		}
	}
	
	function play(message) {
		// console.log(`play start, message.author.bot:`)
		// console.log(message.author.bot)
		// while (score.X !== numGames && score.O !== numGames) {
		// 	newGame();
		// 	while (winner !== 'x' && winner !== 'o' && winner !== 't') {
		// 		message.channel.awaitMessages(msg => {
		// 			console.log(msg)
		// 			drawBoard(message);
		// 			if (msg.author.bot) return;
		// 			moveLookup(msg);
		// 			switchTurn();
		// 			checkWin();
		// 		})
		// 	}
		// }
		if (!winner) {
			console.log('play start');
			if (moveLookup(message)) {
				drawBoard(message)
				checkWin(message);
				switchTurn();
			}
			// message.channel.awaitMessages(msg => {
			// 	if (msg.author.bot) return;
			// 	moveLookup(msg.content)
				// switchTurn();
				// checkWin(message);
				// play(message)
			// })
		} else {
			message.channel.send('Bye')
		}

	}
	
	function any(arr, val) {
		return arr.some(arrVal => val === arrVal);
	}
	
	function checkWin(message) {
		var winningCombos = [
			board.A1 + board.B1 + board.C1,
			board.A2 + board.B2 + board.C2,
			board.A3 + board.B3 + board.C3,
			board.A1 + board.A2 + board.A3,
			board.B1 + board.B2 + board.B3,
			board.C1 + board.C2 + board.C3,
			board.A1 + board.B2 + board.C3,
			board.A3 + board.B2 + board.C1,
		];
		if (any(winningCombos, '❌❌❌') || any(winningCombos, '⭕⭕⭕')) {
			drawBoard(message);
			winner = turn;
			score[winner] += 1;
			console.log(`${winner.toUpperCase()} wins!`);
			console.log(`X wins: ${score.X} | O wins: ${score.O} | Ties: ${score.T}`);
		} else if (!any(Object.values(board), ' ')) {
			drawBoard(message);
			winner = 'T';
			score.t += 1;
			console.log('Looks like we got a tie');
			console.log(`X wins: ${score.X} | O wins: ${score.O} | Ties: ${score.T}`);
		}
	}
}

module.exports.help = {
    name: 'ticTacToe'
}
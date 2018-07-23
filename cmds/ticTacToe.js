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
		newGame();
		drawBoard(message)
		if (!winner) {
			message.channel.awaitMessages(msg => {
				if (msg.author.bot) return;
				play(msg)
			})
		}
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
		message.channel.send(`${board.top}\n𝟷 ${board.A1} | ${board.B1} | ${board.C1}\n𝟸 ${board.A2} | ${board.B2} | ${board.C2}\n3 ${board.A3} | ${board.B3} | ${board.C3}`)
	}
	
	function moveLookup(move) {
		let moveUpper = move.content.toUpperCase()
		if (moveUpper in board && board[moveUpper]) {
			board[moveUpper] = turn;
			return true
		} else {
			move.message.channel.send('Nope');
			return false
		}
	}
	
	function switchTurn() {
		if (turn === '❌') {
			turn = '⭕';
		} else {
			turn = '❌';
		}
	}
	
	function play(message) {
		if (!winner) {
			if (moveLookup(message)) {
				drawBoard(message)
				checkWin(message);
				switchTurn();
			}
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
			winner = turn;
			message.channel.send(`${winner} wins!`)
		} else if (!any(Object.values(board), '🔲')) {
			winner = 'T';
			message.channel.send(`Who could have predicted a tie?`)
		}
	}
}

module.exports.help = {
    name: 'ticTacToe'
}
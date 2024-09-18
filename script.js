let currency = 100;

document.getElementById('rollButton').addEventListener('click', function() {
    const betAmount = parseInt(document.getElementById('betAmount').value);
    const betType = document.getElementById('betType').value;

    if (betAmount > currency) {
        alert("Bạn không đủ tiền để đặt cược!");
        return;
    }

    // Xúc xắc
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const score = dice1 + dice2;

    // Cập nhật tổng và hình ảnh xúc xắc
    document.getElementById('scoreText').textContent = score;
    document.getElementById('diceImages').innerHTML = `<img src="images/dice${dice1}.png" alt="Xúc xắc 1"> <img src="images/dice${dice2}.png" alt="Xúc xắc 2">`;

    let resultText = '';
    let message = '';

    // Kiểm tra kết quả cược
    if (score > 6 && betType === 'tai') {
        resultText = 'Tài';
        currency += betAmount;
        message = `Chúc mừng! Bạn thắng ${betAmount} tiền!`;
    } else if (score <= 6 && betType === 'xiu') {
        resultText = 'Xỉu';
        currency += betAmount;
        message = `Chúc mừng! Bạn thắng ${betAmount} tiền!`;
    } else {
        resultText = score > 6 ? 'Tài' : 'Xỉu';
        currency -= betAmount;
        message = `Bạn thua!`;
    }

    // Cập nhật giao diện
    document.getElementById('resultText').textContent = resultText;
    document.getElementById('message').textContent = message;
    document.getElementById('currencyAmount').textContent = currency;

    // Kiểm tra nếu hết tiền
    if (currency <= 0) {
        alert("Bạn đã hết tiền! Hãy reset trò chơi.");
        document.getElementById('rollButton').disabled = true;
    }
});

// Xử lý nút Reset
document.getElementById('resetButton').addEventListener('click', function() {
    currency = 100;
    document.getElementById('currencyAmount').textContent = currency;
    document.getElementById('resultText').textContent = '';
    document.getElementById('scoreText').textContent = '';
    document.getElementById('message').textContent = '';
    document.getElementById('diceImages').innerHTML = '';
    document.getElementById('rollButton').disabled = false;
});

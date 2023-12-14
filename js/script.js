let balance = 0;
    let transactions = [];
    let receiveAddress = generateRandomAddress(); // Генеруємо адресу при завантаженні сторінки
    let qrCodeGenerated = false;

    // Function to generate random balance
    function generateRandomBalance() {
        if (balance === 0) {
            balance = (Math.random() * 100).toFixed(2);
            document.getElementById("userBalance").innerText = balance + ' ETH';
        }
    }
    // Function to show content based on menu selection
    function showContent(option) {
    document.getElementById("content").style.display = "none";
    document.getElementById("balanceContainer").style.display = "none";
    document.getElementById("sendContainer").style.display = "none";
    document.getElementById("receiveContainer").style.display = "none";
    document.getElementById("historyContainer").style.display = "none";

    switch (option) {
        case 'Home':
            document.getElementById("content").style.display = "block";
            break;
        case 'Balance':
            generateRandomBalance();
            document.getElementById("balanceContainer").style.display = "block";
            document.getElementById("userBalance").innerText = balance + ' ETH'; // Оновлено рядок
            break;
        case 'Send':
            document.getElementById("sendContainer").style.display = "block";
            break;
        case 'Receive':
            document.getElementById("receiveContainer").style.display = "block";
            document.getElementById("receiveAddress").innerText = receiveAddress;
            break;
        case 'History':
            displayTransactionHistory();
            document.getElementById("historyContainer").style.display = "block";
            break;
        default:
            document.getElementById("content").style.display = "block";
    }
}
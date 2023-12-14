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

    // Function to generate random address
    function generateRandomAddress() {
        const characters = '0123456789ABCDEF';
        let address = '0x';
        for (let i = 0; i < 40; i++) {
            address += characters[Math.floor(Math.random() * characters.length)];
        }
        return address;
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
// Функція для відображення повідомлення про успішну транзакцію
function showSuccessMessage() {
    // Знаходимо елемент successMessage
    var successMessage = document.getElementById("successMessage");

    // Змінюємо стиль display на "flex" (показуємо блок)
    successMessage.style.display = "flex";

    // Прибираємо повідомлення через 5 секунд
    setTimeout(function() {
        successMessage.style.display = "none";
    }, 5000); // 5000 мілісекунд (5 секунд)
}
  // Function to send funds
    function sendFunds() {
        const sendAmount = parseFloat(document.getElementById("sendAmount").value);
        const recipientAddress = document.getElementById("recipientAddress").value;
        if (!isNaN(sendAmount) && sendAmount > 0 && sendAmount <= balance && recipientAddress) {
            // Виконати транзакцію
            balance -= sendAmount;

            // Генерувати унікальний хеш для транзакції (простий приклад, насправді потрібно використовувати безпечні методи)
            const transactionHash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

            // Записати транзакцію в історію
            const transaction = {
                sender: receiveAddress,
                recipient: recipientAddress,
                amount: sendAmount,
                hash: transactionHash
            };

            transactions.push(transaction);
            displayTransactionHistory();
            generateRandomBalance();
        } else {
            alert("Invalid amount, insufficient balance, or missing recipient address.");
        }
    }
      // Function to confirm sending funds

 function confirmSend() {
    // Показати стилізоване підтвердження
    document.getElementById("confirmationModal").style.display = "block";
}

function sendConfirmedFunds() {
     // Викликати вашу функцію sendFunds() тут
    sendFunds();

    // Відображення повідомлення про успішну транзакцію
    showSuccessMessage();

    // Закрити стилізоване підтвердження
    closeConfirmation();
}

function closeConfirmation() {
    // Закрити стилізоване підтвердження
    document.getElementById("confirmationModal").style.display = "none";
}

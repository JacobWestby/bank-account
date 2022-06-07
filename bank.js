let balance = document.querySelector(".account__balance").innerHTML;
balance = parseInt(balance);

const depositMoney = document.querySelector(".deposit");
const withdrawalMoney = document.querySelector(".withdrawal");


function accountError() {
    if (document.querySelector(".hidden").className === "hidden") {
        document.querySelector(".hidden").className = "errorActive";
    }
};

function removeError() {
    if (document.querySelector(".errorActive").className === "errorActive") {
        document.querySelector(".errorActive").className = "hidden";
    };
};


function bank() {
    depositMoney.addEventListener("click", (event) => {
        let input = document.querySelector("#input").value;

        input = parseInt(input);

        if (typeof input === 'number' && input !== isNaN(input) && event && input > 0) {
            document.querySelector(".account__balance").innerHTML = balance += input;
            document.querySelector("#input").value = "";
            setInterval(removeError(), 5000);
        } else {
            accountError();
        };
    });

    withdrawalMoney.addEventListener("click", (event) => {
        let input = document.querySelector("#input").value;

        input = parseInt(input);

        if (typeof input === 'number' && input !== isNaN(input) && event && input <= balance) {
            document.querySelector(".account__balance").innerHTML = balance -= input;
            document.querySelector("#input").value = "";
            setInterval(removeError(), 5000);
        } else {
            accountError();
        }
    });
};

bank();

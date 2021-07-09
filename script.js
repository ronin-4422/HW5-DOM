console.log("----------#4")
    function clientInfo() {
        let inputUserName = document.getElementById('username');
        let inputPassword = document.getElementById('password');
        let dataName = inputUserName.value;
        let dataPassword = inputPassword.value;

        document.getElementById('result').append('name: '+dataName+'\n|\n password: '+dataPassword);
        console.log(dataName);
    }

console.log("----------#5")
    function storage() {
        let inputUserName = document.getElementById('username');
        localStorage.setItem('username', inputUserName.value);
        let inputPassword = document.getElementById('password');
        localStorage.setItem('password', inputPassword.value);
    }
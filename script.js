let users = [];
let nameInput = document.querySelector("#username");
let ageInput = document.querySelector("#userage");
let btn = document.querySelector("#btn");
let list = document.querySelector("#usersList");
let searchUserInput = document.querySelector("#searchUser");
let searchBtn = document.querySelector("#searchBTN");

btn.onclick = addUser;
searchBtn.onclick = searchUser;

function addUser() {
    let nameValue = nameInput.value;
    let ageValue = +ageInput.value;
    //let ageValue = number(ageInput.value);  // convert from string to number
    //let ageValue = parseInt(ageInput.value);  // convert from string to number
    if (
        nameValue != "" &&
        nameValue != " " &&
        ageValue != "" &&
        ageValue != " " &&
        ageValue <= 100
    ) {
        users.push({ id: users.length + 1, name: nameValue, age: ageValue });
        //console.log(users);
        listUsers(users);
        // resetting the input value
        nameInput.value = "";
        ageInput.value = "";
    } else {
        alert("Please fill your data correctly!");
    }
}

// search for users
function searchUser(a) {
    let searchValue = searchUserInput.value;
    let filteredUsers = [];
    for (let i = 0; i < users.length; i++) {
        if (
            users[i].name
            .trim()
            .toLowerCase()
            .includes(searchValue.trim().toLowerCase())
        ) {
            filteredUsers.push(users[i]);
        }
    }
    listUsers(filteredUsers);
    //console.log(a.target.value);
}

searchUserInput.addEventListener("keyup", searchUser);

// print users to Html
function listUsers(userList) {
    list.innerHTML = "";
    for (i = 0; i < userList.length; i++) {
        list.innerHTML +=
            //"<li>" + userList[i].name + " " + userList[i].age + "</li>";
            `<li>  ${userList[i].name} ${userList[i].age} <button onclick= delUser(${userList[i].id})> Delete </button></li> `;
    }
}

listUsers(users);

// delete users
function delUser(id) {
    // console.log(id);
    let userId = id - 1;
    //console.log(userId);
    users.splice(userId, 1);
    listUsers(users);
}
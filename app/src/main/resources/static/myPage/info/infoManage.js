import { getLoginUser, findByNickName } from '../../common/api/apiList.js';

(async function () {
    const session = await getLoginUser();
    console.log(session.data.nickName);
    const response = await findByNickName(session.data.nickName);
    console.log(response);
})();

var xNick = document.querySelector("#x-nick");
var xPhoneNumber = document.querySelector("#x-phoneNumber");
var xEmail = document.querySelector("#x-email");
var xInfoNick = document.querySelector("#x-infoNick");
var xInfoEmail = document.querySelector("#x-infoEmail");

fetch("/user/getLoginUser")
  .then(function(response) {
    return response.json();
  })
  .then(function(result) {
    console.log(result.data);
    
     
     var user = result.data;
     
     xNick.innerHTML = user.nickName;
     xPhoneNumber.innerHTML = user.phone;
     xEmail.innerHTML = user.email;
     xInfoNick.innerHTML = user.nickName;
     xInfoEmail.innerHTML = user.email;
     

var arr = location.href.split('?');

if (arr.length == 1) {
}

var qs = arr[1];

// 쿼리 스트링에서 email 값을 추출한다.
var params = new URLSearchParams(qs);
var no = user.userId;

console.log(no);

$('#btn2').click(function (e) {
    e.preventDefault();
    window.location.href=`infoManage_edit.html?userId=${no}`;
});

$('#col4').on('click', function (e) {
    e.preventDefault();
    location.href = `withDrawal.html?userId=${no}`;
});
})


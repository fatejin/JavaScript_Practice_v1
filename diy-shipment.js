var check = document.querySelector("#shippingInfo"); //체크박스 id는 shippingInfo

check.addEventListener("click", function () {
    var nameInfo = document.querySelector("#billingName").value;
    var telInfo = document.querySelector("#billingTel").value;
    var addrInfo = document.querySelector("#billingAddr").value;

    if (check.checked == true) { //체크되었다면
        document.querySelector("#shippingName").value = nameInfo; //주문 정보(이름)를 배송 정보(이름)에 복사
        document.querySelector("#shippingTel").value = telInfo; //주문 정보(전화번호)를 배송 정보(전화번호)에 복사
        document.querySelector("#shippingAddr").value = addrInfo; // 주문 정보(주소)를 배송 정보(주소)에 복사
    }
    else { //체크되어 있지 않다면 배송 정보 필드를 지움
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
});
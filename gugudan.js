function gugudan(n) { // 함수 작성
    var m = parseInt(n); // 문자열 n을 숫자로 바꿈
    if (isNaN(m) || m < 1 || m > 9) {
        alert("잘못입력하셨습니다.");
        return;
    }
    for (var i = 1; i <= 9; i++) { // i는 1~9까지 반복
        document.write(m + "x" + i + "=" + m * i + "<br>");
    }
}
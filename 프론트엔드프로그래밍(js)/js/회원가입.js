document
  .querySelector('button[type = "submit"]')
  .addEventListener("click", (e) => {
    const userId = document.querySelector("#user-id").value;
    const pw = document.querySelector("#user-pw1").value;
    const pwc = document.querySelector("#user-pw2").value;
    e.preventDefault();

    // 아이디 오류시 알람창
    if (userId.length < 4 || userId.length > 15) {
      alert("4글자 이상 15자리 이하 값을 입력해주세요.");
      document.querySelector("#user-id").value = null;
      document.querySelector("#user-id").focus();
    }
    // 비밀번호 오류시 알람창
    if (pw.length < 8) {
      alert("8자리 이상 값을 입력해주세요.");
      document.querySelector("#user-pw1").value = null;
      document.querySelector("#user-pw1").focus();
    }
    // 비밀번호 확인 오류시 알람창
    if (!(pwc == pw)) {
      alert("비밀번호와 일치하지 않습니다.");
      document.querySelector("#user-pw2").value = null;
      document.querySelector("#user-pw2").focus();
    }
  });

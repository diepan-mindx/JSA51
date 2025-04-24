// chuyen trang
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

// -------------------------------------------------------
// 1. kiem tra form truoc khi nhan du lieu
function validateFormSignin(email, password) {
  // kiem tra khong trong cac truong nhap
  if (!email || !password) {
    alert("Vui long nhap day du cac truong theo yeu cau!");
    return false;
  }
  return true;
}

function validateFormSignup(username, email, password) {
  // kiem tra khong rong cac truong nhap
  if (!username || !email || !password) {
    alert("Vui long nhap day du cac truong theo yeu cau!");
    return false;
  }

  // kiem tra cu phap username
  if (username.length < 6) {
    alert("Username phai co it nhat 6 ki tu!");
    return false;
  }
  const hasLetter = /[a-zA-Z]/.test(username);
  const hasNumber = /\d/.test(username);
  if (hasLetter && hasNumber) {
    alert("Username phai co ca chu lan so");
    return false;
  }

  // kiem tra cu phap email
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    alert("Email chua dung cu phap!");
    return false;
  }

  // password > 6 chu so
  if (password.length < 6) {
    alert("Password phai co it nhat 6 ki tu!");
    return false;
  }
  return true;
}
// -------------------------------------------------------
// 2. tao user moi => luu user local storage
function signup() {
  // lay du lieu tu form HTML
  const email = document.querySelector("#signup_email").value.trim();
  const username = document.getElementById("signup_username").value.trim();
  const password = document.querySelector("#signup_password").value.trim();
  // kiem tra du lieu (format)
  if (validateFormSignup(email, username, password)) {
    // kiem tra trung lap email
    const duplicateEmail = localStorage.getItem(email);
    if (!duplicateEmail) {
      // luu vao local storage => email: {username, password}
      localStorage.setItem(email, JSON.stringify({ username, password }));
      // LUU Y: JSON.stringify: doi tu kieu javascript (object, array, ...) => JSON

      // chuyen trang
      alert("Dang ki thanh cong!");
      location.href = "./html/home.html";
      return; // ket thuc ham
    } else {
      alert(
        "Email da duoc su dung, vui long nhap email khac hoac chuyen sang trang dang nhap!"
      );
      return;
    }
  }
}

// -------------------------------------------------------
// 3. lay du lieu user => so sanh => chuyen den trang home
function signin() {
  // lay du lieu tu form HTML
  const email = document.querySelector("#signin_email").value.trim();
  const password = document.querySelector("#signin_password").value.trim();

  // kiem tra du lieu (format)
  if (validateFormSignin(email, password)) {
    // tim kiem du lieu phu hop => chuyen trang home
    const userInfoJSON = localStorage.getItem(email); // lay du lieu user thong qua email
    const userInfo = JSON.parse(userInfoJSON); // chuyen du lieu tu kieu JSON => javascript
    // khong co du lieu trong database
    if (!userInfo) {
      alert(
        "Thong tin dang nhap khong ton tai trong he thong, vui long kiem tra lai hoac chuyen den trang dang ki"
      );
      return;
    }
    // co du lieu trung khop => kiem tra password
    if (userInfo.password != password) {
      alert("Mat khau khong chinh xac!");
      return; // neu sai du lieu => khong lam gi them
    }
    // dung het => chuyen trang
    alert("Dang nhap thanh cong!");
    location.href = "./html/home.html";
  }
}

// -------------------------------------------------------
// bat su kien cho button signin
document
  .getElementById("signin_btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // chan luong hoat mac dinh tu html
    signin();
  });
// bat su kien cho button signup
document
  .getElementById("signup_btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // chan luong hoat mac dinh tu html
    signup();
  });

function dangNhap(user, pass) {
    return user === "admin" && pass === "1234";
}

if (typeof document !== "undefined") {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;
            const message = document.getElementById("message");

            if (dangNhap(user, pass)) {
                message.textContent = "Đăng nhập thành công!";
            } else {
                message.textContent = "Sai tài khoản hoặc mật khẩu!";
            }
        });
    }
}

module.exports = dangNhap;

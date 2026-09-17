function dangNhap(user, pass) {
    if (user === "admin" && pass === "123") {
        return true;
    }

    return false;
}

// Xử lý form đăng nhập
document.getElementById("loginForm").addEventListener("submit", function(event) {
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

// Cho phép Jest sử dụng hàm
if (typeof module !== "undefined") {
    module.exports = dangNhap;
}

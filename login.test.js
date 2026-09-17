const dangNhap = require("./login");

test("Đăng nhập đúng tài khoản và mật khẩu", () => {
    expect(dangNhap("admin", "123")).toBe(true);
});

test("Đăng nhập sai mật khẩu", () => {
    expect(dangNhap("admin", "456")).toBe(false);
});

test("Đăng nhập sai tài khoản", () => {
    expect(dangNhap("user", "123")).toBe(false);
});

test("Đăng nhập sai cả tài khoản và mật khẩu", () => {
    expect(dangNhap("user", "456")).toBe(false);
});

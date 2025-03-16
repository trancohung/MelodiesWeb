// auth.js

// Lấy danh sách người dùng từ localStorage
export const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

// Lưu danh sách người dùng vào localStorage
export const saveUsers = (users) =>
  localStorage.setItem("users", JSON.stringify(users));

// Mã hoá mật khẩu (đơn giản — dùng thư viện mã hoá thực tế nếu cần)
export const hashPassword = (password) => btoa(password);

// Kiểm tra đăng nhập
export const login = (email, password) => {
  const users = getUsers();
  const user = users.find(
    (u) => u.email === email && u.password === hashPassword(password)
  );
  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    return user;
  }
  return null;
};

// Đăng ký người dùng mới
export const register = (name, email, password) => {
  const users = getUsers();
  const userExists = users.some((user) => user.email === email);
  if (userExists) return false;

  users.push({ name, email, password: hashPassword(password) });
  saveUsers(users);
  return true;
};

// Kiểm tra người dùng đang đăng nhập
export const getLoggedInUser = () =>
  JSON.parse(localStorage.getItem("loggedInUser"));

// Đăng xuất
export const logout = () => localStorage.removeItem("loggedInUser");

import { users } from "../data/users.js";
import { hashPassword, comparePassword } from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";
export const registerUser = async (name, email, password) => {
  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashed = await hashPassword(password);

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashed,
  };

  users.push(newUser);

  return newUser;
};

export const loginUser = async (email, password) => {
  const user = users.find((u) => u.email === email);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  const token = generateToken(user);

  return { user, token };
};
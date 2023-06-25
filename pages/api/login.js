import { compare } from "bcryptjs"; // You should hash passwords before storing them

export default function login(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { username, password } = req.body;

  // Here, we're hardcoding the user "asunny" with password "sunnya"
  const hardcodedUser = {
    username: "asunny",
    password: "sunnya",
  };

  if (
    username !== hardcodedUser.username ||
    password !== hardcodedUser.password
  ) {
    res.status(401).json({ message: "Invalid username or password" });
    return;
  }

  // Successful login
  res.status(200).json({ message: "Logged in successfully" });
}

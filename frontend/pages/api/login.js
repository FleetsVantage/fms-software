import { compare } from "bcryptjs"; // You should hash passwords before storing them
import { withIronSession } from "next-iron-session";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { username, password } = req.body;

  const hardcodedUser = {
    id: 1, // Mock user ID
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

  // If login was successful:
  req.session.set("user", { id: hardcodedUser.id }); // Replace 'user.id' with actual user ID
  await req.session.save();

  res.status(200).json({ message: "Logged in successfully" });
};

export default withIronSession(handler, {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "MY_APP_COOKIE",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});

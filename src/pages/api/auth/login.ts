import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

export default function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body; // Extract email and password from email
  let token = ""; // Variable to create token

  if (email && password) {
    token = jwt.sign({ email }, "secret", {
      expiresIn: "10d",
    });

    // Serialize token
    const tokenSerialized = serialize("api_token", token, {
      sameSite: "none",
      path: "/",
      secure: true,
    });

    res.setHeader("Set-Cookie", tokenSerialized);

    return res.status(200).json({ token });
  } else {
    return res.status(400).json({ message: "The login data are required" });
  }
}

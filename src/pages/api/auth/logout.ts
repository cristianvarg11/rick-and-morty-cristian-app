import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function logoutHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { api_token } = req.cookies;

  if (!api_token) return res.status(400).json({ message: "no jwt provide" });

  const tokenSerialized = serialize("api_token", "", {
    sameSite: "none",
    path: "/",
    maxAge: 0,
  });

  res.setHeader("Set-Cookie", tokenSerialized);
  res.status(200).json({ message: "logout" });
}

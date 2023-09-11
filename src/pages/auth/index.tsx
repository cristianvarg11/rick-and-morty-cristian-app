import LoginForm from "@/components/forms/login-form/LoginForm";
import Image from "next/image";

export default function AuthPage() {
  return (
    <div
      className="flex justify-center"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        height: "100vh",
      }}
    >
      <Image
        src="/Rick-and-Morty.png"
        alt="Vercel Logo"
        className="dark:invert"
        priority
        fill
        objectPosition="center"
        style={{
          objectFit: "cover",
          zIndex: -1,
          filter: "blur(10px)",
        }}
      />
      <LoginForm />
    </div>
  );
}

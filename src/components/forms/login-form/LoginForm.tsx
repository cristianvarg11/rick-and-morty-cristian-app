import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginService } from "@/services/auth.service";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export interface ILoginForm {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<ILoginForm>();
  const router = useRouter();

  const handleLogin = (loginFormData: ILoginForm) => {
    loginService(loginFormData)
      .then(() => router.push("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="m-6">
      <form
        onSubmit={handleSubmit((formData) => handleLogin(formData))}
        style={{
          border: "1px solid gray",
          padding: "40px",
          background: "white",
          boxShadow: "1px 3px 1px #9E9E9E",
          borderRadius: "10px",
        }}
      >
        <h1 className="my-5 text-3xl font-bold text-center">Login</h1>

        {/*email*/}
        <Input
          className="my-3"
          {...register("email", { required: true })}
          placeholder="email"
          type="email"
        />

        {/*password*/}
        <Input
          className="my-3"
          {...register("password")}
          placeholder="Password"
          type="password"
        />

        <Button type="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </form>
    </div>
  );
}

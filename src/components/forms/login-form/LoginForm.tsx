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
        className="grid w-96"
        onSubmit={handleSubmit((formData) => handleLogin(formData))}
      >
        <h1 className="my-5 text-3xl font-bold m-auto">Login</h1>

        {/*email*/}
        <Input
          className="m-3"
          {...register("email", { required: true })}
          placeholder="email"
          type="email"
        />

        {/*password*/}
        <Input
          className="m-3"
          {...register("password")}
          placeholder="Password"
          type="password"
        />

        <Button type="submit" className="m-auto max-w-xs ">
          Submit
        </Button>
      </form>
    </div>
  );
}

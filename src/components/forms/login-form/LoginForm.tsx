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
    loginService(loginFormData).then(() => router.push("/"));
  };

  return (
    <div className="m-6">
      <form
        className="grid"
        onSubmit={handleSubmit((formData) => handleLogin(formData))}
      >
        <h1 className="my-5 text-3xl font-bold">Login</h1>

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

        <Button type="submit" className="my-6 max-w-xl">
          Submit
        </Button>
      </form>
    </div>
  );
}

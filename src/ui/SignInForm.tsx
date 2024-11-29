import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignInForm() {
  return (
    <form className="flex flex-col gap-4 w-[500px] max-w-full p-4 bento-shadow rounded-xl">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-left">
          Email
        </label>
        <Input type="email" placeholder="Email" id="email" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-left">
          Password
        </label>
        <Input type="password" placeholder="Password" id="password" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-left">
          Repeat password
        </label>
        <Input type="password" placeholder="Password" id="password" />
      </div>
      <Button
        variant="outline"
        className="w-max ml-auto bg-black text-white mt-4"
      >
        Log in
      </Button>
    </form>
  );
}

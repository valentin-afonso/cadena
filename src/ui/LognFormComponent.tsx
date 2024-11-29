import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LognFormComponent() {
  return (
    <form className="flex flex-col gap-4 w-[500px] max-w-full p-4 bento-shadow rounded-xl dark:bg-bg-secondary-dark">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className="text-left dark:text-gray-secondary-dark"
        >
          Email
        </label>
        <Input
          type="email"
          placeholder="Email"
          id="email"
          className="dark:bg-[#3a3a3a]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="password"
          className="text-left dark:text-gray-secondary-dark"
        >
          Password
        </label>
        <Input
          type="password"
          placeholder="Password"
          id="password"
          className="dark:bg-[#3a3a3a]"
        />
      </div>
      <Button
        variant="outline"
        className="w-max ml-auto bg-black dark:bg-white text-white dark:text-black mt-4"
      >
        Log in
      </Button>
    </form>
  );
}

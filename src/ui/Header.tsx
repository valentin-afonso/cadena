import Navigation from "@/ui/Navigation";
import GridLayout from "@/ui/GridLayout";
import Logo from "@/ui/Logo";
import NavigationRight from "@/ui/NavigationRight";

export default function Header() {
  return (
    <header className="bg-bg-primary dark:bg-bg-primary-dark">
      <GridLayout additional_class="flex items-center justify-between py-4">
        <div className="flex items-center gap-10">
          <Logo />
          <Navigation />
        </div>

        <NavigationRight />
      </GridLayout>
    </header>
  );
}

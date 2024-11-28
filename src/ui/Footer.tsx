import GridLayout from "@/ui/GridLayout";
import Logo from "@/ui/Logo";
import Socials from "@/ui/Socials";
import FooterCopyright from "@/ui/FooterCopyright";
export default function Footer() {
  return (
    <footer className="py-12">
      <GridLayout additional_class="flex items-center justify-between">
        <Socials />
        <Logo />
        <FooterCopyright />
      </GridLayout>
    </footer>
  );
}
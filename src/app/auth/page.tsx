import { AuthCard } from "@/components/ui/auth-card";
import AuthTabs from "@/components/auth-tabs/AuthTabs";
import Logo from "@/components/logo/Logo";
import { AuthTabsEnum } from "@/lib/types/enums";
import LoginForm from "@/widgets/LoginForm/LoginForm";
import RegistrationForm from "@/widgets/RegistrationForm/RegistrationForm";

const tabsConfig = [
  { value: AuthTabsEnum.signIn, label: "Sign In" },
  { value: AuthTabsEnum.register, label: "Register" },
];

export default async function AuthPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const activeTab =
    tab === AuthTabsEnum.register ? AuthTabsEnum.register : AuthTabsEnum.signIn;

  return (
    <AuthCard>
      <Logo />
      <AuthTabs tabs={tabsConfig} value={activeTab} />
      {activeTab === AuthTabsEnum.signIn ? <LoginForm /> : <RegistrationForm />}
    </AuthCard>
  );
}

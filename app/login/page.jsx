import LoginForm from "./login-form";

//Server Component for SSR (Server Site Rending) 
export default function LoginPage() {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black">
      <LoginForm title="Sign in to your Account "/>
    </div>
  );
}


import LoginComponent from '@/components/Login'

const Login = () => {

    return (
        <LoginComponent />
    )
}

export default Login


export async function generateMetadata() {
  return {
    title: "Login Page - Get me a Tea",
    description: "An Login Page for Get Me A TeaWebsite",
  };
}
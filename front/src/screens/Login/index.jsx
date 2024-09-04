import Header from "../../components/Header";
import LogInFields from "../../components/LoginFields";

const Login = () => {
  return (
    <div>
      <Header />

      <div className="flex justify-center px-[24px] mt-[80px]">
        <div className="w-full max-w-[600px]">
          <LogInFields />
        </div>
      </div>
    </div>
  );
};

export default Login;

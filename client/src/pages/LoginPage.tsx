import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleSubmitLogin = (username: string, password: string) => {
    // Handle login logic here
  };

  const handleSubmitRegister = (username: string, password: string, email: string) => {
    // Handle register logic here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border rounded p-8 w-1/4">
        <div className="flex justify-between mb-4">
          <button
            className={`px-4 py-2 ${isLogin ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 ${!isLogin ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        {isLogin ? (
          <LoginForm onSubmitUsername={handleSubmitLogin} />
        ) : (
          <RegisterForm onSubmitRegister={handleSubmitRegister} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;

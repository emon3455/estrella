import React from 'react';
import LoginForm from './component/LoginForm';

const LoginPage = () => {
    return (
        <main>
            <h1 className="text-center text-xl md:text-4xl font-bold my-2">Log In</h1>
            <LoginForm/>
        </main>
    );
};

export default LoginPage;
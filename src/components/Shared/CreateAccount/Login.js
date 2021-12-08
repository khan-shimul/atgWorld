import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [isLogin, setLogin] = useState(false);
    console.log(isLogin)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="forms d-flex flex-column my-4">
                    <input className="p-2" placeholder="Email" type="email" {...register("email", { required: true })} />
                    <input className="p-2" placeholder="Password" type="password" {...register("password", { required: true })} />
                </div>
                <input className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default Login;
import { Modal } from "react-bootstrap";
import './CreateAccount.css';
import { useForm } from "react-hook-form";
import loginImg from '../../../images/login.png';
import google from '../../../images/icons/google.png';
import fb from '../../../images/icons/fb.png';
import { useState } from "react";
import Login from "./Login";

export const CreateAccount = (props) => {
    const [isLogin, setLogin] = useState(false);
    console.log(isLogin)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // console.log(watch("example")); // watch input value by passing the name of it
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="modal-header border-0" closeButton>
                <p className="mt-2 mx-auto">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            </Modal.Header>
            <Modal.Body className="my-2 ms-3 me-2">
                <h3 className="fw-bold text-dark">{isLogin ? 'Sign In' : 'Create Account'}</h3>
                <div className="sing-up-container">
                    <div className="row">
                        <div className="col-md-7">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="forms d-flex flex-column my-4">
                                    {!isLogin && <div className="names-field d-flex">
                                        <input className="p-2" placeholder="First Name" {...register("firstName", { required: true })} />
                                        <input className="p-2 w-75" placeholder="Last Name" {...register("lastName", { required: true })} />
                                    </div>}
                                    <input className="p-2" placeholder="Email" type="email" {...register("email", { required: true })} />
                                    <input className="p-2" placeholder="Password" type="password" {...register("password", { required: true })} />
                                    {
                                        !isLogin && <input placeholder="Confirm Password" className="border p-2" type="password" {...register("password2", { required: true })} />
                                    }
                                </div>
                                <input className="submit-btn" type="submit" value={isLogin ? 'Sign In' : 'Create Account'} />
                            </form>

                            <div className="others-login">
                                <button className="btn-social-login my-2"><span><img src={fb} className="img-fluid me-2" alt="" /></span> Sign Up with Facebook</button>
                                <br />
                                <button className="btn-social-login"><span><img className="img-fluid me-2" src={google} alt="" /></span> Sign Up with Google</button>
                                {
                                    isLogin && <p className="text-center fw-bold mt-3">Forgot Password?</p>
                                }
                            </div>
                        </div>
                        <div className="col-md-5">
                            <p className="text-end">
                                {
                                    isLogin === false &&
                                    <span>Already have an account? <span className="sign-in-text" onClick={() => setLogin(true)}> Sign In</span></span>

                                }
                            </p>
                            {
                                isLogin && <p className="text-end">Don’t have account? <span className="sign-in-text" onClick={() => setLogin(false)}>Create new for free!</span></p>
                            }

                            <img className="img-fluid p-3" src={loginImg} alt="" />
                            <p className="sign-up-footer-text">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}
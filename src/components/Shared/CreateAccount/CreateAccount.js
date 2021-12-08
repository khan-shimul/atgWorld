import { Button, Modal } from "react-bootstrap";
import './CreateAccount.css';
import { useForm } from "react-hook-form";
import loginImg from '../../../images/login.png';

export const CreateAccount = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="modal-header" closeButton>
                <p className="mt-2 mx-auto">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            </Modal.Header>
            <Modal.Body>
                <h3 className="fw-bold text-dark">Create Account</h3>
                <div className="sing-up-container">
                    <div className="row">
                        <div className="col-md-7">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="forms d-flex flex-column my-4">
                                    <div className="names-field d-flex">
                                        <input className="p-2" placeholder="First Name" {...register("firstName", { required: true })} />
                                        <input className="p-2 w-75" placeholder="Last Name" {...register("lastName", { required: true })} />
                                    </div>
                                    <input className="p-2" placeholder="Email" type="email" {...register("email", { required: true })} />
                                    <input className="p-2" placeholder="Password" type="password" {...register("password", { required: true })} />
                                    <input placeholder="Confirm Password" className="border p-2" type="password" {...register("password2", { required: true })} />
                                </div>
                                <input type="submit" />
                            </form>
                        </div>
                        <div className="col-md-5">
                            <img className="img-fluid" src={loginImg} alt="" />
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
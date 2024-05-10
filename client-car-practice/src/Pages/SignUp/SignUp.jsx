import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
    const {handleCreateUser} = useAuth()
    const handleSignUp =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        //  console.log(name, email, password);

        // dynamicaly from korar jonno
        // console.log(e.currentTarget);
        // const form = new FormData(e.currentTarget)
        // console.log(form);
        // console.log(form.get('password'));

        // validation korar jonno

        // setError('')
        // setSuccess('')
        // if (password.length<6) {
        //     setError('Password should be at least 6 characters (auth/weak-password).')
        //     return;
        // }
        // else if (!/[A-Z]/.test(password)){
        //     setError('please provide 1 upper case')
        //     return;
        // }

        
        handleCreateUser(email, password)
        .then(() => {
            // Signed up 
            // const user = result.user;
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            //  console.log(errorMessage);
          });
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-10">
                    <h1 className="text-3xl font-bold mt-5 text-center">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div className='text-center mb-10'>

                        <p>Already have an account? <Link to="/login">Login</Link> </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
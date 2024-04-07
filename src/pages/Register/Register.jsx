import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
           
             const{createUser}=useContext(AuthContext)

            const handleRegister=e=>{
                        e.preventDefault();
                        console.log(e.currentTarget);
                        const form=new FormData(e.currentTarget)

                        const name=form.get('name');
                        const photo=form.get('photo');
                        const email=form.get('email');
                        const password=form.get('password')
                        console.log(name,photo,email,password);
                      
                         createUser(email,password)
                         .then(result=>{
                                    console.log(result.user);
                         })
                         .catch(error=>{
                                    console.error(error);
                         })

                      }
            
                        return (
                                    <div>
                                                <Navbar></Navbar>
                                     <div className=" ">
                                                <h2 className="text-3xl text-center my-10">Please Register</h2>
                  <form onSubmit={handleRegister} className=" md:w-3/4 lg:1/2 mx-auto">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Register</button>
                    </div>
                  </form>
                  <p className="text-center mt-4">All ready have an account <Link className=" text-blue-600 font-bold" to='/login'>Login</Link></p>
                </div>
                                    </div>
                        );
};

export default Register;

import { FaGoogle, FaGithub, FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets//qZone1.png'
import qZone2 from '../../../assets//qZone2.png'
import qZone3 from '../../../assets//qZone3.png'
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    return (
        <div>

            <div className='p-4 space-y-3 mb-6'>
                <h1 className="text-3xl">Login With</h1>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google Login
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github Login
                </button>



            </div>



            <div className='p-4  mb-6'>
                <h1 className="text-3xl">Find Us</h1>

                <Link to='/' className='flex gap-2 items-center p-4 text-lg border-2 rounded-t-lg'>
                    <FaFacebookSquare></FaFacebookSquare>
                    Facebook
                </Link>

                <a href="" className='flex gap-2 items-center p-4 text-lg border-x-2 '>
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>

                <a href="" className='flex gap-2 items-center p-4 text-lg border-2 rounded-b-lg'>
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>




            </div>




            <div className='p-4  mb-6'>
                <h1 className="text-3xl">Q-Zone</h1>

                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

                


            </div>


        </div>
    );
};

export default RightSideNav;


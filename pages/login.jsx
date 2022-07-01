import CustomButton from "../components/CustomButton";
import Link from "next/link";
const loginPage = () => {
    return (
        <div className="text-center flex flex-col space-y-4">
         <p>You need to login or Sign Up to create Todo</p>
         <Link href='/api/login'>
         <a className='text-white bg-black dark:bg-white dark:text-black px-2 py-2 rounded-lg w-[50%] mx-auto font-bold'>Sign Up Here</a></Link>
       
        </div>
    );
}

export default loginPage;
import Image from 'next/image'
const RightSideBar = () => {
    return (
        <div className="basis-1/12 border-solid border-black-50  h-screen border-l-[1px]">
           <div className='p-2 flex flex-col justify-center items-center space-y-4'>
            <div className=" w-12 h-12 relative">
                    <Image src='/profile_avatar_full.jpg' alt="side-img" layout="fill" objectFit="contain" className="relative rounded-full w-12 h-12"/>    
            </div>
            <div className=" w-12 h-12 relative">
                    <Image src='/profile_avatar_full.jpg' alt="side-img" layout="fill" objectFit="contain" className="relative rounded-full w-12 h-12"/>    
            </div>
            <div className=" w-12 h-12 relative">
                    <Image src='/profile_avatar_full.jpg' alt="side-img" layout="fill" objectFit="contain" className="relative rounded-full w-12 h-12"/>    
            </div>
            <div className=" w-12 h-12 relative">
                    <Image src='/profile_avatar_full.jpg' alt="side-img" layout="fill" objectFit="contain" className="relative rounded-full w-12 h-12"/>    
            </div>
            <div className=" w-12 h-12 relative">
                    <Image src='/profile_avatar_full.jpg' alt="side-img" layout="fill" objectFit="contain" className="relative rounded-full w-12 h-12"/>    
            </div>
            <div className=" w-12 h-12 relative">
                    <Image src='/profile_avatar_full.jpg' alt="side-img" layout="fill" objectFit="contain" className="relative rounded-full w-12 h-12"/>    
            </div>
            
           
           </div>
        </div>
    )
}

export default RightSideBar

import Image from 'next/image'
const RightSideBar = () => {
    return (
        <aside className="hidden lg:block col-span-1 border-solid border-black-50  h-screen border-l-[1px] pt-16 sticky top-0">
           <div className='p-2 flex flex-col justify-center items-center space-y-4'>
            <div className=" w-14 h-14 relative">
                    <Image src='/profile_avatar_full.jpg' alt="side-img" layout="fill" objectFit="contain" className="relative rounded-full w-12 h-12"/>    
            </div>
            <div className=" w-14 h-14 relative">
                    <Image src='/profile_avatar_full.jpg' alt="side-img" layout="fill" objectFit="contain" className="relative rounded-full w-12 h-12"/>    
            </div>
            <div className=" w-14 h-14 relative">
                    <Image src='/profile_avatar_full.jpg' alt="side-img" layout="fill" objectFit="contain" className="relative rounded-full w-12 h-12"/>    
            </div>
            <div className=" w-14 h-14 relative">
                    <Image src='/profile_avatar_full.jpg' alt="side-img" layout="fill" objectFit="contain" className="relative rounded-full w-12 h-12"/>    
            </div>
            <div className=" w-14 h-14 relative">
                    <Image src='/profile_avatar_full.jpg' alt="side-img" layout="fill" objectFit="contain" className="relative rounded-full w-12 h-12"/>    
            </div>
            <div className=" w-14 h-14 relative">
                    <Image src='/profile_avatar_full.jpg' alt="side-img" layout="fill" objectFit="contain" className="relative rounded-full w-12 h-12"/>    
            </div>
            
            
           
           </div>
        </aside>
    )
}

export default RightSideBar

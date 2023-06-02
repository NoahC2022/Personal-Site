"use client"

import Image from 'next/image';
import SideBar from './SideBar';
import { Link as NextLink } from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    return (
        <div><SideBar router={router} />
        <div className='grid grid-col-1 gap-x-3 gapy-y-3 mx-20 my-4'>
        <div className="row-span-4 col-span-1">
        </div>
        <div className="bg-orange-500 rounded-lg shadow-xl min-h-[50px]"></div>
        </div>
        </div>
    )
};

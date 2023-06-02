"use client"

import Image from 'next/image';
import SideBar from './SideBar';
import { Link as NextLink } from 'next/link';
import { useRouter } from 'next/navigation';
import 'tailwindcss/tailwind.css';
import './globals.css';

export default function Home() {
    const router = useRouter();

    return (
        <div><SideBar router={router} />
        <div className='grid grid-col-1 gap-x-3 gapy-y-3 pr-4 my-4 pl-20'>
        <div className="row-span-4 col-span-1">
        </div>
        <div className="bg-orange-500 rounded-lg shadow-xl min-h-[50px]">
            <h1 className='font-[Kanit:wght@600] text-7xl font-extrabold pl-12 pt-3 '>Noah Cortez</h1>
        </div>
        </div>
        </div>
    )
};

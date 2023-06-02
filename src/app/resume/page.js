"use client"

import ResumeReveal from '../ResumeReveal';
import SideBar from '../SideBar';
import { useRouter } from 'next/navigation';



export default function resumePage () {
    const router = useRouter();
    return(
        
        <div className='flex'>
            <SideBar router={router} />
            <div className= 'pl-20'>
            <ResumeReveal />
            </div>
        </div>
    );
}
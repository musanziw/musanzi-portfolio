import {Link} from "@inertiajs/react";

export default function Header() {
    return (
        <header className='absolute top-0 w-screen py-10 px-8 text-white flex justify-end items-center'>
            <nav>
                <ul className='flex flex-end gap-8 capitalize text-xl'>
                    <li><Link href="">Blog</Link></li>
                    <li><Link href="" className='border border-green rounded-sm px-6 py-2'>Conctact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

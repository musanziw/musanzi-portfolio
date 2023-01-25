import {Head, Link} from '@inertiajs/react';
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";

export default function Welcome({user}) {
    return (
        <>
            <Head title='MUSANZI | Développeur web'/>
            <Header/>
            <Hero />
            <section className='h-screen bg-navy px-3'>
                <div className='h-full border-l border-r border-lightest-navy py-20'>
                    <div className='border-l-[2px] border-green'>
                        <h3 className="text-green pl-4 text-lg inline-block">A Propos</h3>
                    </div>
                </div>
            </section>
        </>
    );
}

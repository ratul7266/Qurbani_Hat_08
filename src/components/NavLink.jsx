'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children , className }) => {
    const pathName = usePathname();

    const isActive = pathName === href;
    return (
        <div>
            <Link href={href} className={`${isActive ? 'bg-linear-to-r from-[#14532d] via-[#16a34a] to-[#84cc16] text-white px-3 py-2 rounded-xl shadow-lg' : ''} ${className}`}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
    path: string;
    name: string;
    icon: string;
    className?: string;
    externalUrl?: boolean;
}

const NavItem = ({ path, name, icon, externalUrl, className }: Props) => {
    const router = useRouter();
    return (
        <li className={`items-center ${className && className}`}>
            {!externalUrl ? (
                <Link href={path} passHref>
                <span
                    className={
                        'text-xs uppercase py-3 font-bold block cursor-pointer ' +
                        (router.pathname?.indexOf(`${path}`) !== -1
                            ? 'text-houmRed hover:text-houmHoverRed'
                            : 'text-gray-400 hover:text-gray-700')
                    }>
                    <i
                        className={
                            `${icon} mr-2 text-sm` +
                            (router.pathname?.indexOf(`${path}`) !== -1 ? 'opacity-75' : 'text-gray-400')
                        }></i>{' '}
                    {name}
                </span>
            </Link>
            ) : (
               <a href={path} target='_blank' rel="noreferrer">
                   <span
                    className={'text-xs uppercase py-3 font-bold block cursor-pointer text-gray-400 hover:text-houmHoverRed'}>
                    <i className={`${icon} mr-2 text-sm text-gray-400 hover:text-houmHoverRed`}></i>{' '}
                    {name}
                </span>
               </a> 
            )}
            
        </li>
    );
};

export default NavItem;

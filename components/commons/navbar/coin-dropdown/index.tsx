import React, { useEffect } from 'react';
import { createPopper } from '@popperjs/core';
import { Links, Image } from '../../../../utils/types';
import { useRouter } from 'next/router';

type Props = {
    image: Image;
    links?: Links;
    id: string;
};

const CoinDropdown = ({ image, links, id }: Props) => {
    const router = useRouter();
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef<any>();
    const popoverDropdownRef = React.createRef<any>();

    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: 'bottom-start',
        });
        setDropdownPopoverShow(true);
    };

    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    const handleClick = () => {
        if (links) {
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        } else closeDropdownPopover();
    };
    const handleBlur = () => {
        setTimeout(() => {
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }, 1000);
    };

    const handleButtonClick = () => {
        router.push(`/coins/${id}?id=${id}`);
    };

    return (
        <>
            {!links ? (
                <div className='items-center flex'>
                    <span className='w-12 h-12 text-sm text-white bg-gray-200 inline-flex items-center justify-center rounded-full'>
                        <img
                            alt='coin image'
                            className='w-full rounded-full align-middle border-none shadow-lg'
                            src={image.small}
                        />
                    </span>
                </div>
            ) : (
                <>
                    <button
                        className='text-gray-500 block'
                        ref={btnDropdownRef}
                        onBlur={handleBlur}
                        onClick={handleClick}>
                        <div className='items-center flex'>
                            <span className='w-12 h-12 text-sm text-white bg-gray-200 inline-flex items-center justify-center rounded-full'>
                                <img
                                    alt='coin image'
                                    className='w-full rounded-full align-middle border-none shadow-lg'
                                    src={!image?.small ? '/images/coin-icon.png' : image.small}
                                />
                            </span>
                        </div>
                    </button>
                    <div
                        ref={popoverDropdownRef}
                        className={
                            (dropdownPopoverShow ? 'block ' : 'hidden ') +
                            'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
                        }>
                        <a
                            href={links?.repos_url?.github ? links.repos_url.github[0] : '#'}
                            className={
                                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700'
                            }
                            target='_blank'
                            rel='noreferrer'
                            onClick={handleClick}>
                            Repositorio
                        </a>
                        <a
                            href={links?.homepage ? links?.homepage[0] : '#'}
                            className={
                                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700'
                            }
                            target='_blank'
                            rel='noreferrer'
                            onClick={handleClick}>
                            Sitio Oficial
                        </a>
                        <a
                            href={links?.official_forum_url ? links?.official_forum_url[0] : '#'}
                            className={
                                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700'
                            }
                            target='_blank'
                            rel='noreferrer'
                            onClick={handleClick}>
                            Foro Oficial
                        </a>
                        <a
                            href={links?.blockchain_site ? links.blockchain_site[0] : '#'}
                            className={
                                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700'
                            }
                            target='_blank'
                            rel='noreferrer'
                            onClick={handleClick}>
                            Tecnologia Blockchain
                        </a>
                        <div className='h-0 my-2 border border-solid border-gray-100' />
                        <button
                            className=' w-40 m-4 bg-gradient-to-tr from-houmHoverRed to-houmRed text-white py-2 rounded-md text-sm font-semibold'
                            onClick={() => handleButtonClick()}>
                            Consultar Información
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default CoinDropdown;

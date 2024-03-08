'use client';

import { LinkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useState } from "react";

export default function ShareLinkButton() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href);
        setClicked(true);
        setTimeout(() => setClicked(false), 1500);
    }
    return (
        <button onClick={handleClick}
            className="border flex gap-1 items-center px-2 py-1 rounded text-slate-500 text-sm hover:bg-gray-200">
            <LinkIcon className='h-4 w-4' />
            {clicked ? 'Link Copied!' : 'Share Link'}
        </button>
    );
}



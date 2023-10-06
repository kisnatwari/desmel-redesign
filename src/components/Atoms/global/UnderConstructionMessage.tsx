'use client'
import { XCircle } from 'lucide-react'
import React, { useState } from 'react'

type Props = {}

const UnderConstructionMessage = () => {
    const [showMessage, setShowMessage] = useState(true);
    if (!showMessage)
        return null;

    return (
        <div className="container hidden text-center relative w-full dark:text-slate-300 text-slate-600 pt-2">
            <small>
                <strong>
                    This portfolio page is under construction. Please visit the old one for now <a href="https://kisnatwari.github.io" className='text-blue-500'>&nbsp;click here</a>
                </strong>
            </small>
            <button>
                <XCircle className='absolute top-2 right-5' size={17} onClick={()=>setShowMessage(false)} />
            </button>
        </div>
    )
}

export default UnderConstructionMessage
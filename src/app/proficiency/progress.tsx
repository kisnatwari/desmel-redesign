"use client"
import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type Props = { percent?: number, label: string,}

const Progress = ({ percent = 50, label }: Props) => {
    return (
        <div>
            <div className='w-20 text-center'>
                <CircularProgressbar value={percent}
                    background backgroundPadding={3}
                    text={`${percent}%`}
                    styles={buildStyles({
                        rotation:1,
                        backgroundColor: '#0AB3B3',
                        pathColor: '#eee',
                        trailColor: '#09A9AC',
                        textColor: '#fff',
                    })} />
                <p className='mt-1'>
                    {label}
                </p>
            </div>
        </div>
    )
}

export default Progress
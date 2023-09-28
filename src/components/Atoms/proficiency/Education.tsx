import React from 'react'

const educationalDetails = [
    {
        "institution": "Shree Shiva Secondary School",
        "qualification": "High School Completed",
        "start": "2017",
        "end": "2019"
    },
    {
        "institution": "Lumbini ICT Campus",
        "qualification": "Bachelor's in Computer Application",
        "start": "2019",
        "end": "2024 (Expected)"
    }
];



const Education = () => {
    return (
        <div className="px-4 mt-3 ml-2 border-l-2 border-cyan-300 flex flex-col gap-4">
            {
                educationalDetails.map((education, index) => (
                    <div className='relative' key={index}>
                        <div className="absolute -left-4 w-4 h-4 -ml-[1px] border-2 border-cyan-500 bg-white rounded-full -translate-x-1/2 flex justify-center items-center">
                            <div className="w-[5px] h-[5px] rounded-full bg-cyan-500"></div>
                        </div>
                        <h1 className='opacity-90 -mt-1'>{education.institution}</h1>
                        <p className='opacity-80 text-sm'> {education.qualification}</p>
                        <p className="opacity-75 text-xs">{education.start} - {education.end}</p>
                    </div>
                ))
            }
        </div>
    );
}


export default Education
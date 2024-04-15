import React from 'react'

function ProjectCard({imgUrl, title, description, tags}) {
  return (
    <div className="mx-2 h-full">
        <div className="card w-full h-full mb-5 rounded-lg bg-[#F9F5F6] shadow-xl transform transition duration-300 hover:scale-105 flex flex-col text-[#9F6361]">
            <div className='px-2 py-2'>
                <img src={imgUrl} className=''/>
            </div>
            <div className='flex-1 flex flex-col'>
            <div className='w-full px-3 py-2 text-3xl quicksand font-bold text-[#804F4D]'>
                {title}
            </div>
            <div className='flex-1 px-3 pb-2 quicksand font-medium text-justify'> 
                {description}
            </div>
            <div className="flex-1 flex-wrap w-full px-3 pb-3">
                {tags.map((tag, index) => (
                    <div key={index} className="badge bg-[#E7CBCB] border-[#E7CBCB] text-[#F9F5F6] quicksand font-semibold mr-1">{tag}</div> 
                ))}
            </div>
            </div>
        </div> 
    </div>
)
}

export default ProjectCard

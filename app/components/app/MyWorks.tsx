import { MYWORKS_ENG, MYWORKS_TH } from '@/app/constants/myworks.constant'
import Image from 'next/image'
import React, { FC } from 'react'

const techStackImages : any = {
    "NextJS" : "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
    "React" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    "Omise" : "https://pbs.twimg.com/profile_images/1141906269097168897/jYzpfxho_400x400.png",
    "Supabase" : "https://yt3.googleusercontent.com/NuBWxGpdF0YzNSr7x_Tc8EEFXbQoHc0Xf9rU_ehxFPRikw8YPN886HltWeMDihKU8v5SeKFI3B4=s900-c-k-c0x00ffffff-no-rj",
    "Flask" : "https://giulianopertile.com/uploads/post/review-of-flask-from-a-django-developer/flask-logo-version-2.png",
    "MongoDB" : "https://repvue.imgix.net/a9yxc48y3ay5dm2udzwizc2bdyph",
    "FastAPI" : "https://cdn.try.direct/files/8400033b-cf2e-4fc4-ac91-45cadee082ed.svg",
    "Sanity" : "https://www.sanity.io/static/images/logo_rounded_square.png",
    "Javascript" : "https://durableprogramming.com/wp-content/uploads/2023/04/JavaScript-logo.png"
}

const MyWorks : FC<{
    language : string
}> = ({language}) => {
    const works = language === "eng" ? MYWORKS_ENG : MYWORKS_TH
  return (
    <section className='flex flex-col items-center justify-center mt-16 gap-y-10'>
        <h1 className='text-white text-3xl font-semibold'>{language === 'eng' ? "My Works" : "ผลงาน"}</h1>
        <ul className='grid grid-cols-4 gap-5'>
            {
                works.map(work => <WorkCard key={work.title} work={work}/>)
            }
        </ul>
    </section>
  )
}


const WorkCard : FC<{
    work : any
}> = ({work}) => {
    return (
        <a href={work.websiteUrl} className='bg-white w-[300px] h-[300px] p-3 rounded-2xl overflow-hidden hover:scale-105 transition-all'>
            <Image alt={work.title} className='w-full h-[70%] object-cover rounded-xl' src={work.imagePath} width={400} height={400}/>
            <h1 className='font-semibold text-xl mt-2'>{work.title}</h1>
            <ul className='flex w-full gap-x-2 mt-3'>
                {
                    work.techStacks.map((stack : string) => <Image key={stack} className='w-max h-[35px] object-cover' src={techStackImages[stack]} alt="tech stack image" width={400} height={400}/>)
                }
            </ul>
        </a>
    )
}

export default MyWorks
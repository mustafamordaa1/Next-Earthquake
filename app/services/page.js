import React from 'react'

const Services = () => {

    const listStyle = 'ps-6 list-disc text-sm mb-5'
    const titleStyle = 'text-2xl text-main'

  return (
    <div className='flex w-full lg:flex-row md:flex-col sm:flex-col gap-20 items-center justify-between text-start p-10'>
        <section className='lg:w-1/2 md:w-full sm:w-full text-xl'>
            <p className='py-4 lg:text-6xl md:text-4xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-main via-accent2 to-accent1'>
            Our services
            </p>
            <p>
                <span className={titleStyle}>Website Development:</span>
                <ul className={listStyle}>
                    <li>
                        Proficient in building dynamic and responsive websites using Next.js, React.js, Tailwind CSS, Material UI, and Bootstrap.
                    </li>
                    <li>
                        Extensive experience in creating interactive user interfaces and engaging user experiences.
                    </li>
                    <li>
                        Implementing modern design principles and utilizing CSS frameworks like Tailwind CSS, Material UI, and Bootstrap to deliver visually appealing and functional websites.
                    </li>
                    <li>
                        Collaborating with clients to understand their requirements and translating them into effective technical solutions.
                    </li>
                </ul>
                <span className={titleStyle}>Frontend Development:</span>
                <ul className={listStyle}>
                    <li>
                    Expertise in developing frontend components and features using HTML, CSS, and JavaScript.
                    </li>
                    <li>
                    Utilizing CSS frameworks such as Tailwind CSS, Material UI, and Bootstrap to streamline development processes and ensure consistent styling.
                    </li>
                    <li>
                    Implementing responsive design techniques to ensure seamless user experiences across various devices and screen sizes.
                    </li>
                    <li>
                    Optimizing website performance and loading times through efficient code implementation and optimization techniques.
                    </li>
                </ul>
                <span className={titleStyle}>Next.js and React.js Development:</span>
                <ul className={listStyle}>
                    <li>
                    Specialization in utilizing Next.js and React.js frameworks to build scalable and high-performing web applications.
                    </li>
                    <li>
                    Leveraging the power of Next.js server-side rendering (SSR) and static site generation (SSG) for enhanced SEO and performance.
                    </li>
                    <li>
                    Integrating Tailwind CSS, Material UI, and Bootstrap components and styles to enhance the visual appeal and functionality of web applications.
                    </li>
                    <li>
                    Implementing state management solutions like Redux or React Context for efficient data flow and application state handling.
                    </li>
                </ul>
                <span className={titleStyle}>Web Application Maintenance and Support:</span>
                <ul className={listStyle}>
                    <li>
                    Providing ongoing maintenance and support services to ensure the smooth operation of web applications.
                    </li>
                    <li>
                    Conducting regular code reviews, debugging, and troubleshooting to identify and resolve issues promptly.
                    </li>
                    <li>
                    Keeping up-to-date with industry trends and best practices related to Next.js, React.js, Tailwind CSS, Material UI, and Bootstrap to offer proactive suggestions for improvement and optimization.
                    </li>
                    <li>
                    Assisting clients with updates, upgrades, and feature enhancements to meet evolving business requirements.
                    </li>
                </ul>
                
                










                





            </p>
        </section>
        <section className='lg:w-1/2 md:w-full sm:w-full text-xl'>
            world
        </section>
    </div>
  )
}

export default Services
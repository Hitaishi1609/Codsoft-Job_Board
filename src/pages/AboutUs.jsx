import React from 'react'
import fig1 from "../assets/fig1.jpg"
import fig2 from "../assets/fig2.jpg"
import fig3 from "../assets/fig3.jpg"

const AboutUs = () => {
  return (
    <div>
        <h1 className='font-bold text-4xl ml-40 mt-6'>Driving Innovation in Online Job Quest for a Brighter Future</h1>
        <p className='w-11/12 ml-14 mt-6 text-xl mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus aliquet est et sagittis. Proin nec orci quis turpis cursus molestie tempus eu sapien. Donec ac turpis vel lorem auctor ultricies a in turpis. Etiam dignissim tellus vel eleifend commodo. Nunc pellentesque enim id erat pulvinar imperdiet. Morbi lobortis lectus velit. Quisque vulputate risus vitae est pulvinar placerat. Sed convallis, metus id tincidunt congue, odio ante euismod lacus, vitae dictum magna magna imperdiet tortor. Morbi quam ligula, dignissim quis risus at, vulputate scelerisque justo. Fusce sed hendrerit lacus.</p>

        <div className='flex flex-row gap-6 justify-center'>
            <img src={fig1} alt="" width={400} height={400}/>
            <img src={fig2} alt="" width={400} height={400}/>
            <img src={fig3} alt="" width={400} height={400}/>
        </div>
    </div>
  )
}

export default AboutUs
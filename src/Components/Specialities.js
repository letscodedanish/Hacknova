import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/bundle'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import TaskCard from './SpecialityCard'

function Tasks() {

  const Tasks = [
    {
      id: 0,
      image:
        'https://www.venkateshwarhospitals.com/images/icons/orthopedics.jpg',
      taskName: 'Orthopedics',
      btnTxt: 'Consult Now',
    },
    {
      id: 1,
      image:
        'https://www.venkateshwarhospitals.com/images/icons/obstetrics-and-gynaecology.jpg',
      taskName: 'Gynecology',
      btnTxt: 'Consult Now',
    },
    {
      id: 2,
      image:
        'https://www.venkateshwarhospitals.com/images/icons/ophthalmology.jpg',
      taskName: 'Opthalmology',
      btnTxt: 'Consult Now',
    },
    {
      id: 3,
      image:
        'https://www.venkateshwarhospitals.com/images/icons/pulmonology.jpg',
      taskName: 'Pulmonology',
      btnTxt: 'Consult Now',
    },
    {
      id: 4,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbHmc06bVP_lGjGBiHZdPiFCJQYRi-DbNGg&usqp=CAU',
      taskName: 'Radiology',
      btnTxt: 'Consult Now',
    },
  ]

  return (
    <>
      <h3> 10+ Specialities</h3>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          650: {
            slidesPerView: 1,
          },
          850: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={10}
      >
        {Tasks.map((task) => {
          return (
            <SwiperSlide key={task.id}>
              <TaskCard
                taskName={task.taskName}
                image={task.image}
                btnTxt={task.btnTxt}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Tasks

import React from 'react'

const Card = ({username}) => {
  return (
    <div> <figure className="md:flex bg-slate-100  rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img
      className="w-24 h-24 md:p-8 text-center md:text-left space-y-4"
      src="https://images.pexels.com/photos/6119581/pexels-photo-6119581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
      width={384}
      height={512}
    ></img>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-medium">
          {username}
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
        <div class="text-slate-700 dark:text-slate-500">
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default Card
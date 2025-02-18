import React from 'react'

function Card({username="M. A. Shaikh", myAry=[], post="Not Assigned"}) {

    // console.log(props);

    return (
      <div>
          <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">

              <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://i.ibb.co/6JWGQ96Z/Whats-App-Image-2024-06-06-at-18-56-15-cef41421-removebg.png" alt="" width="384" height="512" />

              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                      <p className="text-lg font-medium">
                        Hi, I'm Maaz 👋
                        I'm a passionate software developer with a strong focus on the MERN stack, IoT projects, and Python. I love building full-stack web applications and exploring the endless possibilities of IoT devices. I'm always eager to learn new technologies and improve my skills.
                      </p>
                  </blockquote>
                  <figcaption className="font-medium">
                      <div className="text-sky-500 dark:text-sky-400">
                          {username}
                          {myAry}
                      </div>
                      <div className="text-slate-700 dark:text-slate-500">
                          {post}
                      </div>
                  </figcaption>
              </div>
          </figure>
      </div>
    )
}

export default Card;

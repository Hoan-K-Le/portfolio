import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'
export default function About() {
  return (
    <div>
      <h1>About Page!</h1>

      <p className={[styles.extraGreen, styles.bigFont].join(' ')}>
        I am Chucky. You make bad portfolio i KEEEL THIS KITTY!
      </p>
      <div>
        <style jsx>{`
          .redText {
            color: red;
          }
          p {
            font-size: 50px;
          }
        `}</style>
        <p className="redText">
          I AM WATCHING YOU! YOU BETTER MAKE IT GOOOOD HAHAHA!
        </p>
      </div>
      {/* loading an image locally */}
      <Image
        // assumes you are in the public folder
        src="/chucky.jpeg"
        alt="Scary Villain"
        width={500}
        height={500}
        // layout="fill"
      />
      <Image
        src="https://placekitten.com/300/300"
        alt="eww its a cat"
        width={300}
        height={300}
      />
    </div>
  )
}

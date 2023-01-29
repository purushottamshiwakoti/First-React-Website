import React from 'react'
import vg from "../assets/vg.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram, AiFillFacebook} from "react-icons/ai"


const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
            <h1>KalijNepal</h1>
            <p>My first project in react JS.</p>
        </main>
    </div>
    <div className="home2">

      <img src={vg} alt="graphics image" />
      <div>
        <p>This is the my first ever project that I had made using React Js and I am learning the React JS Basics</p>
      </div>
    </div>

    <div className="home3" id="about">
    <div>
    <h1>Who am I</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsum adipisci dolor reiciendis autem nobis iste libero quaerat voluptate harum alias cum itaque rerum ratione doloremque incidunt rem distinctio, beatae consectetur maiores fugit temporibus quo dolore molestiae. Dolor neque harum maiores temporibus. Assumenda, laborum!</p>
    </div>
    </div>

      <div className="home4" id="brands">
        <div>
          <h1>brands</h1>

          <article>
            <div style={{animationDelay:"0.3s"}}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{animationDelay:"0.4s"}}>
              <AiFillFacebook />
              <p>Facebook</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
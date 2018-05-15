import React, { Component } from 'react';
import Footer from './Footer.js';

import Header from './Header.js';
class About extends Component {
  render() {
    return (
      <div className='ee'>
        <Header />
        <main>
        <div className="container">
         <div className="hero kb">
            <div className="hero-content">
            </div>
          </div>
         <div className="qos">
          <p clasName="fg">I am Aram Martirosyan.I am 14.I live in Yerevan,Armenia.I want to be a good programmer and I work hard for it.
            I go to TUMO Creative Center for Technologies where I learn programming.I went to Programming course
            and I have passed all 3 courses.Now I go to web development 3rd <br />course and ReactJS course and that
             is very good for me because i love to code.
             orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
        </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default About;

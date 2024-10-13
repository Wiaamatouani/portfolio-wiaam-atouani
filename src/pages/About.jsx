import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaGithub } from "react-icons/fa";
import paper from "../assets/image/phone-paper.png";
import web1 from "../assets/image/web.prtfl1.png";
import profile from "../assets/image/ana.png";
import web2 from "../assets/image/web.prtfl2.png";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiBootstrapLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import web4 from "../assets/image/web4.png";
import web5 from "../assets/image/web5.png"
import 'animate.css';
function Home() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dyr0jjg', 'template_yjjfpp8', form.current, {
        publicKey: 'qrKz9kmGrScf_po01',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };
  return (

  
    <>

      <header className="      bg-black  text-white p-4">
        <div class=" inset-x-0 top-0 z-30 mx-auto w-full  max-w-screen-md border border-gray-100 bg-black  p-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
          <div class="px-4">
            <div class="flex items-center justify-between">
              <div class="flex shrink-0">
              
                <div class="flex absolute -mt-2 ml-3  left-3">
                  <span class="h-3.5 w-3.5 bg-[#ed800f] animate-[ping_1.5s_0.5s_ease-in-out_infinite] rounded-xl mr-2"></span>
                  <span class="h-3.5 w-3.5 bg-[#ed800f] animate-[ping_1.5s_0.5s_ease-in-out_infinite] rounded-xl mr-2"></span>
                  <span class="h-3.5 w-3.5 bg-[#ed800f] animate-[ping_1.5s_0.5s_ease-in-out_infinite] rounded-xl"></span>
                </div>
              </div>
            

              <div class=" flex items-center justify-center  ">
                <div class="flex items-center justify-center gap-x-5 ">
                  <a href="" aria-label="Find us on LinkedIn"
                    target="_blank" rel="noopener">
                    <svg class="h-8 w-8 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                        fill="currentColor"></path>
                    </svg>

                  </a>


                  <a href="" aria-label="Find us on Instagram" target="_blank"
                    rel="noopener">
                    <svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"></path>
                    </svg>

                  </a>

                  <a href="" aria-label="Find us on Instagram" target="_blank"
                    rel="noopener">
                    <svg class="h-8 w-8 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z"
                        fill="currentColor"></path>
                      <path
                        d="M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z"
                        fill="currentColor"></path>
                    </svg>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section  id='home' className=" flex  gap-5 flex-col items-start h-[562px]  bg-black pt-14  p-28">
        <div className='w-[100%] flex h-[500px] gap-10  bg-black'>
          <div className='w-[60%] flex items-start  mt-[20px] flex-col '>
            <div className='mt-[20px] ' >
              <h2 className="text-9xl  font-mono shadow-inner shadow-yellow-200] text-white"> FRONT-END  </h2>
              <h1  className="text-7xl ml-[460px] -mt-12 font-mono  text-white"><span className='text-4xl'>EVELOPER</span></h1></div>
              <div><p id='#typewriter' className='text-white border-b-2 border-orange-400      text-2xl pt-7'> <span className='text-[#f38d2e] text-2xl'> "</span>Code is like humor. When you have to explain it, it’s bad.<span className='text-[#f38d2e] text-2xl'>"</span><span className='text-[#f38d2e] text-xl'> – Cory House </span></p></div>
               </div>
          <div className='w-[40%]  mt-[20px] flex items-center  flex-col justify-center  '>
            <div class="relative flex justify-center h-[380px] w-[200px] border-4  border-white rounded-2xl bg-black  phone-background" >
              <span class="border border-white bg-white w-20 h-2 rounded-br-xl rounded-bl-xl"></span>
              <span class="absolute -right-2 top-14  border-4 border-white h-7 rounded-md"></span>
              <span class="absolute -right-2 bottom-36 border-4 border-white h-10 rounded-md"></span>
              <div class="absolute top-10 left-[75px]  text-white font-thin text-xl" id="date">17:51</div>
              <div class="absolute top-20 left-2 right-2 p-2  ">
                <div className='flex justify-between'>
                  <h3 class="text-white text-sm font-thin ">Notification Center</h3>
                  <button
                    class="text-gray-600 bg-black/40 p-1 rounded-full transition-colors ease-linear"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="flex pt-3 flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
                  <div
                    class=" flex  justify-between w-[11vw] h-[30vh] -m-1  rounded-xl bg-black/35  px-[10px]" >
                    <div class=" gap-2">
                      <p class="text-white font-semibold pt-2">Hi there!</p>
                      <div className='flex flex-col gap-1 pt-1'>
                        <div className='flex gap-2  pt-2'>
                          <img src={profile} className='w-6 h-6 rounded-full' alt="" />
                          <p class="text-white font-light"> Wiaam  </p> </div>
                        <div className='text-white' >
                          Hello, everyone!
                          <br /> I’m Wiaam a 19 year front-end developer
                          passionate about creating visually stunning web experiences.
                          I'm blending creativity with technology to bring ideas to life!
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div
  class="flex justify-around gap-4 items-center mt-5  px-4 py-1 bg-black rounded-[15px] ring-1 ring-white"
>
  <div
    class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
  > <a href="#home"> <svg
  width="20"
  height="20"
  viewBox="0 0 30 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M27.9167 30H20.4167C19.2658 30 18.3333 29.1392 18.3333 28.0769V21.1538C18.3333 20.3038 17.5875 19.6154 16.6667 19.6154H13.3333C12.4125 19.6154 11.6667 20.3038 11.6667 21.1538V28.0769C11.6667 29.1392 10.7342 30 9.58333 30H2.08333C0.9325 30 0 29.1392 0 28.0769V13.3946C0 11.6262 0.878334 9.95539 2.3825 8.86154L14.2258 0.246923C14.68 -0.0823077 15.32 -0.0823077 15.7733 0.246923L27.6183 8.86154C29.1225 9.95539 30 11.6254 30 13.3931V28.0769C30 29.1392 29.0675 30 27.9167 30Z"
    fill="white"
  ></path>
</svg></a>
   

    <div
      class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
    >
      Home
    </div>
  </div>

  <div
    class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
  > <a href="#about">  <svg
  width="20"
  height="20"
  viewBox="0 0 30 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.0013 0C10.482 0 6.81914 3.50348 6.81914 7.82609V9.13044C6.81914 13.453 10.482 16.9565 15.0013 16.9565C19.5206 16.9565 23.1835 13.453 23.1835 9.13044V7.82609C23.1835 3.50348 19.5206 0 15.0013 0ZM14.9987 20.8696C9.53569 20.8696 2.52628 23.6959 0.509366 26.2041C-0.737054 27.755 0.44947 30 2.49366 30H27.5063C29.5505 30 30.7371 27.755 29.4906 26.2041C27.4737 23.6972 20.4616 20.8696 14.9987 20.8696Z"
    fill="white"
  ></path>
</svg></a>
  

    <div
      class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
    >
      About
    </div>
  </div>

  <div
    class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
  > <a href="#tech"> <svg
  width="20"
  height="20"
  viewBox="0 0 30 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M19.6641 0C19.4231 0 19.2178 0.171203 19.1738 0.408203L18.9531 1.58398C18.8961 1.88898 18.6546 2.11669 18.3496 2.17969C18.0656 2.23869 17.7857 2.31239 17.5137 2.40039C17.2187 2.49639 16.8973 2.42055 16.6953 2.18555L15.9199 1.2793C15.7629 1.0963 15.4981 1.05283 15.2891 1.17383L14.7109 1.50781C14.5029 1.62781 14.4083 1.88042 14.4883 2.10742L14.8848 3.23438C14.9878 3.52637 14.8931 3.84378 14.6621 4.05078C14.4471 4.24378 14.2438 4.44711 14.0508 4.66211C13.8438 4.89311 13.5264 4.98972 13.2344 4.88672L12.1055 4.48828C11.8785 4.40828 11.6278 4.50194 11.5078 4.71094L11.1719 5.29102C11.0519 5.49902 11.0973 5.76487 11.2793 5.92188L11.377 6.00586C12.56 6.02586 13.572 6.87206 13.791 8.03906L13.8516 8.35742L14.0605 8.11133C14.5195 7.57733 15.1622 7.28695 15.8262 7.25195C16.7222 5.89695 18.255 5 20 5C22.761 5 25 7.239 25 10C25 11.745 24.103 13.2779 22.748 14.1719C22.713 14.8359 22.4227 15.4795 21.8887 15.9375L21.6426 16.1465L21.9609 16.207C23.1279 16.426 23.9741 17.4381 23.9941 18.6211L24.0781 18.7188C24.2351 18.9017 24.5 18.9472 24.709 18.8262L25.2891 18.4902C25.4971 18.3702 25.5917 18.1196 25.5117 17.8926L25.1133 16.7637C25.0103 16.4717 25.1069 16.1543 25.3379 15.9473C25.5529 15.7543 25.7562 15.5509 25.9492 15.3359C26.1562 15.1049 26.4736 15.0103 26.7656 15.1133L27.8926 15.5098C28.1196 15.5898 28.3722 15.4961 28.4922 15.2871L28.8262 14.707C28.9462 14.499 28.9027 14.2351 28.7207 14.0781L27.8145 13.3008C27.5795 13.0988 27.5036 12.7774 27.5996 12.4824C27.6876 12.2104 27.7613 11.9324 27.8203 11.6484C27.8833 11.3444 28.111 11.1029 28.416 11.0449L29.5918 10.8223C29.8288 10.7813 30 10.5769 30 10.3359V9.66406C30 9.42306 29.8288 9.21783 29.5918 9.17383L28.416 8.95312C28.111 8.89612 27.8833 8.65461 27.8203 8.34961C27.7613 8.06561 27.6876 7.78567 27.5996 7.51367C27.5036 7.21867 27.5795 6.89731 27.8145 6.69531L28.7207 5.91992C28.9037 5.76292 28.9472 5.49806 28.8262 5.28906L28.4922 4.71094C28.3722 4.50294 28.1196 4.40828 27.8926 4.48828L26.7656 4.88477C26.4736 4.98777 26.1562 4.89311 25.9492 4.66211C25.7562 4.44711 25.5529 4.24378 25.3379 4.05078C25.1069 3.84378 25.0103 3.52637 25.1133 3.23438L25.5117 2.10547C25.5917 1.87847 25.4981 1.62781 25.2891 1.50781L24.709 1.17188C24.501 1.05188 24.2351 1.0973 24.0781 1.2793L23.3027 2.18555C23.1007 2.42055 22.7794 2.49639 22.4844 2.40039C22.2124 2.31239 21.9324 2.23869 21.6484 2.17969C21.3444 2.11669 21.1029 1.88703 21.0449 1.58203L20.8242 0.40625C20.7822 0.17025 20.5769 0 20.3359 0H19.6641ZM10.6641 8C10.4231 8 10.2178 8.17025 10.1738 8.40625L9.98828 9.39453C9.91128 9.80553 9.58383 10.1084 9.17383 10.1914C8.83283 10.2604 8.49788 10.3481 8.17188 10.4551C7.77588 10.5851 7.34131 10.4879 7.07031 10.1719L6.41992 9.41211C6.26292 9.23011 5.99706 9.18664 5.78906 9.30664L5.21094 9.64062C5.00194 9.76062 4.90828 10.0132 4.98828 10.2402L5.32422 11.1914C5.46222 11.5854 5.33053 12.0091 5.01953 12.2871C4.76253 12.5171 4.51806 12.7606 4.28906 13.0176C4.01106 13.3286 3.58736 13.4603 3.19336 13.3223L2.24023 12.9883C2.01323 12.9083 1.76258 13.0029 1.64258 13.2109L1.30664 13.7891C1.18564 13.9981 1.23106 14.2629 1.41406 14.4199L2.17383 15.0703C2.48983 15.3413 2.58703 15.7759 2.45703 16.1719C2.35003 16.4979 2.26236 16.8328 2.19336 17.1738C2.11036 17.5838 1.80748 17.9113 1.39648 17.9883L0.408203 18.1738C0.171203 18.2178 0 18.4231 0 18.6641V19.3359C0 19.5769 0.17025 19.7822 0.40625 19.8262L1.39453 20.0117C1.80553 20.0887 2.10841 20.4162 2.19141 20.8262C2.26041 21.1682 2.34808 21.5021 2.45508 21.8281C2.58508 22.2241 2.48788 22.6587 2.17188 22.9297L1.41211 23.5801C1.23011 23.7371 1.18664 24.0029 1.30664 24.2109L1.64062 24.7891C1.76062 24.9981 2.01323 25.0917 2.24023 25.0117L3.19141 24.6758C3.58541 24.5378 4.00911 24.6695 4.28711 24.9805C4.51711 25.2375 4.76058 25.4819 5.01758 25.7109C5.32858 25.9889 5.46027 26.4126 5.32227 26.8066L4.98828 27.7598C4.90828 27.9868 5.00294 28.2374 5.21094 28.3574L5.78906 28.6934C5.99806 28.8144 6.26292 28.7689 6.41992 28.5859L7.07031 27.8262C7.34131 27.5102 7.77588 27.413 8.17188 27.543C8.49788 27.65 8.83283 27.7376 9.17383 27.8066C9.58383 27.8896 9.91128 28.1925 9.98828 28.6035L10.1738 29.5918C10.2178 29.8288 10.4231 30 10.6641 30H11.3359C11.5769 30 11.7822 29.8287 11.8242 29.5938L12.0098 28.6055C12.0868 28.1945 12.4142 27.8916 12.8242 27.8086C13.1662 27.7396 13.5002 27.6519 13.8262 27.5449C14.2222 27.4149 14.6567 27.5121 14.9277 27.8281L15.5781 28.5879C15.7351 28.7699 15.999 28.8153 16.207 28.6953L16.7871 28.3594C16.9961 28.2394 17.0898 27.9887 17.0098 27.7617L16.6758 26.8086C16.5378 26.4146 16.6695 25.9909 16.9805 25.7129C17.2375 25.4829 17.4819 25.2394 17.7109 24.9824C17.9889 24.6714 18.4136 24.5397 18.8066 24.6777L19.7598 25.0117C19.9868 25.0917 20.2374 24.9971 20.3574 24.7891L20.6934 24.2109C20.8144 24.0019 20.7689 23.7371 20.5859 23.5801L19.8262 22.9297C19.5102 22.6587 19.413 22.2241 19.543 21.8281C19.65 21.5021 19.7376 21.1672 19.8066 20.8262C19.8896 20.4162 20.1925 20.0887 20.6035 20.0117L21.5918 19.8262C21.8288 19.7822 22 19.5769 22 19.3359V18.6641C22 18.4231 21.8287 18.2188 21.5938 18.1758L20.6055 17.9902C20.1945 17.9132 19.8916 17.5838 19.8086 17.1738C19.7396 16.8328 19.6519 16.4979 19.5449 16.1719C19.4149 15.7759 19.5121 15.3433 19.8281 15.0723L20.5879 14.4219C20.7699 14.2649 20.8153 13.999 20.6953 13.791L20.3594 13.2109C20.2394 13.0019 19.9887 12.9083 19.7617 12.9883L18.8086 13.3242C18.4146 13.4622 17.9909 13.3305 17.7129 13.0195C17.4829 12.7625 17.2394 12.5181 16.9824 12.2891C16.6714 12.0111 16.5397 11.5874 16.6777 11.1934L17.0117 10.2402C17.0917 10.0132 16.9971 9.76258 16.7891 9.64258L16.2109 9.30664C16.0019 9.18564 15.7371 9.23106 15.5801 9.41406L14.9297 10.1738C14.6587 10.4898 14.2241 10.587 13.8281 10.457C13.5021 10.35 13.1672 10.2624 12.8262 10.1934C12.4162 10.1104 12.0887 9.80748 12.0117 9.39648L11.8262 8.4082C11.7822 8.1712 11.5769 8 11.3359 8H10.6641ZM20 9C19.448 9 19 9.448 19 10C19 10.552 19.448 11 20 11C20.552 11 21 10.552 21 10C21 9.448 20.552 9 20 9ZM11 13C14.314 13 17 15.686 17 19C17 22.314 14.314 25 11 25C7.686 25 5 22.314 5 19C5 15.686 7.686 13 11 13ZM11 17C9.895 17 9 17.895 9 19C9 20.105 9.895 21 11 21C12.105 21 13 20.105 13 19C13 17.895 12.105 17 11 17Z"
    fill="white"
  ></path>
</svg></a>
   

    <div
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
    >
      Skills
    </div>
  </div>

  <div
    class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
  > <a href="#projects">
      <svg
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6923 0C10.1547 0 8.07692 2.16563 8.07692 4.8V6H10.3846V4.8C10.3846 3.45938 11.4032 2.4 12.6923 2.4H17.3077C18.5968 2.4 19.6154 3.45938 19.6154 4.8V6H21.9231V4.8C21.9231 2.16563 19.8453 0 17.3077 0H12.6923ZM5.625 7.2C2.51953 7.2 0 9.82031 0 13.05V24.15C0 27.3797 2.51953 30 5.625 30H24.375C27.4805 30 30 27.3797 30 24.15V13.05C30 9.82031 27.4805 7.2 24.375 7.2H5.625ZM15 15.4875C16.3386 15.4875 17.4159 16.6078 17.4159 18C17.4159 19.3922 16.3386 20.5125 15 20.5125C13.6614 20.5125 12.5841 19.3922 12.5841 18C12.5841 16.6078 13.6614 15.4875 15 15.4875Z"
        fill="white"
      ></path>
    </svg>
  </a>
  

    <div
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
    >
      Projects
    </div>
  </div>

  <div
     class="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500"
  > <a href="#contact"> <svg
  width="20"
  height="20"
  viewBox="0 0 30 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M22.4672 19.4199C21.9377 19.1095 21.2868 19.116 20.7598 19.4291L18.0912 21.0191C17.4938 21.3751 16.7477 21.3334 16.1999 20.9056C15.2529 20.166 13.7282 18.9217 12.4016 17.5952C11.0751 16.2687 9.8308 14.7439 9.09124 13.7969C8.66342 13.2491 8.62168 12.503 8.97776 11.9057L10.5677 9.23697C10.8821 8.71002 10.8847 8.05394 10.5743 7.52438L6.65865 0.835732C6.27909 0.188781 5.52518 -0.129478 4.79606 0.0492166C4.0878 0.221389 3.16825 0.641386 2.20434 1.6066C-0.813896 4.62483 -2.41693 9.71567 8.93342 21.066C20.2838 32.4164 25.3733 30.8146 28.3928 27.7951C29.3593 26.8286 29.778 25.9077 29.9515 25.1982C30.1276 24.4703 29.8145 23.7216 29.1689 23.3434C27.5567 22.4004 24.0794 20.3643 22.4672 19.4199Z"
    fill="white"
  ></path>
</svg></a>
   

    <div
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
    >
      Contact
    </div>
  </div>
</div>
             </div>

        </div>
      </section>
      <section id="projects" className=" w-full h-[700px]   bg-black ">
      <h1 className='text-[#f38d2e] text-4xl p-10 flex items-start'>Project :</h1>
<div className='gap-9 ml-7 items-center flex flex-row'>  

<div class="relative flex w-[338px]   flex-col rounded-xl border-2 border-[#f38d2e] bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 border-2 border-[#f38d2e] w-80 ml-2 mt-2 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ">
  <img class="absolute   h-40 object-cover" src={web1} alt="" />
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-light leading-snug tracking-normal text-white antialiased">
     Technology:
    </h5>
    <p class="block font-sans text-base  font-light leading-relaxed text-inherit antialiased">
    Built with HTML, CSS, and React, it features dynamic galleries and a blog. The backend uses js, with laravel for data storage. Integrated with Cloudinary for image management and deployed on Vercel
    </p>
    
  </div>
  <div class="p-6 pt-0">
    <button data-ripple-light="true" type="button" class="select-none rounded-lg border-2 border-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
     Visite it
    </button>
  </div>
</div>

<div class="relative flex w-[338px]   flex-col rounded-xl border-2 border-[#f38d2e] bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 border-2 border-[#f38d2e] w-80 ml-2 mt-2 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ">
  <img class="absolute   h-40 object-cover" src={web2} alt="" />
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-light leading-snug tracking-normal text-white antialiased">
     Technology:
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Built with HTML, TAILWAND, and REACT for the design and front-end, it features dynamic galleries .Integrated with Cloudinary for image management and depload in vercel
    </p>
  </div>
  <div class="p-6 pt-0">
    <button data-ripple-light="true" type="button" class="select-none rounded-lg border-2 border-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
    Visite it
    </button>
  </div>
</div>

<div class="relative flex w-[338px]   flex-col rounded-xl border-2 border-[#f38d2e] bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 border-2 border-[#f38d2e] w-80 ml-2 mt-2 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40  ">
  <img class="absolute   h-40 object-cover" src={web4} alt="" />
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-light leading-snug tracking-normal text-white antialiased">
     Technology:
    </h5>
    <p class="block font-sans text-base font-light  leading-relaxed text-inherit antialiased">
    Built with HTML and booststrap for more creativity it features dynamic galleries . The backend uses js for data storage. Integrated with Cloudinary for image management and deployed on Vercel 
    </p>
  </div>
  <div class="p-6 pt-0">
    <button data-ripple-light="true" type="button" class="select-none rounded-lg border-2 border-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Visite it
    </button>
  </div>
</div>

<div class="relative flex w-[338px]   flex-col rounded-xl border-2 border-[#f38d2e] bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 border-2 border-[#f38d2e] w-80 ml-2 mt-2 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 ">
  <img class="absolute   h-40 object-cover" src={web5} alt="" />
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-light leading-snug tracking-normal text-white antialiased">
     Technology:
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Built with HTML and booststrap for more creativity it features dynamic galleries . The backend uses js and React . Integrated with Cloudinary for image management and deployed on Vercel 
    </p>
  </div>
  <div class="p-6 pt-0">
    <button data-ripple-light="true" type="button" class="select-none rounded-lg border-2 border-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Visite it
    </button>
  </div>
</div>
</div>
{/* <div class="">

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black p-10 pt-28">

    <div class="block rounded-xl border border-gray-800 p-4">
      <div class="flex absolute   m-4  ">
        <span class="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
        <span class="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
        <span class="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>

      </div>
      <h3 className="text-xl font-bold ml-20 m-2  text-white">TECHNOLOGY/WEBSITE:</h3>
      <div className='w-[600px] h-[300px]  gap-4 flex items-center justify-between  bg-[#10545c] rounded-2xl'>

        <div className='w-[10%] h-[40px]  flex items-center '>
        
        </div>
        <div className='w-[70%] h-[60%] mt-32 m-4  items-center relative isolate flex flex-col justify-end overflow-hidden  px-8 pb-7 pt-40 max-w-sm rounded-t-lg '>
          <img class="absolute inset-0  h-full w-full object-cover" src={web1} alt="" />
          <div className="z-10 gap-y-1 pl-40  pr-40 overflow-hidden text-sm leading-6 text-gray-300"></div>

        </div>

      </div>

    </div>


    <div class="block rounded-xl border border-gray-800 p-4">
      <div class="flex absolute   m-4  ">
        <span class="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
        <span class="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
        <span class="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>

      </div>
      <h3 className="text-xl font-bold ml-20 m-2  text-white">TECHNOLOGY/WEBSITE:</h3>
      <div className='w-[600px] h-[300px]  gap-4 flex items-center justify-between rounded-2xl bg-[#aee507]'>
        <div className='w-[70%] h-[60%] mt-32 m-4  items-center relative isolate flex flex-col justify-end overflow-hidden  px-8 pb-7 pt-40 max-w-sm rounded-t-lg '>


          <img class="absolute inset-0  h-full w-full object-cover" src={web2} alt="" />
         

          <div className="z-10 gap-y-1 pl-40  pr-40 overflow-hidden rounded-2xl text-sm leading-6 text-gray-300"></div>

        </div>
        <div className='w-[10%] h-[40px] mr-6 flex items-center '>
         
        </div>
      </div>
    </div>

    <div class="block rounded-xl border  border-gray-800 p-4">
      <div class="flex absolute   m-4  ">
        <span class="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
        <span class="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
        <span class="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>

      </div>
      <h3 className="text-xl font-bold ml-20 m-2  text-white">TECHNOLOGY/WEBSITE:</h3>
      <div className='w-[600px] h-[300px]  gap-4 flex items-center  rounded-2xl justify-between bg-[#848284]'>
        <div className='w-[70%] h-[60%] mt-32 m-4  items-center relative isolate flex flex-col justify-end overflow-hidden  px-8 pb-7 pt-40 max-w-sm rounded-t-lg '>
          <img class="absolute inset-0  h-full w-full object-cover" src={web4} alt="" />
          <div className="z-10 gap-y-1 pl-40  pr-40 overflow-hidden text-sm leading-6 rounded-2xl text-gray-300"></div>
        </div>
        <div className='w-[10%] h-[40px]  flex items-center '>
     
        </div>

      </div>

    </div>



    <div class="block rounded-xl border border-gray-800 p-4">
      <div class="flex absolute   m-4  ">
        <span class="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
        <span class="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
        <span class="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>

      </div>
      <h3 className="text-xl font-bold ml-20 m-2  text-white">TECHNOLOGY/WEBSITE:</h3>
      <div className='w-[600px] h-[300px]  gap-4 flex items-center justify-between rounded-2xl bg-[#e05429]'>
        <div className='w-[70%] h-[60%] mt-32 m-4  items-center relative isolate flex flex-col justify-end overflow-hidden  px-8 pb-7 pt-40 max-w-sm rounded-t-lg '>
          <img class="absolute inset-0  h-full w-full object-cover" src={web5} alt="" />
          <div className="z-10 gap-y-1 pl-40  pr-40 overflow-hidden text-sm leading-6 text-gray-300"></div>
        </div>
        <div className='w-[10%] h-[40px] mr-6 flex items-center '>
        
        </div>
      </div>
    </div>
  </div>
</div> */}
</section> 
      <section id='about' className='h-[562px]  bg-black '>
      <h1 className='text-[#f38d2e] text-4xl  pl-10 pb-28 flex items-start'>About me :</h1>
  <div className='flex w-full h-[50vh] pl-16 items-center justify-between  '>
  <div class="relative flex justify-center h-[500px] w-[800px] border-4  border-white rounded-2xl bg-black  " >
              <span class="border border-white bg-white w-20 h-2 rounded-br-xl rounded-bl-xl"></span>
              <span class="absolute -right-2 top-14  border-4 border-white h-8 rounded-md"></span>
              
              <div class="absolute top-10 left-[75px]  text-white font-thin text-xl" id="date">17:51</div>
              <div class="absolute top-20 left-2 right-2 p-2  ">
                <div className='flex justify-between'>
                  <h3 class="text-white text-sm font-thin ">Notification Center</h3>
                  <button
                    class="text-gray-600 bg-black/40 p-1 rounded-full transition-colors ease-linear"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div class="flex pt-3 flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
                  <div
                    class=" flex  justify-between w-[11vw] h-[30vh] -m-1  rounded-xl bg-black/35  px-[10px]" >
                    <div class=" gap-2">
                      
                      <div className='flex flex-col gap-1 pt-1'>
                        <div className='flex gap-2  pt-2'>
                          <img src={profile} className='w-8 h-8 rounded-full' alt="" />
                          <p class="text-white pt-2 text-l font-light"> Wiaam  </p> </div>
                        <div className='text-white pt-4 w-[750px] ' >
                          Soo, let's see  My Journey 
                          <br />  My journey in web development began with   <span className='border-b border-orange-400'>HTML</span>  and <span className=' border-b border-orange-400'>CSS</span> , where I first discovered the joy of bringing designs to life. As I progressed, I ventured into <span className=' border-b border-orange-400'>JavaScript</span>  and frameworks like <span className='border-b border-orange-400'>React</span>  and  <span className='border-b border-orange-400'> Laravel</span>, allowing me to build more dynamic and interactive applications. I also enjoy using <span className='border-b border-orange-400'>Bootstrap</span>  and <span className='border-b border-orange-400'>Tailwind</span>  to ensure my projects are not only functional but also responsive and stylish.
                         <p className='pt-4'>A Creative Edge :</p>
                         <p>  What sets me apart is my creativity. I believe that coding is not just about writing lines of code; it’s about creating an experience for the user. I love experimenting with design elements, color schemes, and layouts to create visually appealing interfaces. Whether it's a personal project or a client brief, I aim to fuse aesthetics with functionality.</p>
                      
                      <p className='pt-4 text-' >Let's Connect!</p>
                      
                      <p> I’m excited about the projects I’ve worked on and the ones yet to come. If you’re looking for a passionate front-end developer with a creative flair, I’d love to collaborate! Feel free to check out my work in this portfolio and reach out.
                      </p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
             <div className='w-[35vw] p-5'>
           


              <p className='text-3xl text-white font-semibold'><span class="text-slate-500">&lt;</span> blending creativity with technology to bring ideas to <span className='border-b-2 border-[#f38d2e] '>life</span> ! <span class="text-slate-500">&gt;/</span></p>
             </div>
              /</div> 
             
      </section>
      <section id="tech" className=" flex  flex-col justify-around gap-5  h-[700px] pt-20  bg-black  ">
      <h1 className='text-[#f38d2e] text-4xl pl-10 -mb-36 flex-row flex items-start'>Skills:</h1>
        <div className='flex items-center justify-center   gap-16'>
          <div class="mx-auto w-[90vw] bg-[#000000] rounded-xl border border-gray-800 overflow-hidden  drop-shadow-xl" >
            <div class="bg-[#333] flex items-center p-[5px] text-whitec relative">
              <div class="flex absolute left-3">
                <span class="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
                <span class="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
                <span class="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
              </div>
              <div class="flex-1 text-center text-white">T E C H N O L O G Y   </div>
            </div>
            <div class="p-2.5 text-[#0f0]">
              <div>
                <span class="mr-2"> $ npm install skills</span>
                <span class="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
                <span class="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
                <span class="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
                <span class="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
              </div>
            </div>


            <div className='flex gap-8   flex-center m-12 '>

              <div class="hover:-translate-y-2 group  duration-500 w-35 h-40 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
              >


                <div class="z-20 border-2 p-6 border-[#f38d2e] group-hover:blur-none group-hover:scale-105 flex flex-col justify-center items-center">
                  <IoLogoHtml5 className='h-20 w-20 duration-500 group-hover:blur-none group-hover:scale-105 text-white' />
                </div>
                <h1 className='p-3'>HTML</h1>
              </div>

              <div
                class="hover:-translate-y-2 group  duration-500 w-33 h-40 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
              >


                <div class="z-20 border-2 p-6 border-[#f38d2e] duration-500 group-hover:blur-none group-hover:scale-105 flex flex-col justify-center items-center">
                  <FaCss3 className='h-20  w-20 duration-500 group-hover:blur-none group-hover:scale-105 text-white' />
                </div>
                <h1 className='p-3'>CSS</h1>
              </div>

              <div
                class="hover:-translate-y-2 group  duration-500 w-33w-35 h-40 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
              >


                <div class="z-20 flex border-2 p-6 border-[#f38d2e] flex-col justify-center items-center">
                  < FaReact className='h-20 w-20 duration-500 group-hover:blur-none text-white group-hover:scale-105' />
                </div>
                <h1 className='p-3'>REACT</h1>
              </div>





              <div
                class="hover:-translate-y-2 group  duration-500 w-33 h-40 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
              >


                <div class="z-20  border-2 p-6 border-[#f38d2e] flex flex-col justify-center items-center">
                  < RiTailwindCssFill className='h-20 w-20  duration-500 group-hover:blur-none group-hover:scale-105 text-white' />
                </div>
                <h1 className='p-3'>TAILWIND</h1>
              </div>

              <div
                class="hover:-translate-y-2 group  duration-500 w-33 h-40 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
              >


                <div class="z-20 border-2 p-6 border-[#f38d2e] flex flex-col justify-center items-center">
                  <IoLogoJavascript className='h-20 duration-500 group-hover:blur-none group-hover:scale-105 w-20 text-white' />
                </div>
                <h1 className='p-3'>JAVASCRIPT</h1>
              </div>

              <div
                class="hover:-translate-y-2 group  duration-500 w-33 h-40 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
              >


                <div class="z-20 border-2 p-6 border-[#f38d2e] duration-500 group-hover:blur-none group-hover:scale-105 flex flex-col justify-center items-center">
                  <FaLaravel className='h-20  w-20 duration-500 group-hover:blur-none group-hover:scale-105 text-white' />
                </div>
                <h1 className='p-3'>LARAVEL</h1>
              </div>

              <div
                class="hover:-translate-y-2 group  duration-500w-33 h-40 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
              >


                <div class="z-20 border-2 p-6 border-[#f38d2e] duration-500 group-hover:blur-none group-hover:scale-105 flex flex-col justify-center items-center">
                  <FaGithub className='h-20  w-20 duration-500 group-hover:blur-none group-hover:scale-105 text-white' />
                </div>
                <h1 className='p-3'>GITHUB</h1>
              </div>
              <div
                class="hover:-translate-y-2 group  duration-500 w-33 h-40 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
              >


                <div class="z-20 border-2 p-6 border-[#f38d2e] duration-500 group-hover:blur-none group-hover:scale-105 flex flex-col justify-center items-center">
                  <RiBootstrapLine className='h-20  w-20 duration-500 group-hover:blur-none group-hover:scale-105 text-white' />
                </div>
                <h1 className='p-3'>GITHUB</h1>
              </div>
              <div
                class="hover:-translate-y-2 group  duration-500 w-33 h-40 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
              >


                <div class="z-20 border-2 p-6 border-[#f38d2e] duration-500 group-hover:blur-none group-hover:scale-105 flex flex-col justify-center items-center">
                  <FaSass className='h-20  w-20 duration-500 group-hover:blur-none group-hover:scale-105 text-white' />
                </div>
                <h1 className='p-3'>GITHUB</h1>
              </div>

            </div>

         

          </div>

   

        </div>


      </section>



      <h1 className='text-[#f38d2e] bg-black text-4xl pl-10  flex items-start'>Contact me :</h1>
      <section id='contact' className='w-full   flex  justify-between h-[800px] bg-black'>

      <div  className='pt-72'>
       <h1 className='text-8xl ml-14  text-white'>W I A A M</h1>
       <h1 className='text-white  ml-96 border-b text-6xl'>A T O U A N I</h1>
</div>
        <div className='p-16 w-[700px] '>

          <div class="bg-black items-start border border-gray-800 h-[65vh] text-white p-6 rounded-lg w-full max-w-lg font-mono">

            <div class="flex justify-between items-center">
              <div class="flex space-x-2 text-red-500">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p class="text-sm">bash</p>
            </div>
            <div class="mt-4">

              <div

                class="max-w-md w-full  rounded-xl shadow-2xl overflow-hidden p-8 space-y-8"
              >
                <h2

                  class="text-center text-4xl font-extrabold text-white"
                >
                  Get touch
                </h2>

                <form ref={form} onSubmit={sendEmail}  method="POST" action="#" class="space-y-6">
                  <div class="relative">
                    <input    placeholder=" your name"  class="peer h-10 w-full border-b-2 border-[#e78830] text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"  required="" id="name"  name="name" type="text" />
                    <label class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#e78830] peer-focus:text-sm"
                      for="email" > Name </label >
                  </div>
                  <div class="relative">
                    <input    placeholder="john@example.com"  class="peer h-10 w-full border-b-2 border-[#e78830] text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"  required="" id="email"  name="email" type="email" />
                    <label class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#e78830] peer-focus:text-sm"
                      for="email"
                    > Email address </label >
                  </div>
                  <div class="relative">
                    <input    placeholder="message"  class="peer h-10 w-full border-b-2 border-[#e78830] text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"  required="" id="message"  name="message" type="message " />
                    <label class="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#e78830] peer-focus:text-sm"
                      for="message"
                    >Message </label >
                  </div>
            

                  {/* <button
                    class="w-full py-2 px-4  border-[#a33d02]  border-2  hover:bg-[#a33d02] rounded-md shadow-lg text-white font-semibold transition duration-200"
                    type="submit"
                  >
                    send
                  </button> */}
                
<button class=" text-orange-400  border-orange-400 border-2 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  {/* <span class="bg-orange-400 shadow-orange-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span> */}
  Send
</button>
                </form>
               
              </div>


            </div>
          </div>

        </div>
    
      </section>
      <div className=' text-white font-light gap-28  flex items-center justify-center p-5 text-3xl bg-black'>
         <a className='border-b-2 border-[#f38d2e]' href="">BEHANCE</a>
       <a  className="border-b-2 border-[#f38d2e]" href="https://www.linkedin.com/in/wiaam-atouani-5b324b2ba/">LINKEDIN</a>
       <a  className='border-b-2 border-[#f38d2e]' href="https://www.instagram.com/wea_am01/">INSTAGRAM</a>
       <a className='border-b-2 border-[#f38d2e]' href="https://github.com/Wiaamatouani">GITHUB</a>
       </div>
       
 


    </>
  );
}

export default Home;







import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com";


export default function TemplateDemo() {

  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name && !formData.from_email && !formData.from_phone) {
      setError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    emailjs
      .sendForm(
        "service_evqbfn8",
        "template_616fa4w",
        form.current,
        "gN0bD3HgZrPY88RIa"
      )
      .then(
        (result) => {
          setSuccess("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", from_phone: "", message: "" });

          setTimeout(() => {
            setSuccess("");
          }, 1000);
        },
        (error) => {
          setError("Message was not submitted. Please try again.");
        }
      );
  };





    return (
        <div className="w-[90%] lg:w-[60%] ">
            <form ref={form} onSubmit={sendEmail} className='flex justify-center items-center gap-5 flex-col w-full'>
       
      <div  className=' flex flex-col gap-10 w-full pb-10'>
      <section className='flex flex-col md:flex-row md:justify-between w-full gap-10 md:gap-0'>
        <main className='md:w-[48%]'>
            
      <h2 className='pb-5'>Your Name :</h2><div className='border-border border-[1px] rounded p-3 px-6'>
       
       <input type="text" name='from_name'
   value={formData.from_name}
   onChange={handleChange} placeholder='Your Name' id="" className=' w-full placeholder:text-sm  outline-none font-roboto '/>
   </div>
  
        </main><main className='md:w-[48%]'>
        <h2 className='pb-5'>Phone No :</h2> <div  className='border-border border-[1px]  rounded p-3 px-6'>
                <input type="text" name="from_phone" id="" placeholder='Phone No'
            value={formData.from_phone}
            onChange={handleChange} className=' w-full placeholder:text-sm  outline-none font-roboto ' />
            </div>
           </main></section>
          <main>
          <h2 className='pb-5'>Enter Email :</h2>
            <div  className='border-border border-[1px] rounded p-3 px-6'>
                <input type="text" name="from_email" placeholder='Your Email' 
            value={formData.from_email}
            onChange={handleChange} id="" className=' w-full placeholder:text-sm  outline-none font-roboto ' />
            </div>
          </main>
          
     <main>
     <h2 className='pb-5'>Message :</h2>
            <div  className='border-border border-[1px] rounded p-3 px-6'>
                <textarea type="text" placeholder='Please enter message'  name="message" value={formData.message} onChange={handleChange} id="" className=' w-full placeholder:text-sm h-[200px]  outline-none font-roboto'/>
            </div>
     </main>
      </div>
            <button type='submit' className="bg-primary text-white p-4 px-8 cursor-pointer rounded-full hover:bg-white hover:text-primary border-[1px] border-primary hover:font-semibold">Submit Message</button>
      </form>
      {error && <p className="text-red-500 text-center pt-5 font-light">{error}</p>}
      {success?<p className="text-green-500 text-center pt-5 font-light">Message sent successfully!</p>:''}
        </div>
    )
}

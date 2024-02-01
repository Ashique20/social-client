import React from "react";

const Header =()=>{
    return(
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2024/01/social-media-management-tools.png" className=" w-[600px]" />
    <div className="text-white w-[50%]">
      <h1 className="text-5xl font-bold">Social Media Features with incridble posts</h1>
      <p className="py-6 text-xl">Social media is a collective term for websites and applications that focus on communication, community-based input, interaction, content-sharing and collaboration. People use social media to stay in touch and interact with friends, family and various communities.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    )
}

export default Header;
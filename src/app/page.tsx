"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// --- Icons (Lucide-style SVGs) ---
const Icons = {
  MapPin: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Link: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
  ),
  Calendar: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  ),
  Briefcase: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  ),
  Mail: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Github: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  Linkedin: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Pin: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg>
  ),
  Search: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  ),
  MoreHorizontal: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
  ),
  MessageCircle: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
  ),
  Repeat: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
  ),
  Heart: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  ),
  Share: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
  ),
  BarChart: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
  ),
  Verified: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .495.083.965.238 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/></svg>
  )
};

export default function Home() {
  const profile = {
    name: "Orven Casido",
    handle: "@devops_orven",
    title: "DevOps Engineer",
    location: "Filinvest City, Philippines",
    email: "orvencasidop@gmail.com",
    website: "orvencasido.com",
    linkedin: "linkedin.com/in/orven-casido-39bb58319",
    github: "github.com/orvencasido",
    joinDate: "September 2021", // Based on education start
    tweetCount: "1,245",
    following: "420",
    followers: "8.5K",
    summary:
      "Results-driven DevOps Apprentice experienced in automating infrastructure, optimizing CI/CD pipelines, and managing Kubernetes-based cloud environments. Improved deployment speed by 70%, reduced manual operations by 50%.",
    skills: [
      "Kubernetes", "Docker", "Jenkins", "AWS", "Azure", "Helm", "Git", "Github Actions", "CICD", "Terraform", "Ansible", "Prometheus", "Grafana", "Kibana", "Python", "Linux"
    ],
    experience: [
      {
        company: "Nityo Infosys",
        role: "DevOps Engineer",
        date: "Dec 2025 — Present",
        bullets: [
          "Creating and Maintaining Pipelines that Supports Global Websites for Essilor Luxottica.",
        ],
      },
      {
        company: "Essilor Luxottica",
        role: "DevOps Apprentice",
        date: "Jun 2025 — Dec 2025",
        bullets: [
          "Exposed to production-grade pipelines and executed CI/CD jobs supporting global eCommerce websites.",
          "Reduced deployment time by 50% through pipeline automation and optimization.",
          "Collaborated with 10+ DevOps engineers to maintain enterprise-level infrastructure.",
        ],
      },
      {
        company: "Carabao Cloud Solutions Inc.",
        role: "Internal IT Administrator",
        date: "Jun 2024 - Sep 2024",
        bullets: [
          "Supported 50+ client profiles, providing remote access solutions.",
          "Implemented proactive system monitoring, reducing downtime by 15%.",
        ],
      },
    ],
    education: [
      {
        school: "Southern Luzon State University",
        degree: "BS Computer Engineering",
        date: "2021 — 2025",
      },
    ],
    certifications: [
      { name: "AWS Certified Cloud Practitioner", issuer: "Udemy", date: "2025" },
      { name: "Microsoft Certified: Azure Fundamentals", issuer: "Udemy", date: "2025" },
      { name: "ICT Programming Efficiency Exam", issuer: "DICT", date: "2025" },
    ],
    projects: [
      {
        name: "AWS Cloud Resume Challenge",
        description: "Developed a personal portfolio website with 100% automation in CI/CD, reducing deployment time by 70%.",
        techStack: ["AWS S3", "CloudFront", "Terraform", "Lambda", "DynamoDB"],
      },
      {
        name: "Full-Scale Kubernetes Deployment",
        description: "Implemented CI/CD pipelines with Jenkins and Ansible, increasing deployment frequency by 80%.",
        techStack: ["Kubernetes", "Jenkins", "Helm", "Terraform", "Prometheus"],
      },
       {
        name: "Headless Website with Strapi",
        description: "Developed a headless CMS website using Strapi and Next.js, enhancing content management efficiency.",
        techStack: ["Strapi","NextJS", "Docker", "Kubernetes"],
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("Tweets");

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-gray-100 font-sans print:bg-white print:text-black">
      <div className="max-w-7xl mx-auto flex justify-center">
        
        {/* Left Sidebar (Desktop only, simplified) */}
        <header className="hidden lg:flex flex-col items-end w-[88px] xl:w-[275px] p-2 fixed left-0 h-screen overflow-y-auto border-r border-gray-100 dark:border-gray-800 print:hidden">
          <div className="w-full max-w-[250px] flex flex-col gap-2">
             <div className="p-3 w-fit rounded-full hover:bg-gray-200 dark:hover:bg-gray-900 transition cursor-pointer">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8 fill-black dark:fill-white"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
             </div>
             {['Home', 'Explore', 'Notifications', 'Messages', 'Grok', 'Communities', 'Premium', 'Profile', 'More'].map((item) => (
                <div key={item} className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-900 transition cursor-pointer w-fit xl:w-full">
                  <span className="text-xl font-medium hidden xl:block">{item}</span>
                  {item === 'Profile' && <Icons.MoreHorizontal className="xl:hidden" />}
                </div>
             ))}
             <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full py-3 px-8 font-bold shadow-md mt-4 hidden xl:block transition">
                Post
             </button>
             <div className="mt-auto flex items-center gap-3 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-900 transition cursor-pointer w-full">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative">
                   <Image src="/avatar.svg" alt="Profile" fill className="object-cover" />
                </div>
                <div className="hidden xl:block">
                   <div className="font-bold text-sm">{profile.name}</div>
                   <div className="text-slate-500 text-sm">{profile.handle}</div>
                </div>
                <Icons.MoreHorizontal className="hidden xl:block ml-auto w-4 h-4" />
             </div>
          </div>
        </header>

        {/* Main Feed */}
        <main className="flex-1 max-w-[600px] border-r border-gray-100 dark:border-gray-800 min-h-screen lg:ml-[88px] xl:ml-[275px] print:ml-0 print:border-none print:max-w-full">
          {/* Sticky Header */}
          <div className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-black/80 px-4 py-1 border-b border-gray-100 dark:border-gray-800 print:hidden">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
                 <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
              </div>
              <div>
                <h2 className="text-lg font-bold leading-5">{profile.name}</h2>
                <span className="text-xs text-slate-500">{profile.tweetCount} posts</span>
              </div>
            </div>
          </div>

          {/* Banner & Profile Info */}
          <div className="relative">
            {/* Banner */}
            <div className="h-48 bg-slate-200 dark:bg-slate-800 w-full relative overflow-hidden">
               {/* Abstract geometric pattern for banner */}
               <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
               </div>
            </div>
            
            {/* Profile Picture */}
            <div className="absolute -bottom-16 left-4">
               <div className="w-32 h-32 rounded-full border-4 border-white dark:border-black bg-white overflow-hidden relative">
                  <Image src="/avatar.svg" alt={profile.name} fill className="object-cover" />
               </div>
            </div>
          </div>

          <div className="pt-3 px-4 pb-4">
             {/* Edit Profile / Follow Button */}
             <div className="flex justify-end mb-4 print:hidden">
                <a 
                   href={`https://${profile.linkedin}`} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-slate-900 dark:bg-white text-white dark:text-black font-bold py-2 px-5 rounded-full hover:opacity-90 transition"
                >
                   Hire Me
                </a>
             </div>

             {/* Name & Handle */}
             <div className="mt-8">
                <div className="flex items-center gap-1">
                   <h1 className="text-xl font-extrabold leading-6">{profile.name}</h1>
                   <Icons.Verified className="w-5 h-5 text-sky-500" />
                </div>
                <div className="text-slate-500 text-sm">{profile.handle}</div>
             </div>

             {/* Bio */}
             <p className="mt-3 text-[15px] leading-5 whitespace-pre-line">
                {profile.title} | {profile.summary}
             </p>

             {/* Metadata */}
             <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-slate-500 text-sm">
                <div className="flex items-center gap-1">
                   <Icons.MapPin className="w-4 h-4" />
                   <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-1">
                   <Icons.Link className="w-4 h-4" />
                   <a href={`https://${profile.website}`} className="text-sky-500 hover:underline">{profile.website}</a>
                </div>
                <div className="flex items-center gap-1">
                   <Icons.Calendar className="w-4 h-4" />
                   <span>Joined {profile.joinDate}</span>
                </div>
             </div>

             {/* Following / Followers */}
             <div className="mt-3 flex gap-4 text-sm print:hidden">
                <div className="hover:underline cursor-pointer">
                   <span className="font-bold text-black dark:text-white">{profile.following}</span> <span className="text-slate-500">Following</span>
                </div>
                <div className="hover:underline cursor-pointer">
                   <span className="font-bold text-black dark:text-white">{profile.followers}</span> <span className="text-slate-500">Followers</span>
                </div>
             </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-100 dark:border-gray-800 mt-2 print:hidden">
             {["Tweets", "Replies", "Highlights", "Media", "Likes"].map((tab) => (
                <div 
                   key={tab} 
                   onClick={() => setActiveTab(tab)}
                   className={`flex-1 flex justify-center py-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 transition relative ${activeTab === tab ? 'font-bold text-black dark:text-white' : 'text-slate-500 font-medium'}`}
                >
                   {tab}
                   {activeTab === tab && (
                      <div className="absolute bottom-0 w-14 h-1 bg-sky-500 rounded-full"></div>
                   )}
                </div>
             ))}
          </div>

          {/* Content Feed */}
          <div>
            {/* Pinned Tweet: Summary */}
            <article className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition cursor-pointer">
               <div className="flex gap-1 ml-10 mb-1 text-xs font-bold text-slate-500 items-center">
                  <Icons.Pin className="w-3 h-3 fill-slate-500" />
                  <span>Pinned Tweet</span>
               </div>
               <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative flex-shrink-0">
                     <Image src="/avatar.svg" alt={profile.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                     <div className="flex items-center gap-1">
                        <span className="font-bold hover:underline">{profile.name}</span>
                        <Icons.Verified className="w-4 h-4 text-sky-500" />
                        <span className="text-slate-500 text-sm">{profile.handle} · 1h</span>
                     </div>
                     <div className="text-[15px] leading-5 mt-1">
                        🚀 <b>Professional Summary</b>
                        <br/><br/>
                        {profile.summary}
                        <br/><br/>
                        Key focus: #DevOps #CloudEngineering #Automation #AWS
                     </div>
                     {/* Tweet Actions */}
                     <TweetActions />
                  </div>
               </div>
            </article>

            {/* Experience Tweets */}
            {profile.experience.map((exp, idx) => (
               <article key={idx} className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition cursor-pointer">
                  <div className="flex gap-3">
                     <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl flex-shrink-0">
                        🏢
                     </div>
                     <div className="flex-1">
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-1 flex-wrap">
                              <span className="font-bold hover:underline">{exp.company}</span>
                              <span className="text-slate-500 text-sm">{profile.handle} · {exp.date}</span>
                           </div>
                        </div>
                        <div className="text-[15px] leading-5 mt-1">
                           <b>{exp.role}</b>
                           <ul className="list-disc ml-5 mt-2 space-y-1 text-slate-600 dark:text-slate-300">
                              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                           </ul>
                        </div>
                        <TweetActions stats={{ comments: 2, retweets: 5, likes: 24, views: "1.2K" }} />
                     </div>
                  </div>
               </article>
            ))}

            {/* Skills Tweet */}
            <article className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition cursor-pointer">
               <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative flex-shrink-0">
                     <Image src="/avatar.svg" alt={profile.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                     <div className="flex items-center gap-1">
                        <span className="font-bold hover:underline">{profile.name}</span>
                        <Icons.Verified className="w-4 h-4 text-sky-500" />
                        <span className="text-slate-500 text-sm">{profile.handle} · 2h</span>
                     </div>
                     <div className="text-[15px] leading-5 mt-1">
                        🛠 <b>Technical Skills</b>
                        <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sky-500">
                           {profile.skills.map(skill => (
                              <span key={skill} className="hover:underline">#{skill.replace(/\s+/g, '')}</span>
                           ))}
                        </div>
                     </div>
                     <TweetActions stats={{ likes: 108, views: "4.5K" }} />
                  </div>
               </div>
            </article>

            {/* Projects Tweets */}
            {profile.projects.map((proj, idx) => (
               <article key={idx} className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition cursor-pointer">
                  <div className="flex gap-3">
                     <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-xl flex-shrink-0">
                        💻
                     </div>
                     <div className="flex-1">
                        <div className="flex items-center gap-1">
                           <span className="font-bold hover:underline">{proj.name}</span>
                           <span className="text-slate-500 text-sm">@projects · {2024}</span>
                        </div>
                        <div className="text-[15px] leading-5 mt-1">
                           {proj.description}
                        </div>
                        {/* Project Card (Link Preview style) */}
                        <div className="mt-3 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-900 transition">
                           <div className="h-32 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                              <span className="text-4xl">🚀</span>
                           </div>
                           <div className="p-3 bg-white dark:bg-black">
                              <div className="text-sm text-slate-500">{proj.techStack.join(" • ")}</div>
                              <div className="font-bold text-black dark:text-white mt-1">{proj.name}</div>
                           </div>
                        </div>
                        <TweetActions stats={{ likes: 42, views: "2.1K" }} />
                     </div>
                  </div>
               </article>
            ))}

             {/* Education & Certs */}
            <article className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition cursor-pointer">
               <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl flex-shrink-0">
                     🎓
                  </div>
                  <div className="flex-1">
                     <div className="flex items-center gap-1">
                        <span className="font-bold hover:underline">Education & Certifications</span>
                        <Icons.Verified className="w-4 h-4 text-sky-500" />
                        <span className="text-slate-500 text-sm">{profile.handle} · 4h</span>
                     </div>
                     <div className="text-[15px] leading-5 mt-1 space-y-3">
                        {profile.education.map((edu, i) => (
                           <div key={i}>
                              <b>{edu.school}</b>
                              <div className="text-slate-500">{edu.degree} ({edu.date})</div>
                           </div>
                        ))}
                        <div className="border-t border-gray-100 dark:border-gray-800 pt-2">
                           {profile.certifications.map((cert, i) => (
                              <div key={i} className="flex items-center gap-2 mt-1">
                                 <Icons.Verified className="w-4 h-4 text-green-500" />
                                 <span>{cert.name}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     <TweetActions stats={{ likes: 89, views: "3.2K" }} />
                  </div>
               </div>
            </article>
          </div>
        </main>

        {/* Right Sidebar (Desktop only) */}
        <aside className="hidden lg:block w-[350px] pl-8 py-4 print:hidden">
            {/* Search */}
            <div className="sticky top-0 bg-white dark:bg-black z-10 pb-4">
               <div className="relative group">
                  <div className="absolute left-4 top-3 text-slate-500 group-focus-within:text-sky-500">
                     <Icons.Search className="w-5 h-5" />
                  </div>
                  <input 
                     type="text" 
                     placeholder="Search" 
                     className="w-full bg-slate-100 dark:bg-slate-900 rounded-full py-3 pl-12 pr-4 outline-none focus:bg-white focus:ring-1 focus:ring-sky-500 border border-transparent focus:border-sky-500 transition"
                  />
               </div>
            </div>

            {/* You might like / Soft Skills */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 mb-4">
               <h3 className="font-extrabold text-xl mb-4">Who to hire</h3>
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold">OC</div>
                  <div className="flex-1">
                     <div className="font-bold hover:underline">Orven Casido</div>
                     <div className="text-slate-500 text-sm">@devops_orven</div>
                  </div>
                  <button className="bg-black dark:bg-white text-white dark:text-black font-bold px-4 py-1.5 rounded-full text-sm">Follow</button>
               </div>
               <div className="text-sm text-slate-600 dark:text-slate-400">
                  <p className="mb-2">✅ Problem Solving</p>
                  <p className="mb-2">✅ Communication</p>
                  <p className="mb-2">✅ Team Collaboration</p>
               </div>
            </div>

            {/* Trends */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4">
               <h3 className="font-extrabold text-xl mb-4">Trends for you</h3>
               {[
                  { topic: "Cloud Engineering", posts: "12.5K posts" },
                  { topic: "DevOps", posts: "54.2K posts" },
                  { topic: "Kubernetes", posts: "23.1K posts" },
                  { topic: "Terraform", posts: "9,421 posts" },
               ].map((trend, i) => (
                  <div key={i} className="py-3 hover:bg-slate-200 dark:hover:bg-slate-800 -mx-4 px-4 transition cursor-pointer">
                     <div className="text-xs text-slate-500">Trending in Tech</div>
                     <div className="font-bold">{trend.topic}</div>
                     <div className="text-xs text-slate-500">{trend.posts}</div>
                  </div>
               ))}
               <div className="text-sky-500 text-sm mt-4 cursor-pointer hover:underline">Show more</div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
               <span>Terms of Service</span>
               <span>Privacy Policy</span>
               <span>Cookie Policy</span>
               <span>© 2026 Orven Casido</span>
            </div>
        </aside>
      </div>
    </div>
  );
}

function TweetActions({ stats }: { stats?: { comments?: number, retweets?: number, likes?: number, views?: string } }) {
   return (
      <div className="flex justify-between mt-3 max-w-md text-slate-500">
         <div className="flex items-center gap-2 group cursor-pointer hover:text-sky-500">
            <div className="p-2 rounded-full group-hover:bg-sky-50 dark:group-hover:bg-sky-900/30 transition">
               <Icons.MessageCircle className="w-4 h-4" />
            </div>
            <span className="text-xs">{stats?.comments || 0}</span>
         </div>
         <div className="flex items-center gap-2 group cursor-pointer hover:text-green-500">
            <div className="p-2 rounded-full group-hover:bg-green-50 dark:group-hover:bg-green-900/30 transition">
               <Icons.Repeat className="w-4 h-4" />
            </div>
            <span className="text-xs">{stats?.retweets || 0}</span>
         </div>
         <div className="flex items-center gap-2 group cursor-pointer hover:text-pink-500">
            <div className="p-2 rounded-full group-hover:bg-pink-50 dark:group-hover:bg-pink-900/30 transition">
               <Icons.Heart className="w-4 h-4" />
            </div>
            <span className="text-xs">{stats?.likes || 0}</span>
         </div>
         <div className="flex items-center gap-2 group cursor-pointer hover:text-sky-500">
            <div className="p-2 rounded-full group-hover:bg-sky-50 dark:group-hover:bg-sky-900/30 transition">
               <Icons.BarChart className="w-4 h-4" />
            </div>
            <span className="text-xs">{stats?.views || "0"}</span>
         </div>
         <div className="flex items-center gap-2 group cursor-pointer hover:text-sky-500">
             <div className="p-2 rounded-full group-hover:bg-sky-50 dark:group-hover:bg-sky-900/30 transition">
               <Icons.Share className="w-4 h-4" />
             </div>
         </div>
      </div>
   )
}

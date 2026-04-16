'use client';

import React, { useState } from 'react';
import { ArrowLeft, Award, CheckCircle2, Layout, Monitor, ShieldCheck, X, ZoomIn } from 'lucide-react';
import Link from 'next/link';

export default function MassageCourseDetail() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f8fcff] text-slate-950">
      {/* Decorative Background */}
      <div className="relative overflow-hidden pt-12">

        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          {/* Navigation */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-950"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* Hero Section */}
          <div className="mt-12 space-y-8 text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#DAA520] px-4 py-2 text-sm font-semibold text-slate-700">
              <Award size={16} className="text-slate-950" />
              Excellent Project Award
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
              Massage & Spa <br /> Management System
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
              A comprehensive management platform designed for spa businesses, focusing on intuitive user experience and efficient operational workflows.
            </p>
          </div>

          {/* Main Hero Image */}
          <div
            className="relative mt-16 aspect-video w-full overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-2xl group cursor-zoom-in"
            onClick={() => setSelectedImage("/bsc/home.jpg")}
          >
            <img
              src="/bsc/home.jpg"
              alt="Massage Course Home"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="rounded-full bg-white/20 p-4 backdrop-blur-md">
                <ZoomIn className="text-white" size={32} />
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="mt-24 grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">Project Overview</h2>
              <p className="text-base leading-8 text-slate-600">
                An all-in-one management system designed to streamline day-to-day operations, elevate customer service, and boost overall business productivity. From seamless course scheduling and point-of-sale to extensive client management, our platform provides a complete digital solution for modern businesses.
              </p>
              <div className="space-y-6">
                <h2 className="text-3xl font-black tracking-tight text-slate-950">User level</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: Layout, label: 'General customers' },
                    { icon: ShieldCheck, label: 'Member' },
                    { icon: Monitor, label: 'Staff' },
                    { icon: CheckCircle2, label: 'Admin' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-slate-100 transition hover:shadow-md">
                      <item.icon size={20} className="text-slate-950" />
                      <span className="text-sm font-bold text-slate-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-black tracking-tight text-slate-950">Key Features</h3>
              <ul className="mt-6 space-y-4">
                {[
                  'Multi-role User Management',
                  'Course & Product Management',
                  'Promotions & Campaigns',
                  'Customer Review Interface',
                  'Smart Booking System',
                  'Point of Sale (POS) & Sales Tracking',
                  'Customer Course Attendance',
                  'Automated Email Notifications'
                ].map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4f7e8] text-[#1a7051] font-bold">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mt-24 space-y-10 pb-24">
            <div className="text-center">
              <h2 className="text-3xl font-black tracking-tight text-slate-950">Snapshots</h2>
              <p className="mt-4 text-slate-600">Explore the different modules of the system.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { img: "admin1.jpg", title: "Admin Overview" },
                { img: "admin2.jpg", title: "Revenue Summary Report" },
                { img: "admin3.jpg", title: "Revenue Summary Report" },
                { img: "admin4.jpg", title: "Printing an income report as a PDF" },
                { img: "staff1.jpg", title: "Staff Dashboard" },
                { img: "staff2.jpg", title: "Staff Duty" },
                { img: "staff3.jpg", title: "Staff Sale Product" },
                { img: "user1.jpg", title: "User Home" },
                { img: "user2.jpg", title: "Course Details" },
                { img: "user3.jpg", title: "Booking Interface" },
                { img: "user4.jpg", title: "Money transfer " },
                { img: "user5.jpg", title: "Slip" },
                { img: "login.jpg", title: "Secure Login" },
                { img: "register.jpg", title: "Membership Signup" },
                { img: "contact.jpg", title: "Contact Module" },
                { img: "product.jpg", title: "Service Product" },
                { img: "gallery.jpg", title: "Image Gallery" },
              ].map((item, i) => (
                <div key={i} className="group flex flex-col space-y-4">
                  <div
                    className="relative aspect-video overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition hover:shadow-xl hover:-translate-y-1 cursor-zoom-in"
                    onClick={() => setSelectedImage(`/bsc/${item.img}`)}
                  >
                    <img
                      src={`/bsc/${item.img}`}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="rounded-full bg-white/20 p-3 backdrop-blur-md">
                        <ZoomIn className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <p className="text-sm font-black tracking-tight text-slate-950">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </button>

          <div className="relative animate-in zoom-in-95 duration-300">
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-h-[90vh] max-w-[95vw] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

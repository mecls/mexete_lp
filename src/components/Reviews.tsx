import React from 'react';
import { cn } from "@/lib/utils";
import Image from 'next/image';

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Since I started using this app my academic journey has sky rocketed",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Such a simple and nice way to prioritize my to-do's and have a bird-eye view of my life",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Easy and simple to use. The analytics changed my view on how productive I really was.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Didn't expect much since the photos and the website aren't amazing, but got surprized by how usefull and clean it is.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Started using it myself, then my friends because it really is helpfull. Cant wait for some social features or something like that.",
    img: "https://avatar.vercel.sh/james",
  },
];
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* Replace <img> with Image */}
        <Image 
          className="rounded-full" 
          src={img} 
          alt={name} 
          width={32} 
          height={32} 
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Marquee = ({ 
  children, 
  reverse = false, 
  className = ""
}: {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  return (
    <div 
      className={`relative flex overflow-hidden ${className}`}
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)'
      }}
    >
      <div 
        className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} gap-4`}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export function Reviews() {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <Marquee >
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse  className="mt-4">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}

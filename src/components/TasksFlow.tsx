import React from 'react';
import Iphone15Pro from '@/components/magicui/iphone-15-pro';

const WorkflowSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center space-y-8">
        {/* Text and Features Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Easy management.
            One tool.
          </h1>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            All your tasks and subtasks by priority
          </p>
        </div>

        {/* Features Section */}
        <div className="flex space-x-8 justify-center items-start">
          {/* Tasks and to-dos */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <polyline points="16 11 18 13 22 9"/>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Tasks and to-dos</h3>
            <p className="text-gray-600 text-sm">Tackle any goal, big or small.</p>
          </div>

          {/* Custom views */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Custom views</h3>
            <p className="text-gray-600 text-sm">Easy visualization of what matters</p>
          </div>

          {/* Automations */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4l3 3"/>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Goal oriented</h3>
            <p className="text-gray-600 text-sm">Streak, analytics and more</p>
          </div>
        </div>

        {/* iPhone Mockup */}
        <div className="mt-12">
          <Iphone15Pro src="/Tasks.png" className="size-200" />
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
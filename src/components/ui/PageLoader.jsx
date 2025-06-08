import React from 'react';

/**
 * PageLoader component - Displays a skeleton loading pattern during lazy loading
 * Mimics the common structure of portfolio pages with a lighter color scheme
 * Uses subtle gray tones that match the portfolio's clean aesthetic
 */
const PageLoader = () => {
  return (
    <div className="w-full max-w-[960px] bg-white">
      {/* Page Header Skeleton */}
      <div className="space-y-4 mb-8">
        {/* Title Skeleton */}
        <div className="animate-pulse h-9 w-48 bg-gray-100 rounded-md"></div>
        
        {/* Subtitle Skeleton */}
        <div className="animate-pulse h-5 w-full max-w-2xl bg-gray-100 rounded-md"></div>
      </div>
      
      {/* Content Section Skeletons */}
      <div className="space-y-10">
        {/* First Section */}
        <div className="space-y-4">
          {/* Section Title Skeleton */}
          <div className="animate-pulse h-6 w-40 bg-gray-100 rounded-md"></div>
          
          {/* Grid/Card Layout Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index} 
                className="animate-pulse bg-white border border-gray-50 rounded-lg p-4 h-32 shadow-sm"
              >
                <div className="h-4 bg-gray-100 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-100 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second Section */}
        <div className="space-y-4">
          {/* Section Title Skeleton */}
          <div className="animate-pulse h-6 w-32 bg-gray-100 rounded-md"></div>
          
          {/* Content Block Skeleton */}
          <div className="space-y-3">
            <div className="animate-pulse h-4 bg-gray-100 rounded w-full"></div>
            <div className="animate-pulse h-4 bg-gray-100 rounded w-full"></div>
            <div className="animate-pulse h-4 bg-gray-100 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;


import React from 'react';

const LoadingSpinner = () => {
    return (
         <div className="flex items-center justify-center py-20">
      <div className="relative">
        <div className=" w-20 h-20 md:w-40 md:h-40 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        <div className="absolute inset-0 flex items-center p-4 justify-center">
          <span className="text-sm font-medium text-blue-500">Loading...</span>
        </div>
      </div>
    </div>
    );
};

export default LoadingSpinner;
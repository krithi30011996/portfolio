/**
 * Vercel Speed Insights initialization
 * This script loads and initializes Vercel Speed Insights for performance monitoring
 */
(function() {
  'use strict';
  
  // Create the queue for speed insights before the library loads
  window.si = window.si || function () { 
    (window.siq = window.siq || []).push(arguments); 
  };

  // Load the Speed Insights script from Vercel's CDN
  // This path will be automatically configured when Speed Insights is enabled in Vercel dashboard
  var script = document.createElement('script');
  script.defer = true;
  
  // The _vercel/speed-insights/ path is automatically created by Vercel when you enable Speed Insights
  script.src = '/_vercel/speed-insights/script.js';
  
  script.onerror = function() {
    console.warn('Vercel Speed Insights: Script failed to load. Ensure Speed Insights is enabled in your Vercel dashboard.');
  };
  
  document.head.appendChild(script);
})();

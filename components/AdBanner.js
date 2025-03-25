import { useEffect } from 'react';

// This component is a placeholder for Google AdSense ads
// In a production environment, you would replace the placeholder with actual AdSense code
const AdBanner = ({ type = 'horizontal', className = '' }) => {
  useEffect(() => {
    // In a real implementation, you would load the AdSense script and initialize the ads
    // This is just a placeholder for demonstration purposes
    if (window.adsbygoogle) {
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, []);

  // Different ad formats based on the type prop
  const getAdSize = () => {
    switch (type) {
      case 'horizontal':
        return { width: '100%', height: '90px' };
      case 'sidebar':
        return { width: '300px', height: '250px' };
      case 'leaderboard':
        return { width: '728px', height: '90px' };
      case 'large-rectangle':
        return { width: '336px', height: '280px' };
      default:
        return { width: '100%', height: '90px' };
    }
  };

  const sizeStyle = getAdSize();

  return (
    <div 
      className={`bg-gray-100 flex items-center justify-center text-gray-500 overflow-hidden ${className}`}
      style={sizeStyle}
    >
      {/* 
        This is a placeholder. In production, replace with actual AdSense code like:
        <ins 
          className="adsbygoogle" 
          style={sizeStyle}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      */}
      <p className="text-sm">Advertisement</p>
    </div>
  );
};

export default AdBanner; 
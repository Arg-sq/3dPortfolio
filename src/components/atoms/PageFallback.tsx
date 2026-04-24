const PageFallback = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="relative w-14 h-14">
      <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
      <div className="absolute inset-0 rounded-full border-4 border-t-[#db0000] border-transparent animate-spin" />
    </div>
  </div>
);

export default PageFallback;

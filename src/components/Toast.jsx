import { useEffect, useState } from 'react';

export default function Toast({ message }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3500); 
      
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!message || !visible) return null;

  return (
    <div className="fixed top-26 left-5 z-50 flex items-center gap-3 bg-red-500 text-white px-5 py-3 rounded-xl shadow-2xl transition-all animate-in slide-in-from-left-5 duration-300 max-w-sm">
      <p className="font-medium text-sm">{message}</p>
    </div>
  );
}
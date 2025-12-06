import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Client } from '../types/data';

interface ClientCardProps {
  client: Client;
  index: number;
}

const ClientCard = ({ client, index }: ClientCardProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [imageError, setImageError] = useState(false);

  // Generate company initials for fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();
  };

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg p-6 shadow-lg border border-gray-200 flex items-center justify-center min-h-[120px] hover-lift hover-glow-green transition-smooth opacity-0 ${
        isVisible ? 'animate-fade-in' : ''
      }`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="text-center">
        {client.logo && !imageError ? (
          <div className="w-20 h-20 bg-white/95 rounded-lg flex items-center justify-center mb-3 mx-auto p-2 transition-transform duration-300 hover:scale-110 hover:shadow-lg">
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="w-20 h-20 bg-lime-green/20 rounded-lg flex items-center justify-center mb-3 mx-auto transition-transform duration-300 hover:scale-110">
            <span className="text-lime-green font-bold text-lg">
              {getInitials(client.name)}
            </span>
          </div>
        )}
        <span className="text-sm font-medium text-gray-700 block">{client.name}</span>
      </div>
    </div>
  );
};

export default ClientCard;

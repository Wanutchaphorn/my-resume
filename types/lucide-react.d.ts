declare module 'lucide-react' {
  import React from 'react';

  export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  export const Phone: React.FC<IconProps>;
  export const Mail: React.FC<IconProps>;
  export const Globe: React.FC<IconProps>;
  export const MapPin: React.FC<IconProps>;
  export const Star: React.FC<IconProps>;
  
  [key: string]: React.FC<IconProps>;
}

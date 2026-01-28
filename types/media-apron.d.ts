declare module '@media-apron/react' {
  import * as React from 'react';

  export interface VideoProps {
    src: string;
    className?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsInline?: boolean;
    [key: string]: any;
  }

  export const Video: React.FC<VideoProps>;
}

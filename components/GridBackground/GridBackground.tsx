'use client';

import React, { useEffect, useRef } from 'react';
import './GridBackground.scss';

const GridBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 创建网格点
    const gridSize = 20; // 网格大小
    const spacing = 50; // 点之间的间距
    
    // 计算需要多少个点
    const width = window.innerWidth;
    const height = window.innerHeight;
    const cols = Math.ceil(width / spacing) + 1;
    const rows = Math.ceil(height / spacing) + 1;
    
    // 创建网格点
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const dot = document.createElement('div');
        dot.className = 'grid-dot';
        dot.style.left = `${i * spacing}px`;
        dot.style.top = `${j * spacing}px`;
        
        // 添加随机动画延迟
        const delay = (i + j) * 0.02;
        dot.style.animationDelay = `${delay}s`;
        
        container.appendChild(dot);
      }
    }

    // 处理窗口大小变化
    const handleResize = () => {
      // 清空现有点
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      // 重新创建网格点
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const newCols = Math.ceil(newWidth / spacing) + 1;
      const newRows = Math.ceil(newHeight / spacing) + 1;
      
      for (let i = 0; i < newCols; i++) {
        for (let j = 0; j < newRows; j++) {
          const dot = document.createElement('div');
          dot.className = 'grid-dot';
          dot.style.left = `${i * spacing}px`;
          dot.style.top = `${j * spacing}px`;
          
          const delay = (i + j) * 0.02;
          dot.style.animationDelay = `${delay}s`;
          
          container.appendChild(dot);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} className="grid-container" />;
};

export default GridBackground;
import React from 'react';

export default size => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="0 0 1000 1000" version="1.1">
    <defs>
      <rect id="path-1" x="0" y="0" width="1000" height="1000" />
    </defs>
    <g id="Icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <mask id="mask-2" fill="white">
        <use href="#path-1" />
      </mask>
      <use id="Rectangle" fill="#FFFFFF" href="#path-1" />
      <g id="Group" mask="url(#mask-2)">
        <g transform="translate(-1.000000, 0.000000)" />
      </g>
      <g id="Group-2" mask="url(#mask-2)" stroke="#000000" strokeWidth="20">
        <polygon id="Path" strokeLinejoin="round" points="200 0 1000 0 1000 1000 0 1000 0 200" />
        <polyline id="Path-2" strokeLinejoin="round" points="0 197 200 197 200 0" />
        <path d="M304,198.396396 L902,198.396396" id="Line-3-Copy-2" strokeLinecap="square" />
        <path d="M107.5,398.796797 L902,398.796797" id="Line-3-Copy-3" strokeLinecap="square" />
        <path d="M107.5,597.193193 L902,597.193193" id="Line-3-Copy-4" strokeLinecap="square" />
        <polyline id="Line-3-Copy-5" strokeLinecap="square" points="108 795.339089 190.690661 795.339089 902 795.339089" />
      </g>
    </g>
  </svg>
);

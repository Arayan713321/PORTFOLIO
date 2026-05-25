import React from 'react';
import { useCursor } from '../../hooks/useCursor';
import './Cursor.css';

export function Cursor() {
  const { dotRef, ringRef } = useCursor();

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

export default Cursor;

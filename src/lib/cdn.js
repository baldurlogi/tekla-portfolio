// src/lib/cdn.js
const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD; // put this in .env or env-vars

export const cld = (id, w)  => `https://res.cloudinary.com/${CLOUD}/image/upload/w_${w},f_auto,q_auto/${id}`;

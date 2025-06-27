export const buttonPress = {
  whileTap: { scale: 0.95, transition: { type: 'spring', stiffness: 300 } }
};

export const cardHover = {
  whileHover: { y: -4, transition: { duration: 0.2 } }
};

export const sectionEntry = {
  from: { opacity: 0, scale: 0.9 },
  to: { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
};

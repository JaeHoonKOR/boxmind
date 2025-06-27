export const buttonPress = {
  whileTap: { scale: 0.95, transition: { type: "spring", stiffness: 300 } },
};

export const cardHover = {
  whileHover: { y: -4, transition: { duration: 0.2 } },
};

export const modalVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

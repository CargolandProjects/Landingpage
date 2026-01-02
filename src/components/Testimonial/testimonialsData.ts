export type Testimonial = {
  name: string;
  text: string;
  avatar: string; // /images/...
  rating?: number; // default 5
};

export const testimonials: Testimonial[] = [
  {
    name: "Joshua",
    text: "Cargoland offers fast delivery, fresh meals, and great service. The experience is smooth, reliable, and satisfying.",
    avatar: "/images/avatar.png",
    rating: 5,
  },
  {
    name: "Peace",
    text: "Fast delivery, great meals, and seamless ordering. I always get my food hot and on time. Love the experience every time.",
    avatar: "/images/avatar.png",
    rating: 5,
  },
  {
    name: "James",
    text: "Ordering is easy, delivery is quick, and the meals are always fresh. Customer support is responsive too. Highly recommended.",
    avatar: "/images/avatar.png",
    rating: 5,
  },
];

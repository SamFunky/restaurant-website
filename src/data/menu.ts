export interface MenuHighlight {
  name: string
  price: string
  desc: string
  tag: string
  img: string
  alt: string
}

export interface MenuLine {
  name: string
  price: string
}

export const highlights: MenuHighlight[] = [
  {
    name: 'The Cloud Trio',
    price: '$12',
    desc: 'Matcha, milk, and turmeric buns — braised pork belly, five-spice mushroom, and lemongrass chicken.',
    tag: 'most loved',
    img: '/images/bao-trio.png',
    alt: 'Three pastel bao buns in green, white, and yellow on a pink background',
  },
  {
    name: 'Golden Lava Bao',
    price: '$6',
    desc: 'Salted egg custard that runs when you tear it. Warning: you will order a second one.',
    tag: 'oozy',
    img: '/images/custard-bao.png',
    alt: 'A golden custard bao torn open with molten filling',
  },
  {
    name: 'Little Peach',
    price: '$5.5',
    desc: 'Our dessert bao dressed as a peach — white chocolate, miso caramel, and a wink.',
    tag: 'dessert',
    img: '/images/peach-bao.png',
    alt: 'A peach-shaped pink dessert bao on a lavender background',
  },
]

export const lines: MenuLine[] = [
  { name: 'Xiao long bao, six little soups', price: '$11' },
  { name: 'Crispy shiitake + hoisin bao', price: '$6' },
  { name: 'Karaage chicken + yuzu mayo bao', price: '$6.5' },
  { name: 'Soft tofu, chili crisp, herbs bao', price: '$5.5' },
  { name: 'Cucumber smash, sesame, garlic', price: '$7' },
  { name: 'Steamed greens, fried shallot', price: '$8' },
  { name: 'Yuzu cloud soda', price: '$5' },
  { name: 'Jasmine iced tea, barely sweet', price: '$4' },
]

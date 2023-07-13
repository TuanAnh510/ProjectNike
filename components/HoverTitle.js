import { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const options = [
  {
    title: 'Icons',
    value: [
      'Air Force 1',
      'Huarache',
      'Air Max 90',
      'Air Max 95',
      'Air Max 97',
      'Air Max 270',
      'Air Max 720',
      'All Air Max',
      'Vapormax',
    ],
  },
  {
    title: 'Shoes',
    value: [
      'All Shoes',
      'Custom Shoes',
      'Jordan Shoes',
      'Running Shoes',
      'Basketball Shoes',
      'Football Shoes',
      'Gym & Training Shoes',
      'Lifestyle Shoes',
    ],
  },
  {
    title: 'Clothing',
    value: [
      'All Clothing',
      'Modest Wear',
      'Hoodies & Pullovers',
      'Shirts & Tops',
      'Jackets',
      'Compression & Nike Pro',
      'Trousers & Leggings',
      'Shorts',
    ],
  },
  {
    title: "Kids'",
    value: [
      'Infant & Toddler Shoes',
      "Kids' Shoes",
      "Kids' Jordan Shoes",
      "Kids' Basketball Shoes",
      "Kids' Running Shoes",
      "Kids' Clothing",
      "Kids' Backpacks",
      "Kids' Socks",
    ],
  },
]

const HoverExpand = ({ className }) => {
  const [hover, setHover] = useState(false)

  const optionsShort = options.map((option) => ({
    title: option.title,
    value: option.value.slice(0, 4),
  }))

  return (
    <div className={`${className}`}>
      <ul className='visible space-y-2 md:hidden'>
        {options.map((option) => (
          <li key={option.title}>
            <Link href='/'>
              <p>{option.title}</p>
            </Link>
          </li>
        ))}
      </ul>
     
      <div
        className='hidden grid-cols-4 md:grid md:visible'
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {(hover ? options : optionsShort).map((option) => (
          <div key={option.title}>
            <div className='mb-4 font-semibold'>{option.title}</div>
            <ul className='space-y-2'>
              {option.value.map((item) => (
                <li key={item}>
                  <Link href='/'>
                    <p className='text-gray-600 hover:text-black'>{item}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

HoverExpand.propTypes = {
  className: PropTypes.string,
}

export default HoverExpand

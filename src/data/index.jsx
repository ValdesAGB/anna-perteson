import styled from 'styled-components'

export const aboutElements = [
  {
    id: '1',
    icone:
      'https://demo.cocobasic.com/seppo-html/demo-3/images/icon_preciese_v2.png',
    text: 'PIXEL PRECISE',
  },

  {
    id: '2',
    icone:
      'https://demo.cocobasic.com/seppo-html/demo-3/images/icon_secure_v2.png',
    text: 'SECURE',
  },

  {
    id: '3',
    icone:
      'https://demo.cocobasic.com/seppo-html/demo-3/images/icon_responsive_v2.png',
    text: 'RESPONSIVE',
  },
]

export const factsElements = [
  {
    id: '10',
    icone: 'fas fa-coffee',
    value: 13,
    text: 'Cups of Coffee',
  },

  {
    id: '20',
    icone: 'fas fa-cloud-download-alt',
    value: 250,
    text: 'GB Download',
  },

  {
    id: '30',
    icone: 'fas fa-code',
    value: 3.3,
    text: 'Lines of Code',
  },

  {
    id: '40',
    icone: 'fas fa-images',
    value: 743,
    text: 'Photos / Week',
  },
]

export const faqElements = [
  {
    id: '100',
    title: 'Photography Assistant',
    subTitle: '2012 – 2014',
    text: 'In sodales suscipit velit sagittis tristique aliquam consectetur eros at viverra aliquet suspendisse potenti lorem ipsum dolo colomose positive aratovi del nenosico.',
  },

  {
    id: '200',
    title: 'Junior Designer',
    subTitle: '2014 – 2016',
    text: 'Nulla tristique nulla eget nibh lobortis porta quisque posuere iaculis maximus. Aliquam quis hendrerit dui lore.',
  },

  {
    id: '300',
    title: 'Senior Designer',
    subTitle: '2016 – 2017',
    text: 'Proin mollis sapien quis elit aliquam, vitae placerat neque aliquam suspendisse dapibus elit nec pretium gravida. Sed gravida, libero ac tristique tristique, elit quam dignom.',
  },

  {
    id: '400',
    title: 'Team Leader',
    subTitle: '2017 – 2020',
    text: 'Ksem, non porta lorem dolor eget augue aliquam eu ante tincidunt, tincidunt nibh quis, accumsan metus doloe.',
  },
]

export const footerElements = [
  {
    id: '1000',
    icone: 'fab fa-twitter',
  },
  {
    id: '2000',
    icone: 'fab fa-facebook-square',
  },
  {
    id: '3000',
    icone: 'fab fa-dribbble',
  },
  {
    id: '4000',
    icone: 'fas fa-rss',
  },
]

export const portfolioElements = [
  {
    id: '10000',
    cover: 'https://demo.cocobasic.com/seppo-html/demo-3/images/portfolio1.jpg',
  },
  {
    id: '20000',
    cover: 'https://demo.cocobasic.com/seppo-html/demo-3/images/portfolio2.jpg',
  },
  {
    id: '30000',
    cover: 'https://demo.cocobasic.com/seppo-html/demo-3/images/portfolio3.jpg',
    modal: true,
  },
  {
    id: '40000',
    cover: 'https://demo.cocobasic.com/seppo-html/demo-3/images/portfolio4.jpg',
    modal: true,
  },
]

export const backButton = (setFirstCover, setSecondeCover, setIsLoading) => {
  const reset = () => {
    setIsLoading(true)
    setTimeout(() => {
      setFirstCover(false)
      setSecondeCover(false)
      setIsLoading(false)
    }, 2000)
  }

  const Button = styled.button`
    position: relative;
    color: white;
    background-color: #f8a577;
    font-size: 3em;
    padding: 0 5% 0 5%;
    font-weight: 300;
    border: none;
    border-radius: 0;
    margin-bottom: 0%;
    &:hover {
      color: white;
      background-color: #f8a577;
    }
  `

  const Icone = styled.i`
    position: relative;
    left: 0;
    transition: left 500ms ease-in-out;
    ${Button}:hover & {
      left: -15%;
      opacity: 1;
      transform: translateX(0%);
    }
  `
  return (
    <Button className="btn" onClick={() => reset()}>
      <Icone className="fa-sharp fa-solid fa-arrow-left" />
    </Button>
  )
}

export const skillsElements = [
  {
    id: 'PHOTOSHOP',
    title: 'PHOTOSHOP',
    width: '62%',
  },

  {
    id: 'ILLUSTRATOR',
    title: 'ILLUSTRATOR',
    width: '84%',
  },

  {
    id: 'MARKETING',
    title: 'MARKETING',
    width: '78%',
  },

  {
    id: 'SUPER MARIO',
    title: 'SUPER MARIO',
    width: '92%',
  },

  {
    id: 'FIGMA',
    title: 'FIGMA',
    width: '85%',
  },

  {
    id: 'DIGITAL PAINTING',
    title: 'DIGITAL PAINTING',
    width: '69%',
  },
]

export const educationElements = [
  {
    id: '2015',
    year: '2015',
    title: 'Start',
    text: 'Nunc amet tristique volutpat adipiscing vulputate phasellus eget enim aliquam euismod lorem ispum teoro muniote lore.',
  },

  {
    id: '2016',
    year: '2016',
    title: 'Basic Level',
    text: 'Turpis metus sit diam purus leo in varius ac quam nunc amet tristique volutpat adipisc vulputate phasellus eget enim aliquam euismod mauris in vitae viverra kolomisu.',
  },

  {
    id: '2017',
    year: '2017',
    title: 'Master Level',
    text: 'Placerat in massa consectetur quisque nunc ac fames lectus in libero aliquet estlo.',
  },

  {
    id: '2018',
    year: '2018',
    title: 'Pro level',
    text: 'Eget enim aliquam euismod mauris in vitae viverra blandit lectus faucibus diam consequat maecenas turpis metus sitomo.',
  },
]

export const lateralMenuElements = [
  {
    id: 'FB',
    title: 'FB',
    href: 'https://web.facebook.com/',
  },

  {
    id: 'IN',
    title: 'IN',
    href: 'https://www.linkedin.com/',
  },

  {
    id: 'TW',
    title: 'TW',
    href: 'https://twitter.com/',
  },

  {
    id: 'YT',
    title: 'YT',
    href: 'https://www.youtube.com/',
  },
]

export const headerElements = [
  {
    title: 'Home',
    href: '#',
  },

  {
    title: 'About',
    href: '#about',
  },

  {
    title: 'Portfolio',
    href: '#porfolio',
  },

  {
    title: 'Cover Letter',
    href: '#cover-letter',
  },

  {
    title: 'Skills',
    href: '#skills',
  },

  {
    title: 'Education',
    href: '#education',
  },

  {
    title: 'Facts',
    href: '#facts',
  },

  {
    title: 'Experience',
    href: '#experience',
  },

  {
    title: 'Contact',
    href: '#contact',
  },
]

export const width = 1360

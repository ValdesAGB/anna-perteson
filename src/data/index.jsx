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
    id: '1',
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
    value: '3.3K',
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

export const backButton = (
  setFirstCover,
  setSecondeCover,
  setThirdCover,
  setFourCover
) => {
  const reset = () => {
    setFirstCover(false)
    setSecondeCover(false)
    setThirdCover(false)
    setFourCover(false)
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

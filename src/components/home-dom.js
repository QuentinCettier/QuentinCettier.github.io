// import {TweenMax, Power2, TimelineLite} from "gsap";

// const $quoteContainer = Array.from(document.querySelectorAll('.quote-container'))
// const $quote = Array.from(document.querySelectorAll('.quote'))
// const $firstQuote = document.querySelector('.quote-1 .quote')
// const $secondQuote = document.querySelector('.quote-2 .quote')
// const $thirdQuote = document.querySelector('.quote-3 .quote')
// const $firstQuoteContainer = document.querySelector('.quote-1')
// const $secondQuoteContainer = document.querySelector('.quote-2')
// const $thirdQuoteContainer = document.querySelector('.quote-3')
// const $discoverButton = document.querySelector('.discover-button')
// const $copyright = document.querySelector('.copyright')
// const $about = document.querySelector('.link-container .link')

// const quoteArray = 
// [
//     {
//         'firstwidth': '500',
//         'secondwidth': '200',
//         'thirdwidth': '370',

//         'firstQuote' : '"When something is important enough,',
//         'secondQuote' :  'you do it even if ',
//         'thirdQuote' :'the adds are not in your favor"'
//     },
//     {
//         'firstwidth': '440',
//         'secondwidth': '230',
//         'thirdwidth': '300',
//         'firstQuote' :'"SpaceX designs, manufactures and ',
//         'secondQuote' : 'launches advanced ',
//         'thirdQuote' :'rockets and spacecraft"'
//     },
//     {
//         'firstwidth': '380',
//         'secondwidth': '270',
//         'firstQuote' :'"Between success and failures,',
//         'secondQuote' : 'SpaceX in all its data"'
//     }
// ]

// const randomQuote = () =>
// {
//     const random = Math.random()
//     if(random < 0.33)
//     {
//         $firstQuoteContainer.style.width = `${quoteArray[0].firstwidth}px`
//         $secondQuoteContainer.style.width = `${quoteArray[0].secondwidth}px`
//         $thirdQuoteContainer.style.width = `${quoteArray[0].thirdwidth}px`

//         $firstQuote.innerHTML = quoteArray[0].firstQuote
//         $secondQuote.innerHTML = quoteArray[0].secondQuote
//         $thirdQuote.innerHTML = quoteArray[0].thirdQuote
//     }
//     else if(random >= 0.33 && random < 0.66)
//     {
//         $firstQuoteContainer.style.width = `${quoteArray[1].firstwidth}px`
//         $secondQuoteContainer.style.width = `${quoteArray[1].secondwidth}px`
//         $thirdQuoteContainer.style.width = `${quoteArray[1].thirdwidth}px`
        

//         $firstQuote.innerHTML = quoteArray[1].firstQuote
//         $secondQuote.innerHTML = quoteArray[1].secondQuote
//         $thirdQuote.innerHTML = quoteArray[1].thirdQuote
//     }
//     else if(random >= 0.66 && random < 1)
//     {
//         $firstQuoteContainer.style.width = `${quoteArray[2].firstwidth}px`
//         $secondQuoteContainer.style.width = `${quoteArray[2].secondwidth}px`

//         $firstQuote.innerHTML = quoteArray[2].firstQuote
//         $secondQuote.innerHTML = quoteArray[2].secondQuote
//     }
// }
// randomQuote()

// let tlFadeInMain = new TimelineLite()

// tlFadeInMain
//     .fromTo($about, 1, {y:50}, {y:0}, '+=1')
//     .fromTo($copyright, 1, {y:50}, {y:0}, '-=1')
//     .fromTo($quote, 1, {y:50}, {y:0}, '-=1')
//     .fromTo($discoverButton, .5, {y:50}, {y:0},'-=.5')

// $discoverButton.addEventListener('click', () =>
// {
//     let tlFadeOutMain = new TimelineMax({onComplete : transition})
//     tlFadeOutMain
//         .fromTo($about, 1, {y:0}, {y:50})
//         .fromTo($copyright, 1, {y:0}, {y:50}, '-=1')
//         .fromTo($quote, .5, {y:0}, {y:50}, '-=1')
//         .fromTo($discoverButton, .4, {y:0}, {y:60}, '-=1')

// })

// const  transition = () =>
// {
    
// }
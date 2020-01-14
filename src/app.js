import $ from 'jquery'
import quotes from './quotes'
import colors from './colors'
import 'normalize.css'
import './styles/styles.scss'

const quoteGenerator = () => {
    const randomNum = Math.floor(Math.random() * quotes.length)
    
    return quotes[randomNum]
}

const quote = quoteGenerator()

$('#text').text('" ' + quote.text + '. "')
$('#author').text('- ' + quote.author)

$('#new-quote').click(function() {
    const randomNum = Math.floor(Math.random() * quotes.length)
    const randomColor = colors[randomNum]
    const quote = quoteGenerator()
    let quoteString = quote.text.split(' ').join('%20')
          quoteString = `"${quoteString}." - ${quote.author}`
    const twitterHref = 'https://twitter.com/intent/tweet/'

    $('body').css('background', randomColor)
    $('#text').css('color', randomColor)
    $('#author').css('color', randomColor)
    $('#new-quote').css('background-color', randomColor)
    $('.fa-twitter').css('color', randomColor)

    $('#text').fadeOut(500, function() {
        $('#text').text('" ' + quote.text + '. "')
        $('#author').text('- ' + quote.author)
        $('#text').fadeIn()
        $('#author').fadeIn()
        
    })

    $('#tweet-quote').attr('href', twitterHref + '?text=' + quoteString)
})


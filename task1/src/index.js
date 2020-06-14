import './styles/style.scss'
import './styles/style.less'
import './styles/style.sass'

import jpegImage from './assets/file.jpg'
import pngImage from './assets/shrek-001.png'
import svgImage from './assets/Freesample.svg'
import gif from './assets/6os.gif'

const say =()=> console.log('Hello')

class Hello {
  static say = 'hello'
}

const hello = new Hello()
say()
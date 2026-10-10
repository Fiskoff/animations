import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'

document.addEventListener('DOMContentLoaded', () => {
  Prism.highlightAll()
})
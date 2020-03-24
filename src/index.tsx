import React from 'react'
import ReactDOM from 'react-dom'
// import WebFont from 'webfontloader'

import App from './App'
import './index.css'
import './datepicker.css'
import * as serviceWorker from './serviceWorker'

// WebFont.load({
//   google: {
//     families: ['Nunito:200,400,600,800', 'Helvetica']
//   }
// });

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

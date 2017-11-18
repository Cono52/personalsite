import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <style>{`
              /* CSS reset with box-sizing fix */
              html, body, div, span, applet, object, iframe,
              h1, h2, h3, h4, h5, h6, p, blockquote, pre,
              a, abbr, acronym, address, big, cite, code,
              del, dfn, em, img, ins, kbd, q, s, samp,
              small, strike, strong, sub, sup, tt, var,
              b, u, i, center,
              dl, dt, dd, ol, ul, li,
              fieldset, form, label, legend,
              table, caption, tbody, tfoot, thead, tr, th, td,
              article, aside, canvas, details, embed,
              figure, figcaption, footer, header, hgroup,
              menu, nav, output, ruby, section, summary,
              time, mark, audio, video {
                margin: 0;
                padding: 0;
                border: 0;
                box-shadow: 0px 0px 0px 1px hsl(0, 0%, 95%);
                font-size: 100%;
                font: inherit;
                vertical-align: baseline;
              }
              article, aside, details, figcaption, figure,
              footer, header, hgroup, menu, nav, section {
                display: block;
              }
              html {
                font-family: Helvetica;
                box-sizing: border-box;
              }
              *, *:before, *:after {
                box-sizing: inherit;
              }
              body {
                line-height: 1;
                height: 100%;
                font-size:16px;
              }
              ol, ul {
                list-style: none;
              }
              blockquote, q {
                quotes: none;
              }
              blockquote:before, blockquote:after,
              q:before, q:after {
                content: '';
                content: none;
              }
              table {
                border-collapse: collapse;
                border-spacing: 0;
              }

              #style-2::-webkit-scrollbar-track
              {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                border-radius: 10px;
                background-color: #F5F5F5;
              }
              
              #style-2::-webkit-scrollbar
              {
                width: 5px;
                background-color: #F5F5F5;
              }
              
              #style-2::-webkit-scrollbar-thumb
              {
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
                background-color: grey;
              }

              canvas.drawer {
                position: fixed;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100vh;
                z-index: -1;
              }

          `}</style>
          {this.props.styleTags}
          <title>Conor O'Flanagan</title>
        </Head>
        <body id="style-2">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
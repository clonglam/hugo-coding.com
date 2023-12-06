import React from "react"
import Script from "next/script"

type Props = {}

function Gtag({}: Props) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-F9YQPK1FHV"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-F9YQPK1FHV');
          `}
      </Script>
    </>
  )
}

export default Gtag

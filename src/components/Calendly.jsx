import { useState, useEffect } from 'react'
import Head from 'next/head'

export function Calendly() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient ? (
        <>
          <Head>
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            ></script>
          </Head>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/jasonpmorrison"
            style={{ 'min-width': '320px', height: '700px' }}
          ></div>
        </>
      ) : (
        ''
      )}
    </>
  )
}

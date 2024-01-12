import { useEffect } from 'react'

export default function AdBanner({ dataAdSlot }: { dataAdSlot: string }) {
  useEffect(() => {
    try {
      const initializeAds = () => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      }

      if (document.readyState === 'complete') {
        initializeAds()
      } else {
        window.addEventListener('load', initializeAds)
        return () => window.removeEventListener('load', initializeAds)
      }
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
      data-ad-slot={dataAdSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

import Link from 'next/link'
import LegalPolicy from '../components/Global/LegalPolicy/LegalPolicy'

export default function AffiliateDisclosure() {
  return (
    <LegalPolicy title="Affiliate Disclosure">
      <p>Effective Date: 10/21/2023</p>
      <p>Last Updated: 10/21/2023</p>
      <p>
        Links to products and services on this site may be affiliate links. When you click on these
        links and make a purchase within a certain amount of time, I make a small commission. The
        commission is paid by the retailers and does not change the price you pay.
      </p>
      <p>
        As an example: If you click on a link of mine for a pair of fabric scissors and complete a
        purchase within 24 hours of clicking said link, I may receive a commission, usually between
        1-10%, of your total order.
      </p>
      <p>
        I&apos;m careful to link to products and retailers that I use myself and recommend. In
        certain cases when the exact product I use is no longer available, I will link to a suitable
        alternative. Money earned keeps Moonbelly Makes running and allows me to do what I love for
        a living. Thank you for your support.
      </p>
      <p>As an Amazon Associate, I earn from qualifying purchases.</p>
      <p>
        Amazon and the Amazon logo are trademarks of{' '}
        <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
          Amazon.com
        </a>
        , Inc. or its affiliates.
      </p>
    </LegalPolicy>
  )
}

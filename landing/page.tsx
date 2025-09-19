import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

function isMobileUserAgent(userAgent: string): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
}

export default function LandingPage() {
  const userAgent = headers().get('user-agent') || ''
  if (isMobileUserAgent(userAgent)) {
    redirect('/dashboard')
  }

  return (
    <main className="min-h-screen bg-black text-white relative">
      <video
        className="w-full h-[100svh] object-cover"
        src="/videos/opening scene for website.mp4"
        autoPlay
        muted
        playsInline
        controls={false}
        preload="metadata"
      />
    </main>
  )
}

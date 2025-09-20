export default function LandingPage() {
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

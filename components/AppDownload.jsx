export default function AppDownload() {
  return (
    <section className="bg-black text-white py-20 text-center" id="download">
      <h2 className="text-4xl font-bold mb-4">Download Our App For Better Experience</h2>
      <p className="text-gray-300 mb-8">Available on iOS and Android.</p>

      <div className="flex justify-center gap-6">
        <img
          src="/gp.webp"
          alt="Google Play"
          className="h-16 w-auto cursor-pointer"
        />
        <img
          src="/ap.png"
          alt="App Store"
          className="h-16 w-auto cursor-pointer"
        />
      </div>
    </section>
  );
}

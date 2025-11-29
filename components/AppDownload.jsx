import Image from "next/image";

export default function AppDownload() {
  return (
    <section id="download" className="bg-black text-white py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Download Our App For Better Experience
      </h2>

      <p className="text-gray-300 mb-10">
        Available on iOS and Android.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">

        {/* Google Play Badge */}
        <Image
          src="/gp.webp"
          alt="Get it on Google Play"
          width={180}
          height={60}
          className="cursor-pointer"
          priority
        />

        {/* App Store Badge */}
        <Image
          src="/appstore.png"
          alt="Download on the App Store"
          width={180}
          height={60}
          className="cursor-pointer"
          priority
        />

      </div>
    </section>
  );
}

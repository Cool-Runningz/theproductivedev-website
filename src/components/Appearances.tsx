export default function Appearances() {
  return (
    <section>
      <h2 className="font-aspekta mb-5 text-2xl font-[650]">Appearances</h2>

      {/* Cards */}
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        <iframe
          title="frontend.fm podcast"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/episode/17fCQ2SPSVT3cnzXUgyJRl/video?utm_source=generator"
          width="400"
          height="323"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="eager"></iframe>
      </div>
    </section>
  );
}

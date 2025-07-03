export default function FeaturedProjects() {
  return (
    <section>
      <h2 className="font-aspekta mb-5 text-2xl font-[650]">
        Featured Projects
      </h2>

      {/* Cards */}
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        <a
          className="rounded-lg border border-slate-200 p-5 transition-transform duration-700 ease-in-out odd:-rotate-1 even:rotate-1 hover:rotate-0 hover:duration-100 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30"
          href="https://www.newline.co/courses/the-approachable-guide-to-accessible-components"
          target="_blank"
          rel="noreferrer">
          <div className="flex h-full flex-col">
            <div className="grow">
              <img
                src="https://raw.githubusercontent.com/Cool-Runningz/Cool-Runningz/main/images/course-thumbnail.webp"
                alt="'The Approachable Guide to Accessible Components' cover"
                height="auto"
                width="575px"
                className="mb-2"
              />
              <div className="font-aspekta mb-1 text-lg font-[650]">
                The Approachable Guide to Accessible Components
              </div>
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                My take on an accessibility course.
              </p>
            </div>
            <BlueArrow />
          </div>
        </a>
        <a
          className="rounded-lg border border-slate-200 p-5 transition-transform duration-700 ease-in-out odd:-rotate-1 even:rotate-1 hover:rotate-0 hover:duration-100 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30"
          href="https://cultureinbetween.com/"
          target="_blank"
          rel="noreferrer">
          <div className="flex h-full flex-col">
            <div className="grow">
              <img
                src="https://raw.githubusercontent.com/Cool-Runningz/culture-in-between/refs/heads/main/public/images/hero-light.png"
                alt="'Culture In Between' cover"
                height="auto"
                width="575px"
                className="mb-2"
              />
              <div className="font-aspekta mb-1 text-lg font-[650]">
                Culture In Between
              </div>
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                A podcast that shares the stories of people who grew up in a
                culture outside of their parents' culture.
              </p>
            </div>
            <BlueArrow />
          </div>
        </a>
        <a
          className="rounded-lg border border-slate-200 p-5 transition-transform duration-700 ease-in-out odd:-rotate-1 even:rotate-1 hover:rotate-0 hover:duration-100 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30"
          href="https://range-input-css.netlify.app/"
          target="_blank"
          rel="noreferrer">
          <div className="flex h-full flex-col">
            <div className="grow">
              <img
                src="https://raw.githubusercontent.com/Cool-Runningz/range-input.css/refs/heads/main/apple-touch-icon.png"
                alt="range-input.css logo"
                className="mb-2 h-10 w-10"></img>
              <div className="font-aspekta mb-1 text-lg font-[650]">
                range-input.css
              </div>
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                Generate CSS to style range inputs that look consistent across
                all browsers.
              </p>
            </div>
            <BlueArrow />
          </div>
        </a>
        <a
          className="rounded-lg border border-slate-200 p-5 transition-transform duration-700 ease-in-out odd:-rotate-1 even:rotate-1 hover:rotate-0 hover:duration-100 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30"
          href="https://music-maestro.netlify.app/"
          target="_blank"
          rel="noreferrer">
          <div className="flex h-full flex-col">
            <div className="grow">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700">
                <MusicIcon />
              </div>
              <div className="font-aspekta mb-1 text-lg font-[650]">
                Music Maestro
              </div>
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                Use AI to curate a playlist of songs and discover music on
                Spotify.
              </p>
            </div>
            <BlueArrow />
          </div>
        </a>
      </div>
    </section>
  );
}

const BlueArrow = () => {
  return (
    <div className="flex justify-end text-sky-500">
      <svg
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="12">
        <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
      </svg>
    </div>
  );
};

const MusicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6">
    <path
      fill-rule="evenodd"
      d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
      clip-rule="evenodd"
    />
  </svg>
);

import { getFormattedDate } from "@utils/helpers";
import type { PostMetadata } from "./RecentPosts";

type Post = Omit<PostMetadata["node"], "id">;

export default function PostItem({
  title,
  brief,
  slug,
  publishedAt,
  coverImage,
}: Post) {
  return (
    <article className="border-b border-slate-100 py-5 dark:border-slate-800">
      <div className="flex items-start">
        <img
          className="mr-6 h-16 w-16 rounded-sm object-cover sm:h-[88px] sm:w-[88px]"
          src={coverImage.url}
          width={88}
          height={88}
          alt=""
        />
        <div>
          <div className="mb-1 flex gap-x-2 text-xs text-slate-500 uppercase">
            <span className="text-sky-500">
              <CalendarIcon />
            </span>{" "}
            <span className="sr-only">Published on:</span>
            {getFormattedDate(publishedAt)}
          </div>
          <h3 className="font-aspekta mb-1 text-lg font-[650]">
            <a
              className="relative inline-flex duration-150 ease-out before:absolute before:inset-0 before:-z-10 before:origin-center before:translate-y-1/4 before:scale-x-0 before:-rotate-2 before:bg-sky-200 before:opacity-30 before:duration-150 before:ease-in-out hover:text-sky-500 hover:before:scale-100 dark:before:bg-sky-500"
              /*  href={`/blog/${slug}`} */
              href={`https://blog.alyssaholland.me/${slug}`}>
              {title}
            </a>
          </h3>
          <div className="flex">
            <div className="grow text-sm text-slate-500 dark:text-slate-400">
              {brief}
            </div>
            {/** Arrow to individual blog post */}
            {/* <a className="hidden lg:flex shrink-0 text-sky-500 items-center justify-center w-12 group" href={`/blog/${slug}`} tabIndex={-1}>
              <svg
                className="fill-current group-hover:translate-x-2 duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
              >
                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </article>
  );
}

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="size-4">
    <path d="M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z" />
    <path
      fillRule="evenodd"
      d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
      clipRule="evenodd"
    />
  </svg>
);

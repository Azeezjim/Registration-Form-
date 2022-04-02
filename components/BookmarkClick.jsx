import Link from "next/link";
import {
  MdOutlinePhotoSizeSelectActual,
  MdOutlineVideoCameraFront,
} from "react-icons/md";
import { AiOutlineAudio } from "react-icons/ai";

function BookmarkClick() {
  return (
    <div>
      <div className="bg-white p-2">
        <div className="space-y-4 text-xs flex justify-center ml-4 mt-[-10px] flex-col">
          <Link href="/bookmarks/photos" replace>
            <a>
              <span className="flex space-x-4 text-gray-600 ">
                <MdOutlinePhotoSizeSelectActual className="mt-1 font-semibold" />
                <p>Photos</p>
              </span>
            </a>
          </Link>
          <Link  href="/bookmarks/videos" replace>
            <a>
              <span className="flex space-x-4 ">
                <MdOutlineVideoCameraFront className="mt-1 font-semibold" />
                <p>Videos</p>
              </span>
            </a>
          </Link>
          <span className="flex space-x-4 ">
            <AiOutlineAudio className="mt-1 font-semibold" />
            <p>Audios</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookmarkClick;

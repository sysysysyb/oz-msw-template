import { twMerge } from "tailwind-merge";

const PostImages = ({ imageList, containerClassName }) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-around gap-1",
        containerClassName
      )}
    >
      {imageList?.slice(0, 3).map((img, index) => {
        return (
          <div key={index}>
            <img
              src={img}
              alt={`${img}-${index}`}
              className="h-48 w-48 rounded-3xl"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostImages;

import { useState } from "react";
import { Heart, Heart as HeartFilled, Send, MessageCircle, Bookmark } from 'lucide-react';

const PostItem = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.numberOfLikes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev) => prev + (liked ? -1 : 1));
  };

  return (
    <div className="bg-white text-black rounded-lg shadow-md max-w-md mx-auto mb-8">
      {/* Header */}
      <div className="flex items-center px-4 py-3">
        <img
          src={post.avatarUrl}
          
          alt={post.username}
          className="w-10 h-10 rounded-full object-cover border border-gray-300 mr-3"
        />
        <span className="font-semibold">{post.username}</span>
        <br />
      </div>

      {/* Image */}
      <img
        src={post.imageUrl}
        alt="Post"
        className="w-full object-cover max-h-[500px]"
      />
      <br />

      {/* Actions */}
      <div className="flex items-center gap-4 px-4 py-2 text-xl">
        <button onClick={toggleLike}>
          {liked ? (
            <Heart className="text-red-500" />
          ) : (
            <HeartFilled className="text-black" />
          )}
        </button>
        <MessageCircle className="cursor-pointer" />
        <Bookmark className="cursor-pointer" />
        <Send className="cursor-pointer"/>
      </div>

      {/* Likes */}
      <div className="px-4 text-sm font-medium">
        {likes} curtida{likes !== 1 && "s"}
      </div>

      {/* Description */}
      <div className="px-4 pb-4 text-sm">
        <span className="font-semibold mr-1">  </span>
        {post.description}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default PostItem;

import type { CommentData } from "lib/types/main";

const Comment = ({ commentData }: { commentData: CommentData }) => {
  return (
    <div className="flex flex-col gap-2 mb-5 border border-solid border-slate-300 rounded-md p-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm">{commentData.name}</span>
        <span className="text-xs text-slate-500">{commentData.email}</span>
      </div>
      <div>{commentData.body}</div>
    </div>
  );
};

export default Comment;

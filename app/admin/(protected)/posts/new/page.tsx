import PostForm from "../../PostForm";
import { createPost } from "../../actions";

export default function NewPostPage() {
  return (
    <div>
      <h1 className="font-display font-light text-2xl text-ink mb-8">
        Nuevo caso de éxito
      </h1>
      <PostForm action={createPost} submitLabel="Crear caso" />
    </div>
  );
}

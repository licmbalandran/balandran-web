"use client";

export default function DeleteButton({
  action,
  postTitle,
}: {
  action: () => Promise<void>;
  postTitle: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(`¿Borrar "${postTitle}"? Esto no se puede deshacer.`)) {
          e.preventDefault();
        }
      }}
    >
      <button
        type="submit"
        className="text-sm text-red-600 hover:text-red-800 border-b border-red-200 hover:border-red-600 pb-1"
      >
        Borrar
      </button>
    </form>
  );
}

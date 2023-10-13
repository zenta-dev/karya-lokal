import { Button } from "../ui/button";

const handleDelete = async (id: string) => {
  console.log(id);
  const res = await fetch(`/api/products/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log(data);
};
export const DeleteProduct = ({ id }: { id: string }) => {
  return (
    <Button
      className="bg-red-500 hover:bg-red-600"
      onClick={() => handleDelete(id)}
    >
      Hapus
    </Button>
  );
};

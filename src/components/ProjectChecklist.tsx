import { useEffect, useState } from "react";

type ChecklistItem = {
  id: number;
  label: string;
  done: boolean;
};

const initialChecklist: ChecklistItem[] = [
  { id: 1, label: "Project setup completed", done: true },
  { id: 2, label: "Supabase authentication working", done: true },
  { id: 3, label: "Product grid implemented", done: true },
  { id: 4, label: "Search and filtering working", done: true },
  { id: 5, label: "Shopping cart functionality complete", done: true },
  { id: 6, label: "Cart persistence implemented", done: false },
  { id: 7, label: "Checkout and payment integration", done: false },
  { id: 8, label: "Order history implemented", done: false },
];

export default function ProjectChecklist() {
  const [items, setItems] = useState<ChecklistItem[]>(() => {
    const saved = localStorage.getItem("prestige-cart-checklist");
    return saved ? JSON.parse(saved) : initialChecklist;
  });

  useEffect(() => {
    localStorage.setItem("prestige-cart-checklist", JSON.stringify(items));
  }, [items]);

  const toggleItem = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Project Checklist</h2>

      <ul className="space-y-3">
        {items.map(item => (
          <li
            key={item.id}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => toggleItem(item.id)}
          >
            <input
              type="checkbox"
              checked={item.done}
              readOnly
              className="w-4 h-4 accent-black"
            />
            <span
              className={`${
                item.done ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

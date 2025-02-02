import { Suspense } from "react";
import { ShopContent } from "../components/ShopContent";

export default function Shop() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}

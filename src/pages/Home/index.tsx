import { useEffect, useState } from "react";
import { Layout } from "../../components";
import Card from "../../components/Card";

export default function Home() {
  const [items, setItems] = useState<Array<Product>>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      {
        items.map((item) => (
          <Card key={item.id} product={item}/>
        ))
      }
      </div>
    </Layout>
  );
}

import Link from "next/link";

type props = {
  sku: string;
  category: string;
  tags: string[];
  brand?: string;
};

export default function ProductMeta({
  sku,
  category,
  tags,
  brand,
}: props) {
  let categoryRender;
  if (category === "Thú cưng") categoryRender = "pets";
  else if (category === "Thức ăn") categoryRender = "foods";
  else categoryRender = "supplies";

  return (
    <ul className="mt-[25px] columns-2 gap-x-[30px] space-y-[10px] text-[12px] font-semibold leading-[1.25] tracking-[0.02em] large-screen:ml-[45px] between-small-smallest:ml-[35px] smallest-screen:mx-[35px]">
      <li>
        SKU:&nbsp;<span className="font-normal">{sku}</span>
      </li>
      <li>
        Danh mục:&nbsp;
        <span className="font-normal text-primary">
          <Link
            href={`/${categoryRender}`}
            className="capitalize hover:text-secondary"
          >
            {category}
          </Link>
        </span>
      </li>
      <li>
        Thẻ:&nbsp;
        <span className="font-normal text-primary">
          {tags.map((tag, index) => (
            <span key={index}>
              <Link
                href={`/${categoryRender}`}
                className="hover:text-secondary"
              >
                {tag}
              </Link>
              {index < tags.length - 1 && ", "}
            </span>
          ))}
        </span>
      </li>
      {brand && (
        <li>
          Thương hiệu:&nbsp;
          <span className="font-normal text-text_color">{brand}</span>
        </li>
      )}
    </ul>
  );
}

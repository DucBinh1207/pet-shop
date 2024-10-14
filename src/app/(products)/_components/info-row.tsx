export default function InfoRow({
  name,
  value,
}: {
  name: string;
  value: string | number;
}) {
  if (!value) return null;

  return (
    <tr className="flex w-full border-b border-solid border-light_gray_color_second text-left">
      <th className="min-w-[50%] py-[14px] font-bold text-primary">{name} :</th>
      <td className="min-w-[50%] py-[14px]">{value}</td>
    </tr>
  );
}

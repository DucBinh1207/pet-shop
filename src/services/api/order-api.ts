import { get, post } from "../axios";
import { toSnakeCase } from "@/utils/to-snake-case";
import { toCamelCase } from "@/utils/to-camel-case";
import { OrderFormType } from "@/app/cart/checkout/_components/bill-details";
import { ResponsePayment } from "@/types/response-payment";
import { OrderApiResponse } from "@/types/order-item";

export async function CreateOrder({
  data: orderData,
}: {
  data: OrderFormType;
}) {
  type dataType = {
    idOrder: string;
  };
  const data = toSnakeCase(orderData);
  const dataResponse = await post<dataType>({
    url: "/orders/create",
    data,
  });
  return toCamelCase<dataType>(dataResponse);
}

export async function Payment({
  data: orderData,
}: {
  data: { idOrder: string; amount: string };
}) {
  const data = toSnakeCase(orderData);
  const dataResponse = await post<ResponsePayment>({
    url: "/payment",
    data,
  });

  return toCamelCase<ResponsePayment>(dataResponse);
}

export async function getOrderDetail(url: string) {
  const rawData = await get<OrderApiResponse>({
    url: url,
  });
  const data = toCamelCase<OrderApiResponse>(rawData);
  return data;
}

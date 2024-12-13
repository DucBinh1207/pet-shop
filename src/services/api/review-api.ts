import { toCamelCase } from "@/utils/to-camel-case";
import { get, post, update, updateFormData } from "../axios";
import { AddressFormType } from "@/app/profile/_components/address";
import { ChangeAccountInfoFormType } from "@/app/profile/_components/account-info";
import { toSnakeCase } from "@/utils/to-snake-case";
import { ChangePasswordFormType } from "@/app/profile/_components/account-password";
import { AddReviewDataType, ReviewType } from "@/types/review";

export async function getReviews(url: string) {
  const rawData = await get<ReviewType[]>({
    url: url,
  });
  const data = toCamelCase<ReviewType[]>(rawData);
  return data;
}

export async function addReview({
  data: reviewData,
}: {
  data: AddReviewDataType;
}) {
  const data = toSnakeCase(reviewData);
  return await post({
    url: "/comment/add",
    data,
  });
}

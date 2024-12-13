import Button from "@/components/common/button";
import StarIcon from "@/components/common/icons/star-icon";
import useMutation from "@/hooks/use-mutation";
import { getAuthTokenFromInternalServer } from "@/services/api/internal-auth-api";
import { addReview } from "@/services/api/review-api";
import { AddReviewDataType } from "@/types/review";
import cn from "@/utils/style/cn";
import { toastError, toastSuccess } from "@/utils/toast";
import { useParams } from "next/navigation";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function ReviewForm({ trigger }: { trigger: () => void }) {
  const [star, setStar] = useState(0);

  const { productId } = useParams<{ productId: string }>();
  const [reviewContent, setReviewContent] = useState("");

  function handleChangeReviewContent(e: ChangeEvent<HTMLTextAreaElement>) {
    setReviewContent(e.target.value);
  }

  const { mutate, isMutating } = useMutation({
    fetcher: addReview,
    options: {
      onSuccess: async () => {
        toastSuccess("Thêm đánh giá thành công");
        trigger();
      },
      onError: (error) => {
        toastError(error.message);
      },
      onFinally: () => {},
    },
  });

  const handleAddReview = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    const token = await getAuthTokenFromInternalServer();
    if (!token) {
      window.location.href = "/login";
    } else {
      if (productId && star !== 0 && reviewContent !== "") {
        const reviewData: AddReviewDataType = {
          idProduct: productId,
          rating: star,
          content: reviewContent,
        };
        mutate({ data: reviewData });
        setStar(0);
        setReviewContent("");
      }
    }
  };

  return (
    <form className="flex flex-col">
      <div className="mb-[15px] mt-[25px] flex items-center gap-[11px]">
        <span className="flex gap-[2px]">
          {[...Array(star)].map((_, index) => (
            <StarIcon
              size={12}
              className={cn(
                "cursor-pointer fill-current text-dark_yellow_color",
              )}
              key={index}
              onClick={() => {
                setStar(index + 1);
              }}
            />
          ))}

          {[...Array(5 - star)].map((_, index) => (
            <StarIcon
              size={12}
              className={cn(
                "cursor-pointer fill-current text-dark_yellow_color opacity-20",
              )}
              key={index}
              onClick={() => {
                setStar(index + 1 + star);
              }}
            />
          ))}
        </span>

        <span className="text-[13px] font-bold leading-[16px] tracking-[0.01em] text-text_color">
          Đánh giá của bạn *
        </span>
      </div>

      <textarea
        name="comment"
        value={reviewContent}
        id="comment"
        placeholder="Nhập đánh giá *"
        className="mt-[10px] min-h-[148px] rounded-[3px] border border-solid border-input_border_color bg-background_color px-[12px] py-[9px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
        onChange={handleChangeReviewContent}
      />

      {star !== 0 && reviewContent !== "" && !isMutating ? (
        <>
          <Button
            size="xsm"
            className="mt-[20px] text-center text-[13px] font-bold leading-[16px]"
            onClick={handleAddReview}
          >
            Gửi
          </Button>
        </>
      ) : (
        <button
          className="mt-[20px] inline-block rounded-[25px] border-[2px] border-solid border-primary bg-white px-[25px] py-[15px] text-center text-[13px] font-bold uppercase leading-[16px] text-primary opacity-30 outline-none"
          disabled
        >
          Gửi
        </button>
      )}
    </form>
  );
}

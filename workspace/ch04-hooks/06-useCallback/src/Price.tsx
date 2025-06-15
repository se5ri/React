interface PriceProps {
  price: number; // 상품 단가
  maxQuantity: number; // 최대 구매 가능 수량
  shippingFees: number; // 기본 배송비 (5개당)
  productPrice: number; // 계산된 총 상품 금액
  quantity: number; // 현재 선택된 수량

  // 수량 변경 핸들러
  handleQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Price({
  price,
  maxQuantity,
  shippingFees,
  productPrice,
  quantity,
  handleQuantityChange,
}: PriceProps) {
  return (
    <>
      <h2>수량 선택</h2>
      <div>
        가격: {price.toLocaleString()}원<br />
        수량:{" "}
        <input
          type="number"
          min="1"
          max={maxQuantity}
          value={quantity}
          onChange={handleQuantityChange}
        />
        (배송비는 5개당 {shippingFees.toLocaleString()}원씩 추가됩니다.)
        <br />
        상품 금액: {productPrice.toLocaleString()}원
      </div>
    </>
  );
}

export default Price;

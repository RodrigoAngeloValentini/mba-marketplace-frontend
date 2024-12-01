import ProductImg from '@/assets/product.png'

export function Product() {
  return (
    <div className="rounded-3xl border bg-white border-none p-1">
      <img
        src={ProductImg}
        alt="Product Img"
        className="rounded-3xl w-full object-cover"
      />
      <div className="flex flex-col p-4">
        <div className="flex flex-row justify-between">
          <p className="text-gray-400 font-semibold">Sofá</p>
          <p className="text-gray-400 font-semibold">
            <span className="text-sm pr-1">R$</span>1.200,90
          </p>
        </div>

        <p className="font-normal text-gray-300 text-sm line-clamp-2">
          Sofá revestido em couro legítimo, com estrutura em madeira maciça e
          pés em metal cromado.
        </p>
      </div>
    </div>
  )
}

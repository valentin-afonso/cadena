import SvgVisa from "@/ui/svg/SvgVisa";

export default function BlocHeroVisaTransac() {
  return (
    <div className="relative bg-white rounded-xl flex items-center justify-between w-[343px] p-[20px] translate-x-[-31px]">
      <div className="flex items-center gap-4">
        <SvgVisa />
        <div className="flex flex-col gap-1">
          <p className="text-gray-tertiary uppercase text-sm font-bold">VISA</p>
          <p className="text-gray-primary text-xs">Mastercard • 9390</p>
        </div>
      </div>
      <p className="text-gray-tertiary font-medium">$3 520.45</p>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 translate-y-1/2 left-1/2 translate-x-[-50%]"
      >
        <circle cx="9" cy="9" r="9" fill="#712FFF" />
        <path
          d="M12.2549 7.93782L9.99548 10.2889C9.52173 10.7812 9.04977 11.2734 8.57869 11.7647C8.27738 12.0784 7.76453 12.0784 7.46144 11.7647C7.369 11.6676 7.27657 11.5714 7.18591 11.4751C6.53173 10.7932 5.87934 10.1131 5.22605 9.43029C4.91408 9.10644 4.93541 8.59662 5.22605 8.26815C5.51403 7.9406 6.05088 7.96373 6.3433 8.26815C6.43663 8.36438 6.52907 8.4606 6.61973 8.55683C7.08725 9.04352 7.55477 9.53299 8.02051 10.0197C8.7609 9.24894 9.49951 8.48096 10.239 7.71021L11.6558 6.23532C11.9678 5.91055 12.4575 5.93276 12.773 6.23532C13.0868 6.53789 13.0646 7.0949 12.7722 7.39932C12.6006 7.57789 12.4264 7.75925 12.2549 7.93782Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

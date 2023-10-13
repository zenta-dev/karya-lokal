export interface IBantuanProps {}
const Bantuan = ({ ...props }: IBantuanProps): JSX.Element => {
  return (
    <div className="bg-[#eff6ff] border-solid border-[#000000] border w-[1283px] h-[1984px] relative overflow-hidden">
      <svg
        className="rounded-none absolute left-[1166px] top-[1373px] overflow-visible"
        style={{ transform: "translate(-1062px, -1213px)" }}
        width="1062"
        height="1213"
        viewBox="0 0 1062 1213"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_78_17261)">
          <path
            d="M1062 1113C1062 1168.23 1017.23 1213 962 1213L100 1213C44.7715 1213 0 1168.23 0 1113L0 100C0 44.7716 44.7715 0 100 0L962 0C1017.23 0 1062 44.7715 1062 100L1062 1113Z"
            fill="#DBEAFE"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_78_17261"
            x="0"
            y="0"
            width="1075"
            height="1226"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="8" dy="8" />
            <feGaussianBlur stdDeviation="2.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_78_17261"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_78_17261"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <div className="bg-[#1e3a8a] w-[1282px] h-[590px] absolute left-0 top-[1394px]">
        <div className="w-[269.69px] h-[204px] absolute left-[102px] top-[332px]">
          <div
            className="text-[#ffffff] text-left absolute left-[2.02px] top-0 w-[267.67px]"
            style={{ font: "600 24px 'Poppins', sans-serif" }}
          >
            Masih Bingung dan <br />
            Memiliki Pertanyaan?{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[2.02px] top-[81px] w-[214.13px]"
            style={{ font: "500 16px 'Poppins', sans-serif" }}
          >
            Hubungi Kami Kapanpun :{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[47.47px] top-[130px] w-[136.36px]"
            style={{
              font: "400 16px 'Poppins', sans-serif",
              textDecoration: "underline",
            }}
          >
            cs@karyalokal.id{" "}
          </div>
          <div className="w-[27.27px] h-[27px] absolute left-[2.02px] top-[130px] overflow-hidden">
            <svg
              className="absolute left-0 top-0 overflow-visible"
              style={{}}
              width="27.27178955078125"
              height="27"
            ></svg>

            <svg
              className="absolute left-[2.27px] top-[4.5px] overflow-visible"
              style={{}}
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0942 0.95C21.7158 0.671 21.2527 0.5 20.7471 0.5H2.56586C2.0602 0.5 1.59715 0.671 1.21875 0.95L11.6565 11.2843L22.0942 0.95Z"
                fill="white"
              />
              <path
                d="M0.292969 3.2157V16.2499C0.292969 17.4874 1.31566 18.4999 2.56562 18.4999H20.7468C21.9968 18.4999 23.0195 17.4874 23.0195 16.2499V3.2157L11.6562 14.4657L0.292969 3.2157Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[47.47px] top-[179px] w-[119.19px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            085234258863{" "}
          </div>
          <div className="w-[27.27px] h-[27px] absolute left-0 top-[177px] overflow-hidden">
            <svg
              className="absolute left-0 top-0 overflow-visible"
              style={{}}
              width="27.27178955078125"
              height="27"
            ></svg>

            <svg
              className="absolute left-[2.32px] top-[3.38px] overflow-visible"
              style={{}}
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.40976 8.24829C10.0373 8.24829 10.5461 7.74461 10.5461 7.12329C10.5461 6.50197 10.0373 5.99829 9.40976 5.99829C8.78219 5.99829 8.27344 6.50197 8.27344 7.12329C8.27344 7.74461 8.78219 8.24829 9.40976 8.24829Z"
                fill="white"
              />
              <path
                d="M13.9088 8.24829C14.5364 8.24829 15.0451 7.74461 15.0451 7.12329C15.0451 6.50197 14.5364 5.99829 13.9088 5.99829C13.2812 5.99829 12.7725 6.50197 12.7725 7.12329C12.7725 7.74461 13.2812 8.24829 13.9088 8.24829Z"
                fill="white"
              />
              <path
                d="M11.6827 14.9511C14.1627 14.9511 16.1809 12.9542 16.1809 10.5H13.9082C13.9082 11.7133 12.9099 12.7011 11.6827 12.7011C10.4555 12.7011 9.45722 11.7133 9.45722 10.5H7.18457C7.18457 12.9542 9.20268 14.9511 11.6827 14.9511Z"
                fill="white"
              />
              <path
                d="M21.5038 7.70381C20.2743 3.47831 16.3409 0.375 11.6826 0.375C7.02422 0.375 3.09083 3.47831 1.86133 7.70381C1.00056 7.78706 0.319336 8.502 0.319336 9.375V11.625C0.319336 12.5531 1.08636 13.3125 2.02382 13.3125C2.96129 13.3125 3.72831 12.5531 3.72831 11.625V10.4989C3.72888 6.15694 7.29694 2.625 11.6826 2.625C16.0688 2.625 19.6369 6.1575 19.6369 10.5C19.6369 14.8425 16.0688 18.375 11.6826 18.375H10.5383C9.60083 18.375 8.83382 19.1344 8.83382 20.0625C8.83382 20.9906 9.60083 21.75 10.5383 21.75H12.8189C13.7007 21.75 14.4234 21.0756 14.5069 20.2234C17.8767 19.2621 20.5328 16.6324 21.5038 13.2962C22.3646 13.2135 23.0458 12.498 23.0458 11.625V9.375C23.0458 8.502 22.3646 7.7865 21.5038 7.70381Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="w-[186px] h-[152px] absolute left-[102px] top-[71px]">
          <div className="absolute" style={{ inset: "0" }}>
            <div
              className="text-[#ffffff] text-left absolute left-[2.02px] top-0 w-[267.67px]"
              style={{ font: "600 24px 'Poppins', sans-serif" }}
            >
              Tentang Kami :{" "}
            </div>
            <div
              className="text-[#ffffff] text-left absolute left-0.5 top-[49px] w-[39px]"
              style={{ font: "400 16px 'Poppins', sans-serif" }}
            >
              Karir{" "}
            </div>
            <div
              className="text-[#ffffff] text-left absolute left-0.5 top-[83px] w-[39px]"
              style={{ font: "400 16px 'Poppins', sans-serif" }}
            >
              Blog{" "}
            </div>
            <div
              className="text-[#ffffff] text-left absolute left-0.5 top-[117px] w-[165px]"
              style={{ font: "400 16px 'Poppins', sans-serif" }}
            >
              Tentang KaryaLokal{" "}
            </div>
          </div>
        </div>
        <div className="absolute" style={{ inset: "0" }}>
          <div
            className="text-[#ffffff] text-left absolute left-[497.02px] top-[63px] w-[267.67px]"
            style={{ font: "600 24px 'Poppins', sans-serif" }}
          >
            Kategori Populer :{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[497px] top-[118px] w-16"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Kado{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[622px] top-[118px] w-36"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Kerajinan Tangan{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[497px] top-[152px] w-[83px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Pakaian{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[622px] top-[152px] w-[83px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Alat Musik{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[497px] top-[186px] w-[165px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Furniture{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[622px] top-[187px] w-[173px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Kain Tenun dan Batik{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[497px] top-[222px] w-[165px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Aksesoris{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[622px] top-[222px] w-[165px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Mainan Anak{" "}
          </div>
        </div>
        <div className="absolute" style={{ inset: "0" }}>
          <div
            className="text-[#ffffff] text-left absolute left-[928.02px] top-[65px] w-[267.67px]"
            style={{ font: "600 24px 'Poppins', sans-serif" }}
          >
            Brand Populer :{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[928px] top-[114px] w-[79px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Hammer{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[1062px] top-[114px] w-[79px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Fabelio{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[928px] top-[148px] w-[71px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Erigo{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[1062px] top-[148px] w-24"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Mayonette{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[1062px] top-[182px] w-24"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Massicot{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[928px] top-[182px] w-[165px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Buccheri{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[925px] top-[217px] w-[165px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Jeimart{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[1062px] top-[216px] w-[165px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Batik Danar Hadi{" "}
          </div>
        </div>
        <div className="w-[165.58px] h-56 absolute left-[497px] top-[325px]">
          <div
            className="text-[#ffffff] text-left absolute left-0 top-0 w-[141.48px]"
            style={{ font: "600 24px 'Poppins', sans-serif" }}
          >
            Ikuti Kami :{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[42.97px] top-[50px] w-[105.85px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            karyalokal.id{" "}
          </div>
          <div className="w-[28.3px] h-[27px] absolute left-0 top-[49px] overflow-hidden">
            <svg
              className="absolute left-0 top-0 overflow-visible"
              style={{}}
              width="29"
              height="27"
              viewBox="0 0 29 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1482 2.25C7.63668 2.25 2.3584 7.28663 2.3584 13.5C2.3584 19.3331 7.01182 24.1284 12.9692 24.6932V15.75H10.0217V13.5H12.9692V11.8125C12.9692 9.95119 14.5555 8.4375 16.5061 8.4375H18.2746V10.6875H16.5061C15.8559 10.6875 15.3271 11.1921 15.3271 11.8125V13.5H18.2746V15.75H15.3271V24.6932C21.2845 24.1284 25.9379 19.3331 25.9379 13.5C25.9379 7.28663 20.6596 2.25 14.1482 2.25Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[42.97px] top-[161px] w-[105.85px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            karyalokal.id{" "}
          </div>
          <div className="w-[28.3px] h-[27px] absolute left-0 top-40 overflow-hidden">
            <svg
              className="absolute left-0 top-[0.01px] overflow-visible"
              style={{}}
              width="29"
              height="27"
              viewBox="0 0 29 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1477 21.667C13.4574 21.667 7.35385 21.6546 5.61132 21.2086C4.96492 21.043 4.37553 20.7181 3.90227 20.2665C3.42901 19.8149 3.08854 19.2525 2.915 18.6357C2.43929 16.9443 2.43457 13.6452 2.43457 13.5057C2.43457 13.3662 2.43988 10.0671 2.915 8.3757C3.08904 7.75898 3.42975 7.19668 3.90304 6.74506C4.37633 6.29344 4.9656 5.96833 5.61191 5.80226C7.35385 5.3562 13.4574 5.34326 14.1477 5.34326C14.838 5.34326 20.9416 5.35564 22.6847 5.8017C23.3309 5.96765 23.9201 6.29266 24.3933 6.7442C24.8665 7.19573 25.2071 7.75795 25.381 8.37457V8.37514H25.3816C25.8561 10.0666 25.8608 13.3651 25.8608 13.5046C25.8608 13.6441 25.8555 16.9431 25.381 18.6346C25.2071 19.2515 24.8664 19.8139 24.393 20.2656C23.9195 20.7172 23.33 21.0422 22.6835 21.208C20.9416 21.6541 14.838 21.667 14.1477 21.667Z"
                fill="white"
              />
              <path
                d="M12.3131 16.8672C12.1568 16.8672 12.0068 16.8079 11.8963 16.7024C11.7857 16.597 11.7236 16.4539 11.7236 16.3047V10.7061C11.7233 10.6073 11.7503 10.5101 11.8019 10.4243C11.8536 10.3386 11.9281 10.2675 12.0178 10.218C12.1075 10.1686 12.2094 10.1427 12.313 10.1428C12.4166 10.143 12.5183 10.1693 12.6079 10.219L17.6887 13.0186C17.7783 13.0679 17.8527 13.139 17.9044 13.2245C17.9562 13.31 17.9834 13.407 17.9834 13.5057C17.9834 13.6044 17.9562 13.7014 17.9044 13.7869C17.8527 13.8724 17.7783 13.9435 17.6887 13.9928L12.6079 16.7924C12.5181 16.8413 12.4165 16.8671 12.3131 16.8672Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[42.97px] top-[124px] w-[122.61px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            @karyalokal.id{" "}
          </div>
          <div className="w-[28.3px] h-[27px] absolute left-0 top-[123px] overflow-hidden">
            <svg
              className="absolute left-0 top-0 overflow-visible"
              style={{}}
              width="29"
              height="27"
              viewBox="0 0 29 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.222 2.25H7.0743C4.48056 2.25 2.3584 4.275 2.3584 6.75V20.25C2.3584 22.725 4.48056 24.75 7.0743 24.75H21.222C23.8158 24.75 25.9379 22.725 25.9379 20.25V6.75C25.9379 4.275 23.8158 2.25 21.222 2.25ZM14.1482 19.125C10.906 19.125 8.25328 16.5938 8.25328 13.5C8.25328 10.4062 10.906 7.875 14.1482 7.875C17.3903 7.875 20.043 10.4062 20.043 13.5C20.043 16.5938 17.3903 19.125 14.1482 19.125ZM20.6325 8.4375C19.9841 8.4375 19.4536 7.93125 19.4536 7.3125C19.4536 6.69375 19.9841 6.1875 20.6325 6.1875C21.281 6.1875 21.8115 6.69375 21.8115 7.3125C21.8115 7.93125 21.281 8.4375 20.6325 8.4375Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[42.97px] top-[86px] w-[122.61px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            @karyalokal.id{" "}
          </div>
          <div className="bg-[#93a8df] w-[28.3px] h-[27px] absolute left-0 top-[86px] overflow-hidden">
            <svg
              className="absolute left-0 top-0 overflow-visible"
              style={{}}
              width="29"
              height="27"
              viewBox="0 0 29 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1461 4.5C17.8184 4.5 16.5451 5.00326 15.6063 5.89908C14.6675 6.79489 14.1401 8.00988 14.1401 9.27675C14.1401 9.40106 13.8984 9.47362 13.4758 9.47362C11.8594 9.47362 7.60035 8.4105 4.12826 5.09681C2.87678 7.48519 2.25074 13.4567 10.3863 17.6366C7.56793 20.0734 4.40945 20.8446 2.67871 20.8451C2.74591 20.9385 2.80309 21.0364 2.8756 21.1269C4.35934 22.9759 7.22956 23.9012 10.3438 23.9012C13.4039 23.9012 16.6991 23.0079 19.1472 21.2192C22.874 18.4967 24.1532 14.0535 24.1532 9.27675V8.67938L25.8751 5.076L22.2002 5.49675C21.3261 4.85066 20.2518 4.50004 19.1461 4.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-[42.97px] top-[198px] w-[105.85px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            karyalokal.id{" "}
          </div>
          <div className="w-[28.3px] h-[27px] absolute left-0 top-[197px] overflow-hidden">
            <svg
              className="absolute left-0 top-0 overflow-visible"
              style={{}}
              width="29"
              height="27"
              viewBox="0 0 29 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.043 2.25H8.25328C5.0111 2.25 2.3584 4.78125 2.3584 7.875V19.125C2.3584 22.2188 5.0111 24.75 8.25328 24.75H20.043C23.2852 24.75 25.9379 22.2188 25.9379 19.125V7.875C25.9379 4.78125 23.2852 2.25 20.043 2.25ZM10.0217 19.6875H7.66379V11.25H10.0217V19.6875ZM8.84277 9.5625C8.19433 9.5625 7.66379 9.05625 7.66379 8.4375C7.66379 7.81875 8.19433 7.3125 8.84277 7.3125C9.49121 7.3125 10.0217 7.81875 10.0217 8.4375C10.0217 9.05625 9.49121 9.5625 8.84277 9.5625ZM20.6325 19.6875H18.2746V15.4688C18.2746 14.0625 17.6851 13.4437 16.5061 13.4437L14.1482 13.5V19.6875H11.7902V11.25L16.5061 11.1375C18.5104 11.1375 20.6325 12.2625 20.6325 15.4125V19.6875Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="w-[186.4px] h-[148px] absolute left-[928px] top-[325px]">
          <div
            className="text-[#ffffff] text-left absolute left-0 top-0 w-[136.34px]"
            style={{ font: "600 24px 'Poppins', sans-serif" }}
          >
            Dukungan{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-0 top-[50px] w-[34.08px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            FAQ{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-0 top-[87px] w-[181.08px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Kebijakan dan Privasi{" "}
          </div>
          <div
            className="text-[#ffffff] text-left absolute left-0 top-[124px] w-[186.4px]"
            style={{ font: "400 16px 'Poppins', sans-serif" }}
          >
            Syarat dan Ketentuan{" "}
          </div>
        </div>
      </div>
      <div className="absolute" style={{ inset: "0" }}>
        <div className="w-[890px] h-[937.66px] static">
          <div className="w-[890px] h-[937.66px] static">
            <div className="w-[890px] h-[937.66px] static">
              <div className="w-[890px] h-[937.66px] static">
                <div className="w-[887px] h-[97.66px] static">
                  <div className="bg-[#bfd5f4] rounded-[301.08px] w-[887px] h-[97.66px] absolute left-[199px] top-[373.66px]"></div>
                </div>
                <div className="w-[887px] h-[97.66px] static">
                  <div className="bg-[#bfd5f4] rounded-[301.08px] w-[887px] h-[97.66px] absolute left-[199px] top-[511.66px]"></div>
                  <div
                    className="text-[#000000] text-left absolute left-[265px] top-[534px] w-[101px] h-[53px] flex items-center justify-start"
                    style={{ font: "700 24px 'Poppins', sans-serif" }}
                  >
                    Produk{" "}
                  </div>
                </div>
                <div className="w-[887px] h-[97.66px] static">
                  <div className="bg-[#bfd5f4] rounded-[301.08px] w-[887px] h-[97.66px] absolute left-[199px] top-[649.66px]"></div>
                  <div
                    className="text-[#000000] text-left absolute left-[265px] top-[672px] w-[172px] h-[53px] flex items-center justify-start"
                    style={{ font: "700 24px 'Poppins', sans-serif" }}
                  >
                    Pembayaran{" "}
                  </div>
                </div>
                <div className="w-[887px] h-[97.66px] static">
                  <div className="w-[887px] h-[97.66px] static">
                    <div className="bg-[#bfd5f4] rounded-[301.08px] w-[887px] h-[97.66px] absolute left-[199px] top-[791px]"></div>
                    <div
                      className="text-[#000000] text-left absolute left-[265px] top-[814px] w-[172px] h-[53px] flex items-center justify-start"
                      style={{ font: "700 24px 'Poppins', sans-serif" }}
                    >
                      Pengiriman{" "}
                    </div>
                  </div>
                </div>
                <div className="w-[887px] h-[97.66px] static">
                  <div className="bg-[#bfd5f4] rounded-[301.08px] w-[887px] h-[97.66px] absolute left-[199px] top-[932px]"></div>
                  <div
                    className="text-[#000000] text-left absolute left-[265px] top-[955px] w-[331px] h-[53px] flex items-center justify-start"
                    style={{ font: "700 24px 'Poppins', sans-serif" }}
                  >
                    Pengembalian/Penukaran{" "}
                  </div>
                </div>
                <div className="w-[887px] h-[97.66px] static">
                  <div className="bg-[#bfd5f4] rounded-[301.08px] w-[887px] h-[97.66px] absolute left-[202px] top-[1070px]"></div>
                  <div
                    className="text-[#000000] text-left absolute left-[265px] top-[1093px] w-[273px] h-[53px] flex items-center justify-start"
                    style={{ font: "700 24px 'Poppins', sans-serif" }}
                  >
                    Pengembalian Dana{" "}
                  </div>
                </div>
                <div className="w-[887px] h-[206px] static">
                  <div className="bg-[#bfd5f4] rounded-[301.08px] w-[887px] h-[97.66px] absolute left-[199px] top-[230px]"></div>
                  <div
                    className="text-[#000000] text-left absolute left-[265px] top-[253px] w-[133px] h-[53px] flex items-center justify-start"
                    style={{ font: "700 24px 'Poppins', sans-serif" }}
                  >
                    Registrasi{" "}
                  </div>
                  <div
                    className="text-[#000000] text-left absolute left-[265px] top-[409px] w-[109px] h-[27px] flex items-center justify-start"
                    style={{ font: "700 24px 'Poppins', sans-serif" }}
                  >
                    Pesanan{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[887px] h-[97.66px] static">
          <div className="bg-[#bfd5f4] rounded-[301.08px] w-[887px] h-[97.66px] absolute left-[202px] top-[1208px]"></div>
          <div
            className="text-[#000000] text-left absolute left-[265px] top-[1231px] w-[132px] h-[53px] flex items-center justify-start"
            style={{ font: "700 24px 'Poppins', sans-serif" }}
          >
            Lain-Lain{" "}
          </div>
        </div>
        <div className="w-[25.9px] h-[26px] absolute left-[995px] top-[266px] overflow-hidden">
          <svg
            className="absolute left-0 top-0 overflow-visible"
            style={{}}
            width="25.898990631103516"
            height="26"
          ></svg>

          <svg
            className="absolute left-[3.55px] top-[7.9px] overflow-visible"
            style={{}}
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.94965 8.80151L2.07959 0.900757L0.553711 2.43259L9.94965 11.8652L19.3456 2.43259L17.8197 0.900757L9.94965 8.80151Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="w-[25.9px] h-[26px] absolute left-[999px] top-[409px] overflow-hidden">
          <svg
            className="absolute left-0 top-0 overflow-visible"
            style={{}}
            width="25.898990631103516"
            height="26"
          ></svg>

          <svg
            className="absolute left-[3.55px] top-[7.9px] overflow-visible"
            style={{}}
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.94965 8.80151L2.07959 0.900757L0.553711 2.43259L9.94965 11.8652L19.3456 2.43259L17.8197 0.900757L9.94965 8.80151Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="w-[25.9px] h-[26px] absolute left-[999px] top-[547px] overflow-hidden">
          <svg
            className="absolute left-0 top-0 overflow-visible"
            style={{}}
            width="25.898990631103516"
            height="26"
          ></svg>

          <svg
            className="absolute left-[3.55px] top-[7.9px] overflow-visible"
            style={{}}
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.94965 8.8015L2.07959 0.900749L0.553711 2.43258L9.94965 11.8652L19.3456 2.43258L17.8197 0.900749L9.94965 8.8015Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="w-[25.9px] h-[26px] absolute left-[999px] top-[685px] overflow-hidden">
          <svg
            className="absolute left-0 top-0 overflow-visible"
            style={{}}
            width="25.898990631103516"
            height="26"
          ></svg>

          <svg
            className="absolute left-[3.55px] top-[7.9px] overflow-visible"
            style={{}}
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.94965 8.8015L2.07959 0.900749L0.553711 2.43258L9.94965 11.8652L19.3456 2.43258L17.8197 0.900749L9.94965 8.8015Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="w-[25.9px] h-[26px] absolute left-[999px] top-[827px] overflow-hidden">
          <svg
            className="absolute left-0 top-0 overflow-visible"
            style={{}}
            width="25.898990631103516"
            height="26"
          ></svg>

          <svg
            className="absolute left-[3.55px] top-[7.9px] overflow-visible"
            style={{}}
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.94965 8.80151L2.07959 0.900757L0.553711 2.43259L9.94965 11.8652L19.3456 2.43259L17.8197 0.900757L9.94965 8.80151Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="w-[25.9px] h-[26px] absolute left-[999px] top-[969px] overflow-hidden">
          <svg
            className="absolute left-0 top-0 overflow-visible"
            style={{}}
            width="25.898990631103516"
            height="26"
          ></svg>

          <svg
            className="absolute left-[3.55px] top-[7.9px] overflow-visible"
            style={{}}
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.94965 8.80151L2.07959 0.900757L0.553711 2.43259L9.94965 11.8652L19.3456 2.43259L17.8197 0.900757L9.94965 8.80151Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="w-[25.9px] h-[26px] absolute left-[999px] top-[1106px] overflow-hidden">
          <svg
            className="absolute left-0 top-0 overflow-visible"
            style={{}}
            width="25.898990631103516"
            height="26"
          ></svg>

          <svg
            className="absolute left-[3.55px] top-[7.9px] overflow-visible"
            style={{}}
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.94965 8.80151L2.07959 0.900757L0.553711 2.43259L9.94965 11.8652L19.3456 2.43259L17.8197 0.900757L9.94965 8.80151Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="w-[25.9px] h-[26px] absolute left-[999px] top-[1245px] overflow-hidden">
          <svg
            className="absolute left-0 top-0 overflow-visible"
            style={{}}
            width="25.898990631103516"
            height="26"
          ></svg>

          <svg
            className="absolute left-[3.55px] top-[7.9px] overflow-visible"
            style={{}}
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.94965 8.80151L2.07959 0.900757L0.553711 2.43259L9.94965 11.8652L19.3456 2.43259L17.8197 0.900757L9.94965 8.80151Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="absolute" style={{ inset: "0" }}>
        <div className="w-[1164px] h-[184px] static">
          <div className="w-[1164px] h-[184px] static">
            <div className="w-[1164px] h-[184px] static">
              <div className="w-[1164px] h-[184px] static">
                <div
                  className="bg-[rgba(111,173,255,0.40)] rounded-[30px] w-[1164px] h-[78px] absolute left-[59px] top-11 overflow-hidden"
                  style={{
                    boxShadow:
                      "0px 40px 80px 0px rgba(0, 0, 0, 0.10), inset 4px 4px 26px 0px rgba(255, 255, 255, 0.25), inset 0px 4px 2px 0px rgba(255, 255, 255, 0.25), inset 0px -4px 2px 0px rgba(0, 0, 0, 0.05)",
                    backdropFilter: "blur(40px)",
                  }}
                ></div>
                <div className="w-[37px] h-[37px] absolute left-[958px] top-[65px] overflow-hidden">
                  <svg
                    className="absolute left-[1.32px] top-[1.32px] overflow-visible"
                    style={{}}
                    width="33"
                    height="34"
                    viewBox="0 0 33 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4335 19.3398C19.8561 19.3398 22.6306 16.5015 22.6306 13.0003C22.6306 9.49911 19.8561 6.66083 16.4335 6.66083C13.0109 6.66083 10.2363 9.49911 10.2363 13.0003C10.2363 16.5015 13.0109 19.3398 16.4335 19.3398Z"
                      fill="#768AC4"
                      stroke="#000001"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.84961 29.2294C6.95578 27.372 8.51044 25.8369 10.3641 24.7717C12.2178 23.7065 14.3082 23.147 16.4344 23.147C18.5605 23.147 20.6509 23.7065 22.5046 24.7717C24.3583 25.8369 25.9129 27.372 27.0191 29.2294"
                      fill="#768AC4"
                    />
                    <path
                      d="M5.84961 29.2294C6.95578 27.372 8.51044 25.8369 10.3641 24.7717C12.2178 23.7065 14.3082 23.147 16.4344 23.147C18.5605 23.147 20.6509 23.7065 22.5046 24.7717C24.3583 25.8369 25.9129 27.372 27.0191 29.2294"
                      stroke="#000001"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.9707 28.9264C7.07749 30.1726 8.633 31.2026 10.4877 31.9173C12.3424 32.6319 14.434 33.0073 16.5613 33.0073C18.6886 33.0073 20.7801 32.6319 22.6348 31.9173C24.4896 31.2026 26.0451 30.1726 27.1519 28.9264"
                      fill="#768AC4"
                    />
                    <path
                      d="M5.9707 28.9264C7.07749 30.1726 8.633 31.2026 10.4877 31.9173C12.3424 32.6319 14.434 33.0073 16.5613 33.0073C18.6886 33.0073 20.7801 32.6319 22.6348 31.9173C24.4896 31.2026 26.0451 30.1726 27.1519 28.9264"
                      stroke="#000001"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.4339 33.2866C25.3327 33.2866 32.5465 25.9071 32.5465 16.804C32.5465 7.70088 25.3327 0.32135 16.4339 0.32135C7.53515 0.32135 0.321289 7.70088 0.321289 16.804C0.321289 25.9071 7.53515 33.2866 16.4339 33.2866Z"
                      stroke="#000001"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="w-[37px] h-[37px] absolute left-[1021px] top-[65px] overflow-hidden">
                  <svg
                    className="absolute left-0 top-0 overflow-visible"
                    style={{}}
                    width="37"
                    height="37"
                  ></svg>

                  <svg
                    className="absolute left-[3.08px] top-[3.08px] overflow-visible"
                    style={{}}
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.833 0.083313H9.33301C7.63717 0.083313 6.24967 1.47081 6.24967 3.16665V6.24998H3.16634C1.47051 6.24998 0.0830078 7.63748 0.0830078 9.33331V30.9166L6.24967 24.75H21.6663C23.3622 24.75 24.7497 23.3625 24.7497 21.6666V18.5833L30.9163 24.75V3.16665C30.9163 1.47081 29.5288 0.083313 27.833 0.083313ZM10.1038 14.7291V3.93748H27.0622V15.4453L26.3461 14.7291H10.1038ZM20.8955 20.8958H4.65328L3.93717 21.6119V10.1041H6.24967V15.5C6.24967 17.1958 7.63717 18.5833 9.33301 18.5833H20.8955V20.8958Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <img alt=""
                  className="w-[78px] h-[78px] absolute left-[76px] top-11"
                  src="logo-karya-lokal.png"
                />
                <div
                  className="text-[#000000] text-left absolute left-36 top-[59px] w-48 h-[55px]"
                  style={{ font: "400 36px 'Berkshire Swash', sans-serif" }}
                >
                  KaryaLokal{" "}
                </div>
                <div className="w-[467px] h-[42px] static">
                  <div className="bg-[#ffffff] rounded-[20px] w-[467px] h-[42px] absolute left-[400px] top-[65px]"></div>
                  <div
                    className="text-[#000000] text-left absolute left-[421px] top-[72px] w-[105px] h-[22px]"
                    style={{ font: "500 18px 'Poppins', sans-serif" }}
                  >
                    Cari Item{" "}
                  </div>
                  <div className="w-5 h-5 absolute left-[822px] top-[76px] overflow-hidden">
                    <svg
                      className="absolute left-0 top-0 overflow-visible"
                      style={{}}
                      width="20"
                      height="20"
                    ></svg>

                    <svg
                      className="absolute left-[1.67px] top-[1.67px] overflow-visible"
                      style={{}}
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.50033 12.3334C7.73491 12.3334 8.87783 11.9475 9.82033 11.2934L15.667 17.14L17.1403 15.6667L11.2937 9.82002C11.9478 8.87752 12.3337 7.7346 12.3337 6.50002C12.3337 3.27835 9.72199 0.666687 6.50033 0.666687C3.27866 0.666687 0.666992 3.27835 0.666992 6.50002C0.666992 9.72169 3.27866 12.3334 6.50033 12.3334ZM6.50033 2.75002C8.56824 2.75002 10.2503 4.4321 10.2503 6.50002C10.2503 8.56794 8.56824 10.25 6.50033 10.25C4.43241 10.25 2.75033 8.56794 2.75033 6.50002C2.75033 4.4321 4.43241 2.75002 6.50033 2.75002Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <svg
                  className="rounded-none absolute left-[1161px] top-[61px] overflow-visible"
                  style={{}}
                  width="30"
                  height="46"
                  viewBox="0 0 30 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15V31C30 39.2843 23.2843 46 15 46C6.71573 46 0 39.2843 0 31V15Z"
                    fill="#1E3A8A"
                  />
                </svg>

                <div className="w-[37px] h-[37px] absolute left-[1097px] top-[65px] overflow-hidden">
                  <svg
                    className="absolute left-0 top-0 overflow-visible"
                    style={{}}
                    width="37"
                    height="37"
                  ></svg>

                  <svg
                    className="absolute left-[2.7px] top-[4.24px] overflow-visible"
                    style={{}}
                    width="34"
                    height="30"
                    viewBox="0 0 34 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0402 18.2539L5.05653 27.2187H12.4072C12.0835 27.5016 11.8753 27.9117 11.8753 28.375C11.8753 29.2268 12.5652 29.9166 13.417 29.9166C14.2688 29.9166 14.9587 29.2268 14.9587 28.375C14.9587 27.9117 14.7505 27.5016 14.4268 27.2187H21.6564C21.3334 27.5016 21.1253 27.9117 21.1253 28.375C21.1253 29.2268 21.8152 29.9166 22.667 29.9166C23.5188 29.9166 24.2087 29.2268 24.2087 28.375C24.2087 27.9117 24.0005 27.5016 23.6768 27.2187H29.2191V23.3646H10.9866L12.3571 20.2812H27.9102L33.0493 4.86456H8.63937L7.0977 0.239563H0.698242V4.09373H4.31962L9.0402 18.2539ZM27.7013 8.71873L25.1321 16.4271H12.4935L9.92435 8.71873H27.7013Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="w-[37px] h-[37px] absolute left-[1157px] top-[65px] overflow-hidden">
                  <svg
                    className="absolute left-0 top-0 overflow-visible"
                    style={{}}
                    width="37"
                    height="37"
                  ></svg>

                  <svg
                    className="absolute left-[14.65px] top-[4.62px] overflow-visible"
                    style={{}}
                    width="9"
                    height="29"
                    viewBox="0 0 9 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.50016 18.3541C6.62876 18.3541 8.35433 16.6286 8.35433 14.5C8.35433 12.3714 6.62876 10.6458 4.50016 10.6458C2.37157 10.6458 0.645996 12.3714 0.645996 14.5C0.645996 16.6286 2.37157 18.3541 4.50016 18.3541Z"
                      fill="white"
                    />
                    <path
                      d="M4.50016 8.33333C6.62876 8.33333 8.35433 6.60776 8.35433 4.47917C8.35433 2.35057 6.62876 0.625 4.50016 0.625C2.37157 0.625 0.645996 2.35057 0.645996 4.47917C0.645996 6.60776 2.37157 8.33333 4.50016 8.33333Z"
                      fill="white"
                    />
                    <path
                      d="M4.50016 28.375C6.62876 28.375 8.35433 26.6495 8.35433 24.5209C8.35433 22.3923 6.62876 20.6667 4.50016 20.6667C2.37157 20.6667 0.645996 22.3923 0.645996 24.5209C0.645996 26.6495 2.37157 28.375 4.50016 28.375Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <svg
                  className="rounded-none absolute left-[1027px] top-28 overflow-visible"
                  style={{}}
                  width="181"
                  height="116"
                  viewBox="0 0 181 116"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.25 25C0.25 11.331 11.331 0.25 25 0.25H156C169.669 0.25 180.75 11.331 180.75 25V91C180.75 104.669 169.669 115.75 156 115.75H25C11.331 115.75 0.25 104.669 0.25 91V25Z"
                    fill="white"
                    stroke="#1E3A8A"
                    strokeWidth="0.5"
                  />
                </svg>

                <svg
                  className="rounded-none absolute left-[1038px] top-[122px] overflow-visible"
                  style={{}}
                  width="158"
                  height="46"
                  viewBox="0 0 158 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20C0 8.95431 8.95431 0 20 0H138C149.046 0 158 8.95431 158 20V26C158 37.0457 149.046 46 138 46H20C8.9543 46 0 37.0457 0 26V20Z"
                    fill="#1E3A8A"
                  />
                </svg>

                <div
                  className="text-[#000000] text-left absolute left-[1077px] top-[184px] w-[114px] h-[21px]"
                  style={{ font: "500 16px 'Poppins', sans-serif" }}
                >
                  Tentang Kami{" "}
                </div>
                <div className="w-[27px] h-[27px] absolute left-[1045px] top-[183px] overflow-hidden">
                  <svg
                    className="absolute left-0 top-0 overflow-visible"
                    style={{}}
                    width="27"
                    height="27"
                  ></svg>

                  <svg
                    className="absolute left-[1.69px] top-[3.38px] overflow-visible"
                    style={{}}
                    width="24"
                    height="21"
                    viewBox="0 0 24 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.8169 8.68931C20.0887 7.89394 20.9375 6.48544 20.9375 4.875C20.9375 2.38987 18.9226 0.375 16.4375 0.375C13.9524 0.375 11.9375 2.38987 11.9375 4.875C11.9375 6.48544 12.7863 7.89394 14.0581 8.68931C13.2577 8.99137 12.5315 9.43969 11.9088 10.0039C11.6619 7.75219 9.755 6 7.4375 6C4.95237 6 2.9375 8.01487 2.9375 10.5C2.9375 12.1104 3.78631 13.5189 5.05813 14.3143C2.5055 15.2767 0.6875 17.7349 0.6875 20.625H14.1875C14.1875 18.2754 12.9871 16.2088 11.1669 15H23.1875C23.1875 12.1099 21.3695 9.65175 18.8169 8.68931ZM13.0625 4.875C13.0625 3.01425 14.5767 1.5 16.4375 1.5C18.2983 1.5 19.8125 3.01425 19.8125 4.875C19.8125 6.73575 18.2983 8.25 16.4375 8.25C14.5767 8.25 13.0625 6.73575 13.0625 4.875ZM16.4375 9.375C19.1538 9.375 21.4269 11.3106 21.9494 13.875H10.9256C10.988 13.569 11.0769 13.2726 11.1866 12.9868C11.3829 12.6915 11.5415 12.3703 11.6641 12.0311C12.6592 10.4381 14.4254 9.375 16.4375 9.375ZM4.0625 10.5C4.0625 8.63925 5.57675 7.125 7.4375 7.125C9.29825 7.125 10.8125 8.63925 10.8125 10.5C10.8125 10.8662 10.7517 11.2183 10.6438 11.5485C10.4728 11.8354 10.3192 12.1329 10.1909 12.4446C9.57894 13.3086 8.57431 13.875 7.4375 13.875C5.57675 13.875 4.0625 12.3608 4.0625 10.5ZM12.9494 19.5H1.92556C2.44813 16.9356 4.72119 15 7.4375 15C10.1538 15 12.4269 16.9356 12.9494 19.5Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="w-[134px] h-[27px] static">
                  <div
                    className="text-[#ffffff] text-left absolute left-[1079px] top-[134px] w-[100px] h-[22px]"
                    style={{ font: "500 16px 'Poppins', sans-serif" }}
                  >
                    Bantuan{" "}
                  </div>
                  <div className="w-[27px] h-[27px] absolute left-[1045px] top-[132px] overflow-hidden">
                    <svg
                      className="absolute left-0 top-0 overflow-visible"
                      style={{}}
                      width="27"
                      height="27"
                    ></svg>

                    <svg
                      className="absolute left-[2.25px] top-[2.25px] overflow-visible"
                      style={{}}
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 0.25C5.28663 0.25 0.25 5.28663 0.25 11.5C0.25 17.7134 5.28663 22.75 11.5 22.75C17.7134 22.75 22.75 17.7134 22.75 11.5C22.75 5.28663 17.7134 0.25 11.5 0.25ZM11.5 21.625C5.91719 21.625 1.375 17.0828 1.375 11.5C1.375 5.91719 5.91719 1.375 11.5 1.375C17.0828 1.375 21.625 5.91719 21.625 11.5C21.625 17.0828 17.0828 21.625 11.5 21.625Z"
                        fill="white"
                      />
                      <path
                        d="M11.5 5.3125C9.94919 5.3125 8.6875 6.57419 8.6875 8.125H9.8125C9.8125 7.19462 10.5696 6.4375 11.5 6.4375C12.4304 6.4375 13.1875 7.19462 13.1875 8.125C13.1875 8.899 12.8748 9.20331 12.4023 9.664C11.7498 10.3002 10.9375 11.0916 10.9375 13.1869H12.0625C12.0625 11.5664 12.6093 11.0337 13.1875 10.4701C13.7146 9.95594 14.3125 9.37375 14.3125 8.125C14.3125 6.57419 13.0508 5.3125 11.5 5.3125Z"
                        fill="white"
                      />
                      <path
                        d="M11.5 18.25C12.1213 18.25 12.625 17.7463 12.625 17.125C12.625 16.5037 12.1213 16 11.5 16C10.8787 16 10.375 16.5037 10.375 17.125C10.375 17.7463 10.8787 18.25 11.5 18.25Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bantuan;
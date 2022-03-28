const register = () => {
  return (
    <div className=" col-container overflow-x-hidden">
      <svg viewBox="0 0 909 721" version="1.1" className="-z-10 xl:z-10 tag_auth_effect ">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1744.000000, -1065.000000)" fill="#ff1536">
            <path
              d="M1954.43919,1792.6682 C1992.31638,1797.09936 2029.78299,1794.70896 2067.01008,1789.73436 C2120.30732,1782.61259 2173.62738,1775.58582 2226.69271,1767.39996 C2260.60085,1762.17074 2294.7713,1756.87312 2327.56171,1748.10961 C2372.16427,1736.19945 2413.88127,1718.36841 2451.75847,1693.72343 C2486.62465,1671.0318 2516.57893,1644.33085 2541.29434,1613.05053 C2563.39792,1585.08407 2579.7228,1554.51441 2591.52734,1521.52015 C2605.34684,1482.89004 2611.12175,1443.30225 2609.82154,1402.9544 C2608.74943,1369.81193 2601.56786,1336.95448 2589.34512,1305.18772 C2567.23773,1247.74609 2531.29564,1197.68846 2481.13487,1156.39053 C2449.00978,1129.9556 2412.8852,1108.35086 2372.457,1092.43138 C2337.29048,1078.58306 2300.84656,1069.59534 2263.61946,1064.1875 C2233.99594,1059.88176 2203.84778,1060.52401 2173.81367,1062.68258 C2137.97042,1065.25919 2103.56046,1072.62418 2070.51913,1083.86549 C2018.80343,1101.46471 1973.74846,1128.28727 1935.14892,1163.71372 C1904.17957,1192.12861 1879.84053,1224.76184 1858.39846,1259.15081 C1848.63167,1274.82708 1842.33591,1292.27808 1834.48522,1308.93102 C1823.53608,1332.13949 1812.37023,1355.27576 1801.75184,1378.60964 C1791.84819,1400.35119 1782.14603,1422.18015 1773.07116,1444.21812 C1761.57836,1472.14277 1750.1578,1500.07883 1743.786,1529.592 C1737.76778,1557.47105 1736.1216,1585.54771 1740.3834,1613.74598 C1744.73265,1642.5447 1755.98213,1669.59528 1773.50077,1694.5861 C1800.94966,1733.75965 1839.22985,1761.07245 1886.84342,1778.21564 C1908.63146,1786.06327 1931.35474,1790.1676 1954.43919,1792.6682"
              transform="translate(2174.000000, 1428.000000) rotate(205.000000) translate(-2174.000000, -1428.000000) "
            ></path>
          </g>
        </g>
      </svg>
      <div className="col-container min-h-screen mt-16">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black ">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="username"
            placeholder="Username"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />
           <input
            type="tel"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="phone number"
            placeholder="Phone Number"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-800 focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-blue"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
      </div>

      <svg
        viewBox="0 0 426 474"
        version="1.1"
        className="-z-10 xl:z-10 tag_auth_effect_bottom"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            transform="translate(-388.000000, -381.000000)"
            fill="currentColor"
          >
            <path
              d="M860,593.437773 C859.701866,623.190759 854.01417,647.43429 843.154019,670.755769 C835.205601,687.828885 825.163406,703.502 813.182105,717.814975 C800.906695,732.472251 787.047984,745.753829 772.03906,757.76087 C750.242228,775.197984 727.029635,790.417393 702.212602,803.333163 C674.616456,817.697686 645.581032,827.632183 614.714333,831.474542 C603.380661,832.884952 591.76881,833.81003 580.214183,831.985022 C571.47474,830.604015 562.415871,830.578238 553.942993,828.315225 C541.615712,825.024967 529.36,821.000299 517.649374,815.967491 C494.095111,805.852786 474.801247,789.965248 459.436002,769.62324 C451.026851,758.495492 442.506364,747.287914 435.644682,735.212933 C428.529553,722.686405 423.21254,709.13569 417.381761,695.91096 C412.440889,684.713717 407.688794,673.427264 403.227584,662.033107 C396.705691,645.373491 389.465919,628.889411 384.444813,611.774218 C378.049538,589.980074 371.703899,567.946234 372.010694,544.854827 C372.304719,522.470146 376.864757,500.89125 388.307451,481.514782 C398.325615,464.551152 412.604948,451.530522 430.084638,441.755974 C449.393384,430.95415 470.307088,427.074211 491.846728,427 C507.582237,426.9463 523.319571,429.1654 538.780809,432.715123 C551.519781,435.636433 564.267893,438.812771 577.190075,440.53256 C590.795953,442.344157 604.488365,444.324704 618.346374,443.398399 C638.00253,442.087913 657.658722,440.712901 677.333257,439.734255 C694.619246,438.879821 711.773953,440.425228 728.87232,443.138286 C742.898737,445.361393 756.265003,449.652778 768.87532,455.81277 C792.583457,467.399208 813.71259,482.213376 828.977802,504.402122 C838.057174,517.59435 846.61669,530.937424 851.372704,546.292112 C853.692037,553.772837 855.695707,561.41044 857.015592,569.116017 C858.625367,578.496049 859.362587,588.020975 860,593.437773"
              transform="translate(616.000000, 630.000000) rotate(-78.000000) translate(-616.000000, -630.000000) "
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default register;

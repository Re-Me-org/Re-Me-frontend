import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg
      width="917"
      height="947"
      viewBox="0 0 917 947"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.95"
        d="M0 200C0 89.5431 89.5431 0 200 0H717C827.457 0 917 89.543 917 200V747C917 857.457 827.457 947 717 947H200C89.5431 947 0 857.457 0 747V200Z"
        fill="#130F40"
      />
      <path
        d="M153.373 382.422C129.134 445.44 124.871 514.39 141.162 579.914C157.453 645.438 193.509 704.363 244.438 748.693C295.366 793.022 358.701 820.609 425.845 827.709C492.99 834.809 560.693 821.078 619.767 788.381C678.84 755.683 726.423 705.602 756.058 644.934C785.693 584.267 795.944 515.95 785.421 449.256C780.213 416.251 749.236 393.717 716.231 398.925C683.226 404.132 660.692 435.11 665.9 468.115C672.553 510.28 666.072 553.471 647.336 591.826C628.6 630.182 598.517 661.844 561.17 682.516C523.822 703.188 481.019 711.868 438.569 707.38C396.119 702.891 356.078 685.45 323.88 657.424C291.682 629.398 268.886 592.145 258.587 550.719C248.287 509.293 250.983 465.702 266.307 425.861C281.632 386.02 308.843 351.858 344.249 328.013C378.271 305.099 418.275 292.777 459.219 292.536L458.677 322.376C458.093 354.493 497.068 370.809 519.539 347.854L606.026 259.506C619.186 246.063 619.574 224.688 606.911 210.776L523.689 119.345C502.067 95.5899 462.525 110.479 461.942 142.597L461.416 171.534C395.642 171.339 331.275 190.866 276.656 227.652C220.654 265.369 177.613 319.404 153.373 382.422Z"
        fill="#FFE169"
        stroke="black"
      />
      <path
        d="M466.331 423.749L466.641 424.106L467.015 423.816C475.089 417.563 485.268 413.833 496.333 413.833C522.573 413.833 543.833 434.808 543.833 460.667C543.833 463.136 543.64 465.561 543.266 467.926L543.174 468.512L543.767 468.504C543.956 468.501 544.144 468.5 544.333 468.5C566.149 468.5 583.833 486.185 583.833 508C583.833 529.815 566.149 547.5 544.333 547.5C541.853 547.5 539.426 547.271 537.073 546.834L536.459 546.72L536.482 547.344C536.494 547.673 536.5 548.002 536.5 548.333C536.5 564.753 521.412 578.167 502.667 578.167C491.563 578.167 481.724 573.451 475.561 566.189L475.353 565.944L475.044 566.031C471.639 566.988 468.046 567.5 464.333 567.5C457.978 567.5 451.975 566 446.657 563.334L446.183 563.096L445.974 563.584C439.928 577.651 425.947 587.5 409.667 587.5C387.851 587.5 370.167 569.815 370.167 548C370.167 547.779 370.168 547.559 370.172 547.339L370.179 546.916L369.763 546.839C351.404 543.44 337.5 527.343 337.5 508C337.5 486.185 355.185 468.5 377 468.5C382.745 468.5 388.202 469.726 393.124 471.93L394.549 472.568L393.76 471.221C390.197 465.139 388.167 458.13 388.167 450.667C388.167 427.4 407.919 408.5 432.333 408.5C446.012 408.5 458.232 414.435 466.331 423.749ZM510.5 601C510.5 607.253 504.118 612.5 496 612.5C487.882 612.5 481.5 607.253 481.5 601C481.5 594.747 487.882 589.5 496 589.5C504.118 589.5 510.5 594.747 510.5 601ZM485.5 638C485.5 643.741 480.189 648.5 473.5 648.5C466.811 648.5 461.5 643.741 461.5 638C461.5 632.259 466.811 627.5 473.5 627.5C480.189 627.5 485.5 632.259 485.5 638Z"
        fill="#FDFFA8"
        stroke="black"
      />
      <path
        d="M576.5 399H578M581 394.5V396M578.9 396.9L577.8 395.8M583.1 396.9L584.2 395.8M578.9 401.1L577.8 402.2M581 399L585.5 400.5L583.5 401.5L582.5 403.5L581 399Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.0015 14.3109C28.0015 13.1598 27.9062 12.3198 27.6999 11.4487H14.2872V16.6442H22.1601C22.0015 17.9354 21.1443 19.8798 19.2395 21.1864L19.2128 21.3604L23.4537 24.58L23.7475 24.6087C26.4459 22.1665 28.0015 18.5731 28.0015 14.3109Z"
        fill="#4285F4"
      />
      <path
        d="M14.2863 28C18.1434 28 21.3823 26.7553 23.7475 24.6087L19.2395 21.1864C18.0332 22.0109 16.4132 22.5865 14.2863 22.5865C10.5086 22.5865 7.30225 20.1444 6.15929 16.7688L5.99176 16.7827L1.58208 20.1272L1.52441 20.2843C3.87359 24.8577 8.69898 28 14.2863 28Z"
        fill="#34A853"
      />
      <path
        d="M6.15929 16.7688C5.85771 15.8977 5.68401 14.9644 5.68401 14C5.68401 13.0355 5.85855 12.1022 6.14426 11.2311L6.13627 11.0455L1.67132 7.64736L1.52524 7.71546C0.557026 9.61326 0.00146484 11.7444 0.00146484 14C0.00146484 16.2555 0.556204 18.3865 1.52441 20.2843L6.15929 16.7688Z"
        fill="#FBBC05"
      />
      <path
        d="M14.2864 5.4133C16.9689 5.4133 18.7784 6.54885 19.8102 7.4978L23.8419 3.64C21.3658 1.38445 18.1435 0 14.2864 0C8.69902 0 3.87442 3.14216 1.52524 7.71546L6.14426 11.2311C7.3031 7.85551 10.5086 5.4133 14.2864 5.4133Z"
        fill="#EB4335"
      />
    </svg>
  ),
};

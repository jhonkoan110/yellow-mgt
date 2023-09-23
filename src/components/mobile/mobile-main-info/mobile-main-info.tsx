import React from 'react';

import { Block } from 'components/block';
import { Container } from 'components/container';
import { HashLink } from 'react-router-hash-link';
import { getHashAnchor } from 'utils/get-hash-anchor';
import { Anchors } from 'constants/anchors';
import { Button } from 'components/button';
import { FlexContainer } from 'components/flex-container';
import { ArrowIcon } from 'components/icons/arrow-icon';

import styles from './mobile-main-info.module.scss';

export const MobileMainInfo = () => {
    return (
        <Container mt={40}>
            <svg xmlns="http://www.w3.org/2000/svg" width="354" height="418" viewBox="0 0 354 418" fill="none">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M234.692 55.693V44.8319H273.9V81.3439H263.631V64.7055H261.764C261.181 67.5505 259.898 70.2094 258.03 72.447C256.172 74.6738 253.942 76.5692 251.437 78.0509C248.895 79.5581 246.143 80.6871 243.269 81.4017C240.467 82.1172 237.586 82.4859 234.692 82.4993C229.401 82.531 224.166 81.4272 219.347 79.2641C214.625 77.1537 210.364 74.1512 206.803 70.425C199.317 62.5266 195.181 52.082 195.251 41.25C195.184 30.422 199.319 19.9821 206.803 12.0866C210.356 8.35865 214.609 5.35234 219.324 3.2359C224.143 1.07277 229.378 -0.0309536 234.669 0.000660433C242.877 -0.0123251 250.865 2.62432 257.423 7.51104C260.641 9.92435 263.49 12.7846 265.883 16.0036C268.344 19.2979 270.292 22.9397 271.66 26.807H259.29C257.073 22.0895 253.605 18.0562 249.255 15.137C245.529 12.6535 241.217 11.1674 236.739 10.8232C232.26 10.479 227.769 11.2884 223.7 13.1727C220.314 14.7618 217.279 17.0004 214.773 19.7587C209.448 25.6729 206.519 33.3269 206.546 41.25C206.519 49.1731 209.448 56.8271 214.773 62.7413C217.279 65.4996 220.314 67.7382 223.7 69.3273C227.769 71.2116 232.26 72.021 236.739 71.6768C241.217 71.3326 245.529 69.8465 249.255 67.363C253.62 64.428 257.122 60.4017 259.407 55.693H234.692ZM30.25 1.05428e-10V10.8881H20.505V69.9619H30.25V80.85H0V69.9619H9.74497V10.8881H0V1.05428e-10H30.25ZM117.15 1.05428e-10V80.85H106.154V10.8881H104.765L86.2454 66.0236H67.9573L49.785 10.8881H48.396V80.85H37.4V1.05428e-10H58.466L76.4069 55.0197H77.6801L96.1997 1.05428e-10H117.15ZM141.993 55.0197H171.391L178.363 80.85H189.75L168.021 1.05428e-10H145.479L123.75 80.85H135.137L141.993 55.0197ZM159.539 10.8881L168.486 44.1316H145.014L153.845 10.8881H159.539ZM339.35 10.8881V1.05428e-10H284.35V80.85H339.35V69.9619H295.073V55.0197H327.474V44.1316H295.073V10.8881H339.35Z"
                    fill="#282828"
                />
                <g clip-path="url(#clip0_312_1462)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M238.436 301.013V290.668H277.574V325.445H267.324V309.597H265.46C264.877 312.307 263.597 314.839 261.733 316.971C259.871 319.096 257.637 320.903 255.128 322.314C252.59 323.749 249.843 324.825 246.974 325.505C244.177 326.189 241.301 326.54 238.413 326.551C233.131 326.581 227.905 325.529 223.095 323.469C218.381 321.459 214.128 318.599 210.573 315.05C203.1 307.527 198.421 297.579 198.491 287.262C198.497 286.869 198.502 286.5 198.506 286.148L198.506 286.142C198.546 282.976 198.567 281.306 199.245 277.595C200.749 269.373 215.514 260.837 225.063 255.316L225.161 255.26C235.988 249.003 247.124 237.387 231.288 228.88C228.434 227.348 223.284 226.05 217.493 224.591C201.593 220.586 180.857 215.362 189.511 200.713C192.65 195.399 199.044 192.657 205.407 189.927C213.778 186.337 222.094 182.77 222.872 173.404C223.564 165.089 218.239 162.38 212.584 159.503C209.531 157.95 206.381 156.347 204.031 153.787C196.302 145.363 198.876 122.769 201.48 113.492C202.697 109.15 206.354 104.561 209.925 101.001C213.479 97.4519 217.733 94.5921 222.447 92.5821C227.257 90.5218 232.483 89.4705 237.764 89.5006C245.957 89.4883 253.932 91.9996 260.478 96.6539C263.691 98.9525 266.535 101.677 268.924 104.743C271.38 107.88 273.324 111.349 274.689 115.032H262.342C260.129 110.539 256.667 106.698 252.325 103.917C248.605 101.552 244.301 100.136 239.83 99.8086C235.36 99.4808 230.876 100.252 226.815 102.046C223.434 103.56 220.406 105.692 217.904 108.319C215.382 110.961 212.72 114.372 211.905 117.564C209.575 126.505 207.438 146.843 215.953 154.612C218.226 156.69 220.989 158.18 223.655 159.617C229.758 162.907 235.355 165.924 233.425 175.104C231.672 183.35 224.053 186.687 216.393 190.042C209.596 193.019 202.767 196.011 199.971 202.457C194.066 216.062 211.994 220.406 227.436 224.147L227.436 224.147C234.84 225.942 241.673 227.597 245.033 230.069C258.964 240.326 244.311 250.648 234.677 256.195C220.6 264.284 210.404 273.132 210.387 287.257C210.359 294.803 213.283 302.093 218.599 307.726C221.101 310.354 224.129 312.486 227.51 313.999C231.571 315.794 236.055 316.565 240.525 316.237C244.996 315.909 249.3 314.494 253.02 312.128C257.376 309.333 260.873 305.498 263.154 301.013H238.436ZM33.2481 90.1553V100.5H23.4634C23.4634 104.798 23.2224 109.374 22.976 114.051L22.976 114.051C22.4191 124.623 21.835 135.71 23.9468 145.274C25.4892 152.266 29.933 154.662 34.6679 157.215C37.9072 158.962 41.2828 160.782 43.9587 164.198C53.818 176.779 41.9409 183.12 29.932 189.53C20.7227 194.447 11.4359 199.404 11.8151 207.25C12.1954 215.15 25.4398 219.391 38.5499 223.589C56.5567 229.355 74.31 235.04 58.1289 250.015C54.525 253.351 49.0721 255.492 43.5788 257.648C34.2999 261.291 24.9057 264.979 24.1118 274.546C23.3689 283.446 23.6183 292.58 23.8659 301.65C23.9891 306.161 24.1118 310.656 24.1118 315.1H33.8964V325.444H3.52333V315.1H13.3079C13.3079 310.656 13.1852 306.161 13.062 301.65C12.8144 292.58 12.565 283.446 13.3079 274.546C14.1018 264.979 23.496 261.291 32.7749 257.648C38.2682 255.492 43.7212 253.351 47.3251 250.015C63.5004 235.052 45.7494 229.365 27.7448 223.597C14.6318 219.396 1.38429 215.152 1.01123 207.25C0.632053 199.404 9.91883 194.447 19.1281 189.53C31.137 183.12 43.0142 176.779 33.1549 164.198C30.4787 160.782 27.1028 158.961 23.8632 157.213C19.1286 154.659 14.6853 152.263 13.143 145.274C11.0312 135.71 11.6153 124.623 12.1722 114.051C12.4185 109.374 12.6596 104.798 12.6596 100.5H2.87497V90.1553H33.2481ZM120.258 106.603V106.604V106.604C120.144 117.586 120.03 128.577 120.372 139.53C120.714 150.366 124.651 152.902 130.79 156.856L130.79 156.856C132.703 158.088 134.83 159.458 137.128 161.259C152.754 173.509 140.106 181.257 127.21 189.155C118.309 194.608 109.289 200.133 109.37 207.261C109.48 217.807 124.781 221.153 136.738 223.768C140.596 224.612 144.106 225.38 146.645 226.288C163.005 232.154 165.067 244.447 150.267 253.482C125.872 261.681 121.416 264.306 121.043 280.769C120.822 290.675 120.896 300.617 120.97 310.554V310.554V310.555V310.555V310.556V310.557V310.559C121.007 315.524 121.043 320.487 121.043 325.444H109.978C109.978 320.515 109.946 315.583 109.915 310.651C109.853 300.785 109.791 290.917 109.978 281.055C110.275 265.681 114.019 261.956 138.7 253.757C150.029 246.973 154.566 236.589 141.234 228.809C137.064 226.373 130.834 225.081 124.369 223.739C113.949 221.577 102.917 219.289 98.9097 211.883C93.147 201.24 103.55 195.911 114.27 190.42C125.597 184.617 137.278 178.634 130.611 166.008C128.538 162.083 124.601 160.087 120.658 158.087C116.281 155.867 111.896 153.643 110.046 148.774C108.226 143.991 108.646 137.792 109.031 132.125C109.183 129.884 109.329 127.727 109.329 125.773V100.5H107.931C107.667 104.786 107.126 109.373 106.571 114.077L106.571 114.079L106.571 114.079V114.079V114.079C105.305 124.805 103.969 136.134 105.677 145.869C106.831 152.437 110.313 154.615 114.289 157.101C116.674 158.593 119.238 160.197 121.583 162.927C132.701 175.82 119.492 182.916 106.424 189.937C97.6472 194.652 88.9338 199.334 87.6982 205.714C86.0516 214.213 99.3087 219.033 112.39 223.789C129.385 229.967 146.082 236.038 129.417 249.927C126.029 252.753 120.248 254.65 114.236 256.623C104.828 259.712 94.8567 262.984 92.6215 270.287C90.0702 278.559 90.1139 288.747 90.1553 298.401V298.401V298.402V298.402C90.1748 302.94 90.1938 307.36 89.9423 311.407H71.5379C71.3249 307.893 70.7926 303.845 70.2311 299.574C68.7971 288.667 67.1717 276.305 70.1809 267.646C72.1713 261.924 80.0515 258.976 87.8532 256.058C95.0042 253.383 102.089 250.733 104.513 245.993C111.922 231.516 95.6938 227.601 79.0916 223.596C64.4648 220.068 49.5476 216.47 50.2487 205.516C50.6331 199.521 58.4863 194.499 66.367 189.46C78.6665 181.595 91.0329 173.687 75.1762 161.969C72.4472 159.953 69.8317 158.509 67.4378 157.187C61.0387 153.655 56.2219 150.996 55.0478 140.608C54.0479 131.795 53.6566 122.86 53.2665 113.95V113.95L53.2665 113.95L53.2665 113.95L53.2665 113.949C53.0703 109.47 52.8744 104.997 52.6017 100.55H51.2038V125.823C51.2038 127.776 51.0575 129.934 50.9055 132.174C50.521 137.841 50.1004 144.04 51.9202 148.824C53.7593 153.694 58.1469 155.918 62.5289 158.139C66.4734 160.138 70.4133 162.134 72.4854 166.058C79.1524 178.683 67.4716 184.667 56.1442 190.469C45.4247 195.961 35.0217 201.289 40.7844 211.932C44.7913 219.337 55.8275 221.626 66.2486 223.788C72.7167 225.13 78.948 226.422 83.1145 228.858C96.4402 236.639 91.9032 247.017 80.5752 253.807C55.8942 262.006 52.1492 265.731 51.8522 281.105C51.6658 290.966 51.728 300.835 51.7901 310.701C51.8212 315.633 51.8522 320.564 51.8522 325.494H40.7863C40.7863 320.546 40.7494 315.587 40.7126 310.625C40.6388 300.69 40.5649 290.738 40.7863 280.819C41.159 264.355 45.597 261.73 70.0101 253.532C84.8094 244.485 82.7476 232.204 66.3875 226.338C63.8517 225.428 60.3417 224.66 56.482 223.815L56.4817 223.815C44.5357 221.201 29.2404 217.853 29.1127 207.31C29.0414 200.183 38.059 194.656 46.9573 189.203C59.8514 181.3 72.4951 173.55 56.8708 161.309C54.5726 159.507 52.446 158.138 50.5332 156.906L50.5331 156.906C44.394 152.952 40.4565 150.416 40.1146 139.579C39.7729 128.627 39.8869 117.635 40.0008 106.654V106.654V106.654V106.653C40.0577 101.166 40.1146 95.6811 40.1146 90.2048H61.3146L63.7258 130.247C63.7523 130.685 63.778 131.117 63.8034 131.543C64.5793 144.581 65.0054 151.741 77.6223 158.337C85.9334 162.684 93.6912 167.692 89.8822 177.927C87.4981 184.32 81.3934 187.227 75.2418 190.157C70.8739 192.236 66.4824 194.328 63.3822 197.686C50.208 211.966 69.707 217.901 88.4172 223.597C100.883 227.391 112.998 231.079 114.868 237.057C117.422 245.233 106.199 249.941 96.2412 254.119C90.9395 256.343 85.9962 258.417 83.6814 260.784C76.1832 268.45 77.7822 281.454 79.1491 292.57L79.1491 292.57C79.515 295.546 79.8642 298.386 80.0179 300.953H81.2993C81.4594 298.382 81.4398 295.423 81.4191 292.283V292.283C81.3499 281.832 81.2675 269.376 87.7524 262.556C90.8958 259.248 97.6024 257.182 104.545 255.043C113.773 252.201 123.418 249.229 125.672 243.044C129.786 231.759 114.699 226.816 100.316 222.104C83.9336 216.737 68.4648 211.669 83.33 197.868C87.0312 194.433 91.8919 192.369 96.7418 190.311C102.691 187.786 108.624 185.267 112.381 180.232C118.788 171.615 115.014 164.539 106.982 159.047C96.8945 152.147 95.9801 148.334 96.4344 136.206C96.8224 125.99 97.5387 115.766 98.2543 105.552L98.2544 105.551L98.2545 105.549L98.255 105.542C98.6134 100.427 98.9716 95.3135 99.2883 90.2048L120.372 90.1553C120.372 95.6308 120.315 101.115 120.258 106.601V106.602V106.603ZM142.337 300.903H178.796L181.741 325.444H193.706C193.313 319.599 192.843 314.001 192.379 308.473L192.379 308.473L192.379 308.472C191.569 298.83 190.777 289.4 190.445 279.245C190.445 270.907 199.067 265.55 208.131 259.918C212.818 257.006 217.624 254.02 221.416 250.511C237.286 235.815 217.333 229.266 197.937 222.899C184.478 218.481 171.287 214.152 170.524 207.25C169.535 198.358 178.557 193.901 186.689 189.884C190.288 188.106 193.712 186.415 196.016 184.464C205.154 176.727 201.969 166.228 192.65 160.467C190.852 159.352 189.207 158.396 187.705 157.523C179.442 152.718 175.528 150.442 174.508 138.308C173.616 127.64 172.956 116.943 172.297 106.251L172.297 106.249L172.297 106.248L172.297 106.248L172.297 106.247C171.966 100.881 171.635 95.5152 171.275 90.1553H148.677C148.309 95.6586 147.886 101.167 147.463 106.678L147.463 106.679C146.623 117.626 145.782 128.583 145.363 139.53C144.959 150.16 148.301 152.658 153.907 156.847C155.565 158.085 157.42 159.471 159.435 161.259C173.815 174.022 160.096 181.708 146.289 189.442C136.739 194.793 127.146 200.166 126.784 207.261C126.274 217.685 140.712 221.052 152.119 223.711C155.812 224.573 159.189 225.36 161.636 226.288C178.684 232.754 176.995 245.333 162.475 253.482C159.202 255.319 155.811 256.868 152.513 258.375L152.512 258.375L152.512 258.375C141.601 263.36 131.715 267.878 130.543 280.769C129.651 290.614 129.064 300.509 128.477 310.389V310.389V310.39C128.179 315.415 127.881 320.436 127.543 325.444H139.509C140.078 321.325 140.506 317.206 140.935 313.087C141.357 309.026 141.78 304.964 142.337 300.903ZM198.672 256.993C179.995 269.256 177.48 276.67 178.214 290.558L143.036 290.575C143.129 288.794 143.158 287.187 143.185 285.709V285.708C143.383 274.853 143.453 270.987 167.926 257.009C168.876 256.467 169.945 255.894 171.078 255.286C179.749 250.636 192.248 243.933 185.079 232.936C182.361 228.767 173.003 225.998 163.24 223.11C145.737 217.931 126.932 212.367 142.766 197.659C145.685 194.945 150.585 192.463 155.718 189.861C168.969 183.147 183.779 175.643 170.11 161.342C167.416 158.522 164.841 157.039 162.598 155.747C158.314 153.279 155.241 151.509 154.863 142.463C154.477 133.247 155.268 123.748 156.051 114.353V114.353V114.353C156.439 109.696 156.825 105.064 157.064 100.506H162.772C163.013 105.056 163.105 109.703 163.197 114.376V114.377C163.383 123.814 163.571 133.362 164.997 142.463C166.487 151.967 170.812 154.141 176.807 157.153C179.061 158.286 181.552 159.537 184.217 161.342C190.233 165.414 193.314 173.156 189.581 179.836C186.634 185.104 180.998 187.637 175.359 190.171C170.855 192.196 166.348 194.221 163.209 197.642C149.129 212.935 171.075 218.954 190.056 224.158C200.031 226.894 209.187 229.404 211.864 232.919C219.922 243.508 209.243 250.276 201.1 255.436L201.1 255.437L201.095 255.439C200.253 255.974 199.437 256.491 198.672 256.993ZM342.972 100.5V90.1553L287.386 90.1663C287.386 95.6425 287.329 101.127 287.273 106.615C287.159 117.597 287.045 128.588 287.386 139.541C287.728 150.377 291.666 152.913 297.805 156.867C299.718 158.099 301.844 159.469 304.143 161.27C319.766 173.511 307.122 181.261 294.228 189.163C285.329 194.617 276.311 200.144 276.384 207.272C276.508 217.814 291.805 221.162 303.752 223.777C307.613 224.621 311.123 225.39 313.659 226.299C330.019 232.165 332.081 244.447 317.282 253.493C314.118 255.427 310.841 257.051 307.676 258.62C297.423 263.7 288.343 268.2 288.058 280.78C287.833 290.7 287.908 300.651 287.983 310.587C288.021 315.549 288.058 320.507 288.058 325.455H343.621V315.111H298.891V300.914H331.623V290.569H298.891C298.891 276.186 307.515 265.593 321.574 257.004C322.447 256.47 323.403 255.914 324.404 255.331C332.796 250.448 344.365 243.716 336.752 232.93C333.863 228.838 324.284 226.14 314.214 223.304C296.064 218.193 276.322 212.634 291.283 197.653C294.197 194.729 299.01 192.098 303.961 189.393C316.524 182.527 329.968 175.179 315.471 161.336C312.558 158.554 309.767 157.1 307.305 155.818C302.633 153.384 299.143 151.566 298.243 142.457C297.339 133.301 297.644 123.784 297.945 114.371C298.094 109.703 298.243 105.06 298.243 100.5H342.972Z"
                        fill="url(#paint0_linear_312_1462)"
                    />
                </g>
                <path
                    d="M34.4144 337.32V365.28H30.6344V341.086H30.157L23.7908 360.152H17.5042L11.2574 341.086H10.7799V365.28H7V337.32H14.2415L20.4088 356.347H20.8464L27.2126 337.32H34.4144Z"
                    fill="#282828"
                />
                <path
                    d="M52.9677 356.347H42.9012L40.5536 365.28H36.6543L44.0948 337.32H51.8138L59.2543 365.28H55.355L52.9677 356.347ZM51.973 352.582L48.9092 341.086H46.9596L43.9357 352.582H51.973Z"
                    fill="#282828"
                />
                <path
                    d="M75.9786 337.32V341.086H68.3391V365.28H64.599V341.086H56.9596V337.32H75.9786Z"
                    fill="#282828"
                />
                <path
                    d="M97.7768 337.32V341.086H90.1374V365.28H86.3973V341.086H78.7579V337.32H97.7768Z"
                    fill="#282828"
                />
                <path
                    d="M119.933 337.32V341.086H104.654V352.582H115.835V356.347H104.654V361.514H119.933V365.28H100.954V337.32H119.933Z"
                    fill="#282828"
                />
                <path
                    d="M126.842 365.28H123.102V337.32H132.094C133.102 337.32 134.057 337.521 134.959 337.921C135.861 338.322 136.643 338.869 137.307 339.564C137.97 340.231 138.487 341.032 138.858 341.967C139.256 342.902 139.455 343.89 139.455 344.931C139.455 346.106 139.216 347.188 138.739 348.176C138.288 349.164 137.678 350.005 136.909 350.699H139.336L139.455 365.28H135.715L135.596 352.582H126.842V365.28ZM126.842 348.817H132.094C132.625 348.817 133.115 348.723 133.566 348.536C134.017 348.323 134.402 348.042 134.72 347.695C135.065 347.348 135.33 346.934 135.516 346.453C135.728 345.973 135.834 345.465 135.834 344.931C135.834 343.863 135.476 342.955 134.76 342.207C134.044 341.433 133.155 341.046 132.094 341.046H126.842V348.817Z"
                    fill="#282828"
                />
                <path
                    d="M147.374 344.37C147.374 344.931 147.493 345.412 147.732 345.812C147.997 346.213 148.316 346.56 148.687 346.854C149.085 347.121 149.523 347.361 150 347.575C150.477 347.762 150.942 347.922 151.393 348.055C151.976 348.242 152.573 348.429 153.183 348.616C153.82 348.776 154.47 348.95 155.133 349.137C156.379 349.484 157.573 349.951 158.714 350.539C159.881 351.1 160.849 351.941 161.618 353.062C162.308 353.997 162.653 355.292 162.653 356.948C162.653 357.055 162.653 357.175 162.653 357.308C162.441 360.219 161.499 362.329 159.828 363.637C158.157 364.946 155.955 365.6 153.223 365.6C151.684 365.6 150.252 365.4 148.926 364.999C147.626 364.572 146.499 363.958 145.544 363.157C144.615 362.329 143.886 361.314 143.355 360.112C142.825 358.884 142.56 357.482 142.56 355.906V355.346H146.26C146.446 357.375 147.056 358.964 148.09 360.112C149.151 361.234 150.729 361.795 152.825 361.795C153.541 361.795 154.257 361.741 154.974 361.634C155.716 361.501 156.366 361.274 156.923 360.954C157.507 360.633 157.971 360.206 158.316 359.672C158.687 359.111 158.873 358.403 158.873 357.549C158.873 356.881 158.767 356.307 158.555 355.826C158.369 355.346 158.09 354.932 157.719 354.585C157.374 354.211 156.95 353.89 156.446 353.623C155.968 353.356 155.451 353.116 154.894 352.902C154.337 352.689 153.753 352.502 153.143 352.341C152.533 352.155 151.897 351.994 151.233 351.861C150.013 351.594 148.82 351.207 147.652 350.699C146.512 350.165 145.53 349.404 144.708 348.416C143.965 347.508 143.594 346.2 143.594 344.49C143.594 343.155 143.833 342.02 144.31 341.086C144.814 340.151 145.464 339.377 146.26 338.762C147.082 338.148 148.024 337.708 149.085 337.441C150.172 337.147 151.287 337 152.427 337C155.106 337 157.295 337.694 158.992 339.083C160.69 340.472 161.605 342.568 161.738 345.372H158.037C157.772 343.769 157.189 342.608 156.287 341.887C155.385 341.139 154.138 340.765 152.547 340.765C151.963 340.765 151.366 340.819 150.756 340.925C150.146 341.032 149.589 341.233 149.085 341.526C148.581 341.793 148.17 342.167 147.851 342.648C147.533 343.102 147.374 343.676 147.374 344.37Z"
                    fill="#282828"
                />
                <path
                    d="M191.14 356.347H181.073L178.726 365.28H174.827L182.267 337.32H189.986L197.427 365.28H193.527L191.14 356.347ZM190.145 352.582L187.081 341.086H185.132L182.108 352.582H190.145Z"
                    fill="#282828"
                />
                <path d="M213.724 337.32V361.514H228.963V365.28H209.984V337.32H213.724Z" fill="#282828" />
                <path
                    d="M328.123 351.3C328.123 353.276 327.765 355.132 327.049 356.868C326.359 358.604 325.404 360.126 324.184 361.434C322.964 362.716 321.531 363.731 319.887 364.478C318.364 365.182 316.735 365.555 315 365.596C314.892 365.599 242.183 365.6 242.074 365.6C240.218 365.6 238.467 365.226 236.822 364.478C235.204 363.731 233.785 362.716 232.565 361.434C231.345 360.126 230.376 358.604 229.66 356.868C228.971 355.132 228.626 353.276 228.626 351.3C228.626 349.324 228.971 347.468 229.66 345.732C230.376 343.996 231.345 342.488 232.565 341.206C233.785 339.897 235.204 338.869 236.822 338.122C238.467 337.374 240.218 337 242.074 337C242.125 337 314.776 337 314.827 337.001C316.626 337.021 318.313 337.394 319.887 338.122C321.531 338.869 322.964 339.897 324.184 341.206C325.404 342.488 326.359 343.996 327.049 345.732C327.765 347.468 328.123 349.324 328.123 351.3ZM324.224 351.3C324.224 349.831 323.972 348.456 323.468 347.174C322.964 345.892 322.274 344.771 321.399 343.81C320.55 342.848 319.542 342.1 318.375 341.566C317.278 341.027 316.095 340.747 314.827 340.726C314.776 340.726 242.125 340.725 242.074 340.725C240.748 340.725 239.501 341.006 238.334 341.566C237.194 342.1 236.186 342.848 235.31 343.81C234.461 344.771 233.785 345.892 233.281 347.174C232.777 348.456 232.525 349.831 232.525 351.3C232.525 352.769 232.777 354.144 233.281 355.426C233.785 356.708 234.461 357.829 235.31 358.79C236.186 359.752 237.194 360.513 238.334 361.074C239.501 361.608 240.748 361.875 242.074 361.875C242.184 361.875 314.892 361.873 315 361.869C316.203 361.829 317.328 361.564 318.375 361.074C319.542 360.513 320.55 359.752 321.399 358.79C322.274 357.829 322.964 356.708 323.468 355.426C323.972 354.144 324.224 352.769 324.224 351.3Z"
                    fill="#282828"
                />
                <path d="M346.9 337.32V341.086H339.261V365.28H335.52V341.086H327.881V337.32H346.9Z" fill="#282828" />
                <path d="M38.2604 371.623V377.778H25.7039V417.326H19.5565V377.778H7V371.623H38.2604Z" fill="#282828" />
                <path
                    d="M74.6775 371.623V417.326H68.5955V402.725H49.63V417.326H43.4825V371.623H49.63V396.57H68.5955V371.623H74.6775Z"
                    fill="#282828"
                />
                <path
                    d="M111.783 371.623V377.778H86.6705V396.57H105.047V402.725H86.6705V411.171H111.783V417.326H80.5884V371.623H111.783Z"
                    fill="#282828"
                />
                <path
                    d="M124.251 383.147C124.251 384.064 124.447 384.85 124.84 385.504C125.276 386.159 125.799 386.727 126.409 387.207C127.063 387.643 127.782 388.036 128.567 388.385C129.352 388.691 130.115 388.953 130.856 389.171C131.815 389.477 132.796 389.782 133.799 390.088C134.845 390.35 135.914 390.633 137.004 390.939C139.053 391.506 141.015 392.27 142.889 393.231C144.808 394.147 146.399 395.522 147.664 397.356C148.797 398.883 149.364 401 149.364 403.707C149.364 403.881 149.364 404.078 149.364 404.296C149.015 409.054 147.467 412.502 144.721 414.641C141.974 416.78 138.355 417.85 133.865 417.85C131.336 417.85 128.981 417.522 126.802 416.867C124.665 416.169 122.812 415.165 121.243 413.856C119.717 412.502 118.518 410.844 117.646 408.879C116.774 406.871 116.338 404.58 116.338 402.004V401.088H122.42C122.725 404.405 123.728 407.002 125.428 408.879C127.172 410.713 129.766 411.629 133.211 411.629C134.388 411.629 135.565 411.542 136.742 411.367C137.963 411.149 139.031 410.778 139.947 410.254C140.906 409.731 141.669 409.032 142.236 408.159C142.846 407.242 143.151 406.086 143.151 404.689C143.151 403.598 142.977 402.659 142.628 401.873C142.323 401.088 141.865 400.411 141.255 399.844C140.688 399.233 139.99 398.709 139.162 398.272C138.377 397.836 137.527 397.443 136.611 397.094C135.696 396.744 134.736 396.439 133.734 396.177C132.731 395.871 131.685 395.61 130.595 395.391C128.589 394.955 126.627 394.322 124.709 393.492C122.834 392.619 121.221 391.375 119.869 389.76C118.649 388.276 118.038 386.137 118.038 383.344C118.038 381.161 118.431 379.306 119.215 377.778C120.044 376.25 121.112 374.985 122.42 373.981C123.771 372.977 125.319 372.256 127.063 371.82C128.851 371.34 130.682 371.1 132.557 371.1C136.96 371.1 140.557 372.235 143.347 374.504C146.138 376.774 147.642 380.201 147.86 384.784H141.778C141.342 382.165 140.383 380.266 138.9 379.088C137.418 377.865 135.369 377.254 132.753 377.254C131.794 377.254 130.813 377.342 129.81 377.516C128.807 377.691 127.891 378.018 127.063 378.498C126.235 378.935 125.559 379.546 125.036 380.332C124.513 381.074 124.251 382.012 124.251 383.147Z"
                    fill="#282828"
                />
                <path
                    d="M185.804 371.623V377.778H160.691V396.57H179.068V402.725H160.691V411.171H185.804V417.326H154.609V371.623H185.804Z"
                    fill="#282828"
                />
                <path
                    d="M208 417.326V371.623H219.772C222.824 371.623 225.701 372.235 228.404 373.457C231.108 374.635 233.462 376.25 235.467 378.302C237.473 380.354 239.043 382.776 240.176 385.57C241.353 388.363 241.942 391.332 241.942 394.475C241.942 397.617 241.353 400.586 240.176 403.379C239.043 406.129 237.473 408.552 235.467 410.647C233.462 412.699 231.108 414.336 228.404 415.558C225.701 416.737 222.824 417.326 219.772 417.326H208ZM219.772 411.302C221.952 411.302 224.001 410.865 225.919 409.992C227.838 409.119 229.516 407.919 230.955 406.391C232.394 404.864 233.527 403.074 234.356 401.022C235.184 398.971 235.598 396.788 235.598 394.475C235.598 392.161 235.184 389.979 234.356 387.927C233.527 385.875 232.394 384.108 230.955 382.623C229.516 381.096 227.838 379.895 225.919 379.022C224.001 378.149 221.952 377.713 219.772 377.713H214.148V411.302H219.772Z"
                    fill="#282828"
                />
                <path
                    d="M268.546 402.725H252L248.142 417.326H241.733L253.962 371.623H266.65L278.879 417.326H272.47L268.546 402.725ZM266.911 396.57L261.876 377.778H258.671L253.701 396.57H266.911Z"
                    fill="#282828"
                />
                <path
                    d="M310.892 371.623L296.439 402.725V417.326H290.292V402.725L275.839 371.623H281.986L292.515 394.344H294.216L304.745 371.623H310.892Z"
                    fill="#282828"
                />
                <path
                    d="M321.787 383.147C321.787 384.064 321.983 384.85 322.376 385.504C322.812 386.159 323.335 386.727 323.945 387.207C324.599 387.643 325.319 388.036 326.103 388.385C326.888 388.691 327.651 388.953 328.392 389.171C329.351 389.477 330.332 389.782 331.335 390.088C332.382 390.35 333.45 390.633 334.54 390.939C336.589 391.506 338.551 392.27 340.426 393.231C342.344 394.147 343.935 395.522 345.2 397.356C346.333 398.883 346.9 401 346.9 403.707C346.9 403.881 346.9 404.078 346.9 404.296C346.551 409.054 345.003 412.502 342.257 414.641C339.51 416.78 335.891 417.85 331.401 417.85C328.872 417.85 326.518 417.522 324.338 416.867C322.201 416.169 320.348 415.165 318.779 413.856C317.253 412.502 316.054 410.844 315.182 408.879C314.31 406.871 313.874 404.58 313.874 402.004V401.088H319.956C320.261 404.405 321.264 407.002 322.964 408.879C324.708 410.713 327.302 411.629 330.747 411.629C331.924 411.629 333.101 411.542 334.278 411.367C335.499 411.149 336.567 410.778 337.483 410.254C338.442 409.731 339.205 409.032 339.772 408.159C340.382 407.242 340.687 406.086 340.687 404.689C340.687 403.598 340.513 402.659 340.164 401.873C339.859 401.088 339.401 400.411 338.791 399.844C338.224 399.233 337.526 398.709 336.698 398.272C335.913 397.836 335.063 397.443 334.147 397.094C333.232 396.744 332.273 396.439 331.27 396.177C330.267 395.871 329.221 395.61 328.131 395.391C326.125 394.955 324.163 394.322 322.245 393.492C320.37 392.619 318.757 391.375 317.405 389.76C316.185 388.276 315.574 386.137 315.574 383.344C315.574 381.161 315.967 379.306 316.751 377.778C317.58 376.25 318.648 374.985 319.956 373.981C321.307 372.977 322.855 372.256 324.599 371.82C326.387 371.34 328.218 371.1 330.093 371.1C334.496 371.1 338.093 372.235 340.883 374.504C343.674 376.774 345.178 380.201 345.396 384.784H339.314C338.878 382.165 337.919 380.266 336.436 379.088C334.954 377.865 332.905 377.254 330.289 377.254C329.33 377.254 328.349 377.342 327.346 377.516C326.343 377.691 325.428 378.018 324.599 378.498C323.771 378.935 323.095 379.546 322.572 380.332C322.049 381.074 321.787 382.012 321.787 383.147Z"
                    fill="#282828"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_312_1462"
                        x1="172.31"
                        y1="89.5"
                        x2="172.31"
                        y2="326.551"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#282828" stop-opacity="0" />
                        <stop offset="1" stop-color="#282828" />
                    </linearGradient>
                    <clipPath id="clip0_312_1462">
                        <rect width="354" height="238" fill="white" transform="translate(0 88.5)" />
                    </clipPath>
                </defs>
            </svg>

            <Block mt={40}>
                We assist clients in building and promoting their online presence through social media, blogs, and other
                platforms. Our professional strategy helps establish industry leadership and reach target audiences.
            </Block>
            <HashLink to={getHashAnchor(Anchors.Cases)}>
                <Button className={styles.casesBtn}>
                    <FlexContainer justifyContent="space-between">
                        CASES <ArrowIcon />
                    </FlexContainer>
                </Button>
            </HashLink>
        </Container>
    );
};

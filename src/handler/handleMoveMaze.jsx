export const handleMoveMaze = (props) => {
  if (props.value) props.mazeMove.current = null;
  if (
    (props.mazeMove.current === "up" || props.value === "up") &&
    (props.currentLevel.current === 1
      ? props.mazeFoot === 8 ||
        props.mazeFoot === 9 ||
        props.mazeFoot === 10 ||
        props.mazeFoot === 12 ||
        props.mazeFoot === 14 ||
        props.mazeFoot === 15 ||
        props.mazeFoot === 17 ||
        props.mazeFoot === 21 ||
        props.mazeFoot === 23 ||
        props.mazeFoot === 24 ||
        props.mazeFoot === 25 ||
        props.mazeFoot === 26 ||
        props.mazeFoot === 30 ||
        props.mazeFoot === 32 ||
        props.mazeFoot === 34 ||
        props.mazeFoot === 37 ||
        props.mazeFoot === 39 ||
        props.mazeFoot === 40 ||
        props.mazeFoot === 41 ||
        props.mazeFoot === 44 ||
        props.mazeFoot === 46 ||
        props.mazeFoot === 48 ||
        props.mazeFoot === 50 ||
        props.mazeFoot === 53 ||
        props.mazeFoot === 55 ||
        props.mazeFoot === 56 ||
        props.mazeFoot === 57 ||
        props.mazeFoot === 59 ||
        props.mazeFoot === 62
      : props.currentLevel.current === 2
      ? props.mazeFoot === 16 ||
        props.mazeFoot === 18 ||
        props.mazeFoot === 20 ||
        props.mazeFoot === 21 ||
        props.mazeFoot === 22 ||
        props.mazeFoot === 23 ||
        props.mazeFoot === 24 ||
        props.mazeFoot === 26 ||
        props.mazeFoot === 28 ||
        props.mazeFoot === 29 ||
        props.mazeFoot === 32 ||
        props.mazeFoot === 33 ||
        props.mazeFoot === 35 ||
        props.mazeFoot === 42 ||
        props.mazeFoot === 43 ||
        props.mazeFoot === 44 ||
        props.mazeFoot === 45 ||
        props.mazeFoot === 46 ||
        props.mazeFoot === 47 ||
        props.mazeFoot === 48 ||
        props.mazeFoot === 50 ||
        props.mazeFoot === 51 ||
        props.mazeFoot === 52 ||
        props.mazeFoot === 53 ||
        props.mazeFoot === 55 ||
        props.mazeFoot === 56 ||
        props.mazeFoot === 59 ||
        props.mazeFoot === 60 ||
        props.mazeFoot === 61 ||
        props.mazeFoot === 62 ||
        props.mazeFoot === 65 ||
        props.mazeFoot === 66 ||
        props.mazeFoot === 67 ||
        props.mazeFoot === 68 ||
        props.mazeFoot === 69 ||
        props.mazeFoot === 70 ||
        props.mazeFoot === 73 ||
        props.mazeFoot === 74 ||
        props.mazeFoot === 75 ||
        props.mazeFoot === 76 ||
        props.mazeFoot === 79 ||
        props.mazeFoot === 80 ||
        props.mazeFoot === 81 ||
        props.mazeFoot === 85 ||
        props.mazeFoot === 87 ||
        props.mazeFoot === 88 ||
        props.mazeFoot === 89 ||
        props.mazeFoot === 90 ||
        props.mazeFoot === 91 ||
        props.mazeFoot === 95 ||
        props.mazeFoot === 97 ||
        props.mazeFoot === 98 ||
        props.mazeFoot === 99 ||
        props.mazeFoot === 100 ||
        props.mazeFoot === 102 ||
        props.mazeFoot === 105 ||
        props.mazeFoot === 106 ||
        props.mazeFoot === 108 ||
        props.mazeFoot === 109 ||
        props.mazeFoot === 110 ||
        props.mazeFoot === 111 ||
        props.mazeFoot === 112 ||
        props.mazeFoot === 113 ||
        props.mazeFoot === 115 ||
        props.mazeFoot === 118 ||
        props.mazeFoot === 119 ||
        props.mazeFoot === 126 ||
        props.mazeFoot === 127 ||
        props.mazeFoot === 128 ||
        props.mazeFoot === 129 ||
        props.mazeFoot === 130 ||
        props.mazeFoot === 137 ||
        props.mazeFoot === 138 ||
        props.mazeFoot === 139 ||
        props.mazeFoot === 140 ||
        props.mazeFoot === 141 ||
        props.mazeFoot === 142 ||
        props.mazeFoot === 143 ||
        props.mazeFoot === 144 ||
        props.mazeFoot === 147 ||
        props.mazeFoot === 148 ||
        props.mazeFoot === 154 ||
        props.mazeFoot === 155 ||
        props.mazeFoot === 156 ||
        props.mazeFoot === 158 ||
        props.mazeFoot === 159 ||
        props.mazeFoot === 160 ||
        props.mazeFoot === 161 ||
        props.mazeFoot === 165 ||
        props.mazeFoot === 166 ||
        props.mazeFoot === 168 ||
        props.mazeFoot === 169 ||
        props.mazeFoot === 170 ||
        props.mazeFoot === 173 ||
        props.mazeFoot === 176 ||
        props.mazeFoot === 178 ||
        props.mazeFoot === 179 ||
        props.mazeFoot === 183 ||
        props.mazeFoot === 184 ||
        props.mazeFoot === 185 ||
        props.mazeFoot === 187 ||
        props.mazeFoot === 188 ||
        props.mazeFoot === 189 ||
        props.mazeFoot === 190 ||
        props.mazeFoot === 191 ||
        props.mazeFoot === 192 ||
        props.mazeFoot === 193 ||
        props.mazeFoot === 194 ||
        props.mazeFoot === 196 ||
        props.mazeFoot === 197 ||
        props.mazeFoot === 200 ||
        props.mazeFoot === 206 ||
        props.mazeFoot === 207 ||
        props.mazeFoot === 211 ||
        props.mazeFoot === 212 ||
        props.mazeFoot === 214 ||
        props.mazeFoot === 215 ||
        props.mazeFoot === 217 ||
        props.mazeFoot === 218 ||
        props.mazeFoot === 223 ||
        props.mazeFoot === 224 ||
        props.mazeFoot === 225 ||
        props.mazeFoot === 226 ||
        props.mazeFoot === 228 ||
        props.mazeFoot === 230 ||
        props.mazeFoot === 231 ||
        props.mazeFoot === 232 ||
        props.mazeFoot === 237 ||
        props.mazeFoot === 240 ||
        props.mazeFoot === 243 ||
        props.mazeFoot === 244 ||
        props.mazeFoot === 245 ||
        props.mazeFoot === 250 ||
        props.mazeFoot === 251 ||
        props.mazeFoot === 252 ||
        props.mazeFoot === 254 ||
        props.mazeFoot === 255
      : props.currentLevel.current >= 3 &&
        (props.mazeFoot === 32 ||
          props.mazeFoot === 36 ||
          props.mazeFoot === 39 ||
          props.mazeFoot === 41 ||
          props.mazeFoot === 42 ||
          props.mazeFoot === 43 ||
          props.mazeFoot === 44 ||
          props.mazeFoot === 45 ||
          props.mazeFoot === 49 ||
          props.mazeFoot === 52 ||
          props.mazeFoot === 54 ||
          props.mazeFoot === 55 ||
          props.mazeFoot === 58 ||
          props.mazeFoot === 61 ||
          props.mazeFoot === 63 ||
          props.mazeFoot === 64 ||
          props.mazeFoot === 65 ||
          props.mazeFoot === 70 ||
          props.mazeFoot === 72 ||
          props.mazeFoot === 76 ||
          props.mazeFoot === 78 ||
          props.mazeFoot === 82 ||
          props.mazeFoot === 83 ||
          props.mazeFoot === 84 ||
          props.mazeFoot === 85 ||
          props.mazeFoot === 86 ||
          props.mazeFoot === 87 ||
          props.mazeFoot === 91 ||
          props.mazeFoot === 92 ||
          props.mazeFoot === 93 ||
          props.mazeFoot === 94 ||
          props.mazeFoot === 96 ||
          props.mazeFoot === 99 ||
          props.mazeFoot === 100 ||
          props.mazeFoot === 102 ||
          props.mazeFoot === 103 ||
          props.mazeFoot === 107 ||
          props.mazeFoot === 109 ||
          props.mazeFoot === 111 ||
          props.mazeFoot === 112 ||
          props.mazeFoot === 130 ||
          props.mazeFoot === 131 ||
          props.mazeFoot === 132 ||
          props.mazeFoot === 133 ||
          props.mazeFoot === 135 ||
          props.mazeFoot === 136 ||
          props.mazeFoot === 138 ||
          props.mazeFoot === 140 ||
          props.mazeFoot === 142 ||
          props.mazeFoot === 144 ||
          props.mazeFoot === 160 ||
          props.mazeFoot === 161 ||
          props.mazeFoot === 163 ||
          props.mazeFoot === 166 ||
          props.mazeFoot === 167 ||
          props.mazeFoot === 168 ||
          props.mazeFoot === 171 ||
          props.mazeFoot === 172 ||
          props.mazeFoot === 175 ||
          props.mazeFoot === 176 ||
          props.mazeFoot === 192 ||
          props.mazeFoot === 194 ||
          props.mazeFoot === 197 ||
          props.mazeFoot === 198 ||
          props.mazeFoot === 199 ||
          props.mazeFoot === 202 ||
          props.mazeFoot === 203 ||
          props.mazeFoot === 204 ||
          props.mazeFoot === 206 ||
          props.mazeFoot === 207 ||
          props.mazeFoot === 208 ||
          props.mazeFoot === 224 ||
          props.mazeFoot === 226 ||
          props.mazeFoot === 229 ||
          props.mazeFoot === 230 ||
          props.mazeFoot === 233 ||
          props.mazeFoot === 235 ||
          props.mazeFoot === 236 ||
          props.mazeFoot === 237 ||
          props.mazeFoot === 238 ||
          props.mazeFoot === 256 ||
          props.mazeFoot === 257 ||
          props.mazeFoot === 258 ||
          props.mazeFoot === 259 ||
          props.mazeFoot === 260 ||
          props.mazeFoot === 263 ||
          props.mazeFoot === 264 ||
          props.mazeFoot === 266 ||
          props.mazeFoot === 270 ||
          props.mazeFoot === 271 ||
          props.mazeFoot === 293 ||
          props.mazeFoot === 294 ||
          props.mazeFoot === 295 ||
          props.mazeFoot === 296 ||
          props.mazeFoot === 297 ||
          props.mazeFoot === 300 ||
          props.mazeFoot === 303 ||
          props.mazeFoot === 320 ||
          props.mazeFoot === 324 ||
          props.mazeFoot === 328 ||
          props.mazeFoot === 329 ||
          props.mazeFoot === 331 ||
          props.mazeFoot === 332 ||
          props.mazeFoot === 333 ||
          props.mazeFoot === 334 ||
          props.mazeFoot === 352 ||
          props.mazeFoot === 354 ||
          props.mazeFoot === 355 ||
          props.mazeFoot === 357 ||
          props.mazeFoot === 366 ||
          props.mazeFoot === 367 ||
          props.mazeFoot === 385 ||
          props.mazeFoot === 386 ||
          props.mazeFoot === 391 ||
          props.mazeFoot === 392 ||
          props.mazeFoot === 396 ||
          props.mazeFoot === 397 ||
          props.mazeFoot === 416 ||
          props.mazeFoot === 417 ||
          props.mazeFoot === 420 ||
          props.mazeFoot === 421 ||
          props.mazeFoot === 422 ||
          props.mazeFoot === 424 ||
          props.mazeFoot === 425 ||
          props.mazeFoot === 426 ||
          props.mazeFoot === 427 ||
          props.mazeFoot === 432 ||
          props.mazeFoot === 448 ||
          props.mazeFoot === 449 ||
          props.mazeFoot === 451 ||
          props.mazeFoot === 452 ||
          props.mazeFoot === 453 ||
          props.mazeFoot === 456 ||
          props.mazeFoot === 457 ||
          props.mazeFoot === 458 ||
          props.mazeFoot === 461 ||
          props.mazeFoot === 463 ||
          props.mazeFoot === 464 ||
          props.mazeFoot === 480 ||
          props.mazeFoot === 484 ||
          props.mazeFoot === 491 ||
          props.mazeFoot === 495 ||
          props.mazeFoot === 496 ||
          props.mazeFoot === 513 ||
          props.mazeFoot === 515 ||
          props.mazeFoot === 516 ||
          props.mazeFoot === 518 ||
          props.mazeFoot === 519 ||
          props.mazeFoot === 521 ||
          props.mazeFoot === 522 ||
          props.mazeFoot === 524 ||
          props.mazeFoot === 525 ||
          props.mazeFoot === 526 ||
          props.mazeFoot === 528 ||
          props.mazeFoot === 544 ||
          props.mazeFoot === 546 ||
          props.mazeFoot === 547 ||
          props.mazeFoot === 549 ||
          props.mazeFoot === 551 ||
          props.mazeFoot === 553 ||
          props.mazeFoot === 556 ||
          props.mazeFoot === 557 ||
          props.mazeFoot === 559 ||
          props.mazeFoot === 576 ||
          props.mazeFoot === 577 ||
          props.mazeFoot === 582 ||
          props.mazeFoot === 584 ||
          props.mazeFoot === 591 ||
          props.mazeFoot === 592 ||
          props.mazeFoot === 608 ||
          props.mazeFoot === 610 ||
          props.mazeFoot === 611 ||
          props.mazeFoot === 613 ||
          props.mazeFoot === 615 ||
          props.mazeFoot === 616 ||
          props.mazeFoot === 617 ||
          props.mazeFoot === 621 ||
          props.mazeFoot === 622 ||
          props.mazeFoot === 640 ||
          props.mazeFoot === 642 ||
          props.mazeFoot === 643 ||
          props.mazeFoot === 644 ||
          props.mazeFoot === 650 ||
          props.mazeFoot === 651 ||
          props.mazeFoot === 655 ||
          props.mazeFoot === 656 ||
          props.mazeFoot === 673 ||
          props.mazeFoot === 676 ||
          props.mazeFoot === 677 ||
          props.mazeFoot === 678 ||
          props.mazeFoot === 682 ||
          props.mazeFoot === 683 ||
          props.mazeFoot === 684 ||
          props.mazeFoot === 685 ||
          props.mazeFoot === 687 ||
          props.mazeFoot === 688 ||
          props.mazeFoot === 704 ||
          props.mazeFoot === 706 ||
          props.mazeFoot === 707 ||
          props.mazeFoot === 708 ||
          props.mazeFoot === 709 ||
          props.mazeFoot === 713 ||
          props.mazeFoot === 715 ||
          props.mazeFoot === 736 ||
          props.mazeFoot === 737 ||
          props.mazeFoot === 742 ||
          props.mazeFoot === 744 ||
          props.mazeFoot === 746 ||
          props.mazeFoot === 748 ||
          props.mazeFoot === 749 ||
          props.mazeFoot === 751 ||
          props.mazeFoot === 752 ||
          props.mazeFoot === 768 ||
          props.mazeFoot === 770 ||
          props.mazeFoot === 771 ||
          props.mazeFoot === 775 ||
          props.mazeFoot === 776 ||
          props.mazeFoot === 777 ||
          props.mazeFoot === 779 ||
          props.mazeFoot === 800 ||
          props.mazeFoot === 802 ||
          props.mazeFoot === 803 ||
          props.mazeFoot === 805 ||
          props.mazeFoot === 806 ||
          props.mazeFoot === 807 ||
          props.mazeFoot === 808 ||
          props.mazeFoot === 812 ||
          props.mazeFoot === 813 ||
          props.mazeFoot === 814 ||
          props.mazeFoot === 815 ||
          props.mazeFoot === 816 ||
          props.mazeFoot === 832 ||
          props.mazeFoot === 833 ||
          props.mazeFoot === 835 ||
          props.mazeFoot === 836 ||
          props.mazeFoot === 839 ||
          props.mazeFoot === 840 ||
          props.mazeFoot === 841 ||
          props.mazeFoot === 843 ||
          props.mazeFoot === 844 ||
          props.mazeFoot === 845 ||
          props.mazeFoot === 846 ||
          props.mazeFoot === 864 ||
          props.mazeFoot === 869 ||
          props.mazeFoot === 870 ||
          props.mazeFoot === 874 ||
          props.mazeFoot === 876 ||
          props.mazeFoot === 877 ||
          props.mazeFoot === 879 ||
          props.mazeFoot === 897 ||
          props.mazeFoot === 898 ||
          props.mazeFoot === 899 ||
          props.mazeFoot === 902 ||
          props.mazeFoot === 903 ||
          props.mazeFoot === 908 ||
          props.mazeFoot === 912 ||
          props.mazeFoot === 928 ||
          props.mazeFoot === 930 ||
          props.mazeFoot === 932 ||
          props.mazeFoot === 933 ||
          props.mazeFoot === 935 ||
          props.mazeFoot === 936 ||
          props.mazeFoot === 939 ||
          props.mazeFoot === 942 ||
          props.mazeFoot === 943 ||
          props.mazeFoot === 944 ||
          props.mazeFoot === 961 ||
          props.mazeFoot === 962 ||
          props.mazeFoot === 963 ||
          props.mazeFoot === 966 ||
          props.mazeFoot === 968 ||
          props.mazeFoot === 971 ||
          props.mazeFoot === 972 ||
          props.mazeFoot === 973 ||
          props.mazeFoot === 975 ||
          props.mazeFoot === 976 ||
          props.mazeFoot === 992 ||
          props.mazeFoot === 994 ||
          props.mazeFoot === 997 ||
          props.mazeFoot === 999 ||
          props.mazeFoot === 1001 ||
          props.mazeFoot === 1002 ||
          props.mazeFoot === 1005 ||
          props.mazeFoot === 1006 ||
          props.mazeFoot === 1008 ||
          props.mazeFoot === 113 ||
          props.mazeFoot === 117 ||
          props.mazeFoot === 122 ||
          props.mazeFoot === 123 ||
          props.mazeFoot === 124 ||
          props.mazeFoot === 125 ||
          props.mazeFoot === 127 ||
          props.mazeFoot === 146 ||
          props.mazeFoot === 147 ||
          props.mazeFoot === 148 ||
          props.mazeFoot === 151 ||
          props.mazeFoot === 153 ||
          props.mazeFoot === 155 ||
          props.mazeFoot === 156 ||
          props.mazeFoot === 157 ||
          props.mazeFoot === 158 ||
          props.mazeFoot === 177 ||
          props.mazeFoot === 181 ||
          props.mazeFoot === 184 ||
          props.mazeFoot === 186 ||
          props.mazeFoot === 190 ||
          props.mazeFoot === 191 ||
          props.mazeFoot === 210 ||
          props.mazeFoot === 211 ||
          props.mazeFoot === 212 ||
          props.mazeFoot === 214 ||
          props.mazeFoot === 215 ||
          props.mazeFoot === 217 ||
          props.mazeFoot === 220 ||
          props.mazeFoot === 221 ||
          props.mazeFoot === 223 ||
          props.mazeFoot === 241 ||
          props.mazeFoot === 247 ||
          props.mazeFoot === 248 ||
          props.mazeFoot === 249 ||
          props.mazeFoot === 252 ||
          props.mazeFoot === 253 ||
          props.mazeFoot === 254 ||
          props.mazeFoot === 255 ||
          props.mazeFoot === 279 ||
          props.mazeFoot === 282 ||
          props.mazeFoot === 285 ||
          props.mazeFoot === 310 ||
          props.mazeFoot === 311 ||
          props.mazeFoot === 312 ||
          props.mazeFoot === 314 ||
          props.mazeFoot === 315 ||
          props.mazeFoot === 316 ||
          props.mazeFoot === 319 ||
          props.mazeFoot === 338 ||
          props.mazeFoot === 339 ||
          props.mazeFoot === 342 ||
          props.mazeFoot === 343 ||
          props.mazeFoot === 344 ||
          props.mazeFoot === 347 ||
          props.mazeFoot === 348 ||
          props.mazeFoot === 349 ||
          props.mazeFoot === 351 ||
          props.mazeFoot === 370 ||
          props.mazeFoot === 373 ||
          props.mazeFoot === 375 ||
          props.mazeFoot === 377 ||
          props.mazeFoot === 378 ||
          props.mazeFoot === 379 ||
          props.mazeFoot === 380 ||
          props.mazeFoot === 382 ||
          props.mazeFoot === 383 ||
          props.mazeFoot === 401 ||
          props.mazeFoot === 403 ||
          props.mazeFoot === 404 ||
          props.mazeFoot === 409 ||
          props.mazeFoot === 410 ||
          props.mazeFoot === 415 ||
          props.mazeFoot === 434 ||
          props.mazeFoot === 435 ||
          props.mazeFoot === 438 ||
          props.mazeFoot === 439 ||
          props.mazeFoot === 443 ||
          props.mazeFoot === 444 ||
          props.mazeFoot === 445 ||
          props.mazeFoot === 465 ||
          props.mazeFoot === 471 ||
          props.mazeFoot === 472 ||
          props.mazeFoot === 478 ||
          props.mazeFoot === 479 ||
          props.mazeFoot === 497 ||
          props.mazeFoot === 498 ||
          props.mazeFoot === 499 ||
          props.mazeFoot === 500 ||
          props.mazeFoot === 501 ||
          props.mazeFoot === 502 ||
          props.mazeFoot === 506 ||
          props.mazeFoot === 508 ||
          props.mazeFoot === 509 ||
          props.mazeFoot === 511 ||
          props.mazeFoot === 530 ||
          props.mazeFoot === 531 ||
          props.mazeFoot === 532 ||
          props.mazeFoot === 534 ||
          props.mazeFoot === 535 ||
          props.mazeFoot === 537 ||
          props.mazeFoot === 538 ||
          props.mazeFoot === 539 ||
          props.mazeFoot === 543 ||
          props.mazeFoot === 563 ||
          props.mazeFoot === 564 ||
          props.mazeFoot === 565 ||
          props.mazeFoot === 567 ||
          props.mazeFoot === 569 ||
          props.mazeFoot === 572 ||
          props.mazeFoot === 573 ||
          props.mazeFoot === 574 ||
          props.mazeFoot === 593 ||
          props.mazeFoot === 595 ||
          props.mazeFoot === 596 ||
          props.mazeFoot === 597 ||
          props.mazeFoot === 598 ||
          props.mazeFoot === 600 ||
          props.mazeFoot === 601 ||
          props.mazeFoot === 602 ||
          props.mazeFoot === 605 ||
          props.mazeFoot === 607 ||
          props.mazeFoot === 628 ||
          props.mazeFoot === 630 ||
          props.mazeFoot === 631 ||
          props.mazeFoot === 634 ||
          props.mazeFoot === 636 ||
          props.mazeFoot === 639 ||
          props.mazeFoot === 657 ||
          props.mazeFoot === 658 ||
          props.mazeFoot === 659 ||
          props.mazeFoot === 661 ||
          props.mazeFoot === 662 ||
          props.mazeFoot === 663 ||
          props.mazeFoot === 664 ||
          props.mazeFoot === 666 ||
          props.mazeFoot === 670 ||
          props.mazeFoot === 671 ||
          props.mazeFoot === 690 ||
          props.mazeFoot === 692 ||
          props.mazeFoot === 694 ||
          props.mazeFoot === 699 ||
          props.mazeFoot === 700 ||
          props.mazeFoot === 703 ||
          props.mazeFoot === 723 ||
          props.mazeFoot === 725 ||
          props.mazeFoot === 727 ||
          props.mazeFoot === 729 ||
          props.mazeFoot === 730 ||
          props.mazeFoot === 734 ||
          props.mazeFoot === 735 ||
          props.mazeFoot === 753 ||
          props.mazeFoot === 754 ||
          props.mazeFoot === 756 ||
          props.mazeFoot === 758 ||
          props.mazeFoot === 759 ||
          props.mazeFoot === 761 ||
          props.mazeFoot === 763 ||
          props.mazeFoot === 764 ||
          props.mazeFoot === 765 ||
          props.mazeFoot === 767 ||
          props.mazeFoot === 785 ||
          props.mazeFoot === 787 ||
          props.mazeFoot === 788 ||
          props.mazeFoot === 792 ||
          props.mazeFoot === 798 ||
          props.mazeFoot === 818 ||
          props.mazeFoot === 819 ||
          props.mazeFoot === 823 ||
          props.mazeFoot === 825 ||
          props.mazeFoot === 826 ||
          props.mazeFoot === 827 ||
          props.mazeFoot === 828 ||
          props.mazeFoot === 830 ||
          props.mazeFoot === 831 ||
          props.mazeFoot === 851 ||
          props.mazeFoot === 852 ||
          props.mazeFoot === 854 ||
          props.mazeFoot === 858 ||
          props.mazeFoot === 860 ||
          props.mazeFoot === 863 ||
          props.mazeFoot === 881 ||
          props.mazeFoot === 882 ||
          props.mazeFoot === 883 ||
          props.mazeFoot === 885 ||
          props.mazeFoot === 888 ||
          props.mazeFoot === 889 ||
          props.mazeFoot === 890 ||
          props.mazeFoot === 891 ||
          props.mazeFoot === 893 ||
          props.mazeFoot === 894 ||
          props.mazeFoot === 915 ||
          props.mazeFoot === 916 ||
          props.mazeFoot === 918 ||
          props.mazeFoot === 919 ||
          props.mazeFoot === 920 ||
          props.mazeFoot === 922 ||
          props.mazeFoot === 926 ||
          props.mazeFoot === 927 ||
          props.mazeFoot === 945 ||
          props.mazeFoot === 948 ||
          props.mazeFoot === 949 ||
          props.mazeFoot === 951 ||
          props.mazeFoot === 953 ||
          props.mazeFoot === 954 ||
          props.mazeFoot === 958 ||
          props.mazeFoot === 959 ||
          props.mazeFoot === 977 ||
          props.mazeFoot === 978 ||
          props.mazeFoot === 979 ||
          props.mazeFoot === 980 ||
          props.mazeFoot === 981 ||
          props.mazeFoot === 984 ||
          props.mazeFoot === 985 ||
          props.mazeFoot === 987 ||
          props.mazeFoot === 988 ||
          props.mazeFoot === 989 ||
          props.mazeFoot === 990 ||
          props.mazeFoot === 991 ||
          props.mazeFoot === 1009 ||
          props.mazeFoot === 1014 ||
          props.mazeFoot === 1015 ||
          props.mazeFoot === 1018 ||
          props.mazeFoot === 1019 ||
          props.mazeFoot === 1022 ||
          props.mazeFoot === 1023))
  )
    props.setMazeFoot(
      (move) =>
        move -
        (props.currentLevel.current === 1
          ? 8
          : props.currentLevel.current === 2
          ? 16
          : props.currentLevel.current >= 3 && 32)
    );
  else if (
    (props.mazeMove.current === "right" || props.value === "right") &&
    (props.currentLevel.current === 1
      ? props.mazeFoot === 1 ||
        props.mazeFoot === 2 ||
        props.mazeFoot === 4 ||
        props.mazeFoot === 6 ||
        props.mazeFoot === 8 ||
        props.mazeFoot === 10 ||
        props.mazeFoot === 11 ||
        props.mazeFoot === 13 ||
        props.mazeFoot === 16 ||
        props.mazeFoot === 18 ||
        props.mazeFoot === 19 ||
        props.mazeFoot === 20 ||
        props.mazeFoot === 22 ||
        props.mazeFoot === 27 ||
        props.mazeFoot === 28 ||
        props.mazeFoot === 30 ||
        props.mazeFoot === 33 ||
        props.mazeFoot === 34 ||
        props.mazeFoot === 35 ||
        props.mazeFoot === 36 ||
        props.mazeFoot === 38 ||
        props.mazeFoot === 40 ||
        props.mazeFoot === 41 ||
        props.mazeFoot === 43 ||
        props.mazeFoot === 45 ||
        props.mazeFoot === 46 ||
        props.mazeFoot === 49 ||
        props.mazeFoot === 51 ||
        props.mazeFoot === 52 ||
        props.mazeFoot === 54 ||
        props.mazeFoot === 57 ||
        props.mazeFoot === 59 ||
        props.mazeFoot === 61 ||
        props.mazeFoot === 62
      : props.currentLevel.current === 2
      ? props.mazeFoot === 0 ||
        props.mazeFoot === 2 ||
        props.mazeFoot === 3 ||
        props.mazeFoot === 5 ||
        props.mazeFoot === 8 ||
        props.mazeFoot === 10 ||
        props.mazeFoot === 11 ||
        props.mazeFoot === 13 ||
        props.mazeFoot === 14 ||
        props.mazeFoot === 16 ||
        props.mazeFoot === 19 ||
        props.mazeFoot === 20 ||
        props.mazeFoot === 22 ||
        props.mazeFoot === 24 ||
        props.mazeFoot === 25 ||
        props.mazeFoot === 29 ||
        props.mazeFoot === 30 ||
        props.mazeFoot === 33 ||
        props.mazeFoot === 36 ||
        props.mazeFoot === 37 ||
        props.mazeFoot === 38 ||
        props.mazeFoot === 40 ||
        props.mazeFoot === 41 ||
        props.mazeFoot === 48 ||
        props.mazeFoot === 55 ||
        props.mazeFoot === 57 ||
        props.mazeFoot === 60 ||
        props.mazeFoot === 62 ||
        props.mazeFoot === 66 ||
        props.mazeFoot === 69 ||
        props.mazeFoot === 71 ||
        props.mazeFoot === 75 ||
        props.mazeFoot === 76 ||
        props.mazeFoot === 77 ||
        props.mazeFoot === 80 ||
        props.mazeFoot === 82 ||
        props.mazeFoot === 84 ||
        props.mazeFoot === 86 ||
        props.mazeFoot === 92 ||
        props.mazeFoot === 93 ||
        props.mazeFoot === 100 ||
        props.mazeFoot === 101 ||
        props.mazeFoot === 103 ||
        props.mazeFoot === 104 ||
        props.mazeFoot === 106 ||
        props.mazeFoot === 107 ||
        props.mazeFoot === 114 ||
        props.mazeFoot === 115 ||
        props.mazeFoot === 116 ||
        props.mazeFoot === 117 ||
        props.mazeFoot === 119 ||
        props.mazeFoot === 120 ||
        props.mazeFoot === 122 ||
        props.mazeFoot === 125 ||
        props.mazeFoot === 128 ||
        props.mazeFoot === 129 ||
        props.mazeFoot === 131 ||
        props.mazeFoot === 132 ||
        props.mazeFoot === 133 ||
        props.mazeFoot === 134 ||
        props.mazeFoot === 135 ||
        props.mazeFoot === 136 ||
        props.mazeFoot === 140 ||
        props.mazeFoot === 145 ||
        props.mazeFoot === 146 ||
        props.mazeFoot === 149 ||
        props.mazeFoot === 151 ||
        props.mazeFoot === 156 ||
        props.mazeFoot === 158 ||
        props.mazeFoot === 161 ||
        props.mazeFoot === 163 ||
        props.mazeFoot === 164 ||
        props.mazeFoot === 166 ||
        props.mazeFoot === 168 ||
        props.mazeFoot === 170 ||
        props.mazeFoot === 171 ||
        props.mazeFoot === 174 ||
        props.mazeFoot === 178 ||
        props.mazeFoot === 181 ||
        props.mazeFoot === 182 ||
        props.mazeFoot === 185 ||
        props.mazeFoot === 186 ||
        props.mazeFoot === 188 ||
        props.mazeFoot === 192 ||
        props.mazeFoot === 194 ||
        props.mazeFoot === 197 ||
        props.mazeFoot === 199 ||
        props.mazeFoot === 200 ||
        props.mazeFoot === 202 ||
        props.mazeFoot === 203 ||
        props.mazeFoot === 204 ||
        props.mazeFoot === 205 ||
        props.mazeFoot === 208 ||
        props.mazeFoot === 211 ||
        props.mazeFoot === 212 ||
        props.mazeFoot === 216 ||
        props.mazeFoot === 218 ||
        props.mazeFoot === 219 ||
        props.mazeFoot === 221 ||
        props.mazeFoot === 222 ||
        props.mazeFoot === 225 ||
        props.mazeFoot === 226 ||
        props.mazeFoot === 229 ||
        props.mazeFoot === 232 ||
        props.mazeFoot === 233 ||
        props.mazeFoot === 234 ||
        props.mazeFoot === 235 ||
        props.mazeFoot === 237 ||
        props.mazeFoot === 240 ||
        props.mazeFoot === 241 ||
        props.mazeFoot === 243 ||
        props.mazeFoot === 245 ||
        props.mazeFoot === 246 ||
        props.mazeFoot === 247 ||
        props.mazeFoot === 249 ||
        props.mazeFoot === 252 ||
        props.mazeFoot === 253 ||
        props.mazeFoot === 254
      : props.currentLevel.current >= 3 &&
        (props.mazeFoot === 0 ||
          props.mazeFoot === 1 ||
          props.mazeFoot === 2 ||
          props.mazeFoot === 4 ||
          props.mazeFoot === 5 ||
          props.mazeFoot === 6 ||
          props.mazeFoot === 8 ||
          props.mazeFoot === 10 ||
          props.mazeFoot === 13 ||
          props.mazeFoot === 14 ||
          props.mazeFoot === 15 ||
          props.mazeFoot === 16 ||
          props.mazeFoot === 17 ||
          props.mazeFoot === 18 ||
          props.mazeFoot === 20 ||
          props.mazeFoot === 21 ||
          props.mazeFoot === 23 ||
          props.mazeFoot === 24 ||
          props.mazeFoot === 26 ||
          props.mazeFoot === 27 ||
          props.mazeFoot === 28 ||
          props.mazeFoot === 30 ||
          props.mazeFoot === 33 ||
          props.mazeFoot === 34 ||
          props.mazeFoot === 35 ||
          props.mazeFoot === 37 ||
          props.mazeFoot === 39 ||
          props.mazeFoot === 40 ||
          props.mazeFoot === 41 ||
          props.mazeFoot === 44 ||
          props.mazeFoot === 46 ||
          props.mazeFoot === 47 ||
          props.mazeFoot === 48 ||
          props.mazeFoot === 50 ||
          props.mazeFoot === 55 ||
          props.mazeFoot === 56 ||
          props.mazeFoot === 57 ||
          props.mazeFoot === 59 ||
          props.mazeFoot === 61 ||
          props.mazeFoot === 62 ||
          props.mazeFoot === 65 ||
          props.mazeFoot === 66 ||
          props.mazeFoot === 68 ||
          props.mazeFoot === 69 ||
          props.mazeFoot === 72 ||
          props.mazeFoot === 73 ||
          props.mazeFoot === 74 ||
          props.mazeFoot === 75 ||
          props.mazeFoot === 77 ||
          props.mazeFoot === 79 ||
          props.mazeFoot === 81 ||
          props.mazeFoot === 83 ||
          props.mazeFoot === 86 ||
          props.mazeFoot === 88 ||
          props.mazeFoot === 89 ||
          props.mazeFoot === 94 ||
          props.mazeFoot === 96 ||
          props.mazeFoot === 97 ||
          props.mazeFoot === 100 ||
          props.mazeFoot === 104 ||
          props.mazeFoot === 105 ||
          props.mazeFoot === 108 ||
          props.mazeFoot === 110 ||
          props.mazeFoot === 113 ||
          props.mazeFoot === 116 ||
          props.mazeFoot === 117 ||
          props.mazeFoot === 118 ||
          props.mazeFoot === 119 ||
          props.mazeFoot === 120 ||
          props.mazeFoot === 121 ||
          props.mazeFoot === 126 ||
          props.mazeFoot === 129 ||
          props.mazeFoot === 133 ||
          props.mazeFoot === 137 ||
          props.mazeFoot === 138 ||
          props.mazeFoot === 140 ||
          props.mazeFoot === 141 ||
          props.mazeFoot === 145 ||
          props.mazeFoot === 147 ||
          props.mazeFoot === 149 ||
          props.mazeFoot === 150 ||
          props.mazeFoot === 152 ||
          props.mazeFoot === 154 ||
          props.mazeFoot === 156 ||
          props.mazeFoot === 161 ||
          props.mazeFoot === 163 ||
          props.mazeFoot === 164 ||
          props.mazeFoot === 166 ||
          props.mazeFoot === 168 ||
          props.mazeFoot === 169 ||
          props.mazeFoot === 173 ||
          props.mazeFoot === 177 ||
          props.mazeFoot === 179 ||
          props.mazeFoot === 181 ||
          props.mazeFoot === 184 ||
          props.mazeFoot === 186 ||
          props.mazeFoot === 187 ||
          props.mazeFoot === 189 ||
          props.mazeFoot === 192 ||
          props.mazeFoot === 193 ||
          props.mazeFoot === 194 ||
          props.mazeFoot === 195 ||
          props.mazeFoot === 199 ||
          props.mazeFoot === 201 ||
          props.mazeFoot === 204 ||
          props.mazeFoot === 206 ||
          props.mazeFoot === 208 ||
          props.mazeFoot === 210 ||
          props.mazeFoot === 212 ||
          props.mazeFoot === 213 ||
          props.mazeFoot === 215 ||
          props.mazeFoot === 217 ||
          props.mazeFoot === 218 ||
          props.mazeFoot === 222 ||
          props.mazeFoot === 227 ||
          props.mazeFoot === 229 ||
          props.mazeFoot === 230 ||
          props.mazeFoot === 232 ||
          props.mazeFoot === 234 ||
          props.mazeFoot === 237 ||
          props.mazeFoot === 239 ||
          props.mazeFoot === 240 ||
          props.mazeFoot === 241 ||
          props.mazeFoot === 242 ||
          props.mazeFoot === 243 ||
          props.mazeFoot === 244 ||
          props.mazeFoot === 245 ||
          props.mazeFoot === 248 ||
          props.mazeFoot === 250 ||
          props.mazeFoot === 251 ||
          props.mazeFoot === 253 ||
          props.mazeFoot === 256 ||
          props.mazeFoot === 258 ||
          props.mazeFoot === 260 ||
          props.mazeFoot === 261 ||
          props.mazeFoot === 265 ||
          props.mazeFoot === 267 ||
          props.mazeFoot === 269 ||
          props.mazeFoot === 271 ||
          props.mazeFoot === 272 ||
          props.mazeFoot === 273 ||
          props.mazeFoot === 274 ||
          props.mazeFoot === 275 ||
          props.mazeFoot === 276 ||
          props.mazeFoot === 277 ||
          props.mazeFoot === 280 ||
          props.mazeFoot === 281 ||
          props.mazeFoot === 284 ||
          props.mazeFoot === 286 ||
          props.mazeFoot === 288 ||
          props.mazeFoot === 289 ||
          props.mazeFoot === 290 ||
          props.mazeFoot === 291 ||
          props.mazeFoot === 294 ||
          props.mazeFoot === 298 ||
          props.mazeFoot === 299 ||
          props.mazeFoot === 301 ||
          props.mazeFoot === 303 ||
          props.mazeFoot === 304 ||
          props.mazeFoot === 305 ||
          props.mazeFoot === 307 ||
          props.mazeFoot === 308 ||
          props.mazeFoot === 309 ||
          props.mazeFoot === 313 ||
          props.mazeFoot === 317 ||
          props.mazeFoot === 318 ||
          props.mazeFoot === 320 ||
          props.mazeFoot === 321 ||
          props.mazeFoot === 323 ||
          props.mazeFoot === 325 ||
          props.mazeFoot === 326 ||
          props.mazeFoot === 327 ||
          props.mazeFoot === 329 ||
          props.mazeFoot === 330 ||
          props.mazeFoot === 332 ||
          props.mazeFoot === 335 ||
          props.mazeFoot === 336 ||
          props.mazeFoot === 337 ||
          props.mazeFoot === 339 ||
          props.mazeFoot === 340 ||
          props.mazeFoot === 344 ||
          props.mazeFoot === 350 ||
          props.mazeFoot === 352 ||
          props.mazeFoot === 355 ||
          props.mazeFoot === 356 ||
          props.mazeFoot === 358 ||
          props.mazeFoot === 360 ||
          props.mazeFoot === 361 ||
          props.mazeFoot === 362 ||
          props.mazeFoot === 363 ||
          props.mazeFoot === 365 ||
          props.mazeFoot === 367 ||
          props.mazeFoot === 369 ||
          props.mazeFoot === 371 ||
          props.mazeFoot === 373 ||
          props.mazeFoot === 374 ||
          props.mazeFoot === 375 ||
          props.mazeFoot === 378 ||
          props.mazeFoot === 380 ||
          props.mazeFoot === 381 ||
          props.mazeFoot === 386 ||
          props.mazeFoot === 387 ||
          props.mazeFoot === 389 ||
          props.mazeFoot === 390 ||
          props.mazeFoot === 393 ||
          props.mazeFoot === 395 ||
          props.mazeFoot === 397 ||
          props.mazeFoot === 398 ||
          props.mazeFoot === 399 ||
          props.mazeFoot === 401 ||
          props.mazeFoot === 404 ||
          props.mazeFoot === 405 ||
          props.mazeFoot === 407 ||
          props.mazeFoot === 408 ||
          props.mazeFoot === 410 ||
          props.mazeFoot === 413 ||
          props.mazeFoot === 414 ||
          props.mazeFoot === 418 ||
          props.mazeFoot === 422 ||
          props.mazeFoot === 427 ||
          props.mazeFoot === 428 ||
          props.mazeFoot === 429 ||
          props.mazeFoot === 430 ||
          props.mazeFoot === 433 ||
          props.mazeFoot === 434 ||
          props.mazeFoot === 436 ||
          props.mazeFoot === 437 ||
          props.mazeFoot === 440 ||
          props.mazeFoot === 441 ||
          props.mazeFoot === 442 ||
          props.mazeFoot === 443 ||
          props.mazeFoot === 445 ||
          props.mazeFoot === 448 ||
          props.mazeFoot === 449 ||
          props.mazeFoot === 450 ||
          props.mazeFoot === 453 ||
          props.mazeFoot === 454 ||
          props.mazeFoot === 455 ||
          props.mazeFoot === 456 ||
          props.mazeFoot === 458 ||
          props.mazeFoot === 459 ||
          props.mazeFoot === 461 ||
          props.mazeFoot === 466 ||
          props.mazeFoot === 468 ||
          props.mazeFoot === 470 ||
          props.mazeFoot === 472 ||
          props.mazeFoot === 473 ||
          props.mazeFoot === 475 ||
          props.mazeFoot === 476 ||
          props.mazeFoot === 478 ||
          props.mazeFoot === 481 ||
          props.mazeFoot === 482 ||
          props.mazeFoot === 484 ||
          props.mazeFoot === 485 ||
          props.mazeFoot === 487 ||
          props.mazeFoot === 488 ||
          props.mazeFoot === 490 ||
          props.mazeFoot === 492 ||
          props.mazeFoot === 494 ||
          props.mazeFoot === 501 ||
          props.mazeFoot === 503 ||
          props.mazeFoot === 504 ||
          props.mazeFoot === 507 ||
          props.mazeFoot === 509 ||
          props.mazeFoot === 510 ||
          props.mazeFoot === 512 ||
          props.mazeFoot === 517 ||
          props.mazeFoot === 519 ||
          props.mazeFoot === 522 ||
          props.mazeFoot === 523 ||
          props.mazeFoot === 526 ||
          props.mazeFoot === 528 ||
          props.mazeFoot === 529 ||
          props.mazeFoot === 533 ||
          props.mazeFoot === 535 ||
          props.mazeFoot === 538 ||
          props.mazeFoot === 540 ||
          props.mazeFoot === 541 ||
          props.mazeFoot === 545 ||
          props.mazeFoot === 546 ||
          props.mazeFoot === 547 ||
          props.mazeFoot === 548 ||
          props.mazeFoot === 550 ||
          props.mazeFoot === 552 ||
          props.mazeFoot === 554 ||
          props.mazeFoot === 555 ||
          props.mazeFoot === 557 ||
          props.mazeFoot === 559 ||
          props.mazeFoot === 561 ||
          props.mazeFoot === 566 ||
          props.mazeFoot === 568 ||
          props.mazeFoot === 570 ||
          props.mazeFoot === 571 ||
          props.mazeFoot === 574 ||
          props.mazeFoot === 577 ||
          props.mazeFoot === 579 ||
          props.mazeFoot === 580 ||
          props.mazeFoot === 582 ||
          props.mazeFoot === 585 ||
          props.mazeFoot === 586 ||
          props.mazeFoot === 587 ||
          props.mazeFoot === 588 ||
          props.mazeFoot === 590 ||
          props.mazeFoot === 592 ||
          props.mazeFoot === 593 ||
          props.mazeFoot === 594 ||
          props.mazeFoot === 599 ||
          props.mazeFoot === 602 ||
          props.mazeFoot === 603 ||
          props.mazeFoot === 605 ||
          props.mazeFoot === 609 ||
          props.mazeFoot === 613 ||
          props.mazeFoot === 614 ||
          props.mazeFoot === 616 ||
          props.mazeFoot === 619 ||
          props.mazeFoot === 620 ||
          props.mazeFoot === 622 ||
          props.mazeFoot === 625 ||
          props.mazeFoot === 627 ||
          props.mazeFoot === 628 ||
          props.mazeFoot === 632 ||
          props.mazeFoot === 633 ||
          props.mazeFoot === 634 ||
          props.mazeFoot === 636 ||
          props.mazeFoot === 638 ||
          props.mazeFoot === 640 ||
          props.mazeFoot === 643 ||
          props.mazeFoot === 645 ||
          props.mazeFoot === 646 ||
          props.mazeFoot === 647 ||
          props.mazeFoot === 648 ||
          props.mazeFoot === 649 ||
          props.mazeFoot === 653 ||
          props.mazeFoot === 656 ||
          props.mazeFoot === 660 ||
          props.mazeFoot === 661 ||
          props.mazeFoot === 663 ||
          props.mazeFoot === 664 ||
          props.mazeFoot === 666 ||
          props.mazeFoot === 668 ||
          props.mazeFoot === 669 ||
          props.mazeFoot === 672 ||
          props.mazeFoot === 674 ||
          props.mazeFoot === 678 ||
          props.mazeFoot === 679 ||
          props.mazeFoot === 681 ||
          props.mazeFoot === 684 ||
          props.mazeFoot === 685 ||
          props.mazeFoot === 686 ||
          props.mazeFoot === 687 ||
          props.mazeFoot === 689 ||
          props.mazeFoot === 690 ||
          props.mazeFoot === 693 ||
          props.mazeFoot === 695 ||
          props.mazeFoot === 696 ||
          props.mazeFoot === 698 ||
          props.mazeFoot === 700 ||
          props.mazeFoot === 701 ||
          props.mazeFoot === 705 ||
          props.mazeFoot === 707 ||
          props.mazeFoot === 710 ||
          props.mazeFoot === 711 ||
          props.mazeFoot === 713 ||
          props.mazeFoot === 715 ||
          props.mazeFoot === 717 ||
          props.mazeFoot === 718 ||
          props.mazeFoot === 720 ||
          props.mazeFoot === 723 ||
          props.mazeFoot === 725 ||
          props.mazeFoot === 728 ||
          props.mazeFoot === 731 ||
          props.mazeFoot === 733 ||
          props.mazeFoot === 737 ||
          props.mazeFoot === 739 ||
          props.mazeFoot === 740 ||
          props.mazeFoot === 741 ||
          props.mazeFoot === 745 ||
          props.mazeFoot === 746 ||
          props.mazeFoot === 748 ||
          props.mazeFoot === 749 ||
          props.mazeFoot === 751 ||
          props.mazeFoot === 754 ||
          props.mazeFoot === 757 ||
          props.mazeFoot === 759 ||
          props.mazeFoot === 761 ||
          props.mazeFoot === 762 ||
          props.mazeFoot === 764 ||
          props.mazeFoot === 766 ||
          props.mazeFoot === 768 ||
          props.mazeFoot === 772 ||
          props.mazeFoot === 773 ||
          props.mazeFoot === 777 ||
          props.mazeFoot === 779 ||
          props.mazeFoot === 781 ||
          props.mazeFoot === 783 ||
          props.mazeFoot === 785 ||
          props.mazeFoot === 788 ||
          props.mazeFoot === 789 ||
          props.mazeFoot === 790 ||
          props.mazeFoot === 792 ||
          props.mazeFoot === 794 ||
          props.mazeFoot === 796 ||
          props.mazeFoot === 801 ||
          props.mazeFoot === 804 ||
          props.mazeFoot === 806 ||
          props.mazeFoot === 809 ||
          props.mazeFoot === 810 ||
          props.mazeFoot === 814 ||
          props.mazeFoot === 816 ||
          props.mazeFoot === 817 ||
          props.mazeFoot === 820 ||
          props.mazeFoot === 821 ||
          props.mazeFoot === 823 ||
          props.mazeFoot === 824 ||
          props.mazeFoot === 828 ||
          props.mazeFoot === 829 ||
          props.mazeFoot === 833 ||
          props.mazeFoot === 834 ||
          props.mazeFoot === 837 ||
          props.mazeFoot === 838 ||
          props.mazeFoot === 840 ||
          props.mazeFoot === 842 ||
          props.mazeFoot === 847 ||
          props.mazeFoot === 848 ||
          props.mazeFoot === 850 ||
          props.mazeFoot === 852 ||
          props.mazeFoot === 854 ||
          props.mazeFoot === 855 ||
          props.mazeFoot === 856 ||
          props.mazeFoot === 859 ||
          props.mazeFoot === 861 ||
          props.mazeFoot === 862 ||
          props.mazeFoot === 864 ||
          props.mazeFoot === 866 ||
          props.mazeFoot === 867 ||
          props.mazeFoot === 868 ||
          props.mazeFoot === 871 ||
          props.mazeFoot === 872 ||
          props.mazeFoot === 873 ||
          props.mazeFoot === 875 ||
          props.mazeFoot === 877 ||
          props.mazeFoot === 878 ||
          props.mazeFoot === 880 ||
          props.mazeFoot === 884 ||
          props.mazeFoot === 886 ||
          props.mazeFoot === 889 ||
          props.mazeFoot === 891 ||
          props.mazeFoot === 892 ||
          props.mazeFoot === 896 ||
          props.mazeFoot === 899 ||
          props.mazeFoot === 901 ||
          props.mazeFoot === 904 ||
          props.mazeFoot === 905 ||
          props.mazeFoot === 906 ||
          props.mazeFoot === 907 ||
          props.mazeFoot === 908 ||
          props.mazeFoot === 909 ||
          props.mazeFoot === 913 ||
          props.mazeFoot === 914 ||
          props.mazeFoot === 917 ||
          props.mazeFoot === 920 ||
          props.mazeFoot === 922 ||
          props.mazeFoot === 923 ||
          props.mazeFoot === 924 ||
          props.mazeFoot === 928 ||
          props.mazeFoot === 931 ||
          props.mazeFoot === 934 ||
          props.mazeFoot === 936 ||
          props.mazeFoot === 937 ||
          props.mazeFoot === 940 ||
          props.mazeFoot === 942 ||
          props.mazeFoot === 946 ||
          props.mazeFoot === 949 ||
          props.mazeFoot === 951 ||
          props.mazeFoot === 955 ||
          props.mazeFoot === 957 ||
          props.mazeFoot === 960 ||
          props.mazeFoot === 963 ||
          props.mazeFoot === 964 ||
          props.mazeFoot === 966 ||
          props.mazeFoot === 969 ||
          props.mazeFoot === 971 ||
          props.mazeFoot === 974 ||
          props.mazeFoot === 977 ||
          props.mazeFoot === 979 ||
          props.mazeFoot === 981 ||
          props.mazeFoot === 983 ||
          props.mazeFoot === 985 ||
          props.mazeFoot === 988 ||
          props.mazeFoot === 992 ||
          props.mazeFoot === 993 ||
          props.mazeFoot === 994 ||
          props.mazeFoot === 995 ||
          props.mazeFoot === 997 ||
          props.mazeFoot === 998 ||
          props.mazeFoot === 999 ||
          props.mazeFoot === 1000 ||
          props.mazeFoot === 1002 ||
          props.mazeFoot === 1003 ||
          props.mazeFoot === 1004 ||
          props.mazeFoot === 1006 ||
          props.mazeFoot === 1009 ||
          props.mazeFoot === 1010 ||
          props.mazeFoot === 1011 ||
          props.mazeFoot === 1012 ||
          props.mazeFoot === 1013 ||
          props.mazeFoot === 1015 ||
          props.mazeFoot === 1016 ||
          props.mazeFoot === 1018 ||
          props.mazeFoot === 1019 ||
          props.mazeFoot === 1020 ||
          props.mazeFoot === 1022))
  )
    props.setMazeFoot((move) => move + 1);
  else if (
    (props.mazeMove.current === "down" || props.value === "down") &&
    (props.currentLevel.current === 1
      ? props.mazeFoot === 0 ||
        props.mazeFoot === 1 ||
        props.mazeFoot === 2 ||
        props.mazeFoot === 4 ||
        props.mazeFoot === 6 ||
        props.mazeFoot === 7 ||
        props.mazeFoot === 9 ||
        props.mazeFoot === 13 ||
        props.mazeFoot === 15 ||
        props.mazeFoot === 16 ||
        props.mazeFoot === 17 ||
        props.mazeFoot === 18 ||
        props.mazeFoot === 22 ||
        props.mazeFoot === 24 ||
        props.mazeFoot === 26 ||
        props.mazeFoot === 29 ||
        props.mazeFoot === 31 ||
        props.mazeFoot === 32 ||
        props.mazeFoot === 33 ||
        props.mazeFoot === 36 ||
        props.mazeFoot === 38 ||
        props.mazeFoot === 40 ||
        props.mazeFoot === 42 ||
        props.mazeFoot === 45 ||
        props.mazeFoot === 47 ||
        props.mazeFoot === 48 ||
        props.mazeFoot === 49 ||
        props.mazeFoot === 51 ||
        props.mazeFoot === 54
      : props.currentLevel.current === 2
      ? props.mazeFoot + 16 === 16 ||
        props.mazeFoot + 16 === 18 ||
        props.mazeFoot + 16 === 20 ||
        props.mazeFoot + 16 === 21 ||
        props.mazeFoot + 16 === 22 ||
        props.mazeFoot + 16 === 23 ||
        props.mazeFoot + 16 === 24 ||
        props.mazeFoot + 16 === 26 ||
        props.mazeFoot + 16 === 28 ||
        props.mazeFoot + 16 === 29 ||
        props.mazeFoot + 16 === 32 ||
        props.mazeFoot + 16 === 33 ||
        props.mazeFoot + 16 === 35 ||
        props.mazeFoot + 16 === 42 ||
        props.mazeFoot + 16 === 43 ||
        props.mazeFoot + 16 === 44 ||
        props.mazeFoot + 16 === 45 ||
        props.mazeFoot + 16 === 46 ||
        props.mazeFoot + 16 === 47 ||
        props.mazeFoot + 16 === 48 ||
        props.mazeFoot + 16 === 50 ||
        props.mazeFoot + 16 === 51 ||
        props.mazeFoot + 16 === 52 ||
        props.mazeFoot + 16 === 53 ||
        props.mazeFoot + 16 === 55 ||
        props.mazeFoot + 16 === 56 ||
        props.mazeFoot + 16 === 59 ||
        props.mazeFoot + 16 === 60 ||
        props.mazeFoot + 16 === 61 ||
        props.mazeFoot + 16 === 62 ||
        props.mazeFoot + 16 === 65 ||
        props.mazeFoot + 16 === 66 ||
        props.mazeFoot + 16 === 67 ||
        props.mazeFoot + 16 === 68 ||
        props.mazeFoot + 16 === 69 ||
        props.mazeFoot + 16 === 70 ||
        props.mazeFoot + 16 === 73 ||
        props.mazeFoot + 16 === 74 ||
        props.mazeFoot + 16 === 75 ||
        props.mazeFoot + 16 === 76 ||
        props.mazeFoot + 16 === 79 ||
        props.mazeFoot + 16 === 80 ||
        props.mazeFoot + 16 === 81 ||
        props.mazeFoot + 16 === 85 ||
        props.mazeFoot + 16 === 87 ||
        props.mazeFoot + 16 === 88 ||
        props.mazeFoot + 16 === 89 ||
        props.mazeFoot + 16 === 90 ||
        props.mazeFoot + 16 === 91 ||
        props.mazeFoot + 16 === 95 ||
        props.mazeFoot + 16 === 97 ||
        props.mazeFoot + 16 === 98 ||
        props.mazeFoot + 16 === 99 ||
        props.mazeFoot + 16 === 100 ||
        props.mazeFoot + 16 === 102 ||
        props.mazeFoot + 16 === 105 ||
        props.mazeFoot + 16 === 106 ||
        props.mazeFoot + 16 === 108 ||
        props.mazeFoot + 16 === 109 ||
        props.mazeFoot + 16 === 110 ||
        props.mazeFoot + 16 === 111 ||
        props.mazeFoot + 16 === 112 ||
        props.mazeFoot + 16 === 113 ||
        props.mazeFoot + 16 === 115 ||
        props.mazeFoot + 16 === 118 ||
        props.mazeFoot + 16 === 119 ||
        props.mazeFoot + 16 === 126 ||
        props.mazeFoot + 16 === 127 ||
        props.mazeFoot + 16 === 128 ||
        props.mazeFoot + 16 === 129 ||
        props.mazeFoot + 16 === 130 ||
        props.mazeFoot + 16 === 137 ||
        props.mazeFoot + 16 === 138 ||
        props.mazeFoot + 16 === 139 ||
        props.mazeFoot + 16 === 140 ||
        props.mazeFoot + 16 === 141 ||
        props.mazeFoot + 16 === 142 ||
        props.mazeFoot + 16 === 143 ||
        props.mazeFoot + 16 === 144 ||
        props.mazeFoot + 16 === 147 ||
        props.mazeFoot + 16 === 148 ||
        props.mazeFoot + 16 === 154 ||
        props.mazeFoot + 16 === 155 ||
        props.mazeFoot + 16 === 156 ||
        props.mazeFoot + 16 === 158 ||
        props.mazeFoot + 16 === 159 ||
        props.mazeFoot + 16 === 160 ||
        props.mazeFoot + 16 === 161 ||
        props.mazeFoot + 16 === 165 ||
        props.mazeFoot + 16 === 166 ||
        props.mazeFoot + 16 === 168 ||
        props.mazeFoot + 16 === 169 ||
        props.mazeFoot + 16 === 170 ||
        props.mazeFoot + 16 === 173 ||
        props.mazeFoot + 16 === 176 ||
        props.mazeFoot + 16 === 178 ||
        props.mazeFoot + 16 === 179 ||
        props.mazeFoot + 16 === 183 ||
        props.mazeFoot + 16 === 184 ||
        props.mazeFoot + 16 === 185 ||
        props.mazeFoot + 16 === 187 ||
        props.mazeFoot + 16 === 188 ||
        props.mazeFoot + 16 === 189 ||
        props.mazeFoot + 16 === 190 ||
        props.mazeFoot + 16 === 191 ||
        props.mazeFoot + 16 === 192 ||
        props.mazeFoot + 16 === 193 ||
        props.mazeFoot + 16 === 194 ||
        props.mazeFoot + 16 === 196 ||
        props.mazeFoot + 16 === 197 ||
        props.mazeFoot + 16 === 200 ||
        props.mazeFoot + 16 === 206 ||
        props.mazeFoot + 16 === 207 ||
        props.mazeFoot + 16 === 211 ||
        props.mazeFoot + 16 === 212 ||
        props.mazeFoot + 16 === 214 ||
        props.mazeFoot + 16 === 215 ||
        props.mazeFoot + 16 === 217 ||
        props.mazeFoot + 16 === 218 ||
        props.mazeFoot + 16 === 223 ||
        props.mazeFoot + 16 === 224 ||
        props.mazeFoot + 16 === 225 ||
        props.mazeFoot + 16 === 226 ||
        props.mazeFoot + 16 === 228 ||
        props.mazeFoot + 16 === 230 ||
        props.mazeFoot + 16 === 231 ||
        props.mazeFoot + 16 === 232 ||
        props.mazeFoot + 16 === 237 ||
        props.mazeFoot + 16 === 240 ||
        props.mazeFoot + 16 === 243 ||
        props.mazeFoot + 16 === 244 ||
        props.mazeFoot + 16 === 245 ||
        props.mazeFoot + 16 === 250 ||
        props.mazeFoot + 16 === 251 ||
        props.mazeFoot + 16 === 252 ||
        props.mazeFoot + 16 === 254 ||
        props.mazeFoot + 16 === 255
      : props.currentLevel.current >= 3 &&
        (props.mazeFoot + 32 === 32 ||
          props.mazeFoot + 32 === 36 ||
          props.mazeFoot + 32 === 39 ||
          props.mazeFoot + 32 === 41 ||
          props.mazeFoot + 32 === 42 ||
          props.mazeFoot + 32 === 43 ||
          props.mazeFoot + 32 === 44 ||
          props.mazeFoot + 32 === 45 ||
          props.mazeFoot + 32 === 49 ||
          props.mazeFoot + 32 === 52 ||
          props.mazeFoot + 32 === 54 ||
          props.mazeFoot + 32 === 55 ||
          props.mazeFoot + 32 === 58 ||
          props.mazeFoot + 32 === 61 ||
          props.mazeFoot + 32 === 63 ||
          props.mazeFoot + 32 === 64 ||
          props.mazeFoot + 32 === 65 ||
          props.mazeFoot + 32 === 70 ||
          props.mazeFoot + 32 === 72 ||
          props.mazeFoot + 32 === 76 ||
          props.mazeFoot + 32 === 78 ||
          props.mazeFoot + 32 === 82 ||
          props.mazeFoot + 32 === 83 ||
          props.mazeFoot + 32 === 84 ||
          props.mazeFoot + 32 === 85 ||
          props.mazeFoot + 32 === 86 ||
          props.mazeFoot + 32 === 87 ||
          props.mazeFoot + 32 === 91 ||
          props.mazeFoot + 32 === 92 ||
          props.mazeFoot + 32 === 93 ||
          props.mazeFoot + 32 === 94 ||
          props.mazeFoot + 32 === 96 ||
          props.mazeFoot + 32 === 99 ||
          props.mazeFoot + 32 === 100 ||
          props.mazeFoot + 32 === 102 ||
          props.mazeFoot + 32 === 103 ||
          props.mazeFoot + 32 === 107 ||
          props.mazeFoot + 32 === 109 ||
          props.mazeFoot + 32 === 111 ||
          props.mazeFoot + 32 === 112 ||
          props.mazeFoot + 32 === 130 ||
          props.mazeFoot + 32 === 131 ||
          props.mazeFoot + 32 === 132 ||
          props.mazeFoot + 32 === 133 ||
          props.mazeFoot + 32 === 135 ||
          props.mazeFoot + 32 === 136 ||
          props.mazeFoot + 32 === 138 ||
          props.mazeFoot + 32 === 140 ||
          props.mazeFoot + 32 === 142 ||
          props.mazeFoot + 32 === 144 ||
          props.mazeFoot + 32 === 160 ||
          props.mazeFoot + 32 === 161 ||
          props.mazeFoot + 32 === 163 ||
          props.mazeFoot + 32 === 166 ||
          props.mazeFoot + 32 === 167 ||
          props.mazeFoot + 32 === 168 ||
          props.mazeFoot + 32 === 171 ||
          props.mazeFoot + 32 === 172 ||
          props.mazeFoot + 32 === 175 ||
          props.mazeFoot + 32 === 176 ||
          props.mazeFoot + 32 === 192 ||
          props.mazeFoot + 32 === 194 ||
          props.mazeFoot + 32 === 197 ||
          props.mazeFoot + 32 === 198 ||
          props.mazeFoot + 32 === 199 ||
          props.mazeFoot + 32 === 202 ||
          props.mazeFoot + 32 === 203 ||
          props.mazeFoot + 32 === 204 ||
          props.mazeFoot + 32 === 206 ||
          props.mazeFoot + 32 === 207 ||
          props.mazeFoot + 32 === 208 ||
          props.mazeFoot + 32 === 224 ||
          props.mazeFoot + 32 === 226 ||
          props.mazeFoot + 32 === 229 ||
          props.mazeFoot + 32 === 230 ||
          props.mazeFoot + 32 === 233 ||
          props.mazeFoot + 32 === 235 ||
          props.mazeFoot + 32 === 236 ||
          props.mazeFoot + 32 === 237 ||
          props.mazeFoot + 32 === 238 ||
          props.mazeFoot + 32 === 256 ||
          props.mazeFoot + 32 === 257 ||
          props.mazeFoot + 32 === 258 ||
          props.mazeFoot + 32 === 259 ||
          props.mazeFoot + 32 === 260 ||
          props.mazeFoot + 32 === 263 ||
          props.mazeFoot + 32 === 264 ||
          props.mazeFoot + 32 === 266 ||
          props.mazeFoot + 32 === 270 ||
          props.mazeFoot + 32 === 271 ||
          props.mazeFoot + 32 === 293 ||
          props.mazeFoot + 32 === 294 ||
          props.mazeFoot + 32 === 295 ||
          props.mazeFoot + 32 === 296 ||
          props.mazeFoot + 32 === 297 ||
          props.mazeFoot + 32 === 300 ||
          props.mazeFoot + 32 === 303 ||
          props.mazeFoot + 32 === 320 ||
          props.mazeFoot + 32 === 324 ||
          props.mazeFoot + 32 === 328 ||
          props.mazeFoot + 32 === 329 ||
          props.mazeFoot + 32 === 331 ||
          props.mazeFoot + 32 === 332 ||
          props.mazeFoot + 32 === 333 ||
          props.mazeFoot + 32 === 334 ||
          props.mazeFoot + 32 === 352 ||
          props.mazeFoot + 32 === 354 ||
          props.mazeFoot + 32 === 355 ||
          props.mazeFoot + 32 === 357 ||
          props.mazeFoot + 32 === 366 ||
          props.mazeFoot + 32 === 367 ||
          props.mazeFoot + 32 === 385 ||
          props.mazeFoot + 32 === 386 ||
          props.mazeFoot + 32 === 391 ||
          props.mazeFoot + 32 === 392 ||
          props.mazeFoot + 32 === 396 ||
          props.mazeFoot + 32 === 397 ||
          props.mazeFoot + 32 === 416 ||
          props.mazeFoot + 32 === 417 ||
          props.mazeFoot + 32 === 420 ||
          props.mazeFoot + 32 === 421 ||
          props.mazeFoot + 32 === 422 ||
          props.mazeFoot + 32 === 424 ||
          props.mazeFoot + 32 === 425 ||
          props.mazeFoot + 32 === 426 ||
          props.mazeFoot + 32 === 427 ||
          props.mazeFoot + 32 === 432 ||
          props.mazeFoot + 32 === 448 ||
          props.mazeFoot + 32 === 449 ||
          props.mazeFoot + 32 === 451 ||
          props.mazeFoot + 32 === 452 ||
          props.mazeFoot + 32 === 453 ||
          props.mazeFoot + 32 === 456 ||
          props.mazeFoot + 32 === 457 ||
          props.mazeFoot + 32 === 458 ||
          props.mazeFoot + 32 === 461 ||
          props.mazeFoot + 32 === 463 ||
          props.mazeFoot + 32 === 464 ||
          props.mazeFoot + 32 === 480 ||
          props.mazeFoot + 32 === 484 ||
          props.mazeFoot + 32 === 491 ||
          props.mazeFoot + 32 === 495 ||
          props.mazeFoot + 32 === 496 ||
          props.mazeFoot + 32 === 513 ||
          props.mazeFoot + 32 === 515 ||
          props.mazeFoot + 32 === 516 ||
          props.mazeFoot + 32 === 518 ||
          props.mazeFoot + 32 === 519 ||
          props.mazeFoot + 32 === 521 ||
          props.mazeFoot + 32 === 522 ||
          props.mazeFoot + 32 === 524 ||
          props.mazeFoot + 32 === 525 ||
          props.mazeFoot + 32 === 526 ||
          props.mazeFoot + 32 === 528 ||
          props.mazeFoot + 32 === 544 ||
          props.mazeFoot + 32 === 546 ||
          props.mazeFoot + 32 === 547 ||
          props.mazeFoot + 32 === 549 ||
          props.mazeFoot + 32 === 551 ||
          props.mazeFoot + 32 === 553 ||
          props.mazeFoot + 32 === 556 ||
          props.mazeFoot + 32 === 557 ||
          props.mazeFoot + 32 === 559 ||
          props.mazeFoot + 32 === 576 ||
          props.mazeFoot + 32 === 577 ||
          props.mazeFoot + 32 === 582 ||
          props.mazeFoot + 32 === 584 ||
          props.mazeFoot + 32 === 591 ||
          props.mazeFoot + 32 === 592 ||
          props.mazeFoot + 32 === 608 ||
          props.mazeFoot + 32 === 610 ||
          props.mazeFoot + 32 === 611 ||
          props.mazeFoot + 32 === 613 ||
          props.mazeFoot + 32 === 615 ||
          props.mazeFoot + 32 === 616 ||
          props.mazeFoot + 32 === 617 ||
          props.mazeFoot + 32 === 621 ||
          props.mazeFoot + 32 === 622 ||
          props.mazeFoot + 32 === 640 ||
          props.mazeFoot + 32 === 642 ||
          props.mazeFoot + 32 === 643 ||
          props.mazeFoot + 32 === 644 ||
          props.mazeFoot + 32 === 650 ||
          props.mazeFoot + 32 === 651 ||
          props.mazeFoot + 32 === 655 ||
          props.mazeFoot + 32 === 656 ||
          props.mazeFoot + 32 === 673 ||
          props.mazeFoot + 32 === 676 ||
          props.mazeFoot + 32 === 677 ||
          props.mazeFoot + 32 === 678 ||
          props.mazeFoot + 32 === 682 ||
          props.mazeFoot + 32 === 683 ||
          props.mazeFoot + 32 === 684 ||
          props.mazeFoot + 32 === 685 ||
          props.mazeFoot + 32 === 687 ||
          props.mazeFoot + 32 === 688 ||
          props.mazeFoot + 32 === 704 ||
          props.mazeFoot + 32 === 706 ||
          props.mazeFoot + 32 === 707 ||
          props.mazeFoot + 32 === 708 ||
          props.mazeFoot + 32 === 709 ||
          props.mazeFoot + 32 === 713 ||
          props.mazeFoot + 32 === 715 ||
          props.mazeFoot + 32 === 736 ||
          props.mazeFoot + 32 === 737 ||
          props.mazeFoot + 32 === 742 ||
          props.mazeFoot + 32 === 744 ||
          props.mazeFoot + 32 === 746 ||
          props.mazeFoot + 32 === 748 ||
          props.mazeFoot + 32 === 749 ||
          props.mazeFoot + 32 === 751 ||
          props.mazeFoot + 32 === 752 ||
          props.mazeFoot + 32 === 768 ||
          props.mazeFoot + 32 === 770 ||
          props.mazeFoot + 32 === 771 ||
          props.mazeFoot + 32 === 775 ||
          props.mazeFoot + 32 === 776 ||
          props.mazeFoot + 32 === 777 ||
          props.mazeFoot + 32 === 779 ||
          props.mazeFoot + 32 === 800 ||
          props.mazeFoot + 32 === 802 ||
          props.mazeFoot + 32 === 803 ||
          props.mazeFoot + 32 === 805 ||
          props.mazeFoot + 32 === 806 ||
          props.mazeFoot + 32 === 807 ||
          props.mazeFoot + 32 === 808 ||
          props.mazeFoot + 32 === 812 ||
          props.mazeFoot + 32 === 813 ||
          props.mazeFoot + 32 === 814 ||
          props.mazeFoot + 32 === 815 ||
          props.mazeFoot + 32 === 816 ||
          props.mazeFoot + 32 === 832 ||
          props.mazeFoot + 32 === 833 ||
          props.mazeFoot + 32 === 835 ||
          props.mazeFoot + 32 === 836 ||
          props.mazeFoot + 32 === 839 ||
          props.mazeFoot + 32 === 840 ||
          props.mazeFoot + 32 === 841 ||
          props.mazeFoot + 32 === 843 ||
          props.mazeFoot + 32 === 844 ||
          props.mazeFoot + 32 === 845 ||
          props.mazeFoot + 32 === 846 ||
          props.mazeFoot + 32 === 864 ||
          props.mazeFoot + 32 === 869 ||
          props.mazeFoot + 32 === 870 ||
          props.mazeFoot + 32 === 874 ||
          props.mazeFoot + 32 === 876 ||
          props.mazeFoot + 32 === 877 ||
          props.mazeFoot + 32 === 879 ||
          props.mazeFoot + 32 === 897 ||
          props.mazeFoot + 32 === 898 ||
          props.mazeFoot + 32 === 899 ||
          props.mazeFoot + 32 === 902 ||
          props.mazeFoot + 32 === 903 ||
          props.mazeFoot + 32 === 908 ||
          props.mazeFoot + 32 === 912 ||
          props.mazeFoot + 32 === 928 ||
          props.mazeFoot + 32 === 930 ||
          props.mazeFoot + 32 === 932 ||
          props.mazeFoot + 32 === 933 ||
          props.mazeFoot + 32 === 935 ||
          props.mazeFoot + 32 === 936 ||
          props.mazeFoot + 32 === 939 ||
          props.mazeFoot + 32 === 942 ||
          props.mazeFoot + 32 === 943 ||
          props.mazeFoot + 32 === 944 ||
          props.mazeFoot + 32 === 961 ||
          props.mazeFoot + 32 === 962 ||
          props.mazeFoot + 32 === 963 ||
          props.mazeFoot + 32 === 966 ||
          props.mazeFoot + 32 === 968 ||
          props.mazeFoot + 32 === 971 ||
          props.mazeFoot + 32 === 972 ||
          props.mazeFoot + 32 === 973 ||
          props.mazeFoot + 32 === 975 ||
          props.mazeFoot + 32 === 976 ||
          props.mazeFoot + 32 === 992 ||
          props.mazeFoot + 32 === 994 ||
          props.mazeFoot + 32 === 997 ||
          props.mazeFoot + 32 === 999 ||
          props.mazeFoot + 32 === 1001 ||
          props.mazeFoot + 32 === 1002 ||
          props.mazeFoot + 32 === 1005 ||
          props.mazeFoot + 32 === 1006 ||
          props.mazeFoot + 32 === 1008 ||
          props.mazeFoot + 32 === 113 ||
          props.mazeFoot + 32 === 117 ||
          props.mazeFoot + 32 === 122 ||
          props.mazeFoot + 32 === 123 ||
          props.mazeFoot + 32 === 124 ||
          props.mazeFoot + 32 === 125 ||
          props.mazeFoot + 32 === 127 ||
          props.mazeFoot + 32 === 146 ||
          props.mazeFoot + 32 === 147 ||
          props.mazeFoot + 32 === 148 ||
          props.mazeFoot + 32 === 151 ||
          props.mazeFoot + 32 === 153 ||
          props.mazeFoot + 32 === 155 ||
          props.mazeFoot + 32 === 156 ||
          props.mazeFoot + 32 === 157 ||
          props.mazeFoot + 32 === 158 ||
          props.mazeFoot + 32 === 177 ||
          props.mazeFoot + 32 === 181 ||
          props.mazeFoot + 32 === 184 ||
          props.mazeFoot + 32 === 186 ||
          props.mazeFoot + 32 === 190 ||
          props.mazeFoot + 32 === 191 ||
          props.mazeFoot + 32 === 210 ||
          props.mazeFoot + 32 === 211 ||
          props.mazeFoot + 32 === 212 ||
          props.mazeFoot + 32 === 214 ||
          props.mazeFoot + 32 === 215 ||
          props.mazeFoot + 32 === 217 ||
          props.mazeFoot + 32 === 220 ||
          props.mazeFoot + 32 === 221 ||
          props.mazeFoot + 32 === 223 ||
          props.mazeFoot + 32 === 241 ||
          props.mazeFoot + 32 === 247 ||
          props.mazeFoot + 32 === 248 ||
          props.mazeFoot + 32 === 249 ||
          props.mazeFoot + 32 === 252 ||
          props.mazeFoot + 32 === 253 ||
          props.mazeFoot + 32 === 254 ||
          props.mazeFoot + 32 === 255 ||
          props.mazeFoot + 32 === 279 ||
          props.mazeFoot + 32 === 282 ||
          props.mazeFoot + 32 === 285 ||
          props.mazeFoot + 32 === 310 ||
          props.mazeFoot + 32 === 311 ||
          props.mazeFoot + 32 === 312 ||
          props.mazeFoot + 32 === 314 ||
          props.mazeFoot + 32 === 315 ||
          props.mazeFoot + 32 === 316 ||
          props.mazeFoot + 32 === 319 ||
          props.mazeFoot + 32 === 338 ||
          props.mazeFoot + 32 === 339 ||
          props.mazeFoot + 32 === 342 ||
          props.mazeFoot + 32 === 343 ||
          props.mazeFoot + 32 === 344 ||
          props.mazeFoot + 32 === 347 ||
          props.mazeFoot + 32 === 348 ||
          props.mazeFoot + 32 === 349 ||
          props.mazeFoot + 32 === 351 ||
          props.mazeFoot + 32 === 370 ||
          props.mazeFoot + 32 === 373 ||
          props.mazeFoot + 32 === 375 ||
          props.mazeFoot + 32 === 377 ||
          props.mazeFoot + 32 === 378 ||
          props.mazeFoot + 32 === 379 ||
          props.mazeFoot + 32 === 380 ||
          props.mazeFoot + 32 === 382 ||
          props.mazeFoot + 32 === 383 ||
          props.mazeFoot + 32 === 401 ||
          props.mazeFoot + 32 === 403 ||
          props.mazeFoot + 32 === 404 ||
          props.mazeFoot + 32 === 409 ||
          props.mazeFoot + 32 === 410 ||
          props.mazeFoot + 32 === 415 ||
          props.mazeFoot + 32 === 434 ||
          props.mazeFoot + 32 === 435 ||
          props.mazeFoot + 32 === 438 ||
          props.mazeFoot + 32 === 439 ||
          props.mazeFoot + 32 === 443 ||
          props.mazeFoot + 32 === 444 ||
          props.mazeFoot + 32 === 445 ||
          props.mazeFoot + 32 === 465 ||
          props.mazeFoot + 32 === 471 ||
          props.mazeFoot + 32 === 472 ||
          props.mazeFoot + 32 === 478 ||
          props.mazeFoot + 32 === 479 ||
          props.mazeFoot + 32 === 497 ||
          props.mazeFoot + 32 === 498 ||
          props.mazeFoot + 32 === 499 ||
          props.mazeFoot + 32 === 500 ||
          props.mazeFoot + 32 === 501 ||
          props.mazeFoot + 32 === 502 ||
          props.mazeFoot + 32 === 506 ||
          props.mazeFoot + 32 === 508 ||
          props.mazeFoot + 32 === 509 ||
          props.mazeFoot + 32 === 511 ||
          props.mazeFoot + 32 === 530 ||
          props.mazeFoot + 32 === 531 ||
          props.mazeFoot + 32 === 532 ||
          props.mazeFoot + 32 === 534 ||
          props.mazeFoot + 32 === 535 ||
          props.mazeFoot + 32 === 537 ||
          props.mazeFoot + 32 === 538 ||
          props.mazeFoot + 32 === 539 ||
          props.mazeFoot + 32 === 543 ||
          props.mazeFoot + 32 === 563 ||
          props.mazeFoot + 32 === 564 ||
          props.mazeFoot + 32 === 565 ||
          props.mazeFoot + 32 === 567 ||
          props.mazeFoot + 32 === 569 ||
          props.mazeFoot + 32 === 572 ||
          props.mazeFoot + 32 === 573 ||
          props.mazeFoot + 32 === 574 ||
          props.mazeFoot + 32 === 593 ||
          props.mazeFoot + 32 === 595 ||
          props.mazeFoot + 32 === 596 ||
          props.mazeFoot + 32 === 597 ||
          props.mazeFoot + 32 === 598 ||
          props.mazeFoot + 32 === 600 ||
          props.mazeFoot + 32 === 601 ||
          props.mazeFoot + 32 === 602 ||
          props.mazeFoot + 32 === 605 ||
          props.mazeFoot + 32 === 607 ||
          props.mazeFoot + 32 === 628 ||
          props.mazeFoot + 32 === 630 ||
          props.mazeFoot + 32 === 631 ||
          props.mazeFoot + 32 === 634 ||
          props.mazeFoot + 32 === 636 ||
          props.mazeFoot + 32 === 639 ||
          props.mazeFoot + 32 === 657 ||
          props.mazeFoot + 32 === 658 ||
          props.mazeFoot + 32 === 659 ||
          props.mazeFoot + 32 === 661 ||
          props.mazeFoot + 32 === 662 ||
          props.mazeFoot + 32 === 663 ||
          props.mazeFoot + 32 === 664 ||
          props.mazeFoot + 32 === 666 ||
          props.mazeFoot + 32 === 670 ||
          props.mazeFoot + 32 === 671 ||
          props.mazeFoot + 32 === 690 ||
          props.mazeFoot + 32 === 692 ||
          props.mazeFoot + 32 === 694 ||
          props.mazeFoot + 32 === 699 ||
          props.mazeFoot + 32 === 700 ||
          props.mazeFoot + 32 === 703 ||
          props.mazeFoot + 32 === 723 ||
          props.mazeFoot + 32 === 725 ||
          props.mazeFoot + 32 === 727 ||
          props.mazeFoot + 32 === 729 ||
          props.mazeFoot + 32 === 730 ||
          props.mazeFoot + 32 === 734 ||
          props.mazeFoot + 32 === 735 ||
          props.mazeFoot + 32 === 753 ||
          props.mazeFoot + 32 === 754 ||
          props.mazeFoot + 32 === 756 ||
          props.mazeFoot + 32 === 758 ||
          props.mazeFoot + 32 === 759 ||
          props.mazeFoot + 32 === 761 ||
          props.mazeFoot + 32 === 763 ||
          props.mazeFoot + 32 === 764 ||
          props.mazeFoot + 32 === 765 ||
          props.mazeFoot + 32 === 767 ||
          props.mazeFoot + 32 === 785 ||
          props.mazeFoot + 32 === 787 ||
          props.mazeFoot + 32 === 788 ||
          props.mazeFoot + 32 === 792 ||
          props.mazeFoot + 32 === 798 ||
          props.mazeFoot + 32 === 818 ||
          props.mazeFoot + 32 === 819 ||
          props.mazeFoot + 32 === 823 ||
          props.mazeFoot + 32 === 825 ||
          props.mazeFoot + 32 === 826 ||
          props.mazeFoot + 32 === 827 ||
          props.mazeFoot + 32 === 828 ||
          props.mazeFoot + 32 === 830 ||
          props.mazeFoot + 32 === 831 ||
          props.mazeFoot + 32 === 851 ||
          props.mazeFoot + 32 === 852 ||
          props.mazeFoot + 32 === 854 ||
          props.mazeFoot + 32 === 858 ||
          props.mazeFoot + 32 === 860 ||
          props.mazeFoot + 32 === 863 ||
          props.mazeFoot + 32 === 881 ||
          props.mazeFoot + 32 === 882 ||
          props.mazeFoot + 32 === 883 ||
          props.mazeFoot + 32 === 885 ||
          props.mazeFoot + 32 === 888 ||
          props.mazeFoot + 32 === 889 ||
          props.mazeFoot + 32 === 890 ||
          props.mazeFoot + 32 === 891 ||
          props.mazeFoot + 32 === 893 ||
          props.mazeFoot + 32 === 894 ||
          props.mazeFoot + 32 === 915 ||
          props.mazeFoot + 32 === 916 ||
          props.mazeFoot + 32 === 918 ||
          props.mazeFoot + 32 === 919 ||
          props.mazeFoot + 32 === 920 ||
          props.mazeFoot + 32 === 922 ||
          props.mazeFoot + 32 === 926 ||
          props.mazeFoot + 32 === 927 ||
          props.mazeFoot + 32 === 945 ||
          props.mazeFoot + 32 === 948 ||
          props.mazeFoot + 32 === 949 ||
          props.mazeFoot + 32 === 951 ||
          props.mazeFoot + 32 === 953 ||
          props.mazeFoot + 32 === 954 ||
          props.mazeFoot + 32 === 958 ||
          props.mazeFoot + 32 === 959 ||
          props.mazeFoot + 32 === 977 ||
          props.mazeFoot + 32 === 978 ||
          props.mazeFoot + 32 === 979 ||
          props.mazeFoot + 32 === 980 ||
          props.mazeFoot + 32 === 981 ||
          props.mazeFoot + 32 === 984 ||
          props.mazeFoot + 32 === 985 ||
          props.mazeFoot + 32 === 987 ||
          props.mazeFoot + 32 === 988 ||
          props.mazeFoot + 32 === 989 ||
          props.mazeFoot + 32 === 990 ||
          props.mazeFoot + 32 === 991 ||
          props.mazeFoot + 32 === 1009 ||
          props.mazeFoot + 32 === 1014 ||
          props.mazeFoot + 32 === 1015 ||
          props.mazeFoot + 32 === 1018 ||
          props.mazeFoot + 32 === 1019 ||
          props.mazeFoot + 32 === 1022 ||
          props.mazeFoot + 32 === 1023))
  )
    props.setMazeFoot(
      (move) =>
        move +
        (props.currentLevel.current === 1
          ? 8
          : props.currentLevel.current === 2
          ? 16
          : props.currentLevel.current >= 3 && 32)
    );
  else if (
    (props.mazeMove.current === "left" || props.value === "left") &&
    (props.currentLevel.current === 1
      ? props.mazeFoot === 2 ||
        props.mazeFoot === 3 ||
        props.mazeFoot === 5 ||
        props.mazeFoot === 7 ||
        props.mazeFoot === 9 ||
        props.mazeFoot === 11 ||
        props.mazeFoot === 12 ||
        props.mazeFoot === 14 ||
        props.mazeFoot === 17 ||
        props.mazeFoot === 19 ||
        props.mazeFoot === 20 ||
        props.mazeFoot === 21 ||
        props.mazeFoot === 23 ||
        props.mazeFoot === 28 ||
        props.mazeFoot === 29 ||
        props.mazeFoot === 31 ||
        props.mazeFoot === 34 ||
        props.mazeFoot === 35 ||
        props.mazeFoot === 36 ||
        props.mazeFoot === 37 ||
        props.mazeFoot === 39 ||
        props.mazeFoot === 41 ||
        props.mazeFoot === 42 ||
        props.mazeFoot === 44 ||
        props.mazeFoot === 46 ||
        props.mazeFoot === 47 ||
        props.mazeFoot === 50 ||
        props.mazeFoot === 52 ||
        props.mazeFoot === 53 ||
        props.mazeFoot === 55 ||
        props.mazeFoot === 58 ||
        props.mazeFoot === 60 ||
        props.mazeFoot === 62 ||
        props.mazeFoot === 63
      : props.currentLevel.current === 2
      ? props.mazeFoot - 1 === 0 ||
        props.mazeFoot - 1 === 2 ||
        props.mazeFoot - 1 === 3 ||
        props.mazeFoot - 1 === 5 ||
        props.mazeFoot - 1 === 8 ||
        props.mazeFoot - 1 === 10 ||
        props.mazeFoot - 1 === 11 ||
        props.mazeFoot - 1 === 13 ||
        props.mazeFoot - 1 === 14 ||
        props.mazeFoot - 1 === 16 ||
        props.mazeFoot - 1 === 19 ||
        props.mazeFoot - 1 === 20 ||
        props.mazeFoot - 1 === 22 ||
        props.mazeFoot - 1 === 24 ||
        props.mazeFoot - 1 === 25 ||
        props.mazeFoot - 1 === 29 ||
        props.mazeFoot - 1 === 30 ||
        props.mazeFoot - 1 === 33 ||
        props.mazeFoot - 1 === 36 ||
        props.mazeFoot - 1 === 37 ||
        props.mazeFoot - 1 === 38 ||
        props.mazeFoot - 1 === 40 ||
        props.mazeFoot - 1 === 41 ||
        props.mazeFoot - 1 === 48 ||
        props.mazeFoot - 1 === 55 ||
        props.mazeFoot - 1 === 57 ||
        props.mazeFoot - 1 === 60 ||
        props.mazeFoot - 1 === 62 ||
        props.mazeFoot - 1 === 66 ||
        props.mazeFoot - 1 === 69 ||
        props.mazeFoot - 1 === 71 ||
        props.mazeFoot - 1 === 75 ||
        props.mazeFoot - 1 === 76 ||
        props.mazeFoot - 1 === 77 ||
        props.mazeFoot - 1 === 80 ||
        props.mazeFoot - 1 === 82 ||
        props.mazeFoot - 1 === 84 ||
        props.mazeFoot - 1 === 86 ||
        props.mazeFoot - 1 === 92 ||
        props.mazeFoot - 1 === 93 ||
        props.mazeFoot - 1 === 100 ||
        props.mazeFoot - 1 === 101 ||
        props.mazeFoot - 1 === 103 ||
        props.mazeFoot - 1 === 104 ||
        props.mazeFoot - 1 === 106 ||
        props.mazeFoot - 1 === 107 ||
        props.mazeFoot - 1 === 114 ||
        props.mazeFoot - 1 === 115 ||
        props.mazeFoot - 1 === 116 ||
        props.mazeFoot - 1 === 117 ||
        props.mazeFoot - 1 === 119 ||
        props.mazeFoot - 1 === 120 ||
        props.mazeFoot - 1 === 122 ||
        props.mazeFoot - 1 === 125 ||
        props.mazeFoot - 1 === 128 ||
        props.mazeFoot - 1 === 129 ||
        props.mazeFoot - 1 === 131 ||
        props.mazeFoot - 1 === 132 ||
        props.mazeFoot - 1 === 133 ||
        props.mazeFoot - 1 === 134 ||
        props.mazeFoot - 1 === 135 ||
        props.mazeFoot - 1 === 136 ||
        props.mazeFoot - 1 === 140 ||
        props.mazeFoot - 1 === 145 ||
        props.mazeFoot - 1 === 146 ||
        props.mazeFoot - 1 === 149 ||
        props.mazeFoot - 1 === 151 ||
        props.mazeFoot - 1 === 156 ||
        props.mazeFoot - 1 === 158 ||
        props.mazeFoot - 1 === 161 ||
        props.mazeFoot - 1 === 163 ||
        props.mazeFoot - 1 === 164 ||
        props.mazeFoot - 1 === 166 ||
        props.mazeFoot - 1 === 168 ||
        props.mazeFoot - 1 === 170 ||
        props.mazeFoot - 1 === 171 ||
        props.mazeFoot - 1 === 174 ||
        props.mazeFoot - 1 === 178 ||
        props.mazeFoot - 1 === 181 ||
        props.mazeFoot - 1 === 182 ||
        props.mazeFoot - 1 === 185 ||
        props.mazeFoot - 1 === 186 ||
        props.mazeFoot - 1 === 188 ||
        props.mazeFoot - 1 === 192 ||
        props.mazeFoot - 1 === 194 ||
        props.mazeFoot - 1 === 197 ||
        props.mazeFoot - 1 === 199 ||
        props.mazeFoot - 1 === 200 ||
        props.mazeFoot - 1 === 202 ||
        props.mazeFoot - 1 === 203 ||
        props.mazeFoot - 1 === 204 ||
        props.mazeFoot - 1 === 205 ||
        props.mazeFoot - 1 === 208 ||
        props.mazeFoot - 1 === 211 ||
        props.mazeFoot - 1 === 212 ||
        props.mazeFoot - 1 === 216 ||
        props.mazeFoot - 1 === 218 ||
        props.mazeFoot - 1 === 219 ||
        props.mazeFoot - 1 === 221 ||
        props.mazeFoot - 1 === 222 ||
        props.mazeFoot - 1 === 225 ||
        props.mazeFoot - 1 === 226 ||
        props.mazeFoot - 1 === 229 ||
        props.mazeFoot - 1 === 232 ||
        props.mazeFoot - 1 === 233 ||
        props.mazeFoot - 1 === 234 ||
        props.mazeFoot - 1 === 235 ||
        props.mazeFoot - 1 === 237 ||
        props.mazeFoot - 1 === 240 ||
        props.mazeFoot - 1 === 241 ||
        props.mazeFoot - 1 === 243 ||
        props.mazeFoot - 1 === 245 ||
        props.mazeFoot - 1 === 246 ||
        props.mazeFoot - 1 === 247 ||
        props.mazeFoot - 1 === 249 ||
        props.mazeFoot - 1 === 252 ||
        props.mazeFoot - 1 === 253 ||
        props.mazeFoot - 1 === 254
      : props.currentLevel.current >= 3 &&
        (props.mazeFoot - 1 === 0 ||
          props.mazeFoot - 1 === 1 ||
          props.mazeFoot - 1 === 2 ||
          props.mazeFoot - 1 === 4 ||
          props.mazeFoot - 1 === 5 ||
          props.mazeFoot - 1 === 6 ||
          props.mazeFoot - 1 === 8 ||
          props.mazeFoot - 1 === 10 ||
          props.mazeFoot - 1 === 13 ||
          props.mazeFoot - 1 === 14 ||
          props.mazeFoot - 1 === 15 ||
          props.mazeFoot - 1 === 16 ||
          props.mazeFoot - 1 === 17 ||
          props.mazeFoot - 1 === 18 ||
          props.mazeFoot - 1 === 20 ||
          props.mazeFoot - 1 === 21 ||
          props.mazeFoot - 1 === 23 ||
          props.mazeFoot - 1 === 24 ||
          props.mazeFoot - 1 === 26 ||
          props.mazeFoot - 1 === 27 ||
          props.mazeFoot - 1 === 28 ||
          props.mazeFoot - 1 === 30 ||
          props.mazeFoot - 1 === 33 ||
          props.mazeFoot - 1 === 34 ||
          props.mazeFoot - 1 === 35 ||
          props.mazeFoot - 1 === 37 ||
          props.mazeFoot - 1 === 39 ||
          props.mazeFoot - 1 === 40 ||
          props.mazeFoot - 1 === 41 ||
          props.mazeFoot - 1 === 44 ||
          props.mazeFoot - 1 === 46 ||
          props.mazeFoot - 1 === 47 ||
          props.mazeFoot - 1 === 48 ||
          props.mazeFoot - 1 === 50 ||
          props.mazeFoot - 1 === 55 ||
          props.mazeFoot - 1 === 56 ||
          props.mazeFoot - 1 === 57 ||
          props.mazeFoot - 1 === 59 ||
          props.mazeFoot - 1 === 61 ||
          props.mazeFoot - 1 === 62 ||
          props.mazeFoot - 1 === 65 ||
          props.mazeFoot - 1 === 66 ||
          props.mazeFoot - 1 === 68 ||
          props.mazeFoot - 1 === 69 ||
          props.mazeFoot - 1 === 72 ||
          props.mazeFoot - 1 === 73 ||
          props.mazeFoot - 1 === 74 ||
          props.mazeFoot - 1 === 75 ||
          props.mazeFoot - 1 === 77 ||
          props.mazeFoot - 1 === 79 ||
          props.mazeFoot - 1 === 81 ||
          props.mazeFoot - 1 === 83 ||
          props.mazeFoot - 1 === 86 ||
          props.mazeFoot - 1 === 88 ||
          props.mazeFoot - 1 === 89 ||
          props.mazeFoot - 1 === 94 ||
          props.mazeFoot - 1 === 96 ||
          props.mazeFoot - 1 === 97 ||
          props.mazeFoot - 1 === 100 ||
          props.mazeFoot - 1 === 104 ||
          props.mazeFoot - 1 === 105 ||
          props.mazeFoot - 1 === 108 ||
          props.mazeFoot - 1 === 110 ||
          props.mazeFoot - 1 === 113 ||
          props.mazeFoot - 1 === 116 ||
          props.mazeFoot - 1 === 117 ||
          props.mazeFoot - 1 === 118 ||
          props.mazeFoot - 1 === 119 ||
          props.mazeFoot - 1 === 120 ||
          props.mazeFoot - 1 === 121 ||
          props.mazeFoot - 1 === 126 ||
          props.mazeFoot - 1 === 129 ||
          props.mazeFoot - 1 === 133 ||
          props.mazeFoot - 1 === 137 ||
          props.mazeFoot - 1 === 138 ||
          props.mazeFoot - 1 === 140 ||
          props.mazeFoot - 1 === 141 ||
          props.mazeFoot - 1 === 145 ||
          props.mazeFoot - 1 === 147 ||
          props.mazeFoot - 1 === 149 ||
          props.mazeFoot - 1 === 150 ||
          props.mazeFoot - 1 === 152 ||
          props.mazeFoot - 1 === 154 ||
          props.mazeFoot - 1 === 156 ||
          props.mazeFoot - 1 === 161 ||
          props.mazeFoot - 1 === 163 ||
          props.mazeFoot - 1 === 164 ||
          props.mazeFoot - 1 === 166 ||
          props.mazeFoot - 1 === 168 ||
          props.mazeFoot - 1 === 169 ||
          props.mazeFoot - 1 === 173 ||
          props.mazeFoot - 1 === 177 ||
          props.mazeFoot - 1 === 179 ||
          props.mazeFoot - 1 === 181 ||
          props.mazeFoot - 1 === 184 ||
          props.mazeFoot - 1 === 186 ||
          props.mazeFoot - 1 === 187 ||
          props.mazeFoot - 1 === 189 ||
          props.mazeFoot - 1 === 192 ||
          props.mazeFoot - 1 === 193 ||
          props.mazeFoot - 1 === 194 ||
          props.mazeFoot - 1 === 195 ||
          props.mazeFoot - 1 === 199 ||
          props.mazeFoot - 1 === 201 ||
          props.mazeFoot - 1 === 204 ||
          props.mazeFoot - 1 === 206 ||
          props.mazeFoot - 1 === 208 ||
          props.mazeFoot - 1 === 210 ||
          props.mazeFoot - 1 === 212 ||
          props.mazeFoot - 1 === 213 ||
          props.mazeFoot - 1 === 215 ||
          props.mazeFoot - 1 === 217 ||
          props.mazeFoot - 1 === 218 ||
          props.mazeFoot - 1 === 222 ||
          props.mazeFoot - 1 === 227 ||
          props.mazeFoot - 1 === 229 ||
          props.mazeFoot - 1 === 230 ||
          props.mazeFoot - 1 === 232 ||
          props.mazeFoot - 1 === 234 ||
          props.mazeFoot - 1 === 237 ||
          props.mazeFoot - 1 === 239 ||
          props.mazeFoot - 1 === 240 ||
          props.mazeFoot - 1 === 241 ||
          props.mazeFoot - 1 === 242 ||
          props.mazeFoot - 1 === 243 ||
          props.mazeFoot - 1 === 244 ||
          props.mazeFoot - 1 === 245 ||
          props.mazeFoot - 1 === 248 ||
          props.mazeFoot - 1 === 250 ||
          props.mazeFoot - 1 === 251 ||
          props.mazeFoot - 1 === 253 ||
          props.mazeFoot - 1 === 256 ||
          props.mazeFoot - 1 === 258 ||
          props.mazeFoot - 1 === 260 ||
          props.mazeFoot - 1 === 261 ||
          props.mazeFoot - 1 === 265 ||
          props.mazeFoot - 1 === 267 ||
          props.mazeFoot - 1 === 269 ||
          props.mazeFoot - 1 === 271 ||
          props.mazeFoot - 1 === 272 ||
          props.mazeFoot - 1 === 273 ||
          props.mazeFoot - 1 === 274 ||
          props.mazeFoot - 1 === 275 ||
          props.mazeFoot - 1 === 276 ||
          props.mazeFoot - 1 === 277 ||
          props.mazeFoot - 1 === 280 ||
          props.mazeFoot - 1 === 281 ||
          props.mazeFoot - 1 === 284 ||
          props.mazeFoot - 1 === 286 ||
          props.mazeFoot - 1 === 288 ||
          props.mazeFoot - 1 === 289 ||
          props.mazeFoot - 1 === 290 ||
          props.mazeFoot - 1 === 291 ||
          props.mazeFoot - 1 === 294 ||
          props.mazeFoot - 1 === 298 ||
          props.mazeFoot - 1 === 299 ||
          props.mazeFoot - 1 === 301 ||
          props.mazeFoot - 1 === 303 ||
          props.mazeFoot - 1 === 304 ||
          props.mazeFoot - 1 === 305 ||
          props.mazeFoot - 1 === 307 ||
          props.mazeFoot - 1 === 308 ||
          props.mazeFoot - 1 === 309 ||
          props.mazeFoot - 1 === 313 ||
          props.mazeFoot - 1 === 317 ||
          props.mazeFoot - 1 === 318 ||
          props.mazeFoot - 1 === 320 ||
          props.mazeFoot - 1 === 321 ||
          props.mazeFoot - 1 === 323 ||
          props.mazeFoot - 1 === 325 ||
          props.mazeFoot - 1 === 326 ||
          props.mazeFoot - 1 === 327 ||
          props.mazeFoot - 1 === 329 ||
          props.mazeFoot - 1 === 330 ||
          props.mazeFoot - 1 === 332 ||
          props.mazeFoot - 1 === 335 ||
          props.mazeFoot - 1 === 336 ||
          props.mazeFoot - 1 === 337 ||
          props.mazeFoot - 1 === 339 ||
          props.mazeFoot - 1 === 340 ||
          props.mazeFoot - 1 === 344 ||
          props.mazeFoot - 1 === 350 ||
          props.mazeFoot - 1 === 352 ||
          props.mazeFoot - 1 === 355 ||
          props.mazeFoot - 1 === 356 ||
          props.mazeFoot - 1 === 358 ||
          props.mazeFoot - 1 === 360 ||
          props.mazeFoot - 1 === 361 ||
          props.mazeFoot - 1 === 362 ||
          props.mazeFoot - 1 === 363 ||
          props.mazeFoot - 1 === 365 ||
          props.mazeFoot - 1 === 367 ||
          props.mazeFoot - 1 === 369 ||
          props.mazeFoot - 1 === 371 ||
          props.mazeFoot - 1 === 373 ||
          props.mazeFoot - 1 === 374 ||
          props.mazeFoot - 1 === 375 ||
          props.mazeFoot - 1 === 378 ||
          props.mazeFoot - 1 === 380 ||
          props.mazeFoot - 1 === 381 ||
          props.mazeFoot - 1 === 386 ||
          props.mazeFoot - 1 === 387 ||
          props.mazeFoot - 1 === 389 ||
          props.mazeFoot - 1 === 390 ||
          props.mazeFoot - 1 === 393 ||
          props.mazeFoot - 1 === 395 ||
          props.mazeFoot - 1 === 397 ||
          props.mazeFoot - 1 === 398 ||
          props.mazeFoot - 1 === 399 ||
          props.mazeFoot - 1 === 401 ||
          props.mazeFoot - 1 === 404 ||
          props.mazeFoot - 1 === 405 ||
          props.mazeFoot - 1 === 407 ||
          props.mazeFoot - 1 === 408 ||
          props.mazeFoot - 1 === 410 ||
          props.mazeFoot - 1 === 413 ||
          props.mazeFoot - 1 === 414 ||
          props.mazeFoot - 1 === 418 ||
          props.mazeFoot - 1 === 422 ||
          props.mazeFoot - 1 === 427 ||
          props.mazeFoot - 1 === 428 ||
          props.mazeFoot - 1 === 429 ||
          props.mazeFoot - 1 === 430 ||
          props.mazeFoot - 1 === 433 ||
          props.mazeFoot - 1 === 434 ||
          props.mazeFoot - 1 === 436 ||
          props.mazeFoot - 1 === 437 ||
          props.mazeFoot - 1 === 440 ||
          props.mazeFoot - 1 === 441 ||
          props.mazeFoot - 1 === 442 ||
          props.mazeFoot - 1 === 443 ||
          props.mazeFoot - 1 === 445 ||
          props.mazeFoot - 1 === 448 ||
          props.mazeFoot - 1 === 449 ||
          props.mazeFoot - 1 === 450 ||
          props.mazeFoot - 1 === 453 ||
          props.mazeFoot - 1 === 454 ||
          props.mazeFoot - 1 === 455 ||
          props.mazeFoot - 1 === 456 ||
          props.mazeFoot - 1 === 458 ||
          props.mazeFoot - 1 === 459 ||
          props.mazeFoot - 1 === 461 ||
          props.mazeFoot - 1 === 466 ||
          props.mazeFoot - 1 === 468 ||
          props.mazeFoot - 1 === 470 ||
          props.mazeFoot - 1 === 472 ||
          props.mazeFoot - 1 === 473 ||
          props.mazeFoot - 1 === 475 ||
          props.mazeFoot - 1 === 476 ||
          props.mazeFoot - 1 === 478 ||
          props.mazeFoot - 1 === 481 ||
          props.mazeFoot - 1 === 482 ||
          props.mazeFoot - 1 === 484 ||
          props.mazeFoot - 1 === 485 ||
          props.mazeFoot - 1 === 487 ||
          props.mazeFoot - 1 === 488 ||
          props.mazeFoot - 1 === 490 ||
          props.mazeFoot - 1 === 492 ||
          props.mazeFoot - 1 === 494 ||
          props.mazeFoot - 1 === 501 ||
          props.mazeFoot - 1 === 503 ||
          props.mazeFoot - 1 === 504 ||
          props.mazeFoot - 1 === 507 ||
          props.mazeFoot - 1 === 509 ||
          props.mazeFoot - 1 === 510 ||
          props.mazeFoot - 1 === 512 ||
          props.mazeFoot - 1 === 517 ||
          props.mazeFoot - 1 === 519 ||
          props.mazeFoot - 1 === 522 ||
          props.mazeFoot - 1 === 523 ||
          props.mazeFoot - 1 === 526 ||
          props.mazeFoot - 1 === 528 ||
          props.mazeFoot - 1 === 529 ||
          props.mazeFoot - 1 === 533 ||
          props.mazeFoot - 1 === 535 ||
          props.mazeFoot - 1 === 538 ||
          props.mazeFoot - 1 === 540 ||
          props.mazeFoot - 1 === 541 ||
          props.mazeFoot - 1 === 545 ||
          props.mazeFoot - 1 === 546 ||
          props.mazeFoot - 1 === 547 ||
          props.mazeFoot - 1 === 548 ||
          props.mazeFoot - 1 === 550 ||
          props.mazeFoot - 1 === 552 ||
          props.mazeFoot - 1 === 554 ||
          props.mazeFoot - 1 === 555 ||
          props.mazeFoot - 1 === 557 ||
          props.mazeFoot - 1 === 559 ||
          props.mazeFoot - 1 === 561 ||
          props.mazeFoot - 1 === 566 ||
          props.mazeFoot - 1 === 568 ||
          props.mazeFoot - 1 === 570 ||
          props.mazeFoot - 1 === 571 ||
          props.mazeFoot - 1 === 574 ||
          props.mazeFoot - 1 === 577 ||
          props.mazeFoot - 1 === 579 ||
          props.mazeFoot - 1 === 580 ||
          props.mazeFoot - 1 === 582 ||
          props.mazeFoot - 1 === 585 ||
          props.mazeFoot - 1 === 586 ||
          props.mazeFoot - 1 === 587 ||
          props.mazeFoot - 1 === 588 ||
          props.mazeFoot - 1 === 590 ||
          props.mazeFoot - 1 === 592 ||
          props.mazeFoot - 1 === 593 ||
          props.mazeFoot - 1 === 594 ||
          props.mazeFoot - 1 === 599 ||
          props.mazeFoot - 1 === 602 ||
          props.mazeFoot - 1 === 603 ||
          props.mazeFoot - 1 === 605 ||
          props.mazeFoot - 1 === 609 ||
          props.mazeFoot - 1 === 613 ||
          props.mazeFoot - 1 === 614 ||
          props.mazeFoot - 1 === 616 ||
          props.mazeFoot - 1 === 619 ||
          props.mazeFoot - 1 === 620 ||
          props.mazeFoot - 1 === 622 ||
          props.mazeFoot - 1 === 625 ||
          props.mazeFoot - 1 === 627 ||
          props.mazeFoot - 1 === 628 ||
          props.mazeFoot - 1 === 632 ||
          props.mazeFoot - 1 === 633 ||
          props.mazeFoot - 1 === 634 ||
          props.mazeFoot - 1 === 636 ||
          props.mazeFoot - 1 === 638 ||
          props.mazeFoot - 1 === 640 ||
          props.mazeFoot - 1 === 643 ||
          props.mazeFoot - 1 === 645 ||
          props.mazeFoot - 1 === 646 ||
          props.mazeFoot - 1 === 647 ||
          props.mazeFoot - 1 === 648 ||
          props.mazeFoot - 1 === 649 ||
          props.mazeFoot - 1 === 653 ||
          props.mazeFoot - 1 === 656 ||
          props.mazeFoot - 1 === 660 ||
          props.mazeFoot - 1 === 661 ||
          props.mazeFoot - 1 === 663 ||
          props.mazeFoot - 1 === 664 ||
          props.mazeFoot - 1 === 666 ||
          props.mazeFoot - 1 === 668 ||
          props.mazeFoot - 1 === 669 ||
          props.mazeFoot - 1 === 672 ||
          props.mazeFoot - 1 === 674 ||
          props.mazeFoot - 1 === 678 ||
          props.mazeFoot - 1 === 679 ||
          props.mazeFoot - 1 === 681 ||
          props.mazeFoot - 1 === 684 ||
          props.mazeFoot - 1 === 685 ||
          props.mazeFoot - 1 === 686 ||
          props.mazeFoot - 1 === 687 ||
          props.mazeFoot - 1 === 689 ||
          props.mazeFoot - 1 === 690 ||
          props.mazeFoot - 1 === 693 ||
          props.mazeFoot - 1 === 695 ||
          props.mazeFoot - 1 === 696 ||
          props.mazeFoot - 1 === 698 ||
          props.mazeFoot - 1 === 700 ||
          props.mazeFoot - 1 === 701 ||
          props.mazeFoot - 1 === 705 ||
          props.mazeFoot - 1 === 707 ||
          props.mazeFoot - 1 === 710 ||
          props.mazeFoot - 1 === 711 ||
          props.mazeFoot - 1 === 713 ||
          props.mazeFoot - 1 === 715 ||
          props.mazeFoot - 1 === 717 ||
          props.mazeFoot - 1 === 718 ||
          props.mazeFoot - 1 === 720 ||
          props.mazeFoot - 1 === 723 ||
          props.mazeFoot - 1 === 725 ||
          props.mazeFoot - 1 === 728 ||
          props.mazeFoot - 1 === 731 ||
          props.mazeFoot - 1 === 733 ||
          props.mazeFoot - 1 === 737 ||
          props.mazeFoot - 1 === 739 ||
          props.mazeFoot - 1 === 740 ||
          props.mazeFoot - 1 === 741 ||
          props.mazeFoot - 1 === 745 ||
          props.mazeFoot - 1 === 746 ||
          props.mazeFoot - 1 === 748 ||
          props.mazeFoot - 1 === 749 ||
          props.mazeFoot - 1 === 751 ||
          props.mazeFoot - 1 === 754 ||
          props.mazeFoot - 1 === 757 ||
          props.mazeFoot - 1 === 759 ||
          props.mazeFoot - 1 === 761 ||
          props.mazeFoot - 1 === 762 ||
          props.mazeFoot - 1 === 764 ||
          props.mazeFoot - 1 === 766 ||
          props.mazeFoot - 1 === 768 ||
          props.mazeFoot - 1 === 772 ||
          props.mazeFoot - 1 === 773 ||
          props.mazeFoot - 1 === 777 ||
          props.mazeFoot - 1 === 779 ||
          props.mazeFoot - 1 === 781 ||
          props.mazeFoot - 1 === 783 ||
          props.mazeFoot - 1 === 785 ||
          props.mazeFoot - 1 === 788 ||
          props.mazeFoot - 1 === 789 ||
          props.mazeFoot - 1 === 790 ||
          props.mazeFoot - 1 === 792 ||
          props.mazeFoot - 1 === 794 ||
          props.mazeFoot - 1 === 796 ||
          props.mazeFoot - 1 === 801 ||
          props.mazeFoot - 1 === 804 ||
          props.mazeFoot - 1 === 806 ||
          props.mazeFoot - 1 === 809 ||
          props.mazeFoot - 1 === 810 ||
          props.mazeFoot - 1 === 814 ||
          props.mazeFoot - 1 === 816 ||
          props.mazeFoot - 1 === 817 ||
          props.mazeFoot - 1 === 820 ||
          props.mazeFoot - 1 === 821 ||
          props.mazeFoot - 1 === 823 ||
          props.mazeFoot - 1 === 824 ||
          props.mazeFoot - 1 === 828 ||
          props.mazeFoot - 1 === 829 ||
          props.mazeFoot - 1 === 833 ||
          props.mazeFoot - 1 === 834 ||
          props.mazeFoot - 1 === 837 ||
          props.mazeFoot - 1 === 838 ||
          props.mazeFoot - 1 === 840 ||
          props.mazeFoot - 1 === 842 ||
          props.mazeFoot - 1 === 847 ||
          props.mazeFoot - 1 === 848 ||
          props.mazeFoot - 1 === 850 ||
          props.mazeFoot - 1 === 852 ||
          props.mazeFoot - 1 === 854 ||
          props.mazeFoot - 1 === 855 ||
          props.mazeFoot - 1 === 856 ||
          props.mazeFoot - 1 === 859 ||
          props.mazeFoot - 1 === 861 ||
          props.mazeFoot - 1 === 862 ||
          props.mazeFoot - 1 === 864 ||
          props.mazeFoot - 1 === 866 ||
          props.mazeFoot - 1 === 867 ||
          props.mazeFoot - 1 === 868 ||
          props.mazeFoot - 1 === 871 ||
          props.mazeFoot - 1 === 872 ||
          props.mazeFoot - 1 === 873 ||
          props.mazeFoot - 1 === 875 ||
          props.mazeFoot - 1 === 877 ||
          props.mazeFoot - 1 === 878 ||
          props.mazeFoot - 1 === 880 ||
          props.mazeFoot - 1 === 884 ||
          props.mazeFoot - 1 === 886 ||
          props.mazeFoot - 1 === 889 ||
          props.mazeFoot - 1 === 891 ||
          props.mazeFoot - 1 === 892 ||
          props.mazeFoot - 1 === 896 ||
          props.mazeFoot - 1 === 899 ||
          props.mazeFoot - 1 === 901 ||
          props.mazeFoot - 1 === 904 ||
          props.mazeFoot - 1 === 905 ||
          props.mazeFoot - 1 === 906 ||
          props.mazeFoot - 1 === 907 ||
          props.mazeFoot - 1 === 908 ||
          props.mazeFoot - 1 === 909 ||
          props.mazeFoot - 1 === 913 ||
          props.mazeFoot - 1 === 914 ||
          props.mazeFoot - 1 === 917 ||
          props.mazeFoot - 1 === 920 ||
          props.mazeFoot - 1 === 922 ||
          props.mazeFoot - 1 === 923 ||
          props.mazeFoot - 1 === 924 ||
          props.mazeFoot - 1 === 928 ||
          props.mazeFoot - 1 === 931 ||
          props.mazeFoot - 1 === 934 ||
          props.mazeFoot - 1 === 936 ||
          props.mazeFoot - 1 === 937 ||
          props.mazeFoot - 1 === 940 ||
          props.mazeFoot - 1 === 942 ||
          props.mazeFoot - 1 === 946 ||
          props.mazeFoot - 1 === 949 ||
          props.mazeFoot - 1 === 951 ||
          props.mazeFoot - 1 === 955 ||
          props.mazeFoot - 1 === 957 ||
          props.mazeFoot - 1 === 960 ||
          props.mazeFoot - 1 === 963 ||
          props.mazeFoot - 1 === 964 ||
          props.mazeFoot - 1 === 966 ||
          props.mazeFoot - 1 === 969 ||
          props.mazeFoot - 1 === 971 ||
          props.mazeFoot - 1 === 974 ||
          props.mazeFoot - 1 === 977 ||
          props.mazeFoot - 1 === 979 ||
          props.mazeFoot - 1 === 981 ||
          props.mazeFoot - 1 === 983 ||
          props.mazeFoot - 1 === 985 ||
          props.mazeFoot - 1 === 988 ||
          props.mazeFoot - 1 === 992 ||
          props.mazeFoot - 1 === 993 ||
          props.mazeFoot - 1 === 994 ||
          props.mazeFoot - 1 === 995 ||
          props.mazeFoot - 1 === 997 ||
          props.mazeFoot - 1 === 998 ||
          props.mazeFoot - 1 === 999 ||
          props.mazeFoot - 1 === 1000 ||
          props.mazeFoot - 1 === 1002 ||
          props.mazeFoot - 1 === 1003 ||
          props.mazeFoot - 1 === 1004 ||
          props.mazeFoot - 1 === 1006 ||
          props.mazeFoot - 1 === 1009 ||
          props.mazeFoot - 1 === 1010 ||
          props.mazeFoot - 1 === 1011 ||
          props.mazeFoot - 1 === 1012 ||
          props.mazeFoot - 1 === 1013 ||
          props.mazeFoot - 1 === 1015 ||
          props.mazeFoot - 1 === 1016 ||
          props.mazeFoot - 1 === 1018 ||
          props.mazeFoot - 1 === 1019 ||
          props.mazeFoot - 1 === 1020 ||
          props.mazeFoot - 1 === 1022))
  )
    props.setMazeFoot((move) => move - 1);
};

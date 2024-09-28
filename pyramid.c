#include<stdio.h>
void main() {
    int a, b, c, d,e ,f ;
printf("type any number (must be odd)\n");
scanf("%d" , &e);

    for(a = 1; a <= e; a += 2) {
        for(b =e+1 ; b > a; b-=2) {
            printf(" ");
        }
        for(c = 1; c <= a; c++) {
            printf("*");
        }    z
        for(d = e+1; d >= a; d-=2) {
            printf(" ");
        }

        printf("\n");
    }
}
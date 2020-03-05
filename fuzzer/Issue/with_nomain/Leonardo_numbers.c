#include<stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
void leonardo(int a,int b,int step,int num){
	
	int i,temp;
	
	printf("First 25 Leonardo numbers : \n");
	
	for(i=1;i<=num;i++){
		if(i==1)
			printf(" %d",a);
		else if(i==2)
			printf(" %d",b);
		else{
			printf(" %d",a+b+step);
			temp = a;
			a = b;
			b = temp+b+step;
		}
	}
}

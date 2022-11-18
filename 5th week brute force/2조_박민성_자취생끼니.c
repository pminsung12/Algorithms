// 자취생을 위한 끼니 해결 : 예산을 설정후 이 예산 안에서 가장 많은 칼로리를 섭취할 수 있는 방법을 탐색 (knapsack 이용)
// ㄴ대상? : 돈이 별로 없는 대학 자취생, 학생 등
// ㄴ브루트포스? : knapsack problem에 해당
// ㄴ
// input :
// 예산 / 음식이름 - 가격(원) - 칼로리(kcal) / Q (결과 값 출력 key)

// process : 
// 1) 처음 입력된 값을 예산으로 설정 
// 2) 먹고 싶은 음식, 가격, 칼로리를 띄어쓰기로 구별하여 반복 입력 / (예시) : (만두 5000 150)
// 3) 예산 내에서 가장 많은 칼로리를 섭취할 수 있는 음식들 조합 출력

// output : 
// 가장 많은 칼로리를 섭취할 수 있는 음식들 조합 출력
// (예시) : ('만두 라면 소세지 바나나'를 먹는 것이 가장 많은 칼로리를 섭취할 수 있습니다.)
#include <stdio.h>
#include <string.h>
#define NAME_MAX 101
#define COMB_MAX 100001
#define max(a,b) (((a) > (b)) ? (a) : (b))

//food info struct
typedef struct Food 
{
    char name[NAME_MAX]; //food name
    int price; //price
    int cal; //calorie
}Food;

//printing highest calories and knapsack list
int knapsack(Food arr[],int budget, int n) { 
    int table[n+1][budget+1];
	for(int i = 0 ; i<=n ; i++){
        for(int j = 0 ; j<=budget ; j++){
            if(i==0 || j==0) 
                table[i][j]=0;
            else if (arr[i-1].price<=j)
                table[i][j]=max(arr[i-1].cal+table[i-1][j-arr[i-1].price],table[i-1][j]);
            else
                table[i][j]=table[i-1][j];
        }
    }
    
    int res=table[n][budget];
    printf("최대 섭취 칼로리 >> %d\n", res);

    //printing food list
    int w=budget;
    for(int i=n;i>0&&res>0;i--){
        if(res==table[i-1][w]) 
            continue;
        else{
            printf("%s, ", arr[i-1].name);
            res=res-arr[i-1].cal;
            w=w-arr[i-1].price;
        }
    }
    printf("을(를) 먹는 것이 가장 많은 칼로리를 섭취할 수 있다.");
}

int main(){
    int budget=0;
    int n=0;
    int cmd=0;
    printf("=============================================\n");
    printf("=========  자취생을 위한 끼니 해결  =========\n");
    printf("=============================================\n\n");
    printf("예산 입력 >> ");
    scanf("%d", &budget);
    printf("입력할 음식의 총 개수 입력 >> ");
    scanf("%d", &n);

    Food arr[n+1]; //n개의 음식 구조체 생성
    printf("=============================================\n");
    printf("음식이름 가격 칼로리 공백 띄워서 계속 입력\n");
    printf(">> ");
    //n개의 food input
    for(int i=0;i<n;i++){
        scanf("%s %d %d", arr[i].name, &arr[i].price, &arr[i].cal);
    }

    knapsack(arr,budget,n);
    printf("\n\nEND OF PROGRAM=======================================\n");
    return 0;
}
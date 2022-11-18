// ������� ���� ���� �ذ� : ������ ������ �� ���� �ȿ��� ���� ���� Į�θ��� ������ �� �ִ� ����� Ž�� (knapsack �̿�)
// �����? : ���� ���� ���� ���� �����, �л� ��
// �����Ʈ����? : knapsack problem�� �ش�
// ��
// input :
// ���� / �����̸� - ����(��) - Į�θ�(kcal) / Q (��� �� ��� key)

// process : 
// 1) ó�� �Էµ� ���� �������� ���� 
// 2) �԰� ���� ����, ����, Į�θ��� ����� �����Ͽ� �ݺ� �Է� / (����) : (���� 5000 150)
// 3) ���� ������ ���� ���� Į�θ��� ������ �� �ִ� ���ĵ� ���� ���

// output : 
// ���� ���� Į�θ��� ������ �� �ִ� ���ĵ� ���� ���
// (����) : ('���� ��� �Ҽ��� �ٳ���'�� �Դ� ���� ���� ���� Į�θ��� ������ �� �ֽ��ϴ�.)
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
    printf("�ִ� ���� Į�θ� >> %d\n", res);

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
    printf("��(��) �Դ� ���� ���� ���� Į�θ��� ������ �� �ִ�.");
}

int main(){
    int budget=0;
    int n=0;
    int cmd=0;
    printf("=============================================\n");
    printf("=========  ������� ���� ���� �ذ�  =========\n");
    printf("=============================================\n\n");
    printf("���� �Է� >> ");
    scanf("%d", &budget);
    printf("�Է��� ������ �� ���� �Է� >> ");
    scanf("%d", &n);

    Food arr[n+1]; //n���� ���� ����ü ����
    printf("=============================================\n");
    printf("�����̸� ���� Į�θ� ���� ����� ��� �Է�\n");
    printf(">> ");
    //n���� food input
    for(int i=0;i<n;i++){
        scanf("%s %d %d", arr[i].name, &arr[i].price, &arr[i].cal);
    }

    knapsack(arr,budget,n);
    printf("\n\nEND OF PROGRAM=======================================\n");
    return 0;
}